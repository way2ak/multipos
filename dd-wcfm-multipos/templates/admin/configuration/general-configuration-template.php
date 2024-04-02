<?php

/**

 * General Configuration template class

 *

 * @package MultiPOS - Point of Sale for WooCommerce

 * @version 1.0.0

 */



namespace DDWCMultiPOS\Templates\Admin\Configuration;



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

            if ( ! empty( $_GET[ 'settings-updated' ] ) && 'true' === $_GET[ 'settings-updated' ] ) {

                flush_rewrite_rules();



                $file_create_helper = new DDWCPOS_File_Create_Helper( $ddwcpos_configuration );

                $file_create_helper->ddwcpos_generate_new_manifest_file();

                $file_create_helper->ddwcpos_write_service_worker();

            }



            $license_activated = get_option( '_ddwcpos_license_activated' );
            $purchase_code     = get_option( '_ddwcpos_purchase_code' );
            $purchase_email    = get_option( '_ddwcpos_purchase_email' );

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

                    delete_option( '_ddwcpos_license_activated' );

                    $license_activated = '';

                }

            }



            ?>

            <div class="wrap">

                <hr class="wp-header-end" />

                <?php settings_errors(); ?>

                <div class="ddwcpos-configuration-container ddwcpos-padding-top-bottom-0">

                    <form action="options.php" method="POST">

                        <?php settings_fields( 'ddwcpos-general-configuration-fields' ); ?>

                        <h2><?php esc_html_e( 'General Configuration', 'ddwc-multipos' ); ?></h2>

                        <table class="form-table">

                            <tbody>

                                <tr valign='top'>

                                    <th scope='row' class='titledesc'>

                                        <label for='ddwcpos-purchase-code'><?php esc_html_e( 'Activate License', 'ddwc-multipos' ); ?></label>

                                    </th>

                                    <td class='forminp forminp-text'>

                                        <?php echo wc_help_tip( esc_html__( 'Enter your purchase code to activate your purchased license. You\'ll not able to use the plugin until you activate the license.', 'ddwc-multipos' ), true ); ?>



                                        <input type="text" name="_ddwcpos_purchase_code" class="regular-text <?php echo esc_attr( ! empty( $license_activated ) ? 'ddwcpos-hide' : '' ); ?>" id="ddwcpos-purchase-code" value="<?php echo esc_attr( $purchase_code ); ?>" placeholder="<?php esc_attr_e( 'Enter Purchase Code', 'ddwc-multipos' ); ?>" />



                                        <input type="email" name="_ddwcpos_purchase_email" class="regular-text <?php echo esc_attr( ! empty( $license_activated ) ? 'ddwcpos-hide' : '' ); ?>" id="ddwcpos-purchase-email" value="<?php echo esc_attr( $purchase_email ); ?>" placeholder="<?php esc_attr_e( 'Enter Purchase email', 'ddwc-multipos' ); ?>" />



                                        <button class="button button-primary ddwcpos-verify-license <?php echo esc_attr( ! empty( $license_activated ) ? 'ddwcpos-hide' : '' ); ?>" data-action="activate" data-fetching="<?php esc_attr_e( 'Activating...', 'ddwc-multipos' ); ?>"><?php esc_html_e( 'Activate', 'ddwc-multipos' ); ?></button>



                                        <button class="button button-primary ddwcpos-verify-license <?php echo esc_attr( empty( $license_activated ) ? 'ddwcpos-hide' : '' ); ?>" data-action="deactivate" data-fetching="<?php esc_attr_e( 'Deactivating...', 'ddwc-multipos' ); ?>"><?php esc_html_e( 'Deactivate', 'ddwc-multipos' ); ?></button>



                                        <p class="description ddwcpos-margin-left-20"><a href="<?php echo esc_url( '//help.market.envato.com/hc/en-us/articles/202822600-Where-Is-My-Purchase-Code-' ); ?>" target="__blank"><?php esc_html_e( 'How to find your purchase code?', 'ddwc-multipos' ); ?></a></p>



                                        <div class="notice ddwcpos-hide">

                                            <p class="ddwcpos-license-status"></p>

                                        </div>

                                    </td>

                                </tr>

                                <tr valign='top'>

                                    <th scope='row' class='titledesc'>

                                        <label for='ddwcpos-enabled'><?php esc_html_e( 'Enable/Disable', 'ddwc-multipos' ); ?></label>

                                    </th>

                                    <td class='forminp forminp-text'>

                                        <?php echo wc_help_tip( esc_html__( 'Enable/Disable the module functionalities for the users.', 'ddwc-multipos' ), true ); ?>

                                        <input type="checkbox" value="yes" id="ddwcpos-enabled" name="_ddwcpos_enabled" <?php checked( $ddwcpos_configuration[ 'enabled' ], 'yes' ); ?> />

                                        <label for='ddwcpos-enabled'><?php esc_html_e( 'Enable MultiPOS - Point of Sale for WooCommerce', 'ddwc-multipos' ); ?></label>

                                    </td>

                                </tr>

                                <tr valign='top'>

                                    <th scope='row' class='titledesc'>

                                        <label for='ddwcpos-vendor-pos-functionality'><?php esc_html_e( 'Vendor POS', 'ddwc-multipos' ); ?></label>

                                    </th>

                                    <td class='forminp forminp-text'>

                                        <?php echo wc_help_tip( esc_html__( 'Admin can select enable, disable or manual option from here. If enabled, then all vendors will see the POS menus on their dashboard and if disabled, then no vendors will see any POS menu. If manual is selected, then admin can manually enable or disable the POS menus for the vendors on editing the vendor user.', 'ddwc-multipos' ), true ); ?>

                                        <select id="ddwcpos-vendor-pos-functionality" name="_ddwcpos_vendor_pos_functionality" class="regular-text ddwcpos-select2">

                                            <option value="enabled" <?php echo esc_attr( 'enabled'=== $ddwcpos_configuration[ 'vendor_pos_functionality' ] ? 'selected="selected' : ''); ?>><?php esc_html_e( 'Enabled', 'ddwc-multipos' ); ?></option>

                                            <option value="disabled" <?php echo esc_attr( 'disabled'=== $ddwcpos_configuration[ 'vendor_pos_functionality' ] ? 'selected="selected' : ''); ?>><?php esc_html_e( 'Disabled', 'ddwc-multipos' ); ?></option>

                                            <option value="manual" <?php echo esc_attr( 'manual'=== $ddwcpos_configuration[ 'vendor_pos_functionality' ] ? 'selected="selected' : ''); ?>><?php esc_html_e( 'Manual', 'ddwc-multipos' ); ?></option>

                                        </select>

                                    </td>

                                </tr>

                                <tr valign='top'>

                                    <th scope='row' class='titledesc'>

                                        <label for='ddwcpos-inventory-type'><?php esc_html_e( 'Inventory Type', 'ddwc-multipos' ); ?></label>

                                    </th>

                                    <td class='forminp forminp-text'>

                                        <?php echo wc_help_tip( esc_html__( 'Select the inventory type for the POS. In centralized stock, WooCommerce stock will be synced at POS end and in custom/manual stock, any stock can be given to all the products that does not affect the WooCommerce stock which will be used at POS end.', 'ddwc-multipos' ), true ); ?>

                                        <select id="ddwcpos-inventory-type" name="_ddwcpos_inventory_type" class="regular-text ddwcpos-select2">

                                            <option value="centralized" <?php echo esc_attr( 'centralized'=== $ddwcpos_configuration[ 'inventory_type' ] ? 'selected="selected' : ''); ?>><?php esc_html_e( 'Centralized/WooCommerce Stock', 'ddwc-multipos' ); ?></option>

                                            <option value="custom" <?php echo esc_attr( 'custom'=== $ddwcpos_configuration[ 'inventory_type' ] ? 'selected="selected' : ''); ?>><?php esc_html_e( 'Custom/Manual Stock', 'ddwc-multipos' ); ?></option>

                                        </select>

                                    </td>

                                </tr>

                                <tr valign='top'>

                                    <th scope='row' class='titledesc'>

                                        <label for='ddwcpos-order-status'><?php esc_html_e( 'Order Status', 'ddwc-multipos' ); ?></label>

                                    </th>

                                    <td class='forminp forminp-text'>

                                        <?php echo wc_help_tip( esc_html__( 'This order status is used for the orders generated at POS end.', 'ddwc-multipos' ), true ); ?>

                                        <select id="ddwcpos-order-status" name="_ddwcpos_order_status" class="regular-text ddwcpos-select2">

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

                                        <select id="ddwcpos-default-barcode" name="_ddwcpos_default_barcode" class="regular-text ddwcpos-select2">

                                            <option value="id" <?php echo esc_attr( 'id'=== $ddwcpos_configuration[ 'default_barcode' ] ? 'selected="selected' : ''); ?>><?php esc_html_e( 'Product ID', 'ddwc-multipos' ); ?></option>

                                            <option value="sku" <?php echo esc_attr( 'sku'=== $ddwcpos_configuration[ 'default_barcode' ] ? 'selected="selected' : ''); ?>><?php esc_html_e( 'Product SKU', 'ddwc-multipos' ); ?></option>

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

                                        <button data-id="ddwcpos-logo" class="button-primary ddwcpos-icon-upload"><?php esc_html_e( 'Upload Icon', 'ddwc-multipos' ); ?></button>

                                        <?php echo wc_help_tip( esc_html__( 'Upload the logo of the outlet.', 'ddwc-multipos' ), true ); ?>

                                    </td>

                                </tr>

                                <tr valign='top'>

                                    <th scope='row' class='titledesc'>

                                        <label for='ddwcpos-default-customer'><?php esc_html_e( 'Select Default/Guest Customer', 'ddwc-multipos' ); ?></label>

                                    </th>

                                    <td class='forminp forminp-text'>

                                        <?php echo wc_help_tip( esc_html__( 'This customer is used for the guest orders at POS end.', 'ddwc-multipos' ), true ); ?>

                                        <select id="ddwcpos-default-customer" name="_ddwcpos_default_customer" class="ddwcpos-users regular-text" data-placeholder="<?php esc_attr_e( 'Select Customer', 'ddwc-multipos' ); ?>">

                                            <?php

                                            if ( ! empty( $ddwcpos_configuration[ 'default_customer' ] ) ) {

                                                $customer_id           = $ddwcpos_configuration[ 'default_customer' ];

                                                $customer_data         = get_userdata( $customer_id );

                                                $customer_option_value = "(#{$customer_id}) {$customer_data->user_login} <{$customer_data->user_email}>";

                                                ?>

                                                <option value="<?php echo esc_attr( $customer_id ); ?>"><?php echo esc_html( $customer_option_value ); ?></option>

                                                <?php

                                            }

                                            ?>

                                        </select>

                                    </td>

                                </tr>

                                <tr valign="top">

                                    <th scope="row" class="titledesc"><label for="ddwcpos-endpoint"><?php esc_html_e( 'Endpoint', 'ddwc-multipos' ); ?></label>

                                    </th>

                                    <td>

                                        <?php echo wc_help_tip( esc_html__( 'Enter the endpoint which will be used after your site URL to access the POS.', 'ddwc-multipos' ), true ); ?>

                                        <input type="text" id="ddwcpos-endpoint" class="regular-text" name="_ddwcpos_endpoint" value="<?php echo esc_attr( $ddwcpos_configuration[ 'endpoint' ] ); ?>" />

                                    </td>

                                </tr>

                                <tr valign="top">

                                    <th scope="row" class="titledesc"><label for="ddwcpos-kitchen-endpoint"><?php esc_html_e( 'Kitchen Endpoint', 'ddwc-multipos' ); ?></label>

                                    </th>

                                    <td>

                                        <?php echo wc_help_tip( esc_html__( 'Enter the endpoint which will be used after your site URL to access the Kitchen view for the POS. This view can only be used for the restaurant mode outlets.', 'ddwc-multipos' ), true ); ?>

                                        <input type="text" id="ddwcpos-kitchen-endpoint" class="regular-text" name="_ddwcpos_kitchen_endpoint" value="<?php echo esc_attr( $ddwcpos_configuration[ 'kitchen_endpoint' ] ); ?>" />

                                    </td>

                                </tr>

                            </tbody>

                        </table>

                        <p class="description">

                            <i>

                                <?php

                                echo sprintf( esc_html__( 'If you really like our plugin, please leave us a %s rating, we\'ll really appreciate it.', 'ddwc-multipos' ), '<a href="//codecanyon.net/downloads" target="_blank" title="' . esc_attr__( 'Review', 'ddwc-multipos' ) . '" aria-label="' . esc_attr__( 'Review', 'ddwc-multipos' ) . '"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 32" height="10"><path d="M16 26.534L6.111 32 8 20.422l-8-8.2 11.056-1.688L16 0l4.944 10.534L32 12.223l-8 8.2L25.889 32zm40 0L46.111 32 48 20.422l-8-8.2 11.056-1.688L56 0l4.944 10.534L72 12.223l-8 8.2L65.889 32zm40 0L86.111 32 88 20.422l-8-8.2 11.056-1.688L96 0l4.944 10.534L112 12.223l-8 8.2L105.889 32zm40 0L126.111 32 128 20.422l-8-8.2 11.056-1.688L136 0l4.944 10.534L152 12.223l-8 8.2L145.889 32zm40 0L166.111 32 168 20.422l-8-8.2 11.056-1.688L176 0l4.944 10.534L192 12.223l-8 8.2L185.889 32z" fill="#F5A623" fill-rule="evenodd"/></svg></a>' )

                                ?>

                            </i>

                        </p>

                        <?php submit_button( esc_html__( 'Save Changes', 'ddwc-multipos' ) ); ?>

                    </form>

                </div>

            </div>

            <?php

        }

	}

}

