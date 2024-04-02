<?php
/**
 * Manage Cashier Template
 *
 * @package MultiPOS - Point of Sale for WCFM Marketplace
 * @version 1.0.0
 */

namespace DDWCMultiPOS\Templates\Front\WCFM\Cashier;

use DDWCMultiPOS\Helper\Outlet\DDWCPOS_Outlet_Helper;

if ( ! class_exists( 'DDWCPOS_Manage_Cashier_Template' ) ) {
	/**
	 * Manage Cashier class
	 */
	class DDWCPOS_Manage_Cashier_Template {
		/**
		 * Class constructor
		 */
		public function __construct( $ddwcpos_configuration ) {
            global $wp;
            $outlet_helper = new DDWCPOS_Outlet_Helper();
            $user_id       = get_current_user_id();

            $cashier_data = [
                'id'               => '',
                'username'         => '',
                'firstname'        => '',
                'lastname'         => '',
                'email'            => '',
                'assigned_outlets' => [],
			];

            if ( ! empty( $wp->query_vars[ 'ddwcpos-manage-cashier' ] ) ) {
                $userdata         = get_userdata( intval( $wp->query_vars[ 'ddwcpos-manage-cashier' ] ) );
                $assigned_outlets = get_user_meta( $userdata->ID, '_ddwcpos_assigned_outlets', true );

                $cashier_data = [
                    'id'               => $userdata->ID,
                    'username'         => $userdata->user_login,
                    'firstname'        => $userdata->first_name,
                    'lastname'         => $userdata->last_name,
                    'email'            => $userdata->user_email,
                    'assigned_outlets' => ! empty( $assigned_outlets ) ? $assigned_outlets : [],
                ];
            }

            $outlets = $outlet_helper->ddwcpos_get_all_outlets_by_vendor_id( 999999, 0, '', $user_id );

            extract( $cashier_data );
            ?>
            <div class="collapse wcfm-collapse" id="wcfm_products_listing">
                <div class="wcfm-page-headig">
                    <span class="wcfmfa fa-cubes"></span>
                    <span class="wcfm-page-heading-text"><?php esc_html_e( 'Cashiers', 'ddwc-multipos' ); ?></span>
                </div>
                <div class="wcfm-collapse-content">
                    <div id="wcfm_page_load"></div>
                    <div class="wcfm-container wcfm-top-element-container">
                        <a class="add_new_wcfm_ele_dashboard text_tip" href="<?php echo esc_url( ddwcpos_get_wfcm_custom_menus_url( 'ddwcpos-cashiers' ) ); ?>" data-tip="<?php esc_attr_e( 'Back to Cashiers', 'ddwc-multipos' ); ?>"><span class="wcfmfa fa-cube"></span><span class="text"><?php esc_html_e( 'Back', 'ddwc-multipos' ); ?></span></a>
                        <?php
                        if ( ! empty( $error ) ) {
                            ?>
                            <p class="ddwcpos-red"><?php echo wp_kses_post( $error ); ?></p>
                            <?php
                        }
                        ?>
                        <div class="wcfm-clearfix"></div>
                    </div>
                    <div class="wcfm-clearfix"></div><br />

                    <div class="wcfm-container">
                        <div class="wrap">
                            <?php
                            if ( ! empty( $wp->query_vars[ 'ddwcpos-manage-cashier' ] ) ) {
                                ?>
                                <h2><?php esc_html_e( 'Edit Cashier', 'ddwc-multipos' ); ?></h2>
                                <?php
                            } else {
                                ?>
                                <h2><?php esc_html_e( 'Add Cashier', 'ddwc-multipos' ); ?></h2>
                                <?php
                            }
                            ?>
                            <form method="post">
                                <table class="form-table">
                                    <tbody>
                                        <tr valign="middle">
                                            <th scope="row" class="titledesc">
                                                <label for="ddwcpos-cashier-username"><?php esc_html_e( 'Username', 'ddwc-multipos' ); ?> <abbr class="required" title="<?php esc_attr_e( 'Required', 'ddwc-multipos' ); ?>">*</abbr></label>
                                            </th>
                                            <td class="forminp forminp-text">
                                                <?php echo wc_help_tip( esc_html__( 'Enter the username for the cashier.', 'ddwc-multipos' ), true ); ?>
                                                <input type="hidden" name="ddwcpos_cashier_id" class="wcfm-text" id="ddwcpos-cashier-id" value="<?php echo esc_attr( $id ); ?>" />
                                                <input type="text" name="ddwcpos_cashier_username" class="wcfm-text" id="ddwcpos-cashier-username" value="<?php echo esc_attr( $username ); ?>" required />
                                            </td>
                                        </tr>
                                        <tr valign="middle">
                                            <th scope="row" class="titledesc">
                                                <label for="ddwcpos-cashier-firstname"><?php esc_html_e( 'First Name', 'ddwc-multipos' ); ?></label>
                                            </th>
                                            <td class="forminp forminp-text">
                                                <?php echo wc_help_tip( esc_html__( 'Enter the first name for the cashier.', 'ddwc-multipos' ), true ); ?>
                                                <input type="text" name="ddwcpos_cashier_firstname" class="wcfm-text" id="ddwcpos-cashier-firstname" value="<?php echo esc_attr( $firstname ); ?>" />
                                            </td>
                                        </tr>
                                        <tr valign="middle">
                                            <th scope="row" class="titledesc">
                                                <label for="ddwcpos-cashier-lastname"><?php esc_html_e( 'Last Name', 'ddwc-multipos' ); ?></label>
                                            </th>
                                            <td class="forminp forminp-text">
                                                <?php echo wc_help_tip( esc_html__( 'Enter the last name for the cashier.', 'ddwc-multipos' ), true ); ?>
                                                <input type="text" name="ddwcpos_cashier_lastname" class="wcfm-text" id="ddwcpos-cashier-lastname" value="<?php echo esc_attr( $lastname ); ?>" />
                                            </td>
                                        </tr>
                                        <tr valign="middle">
                                            <th scope="row" class="titledesc">
                                                <label for="ddwcpos-cashier-email"><?php esc_html_e( 'Email', 'ddwc-multipos' ); ?> <abbr class="required" title="<?php esc_attr_e( 'Required', 'ddwc-multipos' ); ?>">*</abbr></label>
                                            </th>
                                            <td class="forminp forminp-text">
                                                <?php echo wc_help_tip( esc_html__( 'Enter the email for the cashier.', 'ddwc-multipos' ), true ); ?>
                                                <input type="text" name="ddwcpos_cashier_email" class="wcfm-text" id="ddwcpos-cashier-email" value="<?php echo esc_attr( $email ); ?>" required />
                                            </td>
                                        </tr>
                                        <tr valign="middle">
                                            <th scope="row" class="titledesc">
                                                <label for="ddwcpos-cashier-assigned-outlets"><?php esc_html_e( 'Assigned Outlets', 'ddwc-multipos' ); ?></label>
                                            </th>
                                            <td class="forminp forminp-text">
                                                <?php echo wc_help_tip( esc_html__( 'Select the assigned outlets to be enabled for the cashier.', 'ddwc-multipos' ), true ); ?>
                                                <select name="ddwcpos_cashier_assigned_outlets[]" class="wcfm-select" id="ddwcpos-cashier-assigned-outlets" multiple>
                                                    <?php
                                                    foreach ( $outlets as $key => $outlet ) {
                                                        ?>
                                                        <option value="<?php echo esc_attr( $outlet[ 'id' ] ); ?>" <?php echo esc_attr( in_array( $outlet[ 'id' ], $assigned_outlets, true ) ? 'selected="selected"' : '' ); ?>><?php echo esc_html( $outlet[ 'name' ] ); ?></option>
                                                        <?php
                                                    }
                                                    ?>
                                                </select>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <p class="submit">
                                    <?php wp_nonce_field( 'ddwcpos_nonce_action', 'ddwcpos_nonce' ); ?>
                                    <input name="ddwcpos_save_cashier_submit" class="wcfm_submit_button" type="submit" value="<?php esc_attr_e( 'Save', 'ddwc-multipos' ); ?>">
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <?php
		}
    }
}
