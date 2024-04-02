<?php
/**
 * Transactions List Template
 *
 * @package MultiPOS - Point of Sale for WCFM Marketplace
 * @version 1.0.0
 */

namespace DDWCMultiPOS\Templates\Front\WCFM\Transaction;

use DDWCMultiPOS\Helper\Outlet\DDWCPOS_Outlet_Helper;
use DDWCMultiPOS\Helper\Transaction\DDWCPOS_Transaction_Helper;

if ( ! class_exists( 'DDWCPOS_Transactions_List_Template' ) ) {
	/**
	 * Transactions List class
	 */
	class DDWCPOS_Transactions_List_Template {
		/**
		 * Class constructor
		 */
		public function __construct( $ddwcpos_configuration ) {
			global $wp;
			$outlet_helper         = new DDWCPOS_Outlet_Helper();
			$transaction_helper    = new DDWCPOS_Transaction_Helper();
			$search                = ! empty( $_GET[ 'search' ] ) ? sanitize_text_field( wp_unslash( $_GET[ 'search' ] ) ) : '';
			$outlet_id             = ! empty( $_GET[ 'outlet-id' ] ) ? sanitize_text_field( wp_unslash( $_GET[ 'outlet-id' ] ) ) : '';
			$transaction_from_date = ! empty( $_GET[ 'transaction-from-date' ] ) ? sanitize_text_field( $_GET[ 'transaction-from-date' ] ) : '';
			$transaction_to_date   = ! empty( $_GET[ 'transaction-to-date' ] ) ? sanitize_text_field( $_GET[ 'transaction-to-date' ] ) : '';

            $per_page     = 20;
            $current_page = ! empty( $wp->query_vars[ 'ddwcpos-transactions' ] ) ? $wp->query_vars[ 'ddwcpos-transactions' ] : 1;
            $user_id      = get_current_user_id();
			$total_items  = $transaction_helper->ddwcpos_get_all_transactions_count_by_vendor_id( $search, $user_id );

            $offset = ( $current_page - 1 ) * $per_page;

            $transactions = $transaction_helper->ddwcpos_get_all_transactions_by_vendor_id( $per_page, $offset, $search, $user_id );

			$outlets = $outlet_helper->ddwcpos_get_all_outlets_by_vendor_id( 999999, 0, '', $user_id );

            ?>
            <div class="collapse wcfm-collapse" id="wcfm_products_listing">
                <div class="wcfm-page-headig">
                    <span class="wcfmfa fa-cubes"></span>
                    <span class="wcfm-page-heading-text"><?php esc_html_e( 'Transactions', 'ddwc-multipos' ); ?></span>
                </div>
                <div class="wcfm-collapse-content">
				<div id="wcfm_page_load"></div>
                    <div class="wcfm-container wcfm-top-element-container">
						<form method="get" class="ddwcpos-transactions-filter-form">
							<div class="ddwcpos-wcfm-right">
								<input type="search" class="wcfm-text" placeholder="<?php esc_attr_e( 'Enter product name...', 'ddwc-multipos' ); ?>" name="search" value="<?php echo esc_attr( $search ); ?>" />
								<input type="submit" name="ddwcpos_filter_submit" class="button" value="<?php esc_attr_e( 'Search', 'ddwc-multipos' ); ?>" />
							</div>
							<div class="ddwcpos-wcfm-left ddwcpos-transactions-filter-container">
								<select name="outlet-id" class="wcfm-select">
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

								<select name="cashier-id" class="wcfm-select">
									<option value=""><?php esc_html_e( 'Select Cashier', 'ddwc-multipos' ); ?></option>
									<?php
									$query = new \WP_User_Query( [
										'role__in'       => apply_filters( 'ddwcpos_allowed_roles_for_pos', [ 'ddwcpos_cashier', 'administrator', 'shop_manager', 'wcfm_vendor' ] ),
										'order'          => 'DESC',
										'orderby'        => 'ID',
										'search_columns' => [ 'user_nicename', 'ID', 'user_login', 'user_email' ],
										'fields'         => [ 'ID', 'user_login', 'user_email' ],
										'meta_query'          => [
											[
												'key'     => '_ddwcpos_vendor_id',
												'compare' => '=',
												'value'   => $user_id
											]
										],
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

								<input type="text" value="<?php echo esc_attr( $transaction_from_date ); ?>" name="transaction-from-date" id="ddwcpos-transaction-from-date" class="ddwcpos-datepicker wcfm-text" placeholder="yyyy-mm-dd" autocomplete="off" placeholder="<?php esc_html_e( 'From Date', 'ddwc-multipos' ); ?>" />

								<input type="text" value="<?php echo esc_attr( $transaction_to_date ); ?>" name="transaction-to-date" id="ddwcpos-transaction-to-date" class="ddwcpos-datepicker wcfm-text" placeholder="yyyy-mm-dd" autocomplete="off" placeholder="<?php esc_html_e( 'To Date', 'ddwc-multipos' ); ?>" />

								<input type="submit" name="ddwcpos_filter_submit" class="button small alt" value="<?php esc_attr_e( 'Filter', 'ddwc-multipos' ); ?>" />
							</div>
							<div class="wcfm-clearfix"></div>
						</form>
                        <div class="wcfm-clearfix"></div>
                    </div>
                    <div class="wcfm-clearfix"></div><br />
                    <div class="wcfm-container">
                        <div id="wcfm_products_listing_expander" class="wcfm-content">
							<form method="post">
								<?php wp_nonce_field( 'ddwcpos_nonce_action', 'ddwcpos_nonce' ); ?>

								<table id="wcfm-products" class="display ddwcpos-wcfm-products-table ddwcpos-wcfm-table" cellspacing="0" width="100%">
									<thead>
										<tr>
											<th><?php esc_html_e( 'ID', 'ddwc-multipos' ); ?></th>
											<th><?php esc_html_e( 'Cashier', 'ddwc-multipos' ); ?></th>
											<th><?php esc_html_e( 'Outlet', 'ddwc-multipos' ); ?></th>
											<th><?php esc_html_e( 'Order', 'ddwc-multipos' ); ?></th>
											<th><?php esc_html_e( 'In', 'ddwc-multipos' ); ?></th>
											<th><?php esc_html_e( 'Out', 'ddwc-multipos' ); ?></th>
											<th><?php esc_html_e( 'Method', 'ddwc-multipos' ); ?></th>
											<th><?php esc_html_e( 'Reference', 'ddwc-multipos' ); ?></th>
											<th><?php esc_html_e( 'Date', 'ddwc-multipos' ); ?></th>
											<th><?php esc_html_e( 'Actions', 'ddwc-multipos' ); ?></th>
										</tr>
									</thead>
									<tbody>
										<?php
										if ( ! empty( $transactions ) ) {
											$date_format = get_option( 'date_format' );
											$time_format = get_option( 'time_format' );

											foreach ( $transactions as $transaction ) {
												$cashier_id     = $transaction[ 'cashier_id' ];
												$cashier        = get_user_by( 'ID', $cashier_id );
												$email          = $cashier->user_email . ' (#' . $cashier_id . ')';
												$outlet_details = $outlet_helper->ddwcpos_get_outlet_details_by_id( $transaction[ 'outlet_id' ] );

												if ( 'opencash' === $transaction[ 'method' ] ) {
													$method = esc_html__( 'Open Cash Drawer Amount', 'ddwc-multipos' );
												} elseif ( 'manual' === $transaction[ 'method' ] ) {
													$method = esc_html__( 'Manual', 'ddwc-multipos' );
												} else {
													$method = array_filter( $ddwcpos_configuration[ 'payment_method' ], function( $payment_method ) use ( $transaction ) {
														return $payment_method[ 'slug' ] === $transaction[ 'method' ];
													} );

													$method = array_values( $method );

													$method = ! empty( $method ) ? $method[ 0 ][ 'name' ] : $transaction[ 'method' ];
												}

												?>
												<tr>
													<td><?php echo esc_html( $transaction[ 'id' ] ); ?></td>
													<td><?php echo wp_kses_post( '<a href=' . esc_url( ddwcpos_get_wfcm_custom_menus_url( 'ddwcpos-manage-cashier', $cashier_id ) ) . '>' . esc_html( $email ) . '</a>' ); ?></td>
													<td><?php echo esc_html( $outlet_details[ 'name' ] ); ?></td>
													<td><?php echo wp_kses_post( ! empty( $transaction[ 'order_id' ] ) ? '<a href="' . esc_url( get_wcfm_view_order_url( $transaction[ 'order_id' ] ) ) . '">' . esc_html( $transaction[ 'order_id' ] ) . '</a>' : 'N/A' ); ?></td>
													<td><?php echo wc_price( $transaction[ 'in' ] ); ?></td>
													<td><?php echo wc_price( $transaction[ 'out' ] ); ?></td>
													<td><?php echo esc_html( $method ); ?></td>
													<td><?php echo esc_html( ! empty( $transaction[ 'reference' ] ) ? $transaction[ 'reference' ] : 'N/A' ); ?></td>
													<td><?php echo esc_html( date_i18n( $date_format . ' ' . $time_format, strtotime( $transaction[ 'date' ] ) ) ); ?></td>
													<td><button type="submit" name="_ddwcpos_delete_transaction" value="<?php echo esc_attr( $transaction[ 'id' ] ); ?>" class="wcfm-action-icon"><span class="wcfmfa fa-trash-alt text_tip" data-tip=<?php esc_attr_e( 'Delete', 'ddwc-multipos' ); ?>></span></button></td>
												</tr>
												<?php
											}
										}
										?>
									</tbody>
									<tfoot>
										<tr>
											<th><?php esc_html_e( 'ID', 'ddwc-multipos' ); ?></th>
											<th><?php esc_html_e( 'Cashier', 'ddwc-multipos' ); ?></th>
											<th><?php esc_html_e( 'Outlet', 'ddwc-multipos' ); ?></th>
											<th><?php esc_html_e( 'Order', 'ddwc-multipos' ); ?></th>
											<th><?php esc_html_e( 'In', 'ddwc-multipos' ); ?></th>
											<th><?php esc_html_e( 'Out', 'ddwc-multipos' ); ?></th>
											<th><?php esc_html_e( 'Method', 'ddwc-multipos' ); ?></th>
											<th><?php esc_html_e( 'Reference', 'ddwc-multipos' ); ?></th>
											<th><?php esc_html_e( 'Date', 'ddwc-multipos' ); ?></th>
											<th><?php esc_html_e( 'Actions', 'ddwc-multipos' ); ?></th>
										</tr>
									</tfoot>
								</table>
							</form>
							<div class="ddwcpos-wcfm-right">
								<?php
								if ( 1 < $total_items ) {
									if ( 1 !== $current_page && $current_page > 1 ) {
										?>
										<a href="<?php echo esc_url( ddwcpos_get_wfcm_custom_menus_url( 'ddwcpos-transactions', --$current_page ) ); ?>"><?php esc_html_e( 'Previous', 'ddwc-multipos' ); ?></a>
										<?php
									}
									if ( ceil( $total_items / $per_page ) > $current_page ) {
										?>
										<a href="<?php echo esc_url( ddwcpos_get_wfcm_custom_menus_url( 'ddwcpos-transactions', ++$current_page ) ); ?>"><?php esc_html_e( 'Next', 'ddwc-multipos' ); ?></a>
										<?php
									}
								}
								?>
							</div>
                            <div class="wcfm-clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
            <?php
		}
    }
}
