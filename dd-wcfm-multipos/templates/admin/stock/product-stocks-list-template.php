<?php
/**
 * Product Stock List Template
 *
 * @package MultiPOS - Point of Sale for WCFM Marketplace
 * @version 1.0.0
 */

namespace DDWCMultiPOS\Templates\Admin\Stock;

use DDWCMultiPOS\Helper\Outlet\DDWCPOS_Outlet_Helper;
use DDWCMultiPOS\Helper\Barcode\DDWCPOS_Barcode_Helper;

defined( 'ABSPATH' ) || exit();

if ( ! class_exists( 'DDWCPOS_Product_Stocks_List_Template' ) ) {
	/**
	 * Product Stock list class
	 */
	class DDWCPOS_Product_Stocks_List_Template extends \WP_List_table {
		/**
         * Configuration Variable
         *
         * @var array
         */
        protected $ddwcpos_configuration;

		/**
		 * Outlet helper variable
		 *
		 * @var object
		 */
		protected $outlet_helper;

		/**
		 * Barcode Helper variable
		 *
		 * @var object
		 */
		protected $barcode_helper;

		/**
		 * Outlet id variable
		 *
		 * @var int
		 */
		protected $outlet_id;

		/**
		 * Class constructor
		 * 
		 * @param array $ddwcpos_configuration
		 */
		public function __construct( $ddwcpos_configuration ) {
			$this->ddwcpos_configuration = $ddwcpos_configuration;
			$this->outlet_helper         = new DDWCPOS_Outlet_Helper();
			$this->barcode_helper        = new DDWCPOS_Barcode_Helper( $this->ddwcpos_configuration );
			$this->outlet_id             = ! empty( $_GET[ 'outlet-id' ] ) ? intval( $_GET[ 'outlet-id' ] ) : '';

			parent::__construct( [
				'singular' => esc_html__( 'Product List', 'ddwc-multipos' ),
				'plural'   => esc_html__( 'Products List', 'ddwc-multipos' ),
				'ajax'     => false,
			] );
		}

		/**
		 * Prepare Items
		 *
		 * @return void
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

            $search       = ! empty( $_GET[ 's' ] ) ? sanitize_text_field( $_GET[ 's' ] ) : '';
            $per_page     = $this->get_items_per_page( 'stocks_per_page', 20 );
            $current_page = $this->get_pagenum();
            $total_items  = $this->ddwcpos_get_products_count( $search );

			$this->set_pagination_args( [
				'total_items' => $total_items,
				'per_page'    => $per_page,
			] );

			$data = $this->ddwcpos_get_products( $per_page, $current_page, $search );

			usort( $data, [ $this, 'usort_reorder' ] );

			$this->items = $data;
		}

		/**
		 * Get Products Count function
		 *
		 * @param string $search
		 * @return int
		 */
		public function ddwcpos_get_products_count( $search ) {
			$search_results = new \WP_Query( [
				's'                   => $search,
				'ignore_sticky_posts' => 1,
				'post_type'           => [ 'product', 'product_variation' ],
				'post_status'         => 'publish',
				'order'               => 'DESC',
				'orderby'             => 'ID',
				'posts_per_page'      => -1,
				'fields'              => 'ids',
				'search_columns'      => [ 'post_title', 'ID' ],
			] );

			wp_reset_postdata();

			return $search_results->post_count;
		}

		/**
		 * Usort function
		 *
		 * @param int $first First value.
		 * @param int $second Second value.
		 * @return $result
		 */
		public function usort_reorder( $first, $second ){
			$orderby = ! empty( $_GET[ 'orderby' ] ) ? $_GET[ 'orderby' ] : 'id';
			$order   = ! empty( $_GET[ 'order' ] ) ? $_GET[ 'order' ] : 'desc';

			$result = strnatcmp( $first[ $orderby ], $second[ $orderby ] );
			return $order === 'asc' ? $result : -$result;
		}

		/**
		 * Fetch Products
		 *
		 * @param int $per_page Per Page.
		 * @param int $current_page Page.
		 * @param string $search
		 * @return array $data
		 */
		public function ddwcpos_get_products( $per_page, $current_page = 1, $search ) {
            $data = [];
            $off  = ( $current_page - 1 ) * $per_page;

			$args = [
				's'              => $search,
				'post_type'      => [ 'product', 'product_variation' ],
				'post_status'    => 'publish',
				'posts_per_page' => $per_page,
				'offset'         => $off,
				'search_columns'      => [ 'post_title', 'ID' ],
				'order'          => 'DESC',
				'orderby'        => 'ID',
				'fields'         => 'ids',
			];

			$args = apply_filters( 'ddwcpos_modify_outlet_products_list_args', $args );

			$search_results = new \WP_Query( $args );

			wp_reset_postdata();

			if ( $search_results->have_posts() ) {
				while ( $search_results->have_posts() ) {
					$search_results->the_post();

					$product_id   = $search_results->post;
					$product      = wc_get_product( $product_id );

					if ( ! $product ) {
						continue;
					}

					$product_type = $product->get_type();

					if ( 'simple' === $product_type || 'variation' === $product_type ) {
						if ( $product_type == 'simple' ) {
							$product_type    = esc_html__( 'Simple', 'ddwc-multipos' );
							$main_product_id = $product_id;
						} else {
							$product_type    = esc_html__( 'Variation', 'ddwc-multipos' );
							$main_product_id = $product->get_parent_id();
						}

						$barcode_init = $this->barcode_helper->ddwcpos_get_barcode_init( $product );
						$stock_status = $product->get_stock_status();

						ob_start();
						if ( 'instock' === $stock_status ) {
							$stock_quantity = $product->get_stock_quantity();
							if ( $stock_quantity > 0 ) {
								?>
								<mark class="instock">
									<?php
									/* translators: %s for product stock quantity */
									echo sprintf( esc_html__( 'In Stock(%s)', 'ddwc-multipos' ), $stock_quantity ); 
									?>
								</mark>
								<?php
							} else {
								?>
								<mark class="instock"><?php esc_html_e( 'In Stock', 'ddwc-multipos' ); ?></mark>
								<?php
							}
						} else {
							?>
							<mark class="outofstock"><?php esc_html_e( 'Out of Stock', 'ddwc-multipos' ); ?></mark>
							<?php
						}
						$stock = ob_get_clean();

						if ( ! empty( $this->outlet_id ) ) {
							$custom_stock = get_post_meta( $product_id, '_ddwcpos_outlet_stock_' . $this->outlet_id, true );

							ob_start();
							?>
							<input type="number" min="0" class="ddwcpos-custom-stock ddwcpos-width-60" placeholder="<?php esc_attr_e( 'Quantity', 'ddwc-multipos' ); ?>" value="<?php echo esc_attr( ! empty( $custom_stock ) ? $custom_stock : 0 ); ?>" />
							<button class="button ddwcpos-product-action" data-action="update_custom_stock" data-product-id="<?php echo esc_attr( $product_id ); ?>" data-outlet-id="<?php echo esc_attr( $this->outlet_id ); ?>"><?php esc_html_e( 'Update', 'ddwc-multipos' ); ?></button>
							<?php
							$custom_stock = ob_get_clean();
						} else {
							$custom_stock = esc_html__( 'Select Outlet First!', 'ddwc-multipos' );
						}

						$data[] = apply_filters(
							'ddwcpos_modify_outlet_products_list_row_data',
							[
								'id'                => $product_id,
								'main_product_id'   => $main_product_id,
								'thumb'             => $product->get_image( 'thumbnail' ),
								'pro_name'          => $product->get_name(),
								'pro_type'          => $product_type,
								'barcode'           => $barcode_init,
								'price'             => $product->get_price_html(),
								'centralized_stock' => $stock,
								'custom_stock'      => $custom_stock,
							]
						);
					}
				}
			}

			return apply_filters( 'ddwcpos_outlet_products_list_data', $data );
		}

		/**
		 * No items
		 *
		 * @return void
		 */
		public function no_items() {
			esc_html_e( 'No products avaliable.', 'ddwc-multipos' );
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
		 *  Associative array of columns
		 *
		 * @return array
		 */
		public function get_columns() {
			$columns = [
				'thumb'             => '<span class="wc-image tips">' . esc_html__( 'Image', 'ddwc-multipos' ) . '</span>',
				'pro_name'          => esc_html__( 'Name', 'ddwc-multipos' ),
				'pro_type'          => esc_html__( 'Product Type', 'ddwc-multipos' ),
				'barcode'           => esc_html__( 'Barcode', 'ddwc-multipos' ),
				'price'             => esc_html__( 'Price', 'ddwc-multipos' ),
				'centralized_stock' => esc_html__( 'Centralized Stock', 'ddwc-multipos' ) . wc_help_tip( esc_html__( 'This is the WooCommerce stock which is same for all the outlets.', 'ddwc-multipos' ) ),
				'custom_stock'      => esc_html__( 'Custom Stock', 'ddwc-multipos' ) . wc_help_tip( esc_html__( 'This is the custom stock which can be different for different outlets.', 'ddwc-multipos' ) ),
			];

			return apply_filters( 'ddwcpos_outlet_products_list_columns', $columns );
		}

		/**
		 * Render a column when no column specific method exists.
		 *
		 * @param array  $item Items.
		 * @param string $column_name Name.
		 * @return mixed
		 */
		public function column_default( $item, $column_name ) {
			if ( array_key_exists( $column_name, $item ) ) {
				return $item[ $column_name ];
			}

			return print_r( $item, true );
		}

		/**
		 * Columns to make sortable.
		 *
		 * @return array
		 */
		public function get_sortable_columns() {
			return apply_filters( 'ddwcpos_outlet_products_list_sortable_columns', [
				'pro_name' => [ 'pro_name', true ],
				'pro_type' => [ 'pro_type', true ],
				'barcode'  => [ 'barcode', true ],
				'price'    => [ 'price', true ],
			] );
		}

		/**
		 * Column actions
		 *
		 * @param array $item Items.
		 * @return array $actions
		 */
		public function column_pro_name( $item ) {
			$actions = [
				'edit' => sprintf( '<a href="%s">%s</a>', esc_url( admin_url( "post.php?post={$item[ 'main_product_id' ]}&action=edit" ) ), esc_html__( 'Edit', 'ddwc-multipos' ) ),
				'view' => sprintf( '<a href="%s" target="_blank">%s</a>', esc_url( get_permalink( $item[ 'id' ] ) ), esc_html__( 'View', 'ddwc-multipos' ) ),
			];

			return sprintf( '%1$s %2$s', $item[ 'pro_name' ], $this->row_actions( apply_filters( 'ddwcpos_outlet_products_list_line_actions', $actions ) ) );
		}

		/**
		 * Product Stocks List Filters
		 *
		 * @param string $which Position of filter.
		 */
		public function extra_tablenav( $which ) {
			if ( 'top' === $which ) {
				$outlets = $this->outlet_helper->ddwcpos_get_all_outlets( 999999, 0, '' );
				?>
				<div class="alignleft actions bulkactions">
					<select name="outlet-id">
						<option value=""><?php esc_html_e( 'Select Outlet', 'ddwc-multipos' ); ?></option>
						<?php
						if ( ! empty( $outlets ) ) {
							foreach ( $outlets as $key => $outlet ) {
								?>
								<option value="<?php echo esc_attr( $outlet[ 'id' ] ); ?>" <?php echo esc_attr( $outlet[ 'id' ] == $this->outlet_id ? 'selected="selected"' : '' ); ?>><?php echo esc_html( $outlet[ 'name' ] ); ?></option>
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
