<?php
/**
 * Outlets List Template
 *
 * @package MultiPOS - Point of Sale for WCFM Marketplace
 * @version 1.0.0
 */

namespace DDWCMultiPOS\Templates\Front\WCFM\Outlet;

use DDWCMultiPOS\Helper\Outlet\DDWCPOS_Outlet_Helper;

if ( ! class_exists( 'DDWCPOS_Outlets_List_Template' ) ) {
	/**
	 * Outlets list class
	 */
	class DDWCPOS_Outlets_List_Template {
		/**
		 * Class constructor
		 */
		public function __construct( $ddwcpos_configuration ) {
            $outlet_helper = new DDWCPOS_Outlet_Helper();

			if ( ! empty( $_POST[ '_ddwcpos_delete_outlet' ] ) && ! empty( $_POST[ 'ddwcpos_nonce' ] ) && wp_verify_nonce( $_POST[ 'ddwcpos_nonce' ], 'ddwcpos_nonce_action' ) ) {
				$outlet_helper->ddwcpos_delete_outlet( $_POST[ '_ddwcpos_delete_outlet' ] );
			}

            $search       = ! empty( $_GET[ 's' ] ) ? sanitize_text_field( wp_unslash( $_GET[ 's' ] ) ) : '';
            $per_page     = 50;
            $current_page = 1;
            $user_id      = get_current_user_id();
            $total_items  = $outlet_helper->ddwcpos_get_all_outlets_count_by_vendor_id( $search, $user_id );

            $offset = ( $current_page - 1 ) * $per_page;

            $outlets = $outlet_helper->ddwcpos_get_all_outlets_by_vendor_id( $per_page, $offset, $search, $user_id );
            ?>
            <div class="collapse wcfm-collapse" id="wcfm_products_listing">
                <div class="wcfm-page-headig">
                    <span class="wcfmfa fa-cubes"></span>
                    <span class="wcfm-page-heading-text"><?php esc_html_e( 'Outlets', 'ddwc-multipos' ); ?></span>
                </div>
                <div class="wcfm-collapse-content">
                    <div id="wcfm_page_load"></div>
                    <div class="wcfm-container wcfm-top-element-container">
						<a class="add_new_wcfm_ele_dashboard text_tip" href="<?php echo esc_url( site_url( $ddwcpos_configuration[ 'endpoint' ] ) ); ?>" target="_blank" data-tip="<?php esc_attr_e( 'Visit POS', 'ddwc-multipos' ); ?>"><span class="wcfmfa fa-store"></span><span class="text"><?php esc_html_e( 'Visit POS', 'ddwc-multipos' ); ?></span></a>
                        <a class="add_new_wcfm_ele_dashboard text_tip" href="<?php echo esc_url( ddwcpos_get_wfcm_custom_menus_url( 'ddwcpos-manage-outlet' ) ); ?>" data-tip="<?php esc_attr_e( 'Add New Outlet', 'ddwc-multipos' ); ?>"><span class="wcfmfa fa-cube"></span><span class="text"><?php esc_html_e( 'Add New', 'ddwc-multipos' ); ?></span></a>
                        <div class="wcfm-clearfix"></div>
                    </div>
                    <div class="wcfm-clearfix"></div><br />

                    <div class="wcfm-container">
                        <div id="wcfm_products_listing_expander" class="wcfm-content">
							<form method="post">
								<?php wp_nonce_field( 'ddwcpos_nonce_action', 'ddwcpos_nonce' ); ?>

								<table id="wcfm-products" class="display ddwcpos-wcfm-table" cellspacing="0" width="100%">
									<thead>
										<tr>
											<th><?php esc_html_e( 'ID', 'ddwc-multipos' ); ?></th>
											<th><?php esc_html_e( 'Name', 'ddwc-multipos' ); ?></th>
											<th><?php esc_html_e( 'Mode', 'ddwc-multipos' ); ?></th>
											<th><?php esc_html_e( 'Address', 'ddwc-multipos' ); ?></th>
											<th><?php esc_html_e( 'Email', 'ddwc-multipos' ); ?></th>
											<th><?php esc_html_e( 'Phone', 'ddwc-multipos' ); ?></th>
											<th><?php esc_html_e( 'Status', 'ddwc-multipos' ); ?></th>
											<th><?php esc_html_e( 'Created At', 'ddwc-multipos' ); ?></th>
											<th><?php esc_html_e( 'Modified At', 'ddwc-multipos' ); ?></th>
											<th><?php esc_html_e( 'Actions', 'ddwc-multipos' ); ?></th>
										</tr>
									</thead>
									<tbody>
										<?php
										if ( ! empty( $outlets ) ) {
											$date_format  = get_option( 'date_format' );
											$time_format  = get_option( 'time_format' );
											$outlet_modes = $outlet_helper->ddwcpos_get_outlet_modes();
											foreach ( $outlets as $key => $outlet ) {
												$address = sprintf( esc_html__( "Address 1: %s Address 2: %s City: %s State: %s Country: %s Postcode: %s", 'ddwc-multipos' ), $outlet[ 'address1' ]  . '<br />', $outlet[ 'address2' ]  . '<br />', $outlet[ 'city' ]  . '<br />', $outlet[ 'state' ]  . '<br />', $outlet[ 'country' ]  . '<br />', $outlet[ 'postcode' ]  . '<br />' );

												if ( 'enabled' === $outlet[ 'status' ] ) {
													$status = esc_html__( 'Enabled', 'ddwc-multipos' );
												} else if ( 'disabled' === $outlet[ 'status' ] ) {
													$status = esc_html__( 'Disabled', 'ddwc-multipos' );
												}

												ob_start();
												?>
												<a class="wcfm-action-icon" href=<?php echo esc_url( ddwcpos_get_wfcm_custom_menus_url( 'ddwcpos-manage-outlet', $outlet[ 'id' ] ) ); ?>><span class="wcfmfa fa-edit text_tip" data-tip=<?php esc_attr_e( 'Edit', 'ddwc-multipos' ); ?>></span></a>

												<button type="submit" name="_ddwcpos_delete_outlet" value="<?php echo esc_attr( $outlet[ 'id' ] ); ?>" class="wcfm-action-icon"><span class="wcfmfa fa-trash-alt text_tip" data-tip=<?php esc_attr_e( 'Delete', 'ddwc-multipos' ); ?>></span></button>

												<?php
												if ( 'restaurant' === $outlet[ 'mode' ] ) {
													?>
													<a class="button small alt" href="<?php echo esc_url( site_url( $ddwcpos_configuration[ 'kitchen_endpoint' ] . '?outlet_id=' . $outlet[ 'id' ] ) ); ?>" target="_blank"><?php esc_html_e( 'Kitchen View', 'ddwc-multipos' ); ?></a>
													<?php
												}
												?>
												<?php
												$action = ob_get_clean();
												?>

												<tr>
													<td><?php echo esc_html( $outlet[ 'id' ] ); ?></td>
													<td><?php echo esc_html( $outlet[ 'name' ] ); ?></td>
													<td><?php echo esc_html( $outlet_modes[ $outlet[ 'mode' ] ] ); ?></td>
													<td><?php echo wp_kses_post( $address ); ?></td>
													<td><?php echo esc_html( $outlet[ 'email' ] ); ?></td>
													<td><?php echo esc_html( $outlet[ 'phone' ] ); ?></td>
													<td><?php echo esc_html( $status ); ?></td>
													<td><?php echo esc_html( date_i18n( $date_format . ' ' . $time_format, strtotime( $outlet[ 'created' ] ) ) ); ?></td>
													<td><?php echo esc_html( date_i18n( $date_format . ' ' . $time_format, strtotime( $outlet[ 'updated' ] ) ) ); ?></td>
													<td><?php echo wp_kses_post( $action ); ?></td>
												</tr>
												<?php
											}
										}
										?>
									</tbody>
									<tfoot>
										<tr>
											<th><?php esc_html_e( 'ID', 'ddwc-multipos' ); ?></th>
											<th><?php esc_html_e( 'Name', 'ddwc-multipos' ); ?></th>
											<th><?php esc_html_e( 'Mode', 'ddwc-multipos' ); ?></th>
											<th><?php esc_html_e( 'Address', 'ddwc-multipos' ); ?></th>
											<th><?php esc_html_e( 'Email', 'ddwc-multipos' ); ?></th>
											<th><?php esc_html_e( 'Phone', 'ddwc-multipos' ); ?></th>
											<th><?php esc_html_e( 'Status', 'ddwc-multipos' ); ?></th>
											<th><?php esc_html_e( 'Created At', 'ddwc-multipos' ); ?></th>
											<th><?php esc_html_e( 'Modified At', 'ddwc-multipos' ); ?></th>
											<th><?php esc_html_e( 'Actions', 'ddwc-multipos' ); ?></th>
										</tr>
									</tfoot>
								</table>
							</form>
                            <div class="wcfm-clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
            <?php
		}
    }
}
