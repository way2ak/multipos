<?php
/**
 * Outlets List Template
 *
 * @package MultiPOS - Point of Sale for WCFM Marketplace
 * @version 1.0.0
 */

namespace DDWCMultiPOS\Templates\Admin\Outlet;

use DDWCMultiPOS\Helper\Error\DDWCPOS_Error_Helper;
use DDWCMultiPOS\Helper\Outlet\DDWCPOS_Outlet_Helper;

defined( 'ABSPATH' ) || exit();

if ( ! class_exists( 'DDWCPOS_Outlets_List_Template' ) ) {
	/**
	 * Outlets list class
	 */
	class DDWCPOS_Outlets_List_Template extends \WP_List_table {
		/**
		 * Error Helper Trait
		 */
		use DDWCPOS_Error_Helper;

		/**
		 * Outlet Helper Variable
		 *
		 * @var object
		 */
		protected $outlet_helper;

		/**
		 * Configuration Variable
		 *
		 * @var array
		 */
		protected $ddwcpos_configuration;

		/**
		 * Class constructor
		 */
		public function __construct( $ddwcpos_configuration ) {
			$this->ddwcpos_configuration = $ddwcpos_configuration;
			$this->outlet_helper         = new DDWCPOS_Outlet_Helper();

			parent::__construct( [
				'singular' => esc_html__( 'Outlet List', 'ddwc-multipos' ),
				'plural'   => esc_html__( 'Outlets List', 'ddwc-multipos' ),
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

			$this->process_bulk_action();
			$this->process_row_action();

            $search = ! empty( $_GET[ 's' ] ) ? sanitize_text_field( wp_unslash( $_GET[ 's' ] ) ) : '';

			$per_page     = $this->get_items_per_page( 'outlets_per_page', 20 );
			$current_page = $this->get_pagenum();
			$total_items  = $this->outlet_helper->ddwcpos_get_all_outlets_count( $search );

			$this->set_pagination_args( [
				'total_items' => $total_items,
				'per_page'    => $per_page,
			] );

			$data = $this->ddwcpos_get_outlets( $per_page, $current_page, $search );

			usort( $data, [ $this, 'usort_reorder' ] );

			$this->items = $data;
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
			$result  = strnatcmp( $first[$orderby], $second[$orderby] );

			return 'asc' === $order ? $result : -$result;
		}

		/**
		 * Fetch Outlets
		 *
		 * @param int $per_page Per Page.
		 * @param int $current_page Page.
		 * @param string $search Search.
		 * @return array $data
		 */
		public function ddwcpos_get_outlets( $per_page, $current_page = 1, $search = '' ) {
            $data = [];

            $offset = ( $current_page - 1 ) * $per_page;

            $outlets = $this->outlet_helper->ddwcpos_get_all_outlets( $per_page, $offset, $search );

            if ( ! empty( $outlets ) ) {
				$date_format  = get_option( 'date_format' );
				$time_format  = get_option( 'time_format' );
				$outlet_modes = $this->outlet_helper->ddwcpos_get_outlet_modes();

                foreach ( $outlets as $outlet ) {
                    $address = sprintf( esc_html__( "Address 1: %s Address 2: %s City: %s State: %s Country: %s Postcode: %s", 'ddwc-multipos' ), $outlet[ 'address1' ]  . '<br />', $outlet[ 'address2' ]  . '<br />', $outlet[ 'city' ]  . '<br />', $outlet[ 'state' ]  . '<br />', $outlet[ 'country' ]  . '<br />', $outlet[ 'postcode' ]  . '<br />' );

                    if ( 'enabled' === $outlet[ 'status' ] ) {
                        $status = esc_html__( 'Enabled', 'ddwc-multipos' );
                    } else if ( 'disabled' === $outlet[ 'status' ] ) {
                        $status = esc_html__( 'Disabled', 'ddwc-multipos' );
                    }

					ob_start();
					?>
					<a class="button button-primary" href="<?php echo esc_url( admin_url( 'admin.php?page=ddwcpos-product-stocks&outlet-id=' . $outlet[ 'id' ] ) ); ?>"><?php esc_html_e( 'Assign Stocks', 'ddwc-multipos' ); ?></a>
					<?php
					if ( 'restaurant' === $outlet[ 'mode' ] ) {
						?>
						<a class="button button-secondary" href="<?php echo esc_url( site_url( $this->ddwcpos_configuration[ 'kitchen_endpoint' ] . '?outlet_id=' . $outlet[ 'id' ] ) ); ?>" target="_blank"><?php esc_html_e( 'Kitchen View', 'ddwc-multipos' ); ?></a>
						<?php
					}
					?>
					<?php
					$action = ob_get_clean();

					$user = get_userdata( $outlet[ 'author' ] );

                    $data[] = [
                        'id'          => $outlet[ 'id' ],
                        'outlet_name' => $outlet[ 'name' ],
                        'store'       => wcfm_get_vendor_store_name( $user->ID ) . ' - ' . $user->display_name . ' (#' . $user->ID . ' - ' . $user->user_login . ')',
                        'mode'        => $outlet_modes[ $outlet[ 'mode' ] ],
                        'address'     => $address,
                        'email'       => $outlet[ 'email' ],
                        'phone'       => $outlet[ 'phone' ],
                        'status'      => $status,
                        'created_at'  => date_i18n( $date_format . ' ' . $time_format, strtotime( $outlet[ 'created' ] ) ),
                        'updated_at'  => date_i18n( $date_format . ' ' . $time_format, strtotime( $outlet[ 'updated' ] ) ),
                        'action'      => $action,
					];
                }
            }

			return apply_filters( 'ddwcpos_wcfm_outlets_list_data', $data );
		}

		/**
		 * Process bulk actions
		 *
		 * @return void
		 */
		public function process_bulk_action() {
			if ( ! empty( $_GET[ 'ddwcpos_nonce' ] ) && wp_unslash( $_GET[ 'ddwcpos_nonce' ] ) ) { // WPCS: CSRF ok. // WPCS: input var ok. // WPCS: sanitization ok.

				$nonce = filter_input( INPUT_GET, 'ddwcpos_nonce', FILTER_SANITIZE_STRING );
				if ( wp_verify_nonce( $nonce, 'ddwcpos_nonce_action' ) ) {
					$action = $this->current_action();

					if ( in_array( $action, [ 'delete' ] ) ) {
						if ( ! empty( $_GET[ 'ddwcpos-id' ] ) ) { // WPCS: input var ok.
							if ( is_array( $_GET[ 'ddwcpos-id' ] ) ) { // WPCS: input var ok.
								$ids = array_map( 'sanitize_text_field', wp_unslash( $_GET[ 'ddwcpos-id' ] ) ); // WPCS: input var ok.

								$success = $error = 0;

								foreach ( $ids as $id ) {
                                    $response = $this->outlet_helper->ddwcpos_delete_outlet( $id );
									if ( $response ) {
										$success++;
									} else {
										$error++;
									}
								}

								if ( $success ) {
									$message = sprintf( esc_html__( '%d outlet(s) deleted successfully.', 'ddwc-multipos' ), $success );
									$this->ddwcpos_print_notification( $message );
								}

								if ( $error ) {
									$message = sprintf( esc_html__( '%d outlet(s) not exits.', 'ddwc-multipos' ), $error );
									$this->ddwcpos_print_notification( $message, 'error' );
								}
							}
						} else {
							$message = esc_html__( 'Select outlet(s) to delete.', 'ddwc-multipos' );
							$this->ddwcpos_print_notification( $message, 'error' );
						}
					}
				} else {
					$message = esc_html__( 'Invalid nonce. Security check failed!!!', 'ddwc-multipos' );
					$this->ddwcpos_print_notification( $message, 'error' );
				}
			}
		}

		/**
		 * Process row actions
		 *
		 * @return void
		 */
		public function process_row_action() {
			if ( ! empty( $_GET[ 'ddwcpos_nonce' ] ) && wp_unslash( $_GET[ 'ddwcpos_nonce' ] ) ) { // WPCS: CSRF ok. // WPCS: input var ok. // WPCS: sanitization ok.
				$nonce = filter_input( INPUT_GET, 'ddwcpos_nonce', FILTER_SANITIZE_STRING );
				if ( wp_verify_nonce( $nonce, 'ddwcpos_nonce_action' ) ) {

					$action = $this->current_action();

					if ( in_array( $action, [ 'delete' ] ) ) {
						if ( ! empty( $_GET[ 'ddwcpos-id' ] ) && ! is_array( $_GET[ 'ddwcpos-id' ] ) ) { // WPCS: input var ok.
							$id       = intval( wp_unslash( $_GET[ 'ddwcpos-id' ] ) );       // WPCS: input var ok.
							$response = $this->outlet_helper->ddwcpos_delete_outlet( $id );

							if ( $response ) {
								$message = esc_html__( 'Outlet is deleted successfully.', 'ddwc-multipos' );
								$this->ddwcpos_print_notification( $message );
							} else {
								$message = esc_html__( 'Outlet not exists.', 'ddwc-multipos' );
								$this->ddwcpos_print_notification( $message, 'error' );
							}
						}
					}
				} else {
					$message = esc_html__( 'Invalid nonce. Security check failed!!!', 'ddwc-multipos' );
					$this->ddwcpos_print_notification( $message, 'error' );
				}
			}
		}

		/**
		 *  No items
		 *
		 * @return void
		 */
		public function no_items() {
			esc_html_e( 'No outlets avaliable.', 'ddwc-multipos' );
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
				'cb'          => '<input type="checkbox" />',
				'id'          => esc_html__( 'ID', 'ddwc-multipos' ),
				'outlet_name' => esc_html__( 'Name', 'ddwc-multipos' ),
				'store'       => esc_html__( 'Store', 'ddwc-multipos' ),
				'mode'        => esc_html__( 'Mode', 'ddwc-multipos' ),
				'address'     => esc_html__( 'Address', 'ddwc-multipos' ),
				'email'       => esc_html__( 'Email', 'ddwc-multipos' ),
				'phone'       => esc_html__( 'Phone', 'ddwc-multipos' ),
				'status'      => esc_html__( 'Status', 'ddwc-multipos' ),
				'created_at'  => esc_html__( 'Created At', 'ddwc-multipos' ),
				'updated_at'  => esc_html__( 'Updated At', 'ddwc-multipos' ),
				'action'      => esc_html__( 'Action', 'ddwc-multipos' ),
			];

			return apply_filters( 'ddwcpos_wcfm_outlets_list_columns', $columns );
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
		 * Columns to make sortable.
		 *
		 * @return array
		 */
		public function get_sortable_columns() {
			return apply_filters( 'ddwcpos_wcfm_outlets_list_sortable_columns', [
				'id'          => [ 'id', true ],
				'outlet_name' => [ 'outlet_name', true ],
				'store'       => [ 'store', true ],
				'mode'        => [ 'mode', true ],
				'phone'       => [ 'phone', true ],
				'status'      => [ 'status', true ],
				'created_at'  => [ 'created_at', true ],
				'updated_at'  => [ 'updated_at', true ],
			] );
		}

		/**
		 * Render the bulk edit checkbox
		 *
		 * @param array $item Item.
		 * @return string
		 */
		public function column_cb( $item ) {
			return sprintf( '<input type="checkbox" name="ddwcpos-id[]" value="%d" />', esc_attr( $item[ 'id' ] ) );
		}

		/**
		 * Column actions
		 *
		 * @param array $item Items.
		 * @return array $actions
		 */
		public function column_id( $item ) {
			$search       = ! empty( $_GET[ 's' ] ) ? $_GET[ 's' ] : '';
			$current_page = $this->get_pagenum();

			$actions = [
				'edit' => sprintf( '<a href="%s">%s</a>', admin_url( 'admin.php?page=' . $_REQUEST[ 'page' ] . "&action=edit&id=" . $item[ 'id' ] ), esc_html__( 'Edit', 'ddwc-multipos' ) ),
				'delete' => sprintf( '<a href="%s">%s</a>', wp_nonce_url( 'admin.php?page=' . $_REQUEST[ 'page' ] . "&action=delete&s=$search&paged=$current_page&ddwcpos-id=" . $item[ 'id' ], 'ddwcpos_nonce_action', 'ddwcpos_nonce' ), esc_html__( 'Delete', 'ddwc-multipos' ) ),
			];

			return sprintf( '%1$s %2$s', $item[ 'id' ], $this->row_actions( apply_filters( 'ddwcpos_wcfm_outlets_list_line_actions', $actions ) ) );
		}

		/**
         * Bulk actions on list.
		 * 
		 * @return array
         */
        public function get_bulk_actions() {
            return apply_filters( 'ddwcpos_modify_bulk_actions_in_outlets', [
                'delete'  => esc_html__( 'Delete', 'ddwc-multipos' ),
			] );
		}
	}
}
