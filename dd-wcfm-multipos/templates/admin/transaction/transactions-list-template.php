<?php
/**
 * Transactions List Template
 *
 * @package MultiPOS - Point of Sale for WCFM Marketplace
 * @version 1.0.0
 */

namespace DDWCMultiPOS\Templates\Admin\Transaction;

use DDWCMultiPOS\Helper\Error\DDWCPOS_Error_Helper;
use DDWCMultiPOS\Helper\Transaction\DDWCPOS_Transaction_Helper;
use DDWCMultiPOS\Helper\Outlet\DDWCPOS_Outlet_Helper;

defined( 'ABSPATH' ) || exit();

if ( ! class_exists( 'DDWCPOS_Transactions_List_Template' ) ) {
	/**
	 * Transactions list class
	 */
	class DDWCPOS_Transactions_List_Template extends \WP_List_table {
		/**
		 * Error Helper Trait
		 */
		use DDWCPOS_Error_Helper;

		/**
         * Configuration Variable
         *
         * @var array
         */
        protected $ddwcpos_configuration;

		/**
		 * Transactions Helper Variable
		 *
		 * @var object
		 */
		protected $transaction_helper;

        /**
		 * Outlet Helper Variable
		 *
		 * @var object
		 */
		protected $outlet_helper;

		/**
		 * Class constructor
		 */
		public function __construct( $ddwcpos_configuration ) {
            $this->ddwcpos_configuration = $ddwcpos_configuration;
            $this->transaction_helper    = new DDWCPOS_Transaction_Helper();
            $this->outlet_helper         = new DDWCPOS_Outlet_Helper();

			parent::__construct( [
				'singular' => esc_html__( 'Transaction List', 'ddwc-multipos' ),
				'plural'   => esc_html__( 'Transactions List', 'ddwc-multipos' ),
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

			$per_page     = $this->get_items_per_page( 'transactions_per_page', 20 );
			$current_page = $this->get_pagenum();
			$total_items  = $this->transaction_helper->ddwcpos_get_all_transactions_count( $search );

			$this->set_pagination_args( [
				'total_items' => $total_items,
				'per_page'    => $per_page,
			] );

			$data = $this->ddwcpos_get_data( $per_page, $current_page, $search );

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
		 * Fetch data
		 *
		 * @param int $per_page Per Page.
		 * @param int $current_page Page.
		 * @param string $search Search.
		 * @return array $data
		 */
		public function ddwcpos_get_data( $per_page, $current_page = 1, $search = '' ) {
            $data = [];

            $offset = ( $current_page - 1 ) * $per_page;

            $transactions = $this->transaction_helper->ddwcpos_get_all_transactions( $per_page, $offset, $search );

            if ( ! empty( $transactions ) ) {
				$date_format = get_option( 'date_format' );
				$time_format = get_option( 'time_format' );

                foreach ( $transactions as $transaction ) {
                    $cashier_id     = $transaction[ 'cashier_id' ];
                    $cashier        = get_user_by( 'ID', $cashier_id );
                    $email          = $cashier->user_email . ' (#' . $cashier_id . ')';
                    $outlet_details = $this->outlet_helper->ddwcpos_get_outlet_details_by_id( $transaction[ 'outlet_id' ] );

					if ( 'opencash' === $transaction[ 'method' ] ) {
						$method = esc_html__( 'Open Cash Drawer Amount', 'ddwc-multipos' );
					} elseif ( 'manual' === $transaction[ 'method' ] ) {
						$method = esc_html__( 'Manual', 'ddwc-multipos' );
					} else {
						$method = array_filter( $this->ddwcpos_configuration[ 'payment_method' ], function( $payment_method ) use ( $transaction ) {
							return $payment_method[ 'slug' ] === $transaction[ 'method' ];
						} );

						$method = array_values( $method );

						$method = ! empty( $method ) ? $method[ 0 ][ 'name' ] : $transaction[ 'method' ];
					}

                    $data[] = [
                        'id'        => $transaction[ 'id' ],
                        'cashier'   => '<a href=' . esc_url( admin_url( 'user-edit.php?user_id=' . $cashier_id ) ) . '>' . esc_html( $email ) . '</a>',
                        'outlet'    => $outlet_details[ 'name' ],
                        'order_id'  => ! empty( $transaction[ 'order_id' ] ) ? '<a href="' . esc_url( admin_url( 'post.php?action=edit&post=' . $transaction[ 'order_id' ] ) ) . '">' . esc_html( $transaction[ 'order_id' ] ) . '</a>' : 'N/A',
                        'in'        => wc_price( $transaction[ 'in' ] ),
                        'out'       => wc_price( $transaction[ 'out' ] ),
                        'method'    => $method,
                        'reference' => ! empty( $transaction[ 'reference' ] ) ? $transaction[ 'reference' ] : 'N/A',
                        'date'      => date_i18n( $date_format . ' ' . $time_format, strtotime( $transaction[ 'date' ] ) ),
					];
                }
            }

			return apply_filters( 'ddwcpos_wcfm_transactions_list_data', $data );
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
                                    $response = $this->transaction_helper->ddwcpos_delete_transaction( $id );
									if ( $response ) {
										$success++;
									} else {
										$error++;
									}
								}

								if ( $success ) {
									$message = sprintf( esc_html__( '%d Transaction(s) deleted successfully.', 'ddwc-multipos' ), $success );
									$this->ddwcpos_print_notification( $message );
								}

								if ( $error ) {
									$message = sprintf( esc_html__( '%d Transaction(s) not exits.', 'ddwc-multipos' ), $error );
									$this->ddwcpos_print_notification( $message, 'error' );
								}
							}
						} else {
							$message = esc_html__( 'Select transaction(s) to delete.', 'ddwc-multipos' );
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
							$response = $this->transaction_helper->ddwcpos_delete_transaction( $id );

							if ( $response ) {
								$message = esc_html__( 'Transaction is deleted successfully.', 'ddwc-multipos' );
								$this->ddwcpos_print_notification( $message );
							} else {
								$message = esc_html__( 'Transaction not exists.', 'ddwc-multipos' );
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
			esc_html_e( 'No transactions avaliable.', 'ddwc-multipos' );
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
				'cb'        => '<input type="checkbox" />',
				'id'        => esc_html__( 'ID', 'ddwc-multipos' ),
				'cashier'   => esc_html__( 'Cashier', 'ddwc-multipos' ),
				'outlet'    => esc_html__( 'Outlet', 'ddwc-multipos' ),
				'order_id'  => esc_html__( 'Order', 'ddwc-multipos' ),
				'in'        => esc_html__( 'In', 'ddwc-multipos' ),
				'out'       => esc_html__( 'Out', 'ddwc-multipos' ),
				'method'    => esc_html__( 'Method', 'ddwc-multipos' ),
				'reference' => esc_html__( 'Reference', 'ddwc-multipos' ),
				'date'      => esc_html__( 'Date', 'ddwc-multipos' ),
			];

			return apply_filters( 'ddwcpos_wcfm_transactions_list_columns', $columns );
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
			return apply_filters( 'ddwcpos_wcfm_transactions_list_sortable_columns', [
				'id'        => [ 'id', true ],
				'cashier'   => [ 'cashier', true ],
				'outlet'    => [ 'outlet', true ],
				'order_id'  => [ 'order_id', true ],
				'in'        => [ 'in', true ],
				'out'       => [ 'out', true ],
				'method'    => [ 'method', true ],
				'reference' => [ 'reference', true ],
				'date'      => [ 'date', true ],
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
				'delete' => sprintf( '<a href="%s">%s</a>', wp_nonce_url( 'admin.php?page=' . $_REQUEST[ 'page' ] . "&action=delete&s=$search&paged=$current_page&ddwcpos-id=" . $item[ 'id' ], 'ddwcpos_nonce_action', 'ddwcpos_nonce' ), esc_html__( 'Delete', 'ddwc-multipos' ) ),
			];

			return sprintf( '%1$s %2$s', $item[ 'id' ], $this->row_actions( apply_filters( 'ddwcpos_wcfm_transactions_list_line_actions', $actions ) ) );
		}

		/**
         * Bulk actions on list.
		 * 
		 * @return array
         */
        public function get_bulk_actions() {
            return apply_filters( 'ddwcpos_modify_bulk_actions_in_transactions', [
                'delete'  => esc_html__( 'Delete', 'ddwc-multipos' ),
			] );
		}

        /**
		 * Transactions List Filters
		 *
		 * @param string $which Position of filter.
		 */
		public function extra_tablenav( $which ) {
			if ( 'top' === $which ) {
				$outlets               = $this->outlet_helper->ddwcpos_get_all_outlets( 999999, 0, '' );
				$outlet_id             = ! empty( $_GET[ 'outlet-id' ] ) ? intval( $_GET[ 'outlet-id' ] ) : 0;
				$transaction_from_date = ! empty( $_GET[ 'transaction-from-date' ] ) ? sanitize_text_field( $_GET[ 'transaction-from-date' ] ) : '';
				$transaction_to_date   = ! empty( $_GET[ 'transaction-to-date' ] ) ? sanitize_text_field( $_GET[ 'transaction-to-date' ] ) : '';
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

					<label for="ddwcpos-transaction-from-date"><?php esc_html_e( 'From:', 'ddwc-multipos' ); ?></label>
					<input type="text" value="<?php echo esc_attr( $transaction_from_date ); ?>" name="transaction-from-date" id="ddwcpos-transaction-from-date" class="ddwcpos-datepicker" placeholder="yyyy-mm-dd" autocomplete="off" />

					<label for="ddwcpos-transaction-to-date"><?php esc_html_e( 'To:', 'ddwc-multipos' ); ?></label>
					<input type="text" value="<?php echo esc_attr( $transaction_to_date ); ?>" name="transaction-to-date" id="ddwcpos-transaction-to-date" class="ddwcpos-datepicker" placeholder="yyyy-mm-dd" autocomplete="off" />

					<select name="cashier-id">
                        <option value=""><?php esc_html_e( 'Select Cashier', 'ddwc-multipos' ); ?></option>
						<?php
                        $query = new \WP_User_Query( [
							'role__in'       => apply_filters( 'ddwcpos_allowed_roles_for_pos', [ 'ddwcpos_cashier', 'administrator', 'shop_manager', 'wcfm_vendor' ] ),
                            'order'          => 'DESC',
                            'orderby'        => 'ID',
                            'search_columns' => [ 'user_nicename', 'ID', 'user_login', 'user_email' ],
                            'fields'         => [ 'ID', 'user_login', 'user_email' ],
                        ] );

                        $cashiers = $query->get_results();

                        if ( ! empty( $cashiers ) ) {
                            foreach ( $cashiers as $cashier ) {
                                $cashier_id = $cashier->ID;
                                $cashier_option_value = "(#{$cashier_id}) {$cashier->user_login} <{$cashier->user_email}>";
                                ?>
                                <option value="<?php echo esc_attr( $cashier_id ); ?>" <?php echo esc_attr( ! empty( $_GET[ 'cashier-id' ] ) && $cashier_id == $_GET[ 'cashier-id' ] ? 'selected="selected"' : '' ); ?>><?php echo esc_html( $cashier_option_value ); ?></option>
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
