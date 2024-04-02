<?php
/**
 * Orders List Template
 *
 * @package MultiPOS - Point of Sale for WCFM Marketplace
 * @version 1.0.0
 */

namespace DDWCMultiPOS\Templates\Admin\Order;

use DDWCMultiPOS\Helper\Outlet\DDWCPOS_Outlet_Helper;

defined( 'ABSPATH' ) || exit();

if ( ! class_exists( 'DDWCPOS_Orders_List_Template' ) ) {

    /**
     * Orders List class
     */
    class DDWCPOS_Orders_List_Template extends \WP_List_Table {

        /**
		 * Outlet Helper Variable
		 *
		 * @var object
		 */
		protected $outlet_helper;

        /**
         * Construct
         */
        function __construct() {
            $this->outlet_helper = new DDWCPOS_Outlet_Helper();

            parent::__construct( [
                'singular' => esc_html__( 'Order', 'ddwc-multipos' ),
                'plural'   => esc_html__( 'Orders', 'ddwc-multipos' ),
                'ajax'     => false
            ] );
        }

        /**
         * Prepare the items for the table to process
         */
        public function prepare_items() {
			$this->_column_headers = $this->get_column_info();

            $request_scheme = is_ssl() ? 'https' : 'http';
			$current_url    = "$request_scheme://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";

            if ( strpos( $current_url, '_wp_http_referer' ) !== false ) {
                $new_url = remove_query_arg( [ '_wp_http_referer', '_wpnonce' ], stripslashes( $current_url ) );
				wp_safe_redirect( $new_url );
				exit();
            }

            $search       = ! empty( $_GET[ 's' ] ) ? sanitize_text_field( wp_unslash( $_GET[ 's' ] ) ) : '';
            $outlet_id    = ! empty( $_GET[ 'outlet-id' ] ) ? intval( $_GET[ 'outlet-id' ] ) : 0;
            $per_page     = $this->get_items_per_page( 'orders_per_page', 20 );
            $current_page = $this->get_pagenum();
            $total_items  = $this->ddwcpos_get_orders_count( $search, $outlet_id );

			$this->set_pagination_args( [
				'total_items' => $total_items,
				'per_page'    => $per_page,
			] );

			$data = $this->ddwcpos_get_orders( $per_page, $current_page, $search, $outlet_id );

			usort( $data, [ $this, 'usort_reorder' ] );

			$this->items = $data;
		}

		/**
		 * Get Orders Count function
		 *
		 * @param string $search
		 * @param int $outlet_id
		 * @return int
		 */
		public function ddwcpos_get_orders_count( $search, $outlet_id ) {
			if ( ! empty( $outlet_id ) ) {
				$search_results = new \WP_Query( [
					'p'                   => esc_attr( $search ),
					'ignore_sticky_posts' => 1,
					'post_type'           => 'shop_order',
					'post_status'         => 'any',
					'posts_per_page'      => -1,
					'order'               => 'DESC',
					'orderby'             => 'ID',
					'fields'              => 'ids',
					'meta_query'          => [
						[
							'key'     => '_ddwcpos_outlet_id',
							'compare' => '=',
							'value'   => $outlet_id
						]
					],
				] );
			} else {
				$search_results = new \WP_Query( [
					'p'                   => esc_attr( $search ),
					'ignore_sticky_posts' => 1,
					'post_type'           => 'shop_order',
					'posts_per_page'      => -1,
					'post_status'         => 'any',
					'order'               => 'DESC',
					'orderby'             => 'ID',
					'fields'              => 'ids',
					'meta_query'          => [
						[
							'key'     => '_ddwcpos_outlet_id',
							'compare' => 'EXISTS',
						]
					],
				] );
			}

			wp_reset_postdata();

			return $search_results->post_count;
		}

        /**
		 * Fetch Orders Data Function
		 *
		 * @param int $per_page Per Page.
		 * @param int $current_page Page.
		 * @param string $search
		 * @param int $outlet_id
		 * @return array $data
		 */
		public function ddwcpos_get_orders( $per_page, $current_page = 1, $search, $outlet_id ) {
			$data   = [];
			$offset = ( $current_page - 1 ) * $per_page;

			if ( ! empty( $outlet_id ) ) {
				$search_results = new \WP_Query( [
					'p'                   => esc_attr( $search ),
					'ignore_sticky_posts' => 1,
					'posts_per_page'      => $per_page,
					'offset'              => $offset,
					'post_type'           => 'shop_order',
					'order'               => 'DESC',
					'orderby'             => 'ID',
					'post_status'         => 'any',
					'fields'              => 'ids',
					'meta_query'          => [
						[
							'key'     => '_ddwcpos_outlet_id',
							'compare' => '=',
							'value'   => $outlet_id,
						]
					],
				] );
			} else {
				$search_results = new \WP_Query( [
					'p'                   => esc_attr( $search ),
					'ignore_sticky_posts' => 1,
					'posts_per_page'      => $per_page,
					'offset'              => $offset,
					'post_type'           => 'shop_order',
					'order'               => 'DESC',
					'orderby'             => 'ID',
					'post_status'         => 'any',
					'fields'              => 'ids',
					'meta_query'          => [
						[
							'key'     => '_ddwcpos_outlet_id',
							'compare' => 'EXISTS',
						]
					],
				] );
			}

			if ( $search_results->have_posts() ) {
				while ( $search_results->have_posts() ) {
					$search_results->the_post();

					$order_id = $search_results->post;
					$order    = wc_get_order( $order_id );
					$buyer    = '';

					if ( $order->get_billing_first_name() || $order->get_billing_last_name() ) {
						/* translators: 1: first name 2: last name */
						$buyer = trim( sprintf( _x( '%1$s %2$s', 'full name', 'ddwc-multipos' ), $order->get_billing_first_name(), $order->get_billing_last_name() ) );
					} elseif ( $order->get_billing_company() ) {
						$buyer = trim( $order->get_billing_company() );
					} elseif ( $order->get_customer_id() ) {
						$user  = get_user_by( 'ID', $order->get_customer_id() );
						$buyer = ucwords( $user->display_name );
					}

					/**
					 * Filter buyer name in list table orders.
					 *
					 * @since 3.7.0
					 * @param string   $buyer Buyer name.
					 * @param WC_Order $order Order data.
					 */
					$buyer = apply_filters( 'woocommerce_admin_order_buyer_name', $buyer, $order );

					if ( 'trash' === $order->get_status() ) {
						$order_html = '<strong>#' . esc_attr( $order->get_order_number() ) . ' ' . esc_html( $buyer ) . '</strong>';
					} else {
						$order_html = '<a href="' . esc_url( admin_url( 'post.php?post=' . absint( $order->get_id() ) ) . '&action=edit' ) . '" class="order-view"><strong>#' . esc_attr( $order->get_order_number() ) . ' ' . esc_html( $buyer ) . '</strong></a>';
					}

					$tooltip                 = '';
					$comment_count           = get_comment_count( $order_id );
					$approved_comments_count = absint( $comment_count[ 'approved' ] );

					if ( $approved_comments_count ) {
						$latest_notes = wc_get_order_notes(
							[
								'order_id' => $order_id,
								'limit'    => 1,
								'orderby'  => 'date_created_gmt',
                            ]
						);

						$latest_note = current( $latest_notes );

						if ( isset( $latest_note->content ) && 1 === $approved_comments_count ) {
							$tooltip = wc_sanitize_tooltip( $latest_note->content );
						} elseif ( isset( $latest_note->content ) ) {
							/* translators: %d: notes count */
							$tooltip = wc_sanitize_tooltip( $latest_note->content . '<br/><small>' . sprintf( _n( 'Plus %d other note', 'Plus %d other notes', ( $approved_comments_count - 1 ), 'ddwc-multipos' ), $approved_comments_count - 1 ) . '</small>' );
						} else {
							/* translators: %d: notes count */
							$tooltip = wc_sanitize_tooltip( sprintf( _n( '%d note', '%d notes', $approved_comments_count, 'ddwc-multipos' ), $approved_comments_count ) );
						}
					}

					if ( $tooltip ) {
						$status = sprintf( '<mark class="order-status %s tips" data-tip="%s"><span>%s</span></mark>', esc_attr( sanitize_html_class( 'status-' . $order->get_status() ) ), wp_kses_post( $tooltip ), esc_html( wc_get_order_status_name( $order->get_status() ) ) );
					} else {
						$status = sprintf( '<mark class="order-status %s"><span>%s</span></mark>', esc_attr( sanitize_html_class( 'status-' . $order->get_status() ) ), esc_html( wc_get_order_status_name( $order->get_status() ) ) );
					}

					$order_timestamp = $order->get_date_created() ? $order->get_date_created()->getTimestamp() : '';

					if ( ! $order_timestamp ) {
						echo '&ndash;';
						return;
					}

					// Check if the order was created within the last 24 hours, and not in the future.
					if ( $order_timestamp > strtotime( '-1 day', time() ) && $order_timestamp <= time() ) {
						$show_date = sprintf(
							/* translators: %s: human-readable time difference */
							_x( '%s ago', '%s = human-readable time difference', 'ddwc-multipos' ),
							human_time_diff( $order->get_date_created()->getTimestamp(), time() )
						);
					} else {
						$show_date = $order->get_date_created()->date_i18n( apply_filters( 'woocommerce_admin_order_date_format', __( 'M j, Y', 'ddwc-multipos' ) ) );
					}

					$date = sprintf(
						'<time datetime="%1$s" title="%2$s">%3$s</time>',
						esc_attr( $order->get_date_created()->date( 'c' ) ),
						esc_html( $order->get_date_created()->date_i18n( get_option( 'date_format' ) . ' ' . get_option( 'time_format' ) ) ),
						esc_html( $show_date )
					);

					if ( $order->get_payment_method_title() ) {
						/* translators: %s: method */
						$total = '<span class="tips" data-tip="' . esc_attr( sprintf( __( 'via %s', 'ddwc-multipos' ), $order->get_payment_method_title() ) ) . '">' . wp_kses_post( $order->get_formatted_order_total() ) . '</span>';
					} else {
						$total = wp_kses_post( $order->get_formatted_order_total() );
					}

					$outlet_id   = get_post_meta( $order_id, '_ddwcpos_outlet_id', true );
					$offline_id  = get_post_meta( $order_id, '_ddwcpos_offline_id', true );
					$cashier_id  = get_post_meta( $order_id, '_ddwcpos_cashier_id', true );
					$outlet      = $this->outlet_helper->ddwcpos_get_outlet_details_by_id( $outlet_id );
					$cashier     = $cashier_id;
					$cashier_obj = get_user_by( 'ID', $cashier_id );

					if ( $cashier_obj ) {
						$email   = $cashier_obj->user_email . ' (#' . $cashier_id . ')';
						$cashier = '<a href=' . esc_url( admin_url( 'user-edit.php?user_id=' . $cashier_id ) ) . '>' . esc_html( $email ) . '</a>';
					}

					$data[] = [
						'id'               => $order_id,
						'order'            => $order_html,
						'offline_order_id' => ! empty( $offline_id ) ? '#' . $offline_id : '-',
						'date'             => $date,
						'status'           => $status,
						'total'            => $total,
						'outlet'           => $outlet[ 'name' ],
						'cashier'          => $cashier,
					];

				}
			}

			wp_reset_postdata();

			return apply_filters( 'ddwcpos_orders_list_data', $data );
		}

        /**
		 * Associative array of columns
		 *
		 * @return array
		 */
		public function get_columns() {
			return apply_filters( 'ddwcpos_orders_list_columns', [
				'order'            => esc_html__( 'Order', 'ddwc-multipos' ),
				'offline_order_id' => esc_html__( 'Offline Order ID', 'ddwc-multipos' ),
				'date'             => esc_html__( 'Date', 'ddwc-multipos' ),
				'status'           => esc_html__( 'Status', 'ddwc-multipos' ),
				'total'            => esc_html__( 'Total', 'ddwc-multipos' ),
				'outlet'           => esc_html__( 'Outlet', 'ddwc-multipos' ),
				'cashier'          => esc_html__( 'Cashier', 'ddwc-multipos' ),
			] );
		}

        /**
		 * No items
		 *
		 * @return void
		 */
		public function no_items() {
			esc_html_e( 'No orders avaliable.', 'ddwc-multipos' );
		}

		/**
		 * Hidden Columns
		 *
		 * @return array
		 */
		public function get_hidden_columns() {
			return [];
		}

        /**
		 * Render a column when no column specific method exists.
		 *
		 * @param array  $item Items.
		 * @param string $column_name Name.
		 *
		 * @return mixed
		 */
		public function column_default( $item, $column_name ) {
			if ( array_key_exists( $column_name, $item ) ) {
				return $item[ $column_name ];
			}

			return print_r( $item, true );
		}

        /**
		 * Usort
		 *
		 * @param int $first First value.
		 * @param int $second Second value.
		 * @return $result
		 */
		public function usort_reorder( $first, $second ) {
			$orderby = ! empty( $_GET[ 'orderby' ] ) ? $_GET[ 'orderby' ] : 'id';
			$order   = ! empty( $_GET[ 'order' ] ) ? $_GET[ 'order' ] : 'desc';

			$result = strnatcmp( $first[ $orderby ], $second[ $orderby ] );
			return $order === 'asc' ? $result : -$result;
        }

        /**
		 * Columns to make sortable.
		 *
		 * @return array
		 */
		public function get_sortable_columns() {
			$sortable_columns = [
				'order'            => [ 'order', true ],
				'offline_order_id' => [ 'offline_order_id', true ],
				'date'             => [ 'date', true ],
				'status'           => [ 'status', true ],
				'total'            => [ 'total', true ],
				'outlet'           => [ 'outlet', true ],
				'cashier'          => [ 'cashier', true ],
			];

			return apply_filters( 'ddwcpos_orders_list_sortable_columns', $sortable_columns );
		}

		/**
		 * Product Stocks List Filters
		 *
		 * @param string $which Position of filter.
		 */
		public function extra_tablenav( $which ) {
			if ( 'top' === $which ) {
				$outlets   = $this->outlet_helper->ddwcpos_get_all_outlets( 999999, 0, '' );
				$outlet_id = ! empty( $_GET[ 'outlet-id' ] ) ? intval( $_GET[ 'outlet-id' ] ) : 0;
				?>
				<div class="alignleft actions bulkactions">
					<select name="outlet-id">
						<option value=""><?php esc_html_e( 'Select Outlet', 'ddwc-multipos' ); ?></option>
						<?php
						if ( ! empty( $outlets ) ) {
							foreach ( $outlets as $key => $outlet ) {
								?>
								<option value="<?php echo esc_attr( $outlet[ 'id' ] ); ?>" <?php echo esc_attr( $outlet[ 'id' ] == $outlet_id ? 'selected="selected"' : '' ); ?>><?php echo esc_html( $outlet[ 'name' ] ); ?></option>
								<?php
							}
						}
						?>
					</select>

					<input type="submit" value="<?php esc_attr_e( 'Filter', 'ddwc-multipos' ); ?>" name="ddwcpos_filter_outlet" class="button" />
				</div>
				<?php
			}
		}
    }
}
