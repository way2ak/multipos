<?php
/**
 * REST API Reports revenue stats controller.
 *
 * Handles requests to the /reports/revenue/stats endpoint.
 */

namespace DDWCMultiPOS\Api\Includes\Reports\Revenue\Stats;

use DDWCMultiPOS\Api\Includes\Reports\TimeInterval;
use DDWCMultiPOS\Api\Includes\Reports\Revenue\DDWCPOS_Report_DataStore;

defined( 'ABSPATH' ) || exit();

/**
 * REST API Reports revenue stats controller class.
 *
 * @extends WC_REST_Reports_Controller
 */
class DDWCPOS_Revenue_Stats extends DDWCPOS_Report_DataStore {
	/**
	 * Database variable
	 *
	 * @var object
	 */
	protected $wpdb;

	/**
	 * Table used to get the data.
	 *
	 * @var string
	 */
	const TABLE_NAME = 'wc_order_stats';

	/**
	 * Cron event name.
	 */
	const CRON_EVENT = 'wc_order_stats_update';

	/*
	 *Endpoint namespace.
	 *
	 * @var string
	 */
	protected $namespace = 'wc/v4';

	/**
	 * Route base.
	 *
	 * @var string
	 */
	protected $rest_base = 'reports/revenue/stats';
	/**
	 * Type for each column to cast values correctly later.
	 *
	 * @var array
	 */
	protected $column_types = [
		'orders_count'            => 'intval',
		'num_items_sold'          => 'intval',
		'gross_revenue'           => 'floatval',
		'coupons'                 => 'floatval',
		'coupons_count'           => 'intval',
		'refunds'                 => 'floatval',
		'taxes'                   => 'floatval',
		'net_revenue'             => 'floatval',
		'avg_items_per_order'     => 'floatval',
		'avg_order_value'         => 'floatval',
		'cash_payment'            => 'floatval',
		'card_payment'            => 'floatval',
		'num_returning_customers' => 'intval',
		'num_new_customers'       => 'intval',
		'products'                => 'intval',
		'segment_id'              => 'intval',
	];

	/**
	 * Constructor function
	 */
	public function __construct() {
		global $wpdb;
		$this->wpdb = $wpdb;
		$table_name = $this->wpdb->prefix . self::TABLE_NAME;
		// Avoid ambigious columns in SQL query.
		$this->report_columns = [
			'orders_count'            => "SUM( CASE WHEN {$table_name}.parent_id = 0 THEN 1 ELSE 0 END ) as orders_count",
			'num_items_sold'          => "SUM({$table_name}.num_items_sold) as num_items_sold",
			'gross_revenue'           => "SUM( CASE WHEN {$table_name}.total_sales > 0 THEN {$table_name}.total_sales END ) AS gross_revenue",
			'coupons'                 => 'SUM(discount_amount) AS coupons',
			'coupons_count'           => 'coupons_count',
			'refunds'                 => "ABS( SUM( CASE WHEN {$table_name}.total_sales < 0 THEN {$table_name}.total_sales END ) ) AS refunds",
			'taxes'                   => "SUM({$table_name}.tax_total) AS taxes",
			'net_revenue'             => "SUM({$table_name}.net_total) AS net_revenue",
			'avg_items_per_order'     => "SUM( {$table_name}.num_items_sold ) / SUM( CASE WHEN {$table_name}.parent_id = 0 THEN 1 ELSE 0 END ) AS avg_items_per_order",
			'avg_order_value'         => "SUM( {$table_name}.net_total ) / SUM( CASE WHEN {$table_name}.parent_id = 0 THEN 1 ELSE 0 END ) AS avg_order_value",
			// Count returning customers as ( total_customers - new_customers ) to get an accurate number and count customers in with both new and old statuses as new.
			'num_returning_customers' => "( COUNT( DISTINCT( {$table_name}.customer_id ) ) -  COUNT( DISTINCT( CASE WHEN {$table_name}.returning_customer = 0 THEN {$table_name}.customer_id END ) ) ) AS num_returning_customers",
			'num_new_customers'       => "COUNT( DISTINCT( CASE WHEN {$table_name}.returning_customer = 0 THEN {$table_name}.customer_id END ) ) AS num_new_customers",
		];
	}

	/**
	 * Valid fields for Revenue report.
	 *
	 * @return array
	 */
	protected function get_default_query_vars() {
		return [
			'per_page' => get_option( 'posts_per_page' ),   // not sure if this should be the default.
			'page'     => 1,
			'order'    => 'DESC',
			'orderby'  => 'date',
			'before'   => '',
			'after'    => '',
			'interval' => 'week',
			'fields'   => [
				'orders_count',
				'num_items_sold',
				'gross_revenue',
				'coupons',
				'coupons_count',
				'refunds',
				'taxes',
				'shipping',
				'net_revenue',
			],
		];
	}

	/**
	 * Get all reports.
	 *
	 * @param WP_REST_Request $request request data
	 *
	 * @return array|WP_Error
	 */
	public function get_items( $request ) {
		$table_name = $this->wpdb->prefix . self::TABLE_NAME;

		// These defaults are only applied when not using REST API, as the API has its own defaults that overwrite these for most values (except before, after, etc).
		$defaults = [
			'per_page'         => get_option( 'posts_per_page' ),
			'page'             => 1,
			'order'            => 'DESC',
			'orderby'          => 'date',
			'before'           => TimeInterval::default_before(),
			'after'            => TimeInterval::default_after(),
			'interval'         => 'week',
			'fields'           => '*',
			'segmentby'        => '',
			'match'            => 'all',
			'status_is'        => [],
			'status_is_not'    => [],
			'product_includes' => [],
			'product_excludes' => [],
			'coupon_includes'  => [],
			'coupon_excludes'  => [],
			'customer'         => '',
			'categories'       => [],
		];

		$query_args = wp_parse_args( $request, $defaults );

		$this->normalize_timezones( $query_args, $defaults );

		$cache_key = $this->get_cache_key( $query_args );
		$data      = wp_cache_get( $cache_key, $this->cache_group );

		if ( false === $data ) {
			$data = (object) [
				'totals'    => (object) [],
				'intervals' => (object) [],
				'total'     => 0,
				'pages'     => 0,
				'page_no'   => 0,
			];

			$selections      = $this->selected_columns( $query_args );
			$totals_query    = $this->get_time_period_sql_params( $query_args, $table_name );
			$intervals_query = $this->get_intervals_sql_params( $query_args, $table_name );

			$coupon_join = "LEFT JOIN (
				SELECT
				order_id,
				SUM(discount_amount) AS discount_amount,
				COUNT(DISTINCT coupon_id) AS coupons_count
				FROM
				{$this->wpdb->prefix}wc_order_coupon_lookup
				GROUP BY
				order_id
				) order_coupon_lookup
				ON order_coupon_lookup.order_id = {$table_name}.order_id";

			$reports_type_join = " LEFT JOIN {$this->wpdb->prefix}postmeta as postmeta ON (postmeta.post_id={$table_name}.order_id || postmeta.post_id={$table_name}.parent_id)";

			// Additional filtering for Orders report.
			$this->orders_stats_sql_filter( $query_args, $totals_query, $intervals_query );

			$totals = $this->wpdb->get_results(
				"SELECT
                    {$selections}
                FROM
                    {$table_name}
                    {$totals_query['from_clause']}
                    {$coupon_join}
                    {$reports_type_join}
                WHERE
                    1=1
                    {$totals_query['where_time_clause']}
                    {$totals_query['where_clause']}",
				ARRAY_A
			); // WPCS: cache ok, DB call ok, unprepared SQL ok.
			if ( null === $totals ) {
				return new \WP_Error( 'woocommerce_reports_revenue_result_failed', esc_html__( 'Sorry, fetching revenue data failed.', 'ddwc-multipos' ) );
			}

			$unique_products            = $this->get_unique_product_count( $totals_query['from_clause'], $totals_query['where_time_clause'], $totals_query['where_clause'] );
			$totals[0]['products']      = $unique_products;
			$unique_coupons             = $this->get_unique_coupon_count( $totals_query['from_clause'], $totals_query['where_time_clause'], $totals_query['where_clause'] );
			$totals[0]['coupons_count'] = $unique_coupons;
			$totals[0]['segments']      = [];
			$totals                     = (object) $this->cast_numbers( $totals[0] );

			$db_intervals = $this->wpdb->get_col(
				"SELECT
                    {$intervals_query['select_clause']} AS time_interval
                FROM
                    {$table_name}
                    {$intervals_query['from_clause']}
                    {$coupon_join}
                    {$reports_type_join}
                WHERE
                    1=1
                    {$intervals_query['where_time_clause']}
                    {$intervals_query['where_clause']}
                GROUP BY
                    time_interval"
			); // WPCS: cache ok, DB call ok, , unprepared SQL ok.

			$db_interval_count       = count( $db_intervals );
			$expected_interval_count = TimeInterval::intervals_between( $query_args['after'], $query_args['before'], $query_args['interval'] );

			$total_pages = (int) ceil( $expected_interval_count / $intervals_query['per_page'] );
			if ( $query_args['page'] < 1 || $query_args['page'] > $total_pages ) {
				return $data;
			}

			$this->update_intervals_sql_params( $intervals_query, $query_args, $db_interval_count, $expected_interval_count, $table_name );

			if ( '' !== $selections ) {
				$selections = ', ' . $selections;
			}

			$intervals = $this->wpdb->get_results(
				"SELECT
                    MAX({$table_name}.date_created) AS datetime_anchor,
                    {$intervals_query['select_clause']} AS time_interval
                    {$selections}
                FROM
                    {$table_name}
                    {$intervals_query['from_clause']}
                    {$coupon_join}
                    {$reports_type_join}
                WHERE
                    1=1
                    {$intervals_query['where_time_clause']}
                    {$intervals_query['where_clause']}
                GROUP BY
                    time_interval
                ORDER BY
                    {$intervals_query['order_by_clause']}
                {$intervals_query['limit']}",
				ARRAY_A
			); // WPCS: cache ok, DB call ok, unprepared SQL ok.

			if ( null === $intervals ) {
				return new \WP_Error( 'woocommerce_reports_revenue_result_failed', esc_html__( 'Sorry, fetching revenue data failed.', 'ddwc-multipos' ) );
			}

			if ( isset( $intervals[0] ) ) {
				$unique_coupons                = $this->get_unique_coupon_count( $intervals_query['from_clause'], $intervals_query['where_time_clause'], $intervals_query['where_clause'], true );
				$intervals[0]['coupons_count'] = $unique_coupons;
			}

			$data = (object) [
				'totals'    => $totals,
				'intervals' => $intervals,
				'total'     => $expected_interval_count,
				'pages'     => $total_pages,
				'page_no'   => (int) $query_args['page'],
			];

			if ( TimeInterval::intervals_missing( $expected_interval_count, $db_interval_count, $intervals_query['per_page'], $query_args['page'], $query_args['order'], $query_args['orderby'], count( $intervals ) ) ) {
				$this->fill_in_missing_intervals( $db_intervals, $query_args['adj_after'], $query_args['adj_before'], $query_args['interval'], $data );
				$this->sort_intervals( $data, $query_args['orderby'], $query_args['order'] );
				$this->remove_extra_records( $data, $query_args['page'], $intervals_query['per_page'], $db_interval_count, $expected_interval_count, $query_args['orderby'], $query_args['order'] );
			} else {
				$this->update_interval_boundary_dates( $query_args['after'], $query_args['before'], $query_args['interval'], $data->intervals );
			}
			$this->create_interval_subtotals( $data->intervals );

			wp_cache_set( $cache_key, $data, $this->cache_group );
		}

		return $data;
	}

	/**
	 * Updates the totals and intervals database queries with parameters used for Orders report: categories, coupons and order status.
	 *
	 * @param array $query_args      query arguments supplied by the user
	 * @param array $totals_query    array of options for totals db query
	 * @param array $intervals_query array of options for intervals db query
	 */
	protected function orders_stats_sql_filter( $query_args, &$totals_query, &$intervals_query ) {

		$from_clause        = '';
		$orders_stats_table = $this->wpdb->prefix . self::TABLE_NAME;
		$operator           = $this->get_match_operator( $query_args );
		$where_filters      = [];

		// @todo Maybe move the sql inside the get_included/excluded functions?
		// Products filters.
		$included_products = $this->get_included_products( $query_args );
		$excluded_products = $this->get_excluded_products( $query_args );
		if ( $included_products ) {
			$where_filters[] = " {$orders_stats_table}.order_id IN (
			SELECT
				DISTINCT {$this->wpdb->prefix}wc_order_product_lookup.order_id
			FROM
				{$this->wpdb->prefix}wc_order_product_lookup
			WHERE
				{$this->wpdb->prefix}wc_order_product_lookup.product_id IN ({$included_products})
			)";
		}

		if ( $excluded_products ) {
			$where_filters[] = " {$orders_stats_table}.order_id NOT IN (
			SELECT
				DISTINCT {$this->wpdb->prefix}wc_order_product_lookup.order_id
			FROM
				{$this->wpdb->prefix}wc_order_product_lookup
			WHERE
				{$this->wpdb->prefix}wc_order_product_lookup.product_id IN ({$excluded_products})
			)";
		}

		// Coupons filters.
		$included_coupons = $this->get_included_coupons( $query_args );
		$excluded_coupons = $this->get_excluded_coupons( $query_args );
		if ( $included_coupons ) {
			$where_filters[] = " {$orders_stats_table}.order_id IN (
                SELECT
                    DISTINCT {$this->wpdb->prefix}wc_order_coupon_lookup.order_id
                FROM
                    {$this->wpdb->prefix}wc_order_coupon_lookup
                WHERE
                    {$this->wpdb->prefix}wc_order_coupon_lookup.coupon_id IN ({$included_coupons})
				)";
		}

		if ( $excluded_coupons ) {
			$where_filters[] = " {$orders_stats_table}.order_id NOT IN (
				SELECT
					DISTINCT {$this->wpdb->prefix}wc_order_coupon_lookup.order_id
				FROM
					{$this->wpdb->prefix}wc_order_coupon_lookup
				WHERE
					{$this->wpdb->prefix}wc_order_coupon_lookup.coupon_id IN ({$excluded_coupons})
				)";
		}

		$customer_filter = $this->get_customer_subquery( $query_args );
		if ( $customer_filter ) {
			$where_filters[] = $customer_filter;
		}

		$refund_subquery = $this->get_refund_subquery( $query_args );
		if ( $refund_subquery['where_clause'] ) {
			$where_filters[] = $refund_subquery['where_clause'];
			$from_clause    .= $refund_subquery['from_clause'];
		}

		$where_subclause = implode( " $operator ", $where_filters );

		// Append status filter after to avoid matching ANY on default statuses.
		$order_status_filter = $this->get_status_subquery( $query_args, $operator );
		if ( $order_status_filter ) {
			if ( empty( $query_args['status_is'] ) && empty( $query_args['status_is_not'] ) ) {
				$operator = 'AND';
			}
			$where_subclause = implode( " $operator ", array_filter( [ $where_subclause, $order_status_filter ] ) );
		}

		// To avoid requesting the subqueries twice, the result is applied to all queries passed to the method.
		if ( $where_subclause ) {
			$totals_query['where_clause']    .= " AND ( $where_subclause )";
			$totals_query['from_clause']     .= $from_clause;
			$intervals_query['where_clause'] .= " AND ( $where_subclause )";
			$intervals_query['from_clause']  .= $from_clause;
		}
	}

	/**
	 * Get unique products based on user time query.
	 *
	 * @param string $from_clause       from clause with date query
	 * @param string $where_time_clause where clause with date query
	 * @param string $where_clause      where clause with date query
	 *
	 * @return int unique product count
	 */
	public function get_unique_product_count( $from_clause, $where_time_clause, $where_clause ) {
		$table_name = $this->wpdb->prefix . self::TABLE_NAME;

		$reports_type_join = " JOIN {$this->wpdb->prefix}postmeta as postmeta ON (postmeta.post_id={$table_name}.order_id || postmeta.post_id={$table_name}.parent_id)";

		return $this->wpdb->get_var(
			"SELECT
                COUNT( DISTINCT {$this->wpdb->prefix}wc_order_product_lookup.product_id )
            FROM
                {$this->wpdb->prefix}wc_order_product_lookup JOIN {$table_name} ON {$this->wpdb->prefix}wc_order_product_lookup.order_id = {$table_name}.order_id
                {$reports_type_join}
                {$from_clause}
            WHERE
                1=1
                {$where_time_clause}
                {$where_clause}"
		); // WPCS: cache ok, DB call ok, unprepared SQL ok.
	}

	/**
	 * Get unique coupons based on user time query.
	 *
	 * @param string $from_clause       from clause with date query
	 * @param string $where_time_clause where clause with date query
	 * @param string $where_clause      where clause with date query
	 *
	 * @return int unique product count
	 */
	public function get_unique_coupon_count( $from_clause, $where_time_clause, $where_clause ) {
		$table_name = $this->wpdb->prefix . self::TABLE_NAME;

		$reports_type_join = " JOIN {$this->wpdb->prefix}postmeta as postmeta ON (postmeta.post_id={$table_name}.order_id || postmeta.post_id={$table_name}.parent_id)";

		return $this->wpdb->get_var(
			"SELECT
                COUNT(DISTINCT coupon_id)
            FROM
                {$this->wpdb->prefix}wc_order_coupon_lookup JOIN {$table_name} ON {$this->wpdb->prefix}wc_order_coupon_lookup.order_id = {$table_name}.order_id
                {$reports_type_join}
                {$from_clause}
            WHERE
                1=1
                {$where_time_clause}
                {$where_clause}"
		); // WPCS: cache ok, DB call ok, unprepared SQL ok.
	}

	/**
	 * Add order information to the lookup table when orders are created or modified.
	 *
	 * @param int $post_id post ID
	 *
	 * @return int|bool returns -1 if order won't be processed, or a boolean indicating processing success
	 */
	public static function sync_order( $post_id ) {
		if ( 'shop_order' !== get_post_type( $post_id ) && 'shop_order_refund' !== get_post_type( $post_id ) ) {
			return -1;
		}

		$order = wc_get_order( $post_id );
		if ( ! $order ) {
			return -1;
		}

		return self::update( $order );
	}

	/**
	 * Calculation methods.
	 */

	/**
	 * Get number of items sold among all orders.
	 *
	 * @param object $order WC_Order object
	 * @return int
	 */
	protected static function get_num_items_sold( $order ) {
		$num_items = 0;

		$line_items = $order->get_items( 'line_item' );
		foreach ( $line_items as $line_item ) {
			$num_items += $line_item->get_quantity();
		}

		return $num_items;
	}

	/**
	 * Get the net amount from an order without shipping, tax, or refunds.
	 *
	 * @param object $order WC_Order object
	 * @return float
	 */
	protected static function get_net_total( $order ) {
		$net_total = floatval( $order->get_total() ) - floatval( $order->get_total_tax() ) - floatval( $order->get_shipping_total() );

		return (float) $net_total;
	}

	/**
	 * Check to see if an order's customer has made previous orders or not.
	 *
	 * @param object $order WC_Order object
	 * @return bool
	 */
	public static function is_returning_customer( $order ) {
		$customer_id = $order->get_customer_id();

		if ( ! $customer_id ) {
			return false;
		}

		return wc_get_customer_order_count( $customer_id ) > 1;
	}

	/**
	 * Returns string to be used as cache key for the data.
	 *
	 * @param array $params query parameters
	 * @return string
	 */
	protected function get_cache_key( $params ) {
		return 'woocommerce_' . self::TABLE_NAME . '_stats_' . md5( wp_json_encode( $params ) );
	}
}
