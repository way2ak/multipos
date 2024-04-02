<?php
/**
 * General Configuration template class
 *
 * @package MultiPOS - Point of Sale for WCFM Marketplace
 * @version 1.0.0
 */

namespace DDWCMultiPOS\Templates\Front\WCFM\Configuration;

use DDWCMultiPOS\Helper\File\DDWCPOS_File_Create_Helper;

defined( 'ABSPATH' ) || exit();

if ( ! class_exists( 'DDWCPOS_General_Configuration_Template' ) ) {
	/**
	 * General Configuration template class
	 */
	class DDWCPOS_General_Configuration_Template {
		/**
		 * Construct
		 */
		public function __construct( $ddwcpos_configuration ) {
            $user_id = get_current_user_id();

            $license_activated = get_user_meta( $user_id, '_ddwcpos_license_activated', true );
            $purchase_code     = $ddwcpos_configuration[ 'purchase_code' ];
            $purchase_email    = $ddwcpos_configuration[ 'purchase_email' ];

            if ( ! empty( $license_activated ) ) {
                $args = [
					'purchase_code' => $purchase_code,
					'user_agent'    => site_url(),
				];

				$response = wp_remote_post( 'https://devdiggers.com/wp-json/ddelv/v1/check-license', [
					'body' => json_encode( $args )
				] );

                $response = ['status'=>"activate", 'success'=>true];

                $response = json_decode( wp_remote_retrieve_body( $response ) );

                if ( ! empty( $response ) && $response->success && ( 'deactivated' === $response->status || 'deleted' === $response->status ) ) {
                    delete_user_meta( $user_id, '_ddwcpos_license_activated' );
                    $license_activated = '';
                }
            }

            ?>
            <form method="POST" class="ddwcpos-configuration-form">
                <table class="form-table">
                    <tbody>
                        <tr valign='top'>
                            <th scope='row' class='titledesc'>
                                <label for='ddwcpos-purchase-code'><?php esc_html_e( 'Activate License', 'ddwc-multipos' ); ?></label>
                            </th>
                            <td class='forminp forminp-text'>
                                <?php echo wc_help_tip( esc_html__( 'Enter your purchase code to activate your purchased license. You\'ll not able to use the plugin until you activate the license.', 'ddwc-multipos' ), true ); ?>

                                <input type="text" name="_ddwcpos_purchase_code" class="wcfm-text <?php echo esc_attr( ! empty( $license_activated ) ? 'ddwcpos-hide' : '' ); ?>" id="ddwcpos-purchase-code" value="<?php echo esc_attr( $purchase_code ); ?>" placeholder="<?php esc_attr_e( 'Enter Purchase Code', 'ddwc-multipos' ); ?>" />

                                <input type="text" name="_ddwcpos_purchase_email" class="wcfm-text <?php echo esc_attr( ! empty( $license_activated ) ? 'ddwcpos-hide' : '' ); ?>" id="ddwcpos-purchase-email" value="<?php echo esc_attr( $purchase_email ); ?>" placeholder="<?php esc_attr_e( 'Enter Purchase email', 'ddwc-multipos' ); ?>" />

                                <button class="button small alt ddwcpos-verify-license <?php echo esc_attr( ! empty( $license_activated ) ? 'ddwcpos-hide' : '' ); ?>" data-action="activate" data-fetching="<?php esc_attr_e( 'Activating...', 'ddwc-multipos' ); ?>"><?php esc_html_e( 'Activate', 'ddwc-multipos' ); ?></button>

                                <button class="button small alt ddwcpos-verify-license <?php echo esc_attr( empty( $license_activated ) ? 'ddwcpos-hide' : '' ); ?>" data-action="deactivate" data-fetching="<?php esc_attr_e( 'Deactivating...', 'ddwc-multipos' ); ?>"><?php esc_html_e( 'Deactivate', 'ddwc-multipos' ); ?></button>

                                <div class="notice ddwcpos-hide">
                                    <p class="ddwcpos-license-status"></p>
                                </div>
                            </td>
                        </tr>
                        <tr valign='top'>
                            <th scope='row' class='titledesc'>
                                <label for='ddwcpos-inventory-type'><?php esc_html_e( 'Inventory Type', 'ddwc-multipos' ); ?></label>
                            </th>
                            <td class='forminp forminp-text'>
                                <?php echo wc_help_tip( esc_html__( 'Select the inventory type for the POS. In centralized stock, WooCommerce stock will be synced at POS end and in custom/manual stock, any stock can be given to all the products that does not affect the WooCommerce stock which will be used at POS end.', 'ddwc-multipos' ), true ); ?>
                                <select id="ddwcpos-inventory-type" name="_ddwcpos_inventory_type" class="wcfm-select">
                                    <option value="centralized" <?php echo esc_attr( 'centralized'=== $ddwcpos_configuration[ 'inventory_type' ] ? 'selected="selected"' : ''); ?>><?php esc_html_e( 'Centralized/WooCommerce Stock', 'ddwc-multipos' ); ?></option>
                                    <option value="custom" <?php echo esc_attr( 'custom'=== $ddwcpos_configuration[ 'inventory_type' ] ? 'selected="selected"' : ''); ?>><?php esc_html_e( 'Custom/Manual Stock', 'ddwc-multipos' ); ?></option>
                                </select>
                            </td>
                        </tr>
                        <tr valign='top'>
                            <th scope='row' class='titledesc'>
                                <label for='ddwcpos-order-status'><?php esc_html_e( 'Order Status', 'ddwc-multipos' ); ?></label>
                            </th>
                            <td class='forminp forminp-text'>
                                <?php echo wc_help_tip( esc_html__( 'This order status is used for the orders generated at POS end.', 'ddwc-multipos' ), true ); ?>
                                <select id="ddwcpos-order-status" name="_ddwcpos_order_status" class="wcfm-select">
                                    <?php
                                    $order_status = wc_get_order_statuses();
                                    if ( ! empty( $order_status ) ) {
                                        foreach( $order_status as $key => $value ) {
                                            if ( $key === $ddwcpos_configuration[ 'order_status' ] ) {
                                                ?>
                                                <option value="<?php echo esc_attr( $key ); ?>" selected="selected"><?php echo esc_html( $value ); ?></option>
                                                <?php
                                            } else {
                                                ?>
                                                <option value="<?php echo esc_attr( $key ); ?>"><?php echo esc_html( $value ); ?></option>
                                                <?php
                                            }
                                            ?>
                                            <?php
                                        }
                                    }
                                    ?>
                                </select>
                            </td>
                        </tr>
                        <tr valign='top'>
                            <th scope='row' class='titledesc'>
                                <label for='ddwcpos-default-barcode'><?php esc_html_e( 'Default Product Barcode', 'ddwc-multipos' ); ?></label>
                            </th>
                            <td class='forminp forminp-text'>
                                <?php echo wc_help_tip( esc_html__( 'Select the default barcode by which barcodes get generated automatically for the products and can be scanned at the POS end.', 'ddwc-multipos' ), true ); ?>
                                <select id="ddwcpos-default-barcode" name="_ddwcpos_default_barcode" class="wcfm-select">
                                    <option value="id" <?php echo esc_attr( 'id'=== $ddwcpos_configuration[ 'default_barcode' ] ? 'selected="selected"' : ''); ?>><?php esc_html_e( 'Product ID', 'ddwc-multipos' ); ?></option>
                                    <option value="sku" <?php echo esc_attr( 'sku'=== $ddwcpos_configuration[ 'default_barcode' ] ? 'selected="selected"' : ''); ?>><?php esc_html_e( 'Product SKU', 'ddwc-multipos' ); ?></option>
                                </select>
                            </td>
                        </tr>
                        <tr valign='top'>
                            <th scope='row' class='titledesc'>
                                <label for='ddwcpos-order-mails-enabled'><?php esc_html_e( 'Enable/Disable', 'ddwc-multipos' ); ?></label>
                            </th>
                            <td class='forminp forminp-text'>
                                <?php echo wc_help_tip( esc_html__( 'Enable/Disable order mails at POS end, both admin & customer mails can be enabled/disabled from here.', 'ddwc-multipos' ), true ); ?>
                                <input type="checkbox" value="yes" id="ddwcpos-order-mails-enabled" name="_ddwcpos_order_mails_enabled" <?php checked( $ddwcpos_configuration[ 'order_mails_enabled' ], 'yes' ); ?> />
                                <label for='ddwcpos-order-mails-enabled'><?php esc_html_e( 'Enable Order Mails', 'ddwc-multipos' ); ?></label>
                            </td>
                        </tr>
                        <tr valign='top'>
                            <th scope='row' class='titledesc'>
                                <label for='ddwcpos-multiple-payments-enabled'><?php esc_html_e( 'Enable/Disable', 'ddwc-multipos' ); ?></label>
                            </th>
                            <td class='forminp forminp-text'>
                                <?php echo wc_help_tip( esc_html__( 'Enable/Disable split/multiple payment methods for paying at POS end.', 'ddwc-multipos' ), true ); ?>
                                <input type="checkbox" value="yes" id="ddwcpos-multiple-payments-enabled" name="_ddwcpos_multiple_payments_enabled" <?php checked( $ddwcpos_configuration[ 'multiple_payments_enabled' ], 'yes' ); ?> />
                                <label for='ddwcpos-multiple-payments-enabled'><?php esc_html_e( 'Enable Split/Multiple Payment Methods', 'ddwc-multipos' ); ?></label>
                            </td>
                        </tr>
                        <tr valign='top'>
                            <th scope='row' class='titledesc'>
                                <label for='ddwcpos-order-note-enabled'><?php esc_html_e( 'Enable/Disable', 'ddwc-multipos' ); ?></label>
                            </th>
                            <td class='forminp forminp-text'>
                                <?php echo wc_help_tip( esc_html__( 'Enable/Disable to enter order note at POS end.', 'ddwc-multipos' ), true ); ?>
                                <input type="checkbox" value="yes" id="ddwcpos-order-note-enabled" name="_ddwcpos_order_note_enabled" <?php checked( $ddwcpos_configuration[ 'order_note_enabled' ], 'yes' ); ?> />
                                <label for='ddwcpos-order-note-enabled'><?php esc_html_e( 'Enable Order Note', 'ddwc-multipos' ); ?></label>
                            </td>
                        </tr>
                        <tr valign='top'>
                            <th scope='row' class='titledesc'>
                                <label for='ddwcpos-offline-orders-enabled'><?php esc_html_e( 'Enable/Disable', 'ddwc-multipos' ); ?></label>
                            </th>
                            <td class='forminp forminp-text'>
                                <?php echo wc_help_tip( esc_html__( 'Enable/Disable offline orders for online mode then automatic sync to speed up the order process at POS end.', 'ddwc-multipos' ), true ); ?>
                                <input type="checkbox" value="yes" id="ddwcpos-offline-orders-enabled" name="_ddwcpos_offline_orders_enabled" <?php checked( $ddwcpos_configuration[ 'offline_orders_enabled' ], 'yes' ); ?> />
                                <label for='ddwcpos-offline-orders-enabled'><?php esc_html_e( 'Enable Offline Orders for Online Mode (Fast Orders)', 'ddwc-multipos' ); ?></label>
                            </td>
                        </tr>
                        <tr valign='top'>
                            <th scope='row' class='titledesc'>
                                <label for='ddwcpos-custom-product-enabled'><?php esc_html_e( 'Enable/Disable', 'ddwc-multipos' ); ?></label>
                            </th>
                            <td class='forminp forminp-text'>
                                <?php echo wc_help_tip( esc_html__( 'Enable/Disable adding custom product at POS end.', 'ddwc-multipos' ), true ); ?>
                                <input type="checkbox" value="yes" id="ddwcpos-custom-product-enabled" name="_ddwcpos_custom_product_enabled" <?php checked( $ddwcpos_configuration[ 'custom_product_enabled' ], 'yes' ); ?> />
                                <label for='ddwcpos-custom-product-enabled'><?php esc_html_e( 'Enable Adding Custom Product', 'ddwc-multipos' ); ?></label>
                            </td>
                        </tr>
                        <tr valign='top'>
                            <th scope='row' class='titledesc'>
                                <label for='ddwcpos-opencash-drawer-enabled'><?php esc_html_e( 'Enable/Disable', 'ddwc-multipos' ); ?></label>
                            </th>
                            <td class='forminp forminp-text'>
                                <?php echo wc_help_tip( esc_html__( 'Enable/Disable the open cash drawer popup at POS end.', 'ddwc-multipos' ), true ); ?>
                                <input type="checkbox" value="yes" id="ddwcpos-opencash-drawer-enabled" name="_ddwcpos_opencash_drawer_enabled" <?php checked( $ddwcpos_configuration[ 'opencash_drawer_enabled' ], 'yes' ); ?> />
                                <label for='ddwcpos-opencash-drawer-enabled'><?php esc_html_e( 'Enable Open Cash Drawer Popup', 'ddwc-multipos' ); ?></label>
                            </td>
                        </tr>
                        <tr valign='top'>
                            <th scope='row' class='titledesc'>
                                <label for='ddwcpos-variation-product-enabled'><?php esc_html_e( 'Enable/Disable', 'ddwc-multipos' ); ?></label>
                            </th>
                            <td class='forminp forminp-text'>
                                <?php echo wc_help_tip( esc_html__( 'Enable/Disable show variations as different products. If disabled, then a popup will appear to select variations in variable product.', 'ddwc-multipos' ), true ); ?>
                                <input type="checkbox" value="yes" id="ddwcpos-variation-product-enabled" name="_ddwcpos_variation_product_enabled" <?php checked( $ddwcpos_configuration[ 'variation_product_enabled' ], 'yes' ); ?> />
                                <label for='ddwcpos-variation-product-enabled'><?php esc_html_e( 'Show Variations as Different Products', 'ddwc-multipos' ); ?></label>
                            </td>
                        </tr>
                        <tr valign='top'>
                            <th scope='row' class='titledesc'>
                                <label for='ddwcpos-unit-price-enabled'><?php esc_html_e( 'Enable/Disable', 'ddwc-multipos' ); ?></label>
                            </th>
                            <td class='forminp forminp-text'>
                                <?php echo wc_help_tip( esc_html__( 'Enable/Disable unit or weight based pricing so prices of the products containing weight can be modified according to the entered weight at the POS end.', 'ddwc-multipos' ), true ); ?>
                                <input type="checkbox" value="yes" id="ddwcpos-unit-price-enabled" name="_ddwcpos_unit_price_enabled" <?php checked( $ddwcpos_configuration[ 'unit_price_enabled' ], 'yes' ); ?> />
                                <label for='ddwcpos-unit-price-enabled'><?php esc_html_e( 'Enable Unit/Weight Based Pricing', 'ddwc-multipos' ); ?></label>
                            </td>
                        </tr>
                        <tr valign='top'>
                            <th scope='row' class='titledesc'>
                                <label for='ddwcpos-automatic-send-kitchen-order-enabled'><?php esc_html_e( 'Enable/Disable', 'ddwc-multipos' ); ?></label>
                            </th>
                            <td class='forminp forminp-text'>
                                <?php echo wc_help_tip( esc_html__( 'Enable/Disable automatic sending of orders to the kitchen when put to hold for restaurant mode outlets.', 'ddwc-multipos' ), true ); ?>
                                <input type="checkbox" value="yes" id="ddwcpos-automatic-send-kitchen-order-enabled" name="_ddwcpos_automatic_send_kitchen_order_enabled" <?php checked( $ddwcpos_configuration[ 'automatic_send_kitchen_order_enabled' ], 'yes' ); ?> />
                                <label for='ddwcpos-automatic-send-kitchen-order-enabled'><?php esc_html_e( 'Automatic Send Orders to Kitchen When Put to Hold', 'ddwc-multipos' ); ?></label>
                            </td>
                        </tr>
                        <tr valign="top">
                            <th scope="row" class="titledesc">
                                <label for="ddwcpos-logo"><?php esc_html_e( 'Logo', 'ddwc-multipos' ); ?></label>
                            </th>
                            <td>
                                <img src="<?php echo esc_url( ! empty( $ddwcpos_configuration[ 'logo' ] ) ? wp_get_attachment_url( $ddwcpos_configuration[ 'logo' ] ) : DDWCPOS_PLUGIN_URL . 'assets/images/logo.png' ); ?>" alt='icon' class="image-url" width="80">
                                <input type="hidden" id="ddwcpos-logo" name="_ddwcpos_logo" value="<?php echo esc_attr( $ddwcpos_configuration[ 'logo' ] ); ?>" />
                                <br />
                                <button data-id="ddwcpos-logo" class="button small alt ddwcpos-icon-upload"><?php esc_html_e( 'Upload Icon', 'ddwc-multipos' ); ?></button>
                                <?php echo wc_help_tip( esc_html__( 'Upload the logo of the outlet.', 'ddwc-multipos' ), true ); ?>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p class="submit">
                    <?php wp_nonce_field( 'ddwcpos_nonce_action', 'ddwcpos_nonce' ); ?>
                    <input name="ddwcpos_save_general_configuration_submit" class="wcfm_submit_button" type="submit" value="<?php esc_attr_e( 'Save', 'ddwc-multipos' ); ?>">
                </p>
            </form>
            <?php
        }
	}
}
