<?php
/**
 * Cashiers List Template
 *
 * @package MultiPOS - Point of Sale for WCFM Marketplace
 * @version 1.0.0
 */

namespace DDWCMultiPOS\Templates\Front\WCFM\Cashier;

use DDWCMultiPOS\Helper\Outlet\DDWCPOS_Outlet_Helper;

if ( ! class_exists( 'DDWCPOS_Cashiers_List_Template' ) ) {
	/**
	 * Cashiers list class
	 */
	class DDWCPOS_Cashiers_List_Template {
		/**
		 * Class constructor
		 */
		public function __construct( $ddwcpos_configuration ) {
            $outlet_helper = new DDWCPOS_Outlet_Helper();

			if ( ! empty( $_POST[ '_ddwcpos_delete_cashier' ] ) ) {
				require_once( ABSPATH . 'wp-admin/includes/user.php' );
				wp_delete_user( $_POST[ '_ddwcpos_delete_cashier' ] );
			}

            $search       = ! empty( $_GET[ 's' ] ) ? sanitize_text_field( wp_unslash( $_GET[ 's' ] ) ) : '';
            $per_page     = 50;
            $current_page = 1;
            $user_id      = get_current_user_id();

			$user_query = new \WP_User_Query( [
                'role__in'       => [ 'ddwcpos_cashier', 'wcfm_vendor' ],
                'search'         => '*' . esc_attr( $search ) . '*',
                'search_columns' => [ 'user_nicename', 'ID', 'user_login', 'user_email' ],
				'meta_query'          => [
					[
						'key'     => '_ddwcpos_vendor_id',
						'compare' => '=',
						'value'   => $user_id
					]
				],
			] );

			wp_reset_postdata();

            $total_items = $user_query->get_total();

			$off = ( $current_page - 1 ) * $per_page;

			$query = new \WP_User_Query( [
                'role__in'       => [ 'ddwcpos_cashier', 'wcfm_vendor' ],
                'number'         => $per_page,
                'offset'         => $off,
                'order'          => 'DESC',
                'orderby'        => 'ID',
                'search'         => '*' . esc_attr( $search ) . '*',
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

			wp_reset_postdata();

            $cashiers = $query->get_results();
            ?>
            <div class="collapse wcfm-collapse" id="wcfm_products_listing">
                <div class="wcfm-page-headig">
                    <span class="wcfmfa fa-cubes"></span>
                    <span class="wcfm-page-heading-text"><?php esc_html_e( 'Cashiers', 'ddwc-multipos' ); ?></span>
                </div>
                <div class="wcfm-collapse-content">
                    <div id="wcfm_page_load"></div>
                    <div class="wcfm-container wcfm-top-element-container">
                        <a class="add_new_wcfm_ele_dashboard text_tip" href="<?php echo esc_url( ddwcpos_get_wfcm_custom_menus_url( 'ddwcpos-manage-cashier' ) ); ?>" data-tip="<?php esc_attr_e( 'Add New Cashier', 'ddwc-multipos' ); ?>"><span class="wcfmfa fa-cube"></span><span class="text"><?php esc_html_e( 'Add New', 'ddwc-multipos' ); ?></span></a>
                        <div class="wcfm-clearfix"></div>
                    </div>
                    <div class="wcfm-clearfix"></div><br />

                    <div class="wcfm-container">
                        <div id="wcfm_products_listing_expander" class="wcfm-content">
							<form method="post">
								<table id="wcfm-products" class="display ddwcpos-wcfm-table" cellspacing="0" width="100%">
									<thead>
										<tr>
											<th><?php esc_html_e( 'ID', 'ddwc-multipos' ); ?></th>
											<th><?php esc_html_e( 'Username', 'ddwc-multipos' ); ?></th>
											<th><?php esc_html_e( 'Email', 'ddwc-multipos' ); ?></th>
											<th><?php esc_html_e( 'Assigned Outlets', 'ddwc-multipos' ); ?></th>
											<th><?php esc_html_e( 'Actions', 'ddwc-multipos' ); ?></th>
										</tr>
									</thead>
									<tbody>
										<?php
										if ( ! empty( $cashiers ) ) {
											foreach ( $cashiers as $key => $cashier ) {
												$cashier_id       = $cashier->ID;
												$assigned_outlets = get_user_meta( $cashier_id, '_ddwcpos_assigned_outlets', true );
												$user_data        = get_userdata( $cashier_id );

												if ( ! empty( $assigned_outlets ) ) {
													$assigned_outlets = array_map( function( $assigned_outlet ) use ( $outlet_helper ) {
														$outlet_details = $outlet_helper->ddwcpos_get_outlet_details_by_id( $assigned_outlet );
														ob_start();
														?>
														<a href="<?php echo esc_url( admin_url( 'admin.php?page=ddwcpos-product-stocks&outlet-id=' . $assigned_outlet ) ) ?>" class="button small alt" target="_blank"><?php echo esc_html( $outlet_details[ 'name' ] ); ?></a>
														<?php
														return ob_get_clean();
													}, $assigned_outlets );

													$assigned_outlets = implode( '', $assigned_outlets );
												} else {
													if ( in_array( 'wcfm_vendor', $user_data->roles, true ) ) {
														$assigned_outlets = esc_html__( 'All Outlets', 'ddwc-multipos' );
													} else {
														$assigned_outlets = 'N/A';
													}
												}

												ob_start();
												?>
												<a class="wcfm-action-icon" href=<?php echo esc_url( ddwcpos_get_wfcm_custom_menus_url( 'ddwcpos-manage-cashier', $cashier_id ) ); ?>><span class="wcfmfa fa-edit text_tip" data-tip=<?php esc_attr_e( 'Edit', 'ddwc-multipos' ); ?>></span></a>

												<button type="submit" name="_ddwcpos_delete_cashier" value="<?php echo esc_attr( $cashier_id ); ?>" class="wcfm-action-icon"><span class="wcfmfa fa-trash-alt text_tip" data-tip=<?php esc_attr_e( 'Delete', 'ddwc-multipos' ); ?>></span></button>
												<?php
												$action = ob_get_clean();
												?>

												<tr>
													<td><?php echo esc_html( $cashier_id ); ?></td>
													<td><?php echo esc_html( $cashier->user_login ); ?></td>
													<td><?php echo esc_html( $cashier->user_email ); ?></td>
													<td><?php echo wp_kses_post( $assigned_outlets ); ?></td>
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
											<th><?php esc_html_e( 'Username', 'ddwc-multipos' ); ?></th>
											<th><?php esc_html_e( 'Email', 'ddwc-multipos' ); ?></th>
											<th><?php esc_html_e( 'Assigned Outlets', 'ddwc-multipos' ); ?></th>
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
