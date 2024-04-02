<?php
/**
 * Cashiers List Template
 *
 * @package MultiPOS - Point of Sale for WCFM Marketplace
 * @version 1.0.0
 */

namespace DDWCMultiPOS\Templates\Admin\Cashier;

use DDWCMultiPOS\Helper\Error\DDWCPOS_Error_Helper;
use DDWCMultiPOS\Helper\Outlet\DDWCPOS_Outlet_Helper;

defined( 'ABSPATH' ) || exit();

if ( ! class_exists( 'DDWCPOS_Cashiers_List_Template' ) ) {
	/**
	 * Cashiers list class
	 */
	class DDWCPOS_Cashiers_List_Template extends \WP_List_table {
		/**
		 * Error Helper Trait
		 */
		use DDWCPOS_Error_Helper;

		/**
		 * Class constructor
		 */
		public function __construct() {
			parent::__construct( [
				'singular' => esc_html__( 'Cashier List', 'ddwc-multipos' ),
				'plural'   => esc_html__( 'Cashiers List', 'ddwc-multipos' ),
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

			$per_page     = $this->get_items_per_page( 'cashiers_per_page', 20 );
			$current_page = $this->get_pagenum();
			$total_items  = $this->ddwcpos_cashiers_count( $search );

			$this->set_pagination_args( [
				'total_items' => $total_items,
				'per_page'    => $per_page,
			] );

			$data = $this->ddwcpos_get_cashiers( $per_page, $current_page, $search );

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
		 * Record count
		 *
		 * @param string $search Search.
		 * @return $count
		 */
		public function ddwcpos_cashiers_count( $search = '' ) {
			$user_query = new \WP_User_Query( [
                'role__in'       => apply_filters( 'ddwcpos_allowed_roles_for_pos', [ 'ddwcpos_cashier', 'administrator', 'shop_manager', 'wcfm_vendor' ] ),
                'search'         => '*' . esc_attr( $search ) . '*',
                'search_columns' => [ 'user_nicename', 'ID', 'user_login', 'user_email' ],
			] );

			wp_reset_postdata();

            return $user_query->get_total();
		}

		/**
		 * Fetch Users
		 *
		 * @param int $per_page Per Page.
		 * @param int $current_page Page.
		 * @param string $search Search.
		 * @return array $users
		 */
		public function ddwcpos_get_cashiers( $per_page, $current_page = 1, $search = '' ) {
            $data = [];

            $off = ( $current_page - 1 ) * $per_page;

			$query = new \WP_User_Query( [
                'role__in'       => apply_filters( 'ddwcpos_allowed_roles_for_pos', [ 'ddwcpos_cashier', 'administrator', 'shop_manager', 'wcfm_vendor' ] ),
                'number'         => $per_page,
                'offset'         => $off,
                'order'          => 'DESC',
                'orderby'        => 'ID',
                'search'         => '*' . esc_attr( $search ) . '*',
                'search_columns' => [ 'user_nicename', 'ID', 'user_login', 'user_email' ],
                'fields'         => [ 'ID', 'user_login', 'user_email' ],
			] );

			wp_reset_postdata();

            $cashiers = $query->get_results();

            if ( ! empty( $cashiers ) ) {
				global $wp_roles;
				$outlet_helper = new DDWCPOS_Outlet_Helper();

                foreach ( $cashiers as $cashier ) {
					$cashier_id = $cashier->ID;

					$assigned_outlets = get_user_meta( $cashier_id, '_ddwcpos_assigned_outlets', true );
					$user_data        = get_userdata( $cashier_id );

					if ( ! empty( $assigned_outlets ) ) {
						$assigned_outlets = array_map( function( $assigned_outlet ) use ( $outlet_helper ) {
							$outlet_details = $outlet_helper->ddwcpos_get_outlet_details_by_id( $assigned_outlet );
							ob_start();
							?>
							<a href="<?php echo esc_url( admin_url( 'admin.php?page=ddwcpos-product-stocks&outlet-id=' . $assigned_outlet ) ) ?>" class="button button-primary" target="_blank"><?php echo esc_html( $outlet_details[ 'name' ] ); ?></a>
							<?php
							return ob_get_clean();
						}, $assigned_outlets );

						$assigned_outlets = implode( '', $assigned_outlets );
					} else {
						if ( in_array( 'administrator', $user_data->roles, true ) || in_array( 'shop_manager', $user_data->roles, true ) || in_array( 'wcfm_vendor', $user_data->roles, true ) || apply_filters( 'ddwcpos_allow_administrator_access_for_pos_to_user', false ) ) {
							$assigned_outlets = esc_html__( 'All Outlets', 'ddwc-multipos' );
						} else {
							$assigned_outlets = 'N/A';
						}
					}

					$roles = array_map( function( $role ) use ( $wp_roles ) {
						return $wp_roles->roles[ $role ][ 'name' ];
					}, $user_data->roles );

                    $data[] = [
                        'id'               => $cashier_id,
                        'username'         => $cashier->user_login,
                        'email'            => $cashier->user_email,
                        'role'             => implode( ', ', $roles ),
                        'assigned_outlets' => $assigned_outlets,
					];
                }
            }

			return apply_filters( 'ddwcpos_cashiers_list_data', $data );
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
                                    $response = wp_delete_user( $id );
									if ( $response ) {
										$success++;
									} else {
										$error++;
									}
								}

								if ( $success ) {
									$message = sprintf( esc_html__( '%d cashiers(s) deleted successfully.', 'ddwc-multipos' ), $success );
									$this->ddwcpos_print_notification( $message );
								}

								if ( $error ) {
									$message = sprintf( esc_html__( '%d cashiers(s) not exits.', 'ddwc-multipos' ), $error );
									$this->ddwcpos_print_notification( $message, 'error' );
								}
							}
						} else {
							$message = esc_html__( 'Select cashiers(s) to delete.', 'ddwc-multipos' );
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
							$id       = intval( wp_unslash( $_GET[ 'ddwcpos-id' ] ) );  // WPCS: input var ok.
							$response = wp_delete_user( $id );

							if ( $response ) {
								$message = esc_html__( 'Cashier is deleted successfully.', 'ddwc-multipos' );
								$this->ddwcpos_print_notification( $message );
							} else {
								$message = esc_html__( 'Cashier not exists.', 'ddwc-multipos' );
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
			esc_html_e( 'No cashiers avaliable.', 'ddwc-multipos' );
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
				'cb'               => '<input type="checkbox" />',
				'id'               => esc_html__( 'ID', 'ddwc-multipos' ),
				'username'         => esc_html__( 'Username', 'ddwc-multipos' ),
				'email'            => esc_html__( 'Email', 'ddwc-multipos' ),
				'role'             => esc_html__( 'Role', 'ddwc-multipos' ),
				'assigned_outlets' => esc_html__( 'Assigned Outlets', 'ddwc-multipos' ),
			];

			return apply_filters( 'ddwcpos_cashiers_list_columns', $columns );
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
			return apply_filters( 'ddwcpos_cashiers_list_sortable_columns', [
				'id'       => [ 'id', true ],
				'username' => [ 'username', true ],
				'email'    => [ 'email', true ],
				'role'     => [ 'role', true ],
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
				'edit' => sprintf( '<a href="%s">%s</a>', esc_url( admin_url( 'user-edit.php?user_id=' . $item[ 'id' ] ) ), esc_html__( 'Edit', 'ddwc-multipos' ) ),
				'delete' => sprintf( '<a href="%s">%s</a>', wp_nonce_url( 'admin.php?page=' . $_REQUEST[ 'page' ] . "&action=delete&s=$search&paged=$current_page&ddwcpos-id=" . $item[ 'id' ], 'ddwcpos_nonce_action', 'ddwcpos_nonce' ), esc_html__( 'Delete', 'ddwc-multipos' ) ),
			];

			return sprintf( '%1$s %2$s', $item[ 'id' ], $this->row_actions( apply_filters( 'ddwcpos_cashiers_list_line_actions', $actions ) ) );
		}

		/**
         * Bulk actions on list.
		 * 
		 * @return array
         */
        public function get_bulk_actions() {
            return apply_filters( 'ddwcpos_modify_bulk_actions_in_cashiers', [
                'delete'  => esc_html__( 'Delete', 'ddwc-multipos' ),
			] );
		}
	}
}
