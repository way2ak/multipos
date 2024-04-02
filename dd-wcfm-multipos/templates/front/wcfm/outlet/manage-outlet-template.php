<?php
/**
 * Manage Outlet Template
 *
 * @package MultiPOS - Point of Sale for WCFM Marketplace
 * @version 1.0.0
 */

namespace DDWCMultiPOS\Templates\Front\WCFM\Outlet;

use DDWCMultiPOS\Helper\Outlet\DDWCPOS_Outlet_Helper;

if ( ! class_exists( 'DDWCPOS_Manage_Outlet_Template' ) ) {
	/**
	 * Manage Outlet class
	 */
	class DDWCPOS_Manage_Outlet_Template {
		/**
		 * Class constructor
		 */
		public function __construct( $ddwcpos_configuration ) {
            global $wp;
            $outlet_helper = new DDWCPOS_Outlet_Helper();

            $outlet_data = [
                'id'             => '',
                'author'         => '',
                'name'           => '',
                'mode'           => 'grocery',
                'inventory_type' => '',
                'address1'       => '',
                'address2'       => '',
                'city'           => '',
                'state'          => '',
                'country'        => '',
                'postcode'       => '',
                'phone'          => '',
                'email'          => '',
                'payments'       => [],
                'invoice'        => '',
                'tables'         => [],
                'status'         => 'enabled',
			];

            if ( ! empty( $wp->query_vars[ 'ddwcpos-manage-outlet' ] ) ) {
                $outlet = $outlet_helper->ddwcpos_get_outlet_details_by_id( intval( $wp->query_vars[ 'ddwcpos-manage-outlet' ] ) );

                if ( ! empty( $outlet  ) ) {
                    $outlet_data = wp_parse_args( $outlet, $outlet_data );
                }
            }

            $outlet_data[ 'payments' ] = maybe_unserialize( $outlet_data[ 'payments' ] );
            $outlet_data[ 'tables' ]   = ! empty( $outlet_data[ 'tables' ] ) ? maybe_unserialize( $outlet_data[ 'tables' ] ) : maybe_unserialize( [] );

            $countries_obj = new \WC_Countries();
            $countries     = $countries_obj->__get( 'countries' );
            $base_country  = $countries_obj->get_base_country();
            $outlet_modes  = $outlet_helper->ddwcpos_get_outlet_modes();

            extract( $outlet_data );

            ?>
            <div class="collapse wcfm-collapse" id="wcfm_products_listing">
                <div class="wcfm-page-headig">
                    <span class="wcfmfa fa-cubes"></span>
                    <span class="wcfm-page-heading-text"><?php esc_html_e( 'Outlets', 'ddwc-multipos' ); ?></span>
                </div>
                <div class="wcfm-collapse-content">
                    <div id="wcfm_page_load"></div>
                    <div class="wcfm-container wcfm-top-element-container">
                        <a class="add_new_wcfm_ele_dashboard text_tip" href="<?php echo esc_url( ddwcpos_get_wfcm_custom_menus_url( 'ddwcpos-outlets' ) ); ?>" data-tip="<?php esc_attr_e( 'Back to Outlets', 'ddwc-multipos' ); ?>"><span class="wcfmfa fa-cube"></span><span class="text"><?php esc_html_e( 'Back', 'ddwc-multipos' ); ?></span></a>
                        <div class="wcfm-clearfix"></div>
                    </div>
                    <div class="wcfm-clearfix"></div><br />

                    <div class="wcfm-container">
                        <div class="wrap">
                            <?php
                            if ( ! empty( $wp->query_vars[ 'ddwcpos-manage-outlet' ] ) ) {
                                ?>
                                <h2><?php esc_html_e( 'Edit Outlet', 'ddwc-multipos' ); ?></h2>
                                <?php
                            } else {
                                ?>
                                <h2><?php esc_html_e( 'Add Outlet', 'ddwc-multipos' ); ?></h2>
                                <?php
                            }
                            ?>
                            <form method="post">
                                <table class="form-table">
                                    <tbody>
                                        <tr valign="middle">
                                            <th scope="row" class="titledesc">
                                                <label for="ddwcpos-outlet-name"><?php esc_html_e( 'Name', 'ddwc-multipos' ); ?> <abbr class="required" title="<?php esc_attr_e( 'Required', 'ddwc-multipos' ); ?>">*</abbr></label>
                                            </th>
                                            <td class="forminp forminp-text">
                                                <?php echo wc_help_tip( esc_html__( 'Enter the name for the outlet.', 'ddwc-multipos' ), true ); ?>
                                                <input type="hidden" name="ddwcpos_outlet_id" class="wcfm-text" id="ddwcpos-outlet-id" value="<?php echo esc_attr( $id ); ?>" />
                                                <input type="text" name="ddwcpos_outlet_name" class="wcfm-text" id="ddwcpos-outlet-name" value="<?php echo esc_attr( $name ); ?>" required />
                                            </td>
                                        </tr>
                                        <tr valign='top'>
                                            <th scope='row' class='titledesc'>
                                                <label for='ddwcpos-outlet-mode'><?php esc_html_e( 'Mode', 'ddwc-multipos' ); ?> <abbr class="required" title="<?php esc_attr_e( 'Required', 'ddwc-multipos' ); ?>">*</abbr></label>
                                            </th>
                                            <td class='forminp forminp-text'>
                                                <?php echo wc_help_tip( esc_html__( 'Select the outlet mode for the POS.', 'ddwc-multipos' ), true ); ?>
                                                <select id="ddwcpos-outlet-mode" name="ddwcpos_outlet_mode" class="wcfm-select" required>
                                                    <?php
                                                    if ( ! empty( $outlet_modes ) ) {
                                                        foreach ( $outlet_modes as $key => $outlet_mode ) {
                                                            ?>
                                                            <option value="<?php echo esc_attr( $key ); ?>" <?php echo esc_attr( $key === $mode ? 'selected="selected"' : ''); ?>><?php echo esc_html( $outlet_mode ); ?></option>
                                                            <?php
                                                        }

                                                    }
                                                    ?>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr valign='top'>
                                            <th scope='row' class='titledesc'>
                                                <label for='ddwcpos-outlet-inventory-type'><?php esc_html_e( 'Inventory Type', 'ddwc-multipos' ); ?> <abbr class="required" title="<?php esc_attr_e( 'Required', 'ddwc-multipos' ); ?>">*</abbr></label>
                                            </th>
                                            <td class='forminp forminp-text'>
                                                <?php echo wc_help_tip( esc_html__( 'Select the outlet inventory type for the POS. If set to default then general inventory type is used for this outlet. In centralized stock, WooCommerce stock will be synced at POS end and in custom/manual stock, any stock can be given to all the products that does not affect the WooCommerce stock which will be used at POS end.', 'ddwc-multipos' ), true ); ?>
                                                <select id="ddwcpos-outlet-inventory-type" name="ddwcpos_outlet_inventory_type" class="wcfm-select">
                                                    <option value="" ><?php esc_html_e( 'Default', 'ddwc-multipos' ); ?></option>
                                                    <option value="centralized" <?php selected( 'centralized', $inventory_type ); ?>><?php esc_html_e( 'Centralized/WooCommerce Stock', 'ddwc-multipos' ); ?></option>
                                                    <option value="custom" <?php selected( 'custom', $inventory_type ); ?>><?php esc_html_e( 'Custom/Manual Stock', 'ddwc-multipos' ); ?></option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr valign="middle">
                                            <th scope="row" class="titledesc">
                                                <label for="ddwcpos-outlet-address1"><?php esc_html_e( 'Address Line 1', 'ddwc-multipos' ); ?> <abbr class="required" title="<?php esc_attr_e( 'Required', 'ddwc-multipos' ); ?>">*</abbr></label>
                                            </th>
                                            <td class="forminp forminp-text">
                                                <?php echo wc_help_tip( esc_html__( 'Enter the address1 for the outlet.', 'ddwc-multipos' ), true ); ?>
                                                <input type="text" name="ddwcpos_outlet_address1" class="wcfm-text" id="ddwcpos-outlet-address1" value="<?php echo esc_attr( $address1 ); ?>" required />
                                            </td>
                                        </tr>
                                        <tr valign="middle">
                                            <th scope="row" class="titledesc">
                                                <label for="ddwcpos-outlet-address2"><?php esc_html_e( 'Address Line 2', 'ddwc-multipos' ); ?></label>
                                            </th>
                                            <td class="forminp forminp-text">
                                                <?php echo wc_help_tip( esc_html__( 'Enter the address2 for the outlet.', 'ddwc-multipos' ), true ); ?>
                                                <input type="text" name="ddwcpos_outlet_address2" class="wcfm-text" id="ddwcpos-outlet-address2" value="<?php echo esc_attr( $address2 ); ?>" />
                                            </td>
                                        </tr>
                                        <tr valign="middle">
                                            <th scope="row" class="titledesc">
                                                <label for="ddwcpos-outlet-city"><?php esc_html_e( 'City', 'ddwc-multipos' ); ?> <abbr class="required" title="<?php esc_attr_e( 'Required', 'ddwc-multipos' ); ?>">*</abbr></label>
                                            </th>
                                            <td class="forminp forminp-text">
                                                <?php echo wc_help_tip( esc_html__( 'Enter the city for the outlet.', 'ddwc-multipos' ), true ); ?>
                                                <input type="text" name="ddwcpos_outlet_city" class="wcfm-text" id="ddwcpos-outlet-city" value="<?php echo esc_attr( $city ); ?>" required />
                                            </td>
                                        </tr>
                                        <tr valign="middle">
                                            <th scope="row" class="titledesc">
                                                <label for="ddwcpos-outlet-state"><?php esc_html_e( 'State', 'ddwc-multipos' ); ?> <abbr class="required" title="<?php esc_attr_e( 'Required', 'ddwc-multipos' ); ?>">*</abbr></label>
                                            </th>
                                            <td class="forminp forminp-text">
                                                <?php echo wc_help_tip( esc_html__( 'Enter the state for the outlet.', 'ddwc-multipos' ), true ); ?>
                                                <input type="text" name="ddwcpos_outlet_state" class="wcfm-text" id="ddwcpos-outlet-state" value="<?php echo esc_attr( $state ); ?>" required />
                                            </td>
                                        </tr>
                                        <tr valign="middle">
                                            <th scope="row" class="titledesc">
                                                <label for="ddwcpos-outlet-country"><?php esc_html_e( 'Country', 'ddwc-multipos' ); ?> <abbr class="required" title="<?php esc_attr_e( 'Required', 'ddwc-multipos' ); ?>">*</abbr></label>
                                            </th>
                                            <td class="forminp forminp-text">
                                                <?php echo wc_help_tip( esc_html__( 'Select the country for the outlet.', 'ddwc-multipos' ), true ); ?>
                                                <select name="ddwcpos_outlet_country" class="wcfm-select" id="ddwcpos-outlet-country" required>
                                                    <?php
                                                    foreach ( $countries as $key => $value ) {
                                                        ?>
                                                        <option value="<?php echo esc_attr( $key ); ?>" <?php echo esc_attr( $key === $country ? 'selected="selected"' : ( $key === $base_country ? 'selected="selected"' : '' ) ); ?>><?php echo esc_html( $value ); ?></option>
                                                        <?php
                                                    }
                                                    ?>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr valign="middle">
                                            <th scope="row" class="titledesc">
                                                <label for="ddwcpos-outlet-postcode"><?php esc_html_e( 'Postcode', 'ddwc-multipos' ); ?> <abbr class="required" title="<?php esc_attr_e( 'Required', 'ddwc-multipos' ); ?>">*</abbr></label>
                                            </th>
                                            <td class="forminp forminp-text">
                                                <?php echo wc_help_tip( esc_html__( 'Enter the postcode for the outlet.', 'ddwc-multipos' ), true ); ?>
                                                <input type="text" name="ddwcpos_outlet_postcode" class="wcfm-text" id="ddwcpos-outlet-postcode" value="<?php echo esc_attr( $postcode ); ?>" required />
                                            </td>
                                        </tr>
                                        <tr valign="middle">
                                            <th scope="row" class="titledesc">
                                                <label for="ddwcpos-outlet-phone"><?php esc_html_e( 'Phone', 'ddwc-multipos' ); ?> <abbr class="required" title="<?php esc_attr_e( 'Required', 'ddwc-multipos' ); ?>">*</abbr></label>
                                            </th>
                                            <td class="forminp forminp-text">
                                                <?php echo wc_help_tip( esc_html__( 'Enter the phone for the outlet.', 'ddwc-multipos' ), true ); ?>
                                                <input type="text" name="ddwcpos_outlet_phone" class="wcfm-text" id="ddwcpos-outlet-phone" value="<?php echo esc_attr( $phone ); ?>" required />
                                            </td>
                                        </tr>
                                        <tr valign="middle">
                                            <th scope="row" class="titledesc">
                                                <label for="ddwcpos-outlet-email"><?php esc_html_e( 'Email', 'ddwc-multipos' ); ?> <abbr class="required" title="<?php esc_attr_e( 'Required', 'ddwc-multipos' ); ?>">*</abbr></label>
                                            </th>
                                            <td class="forminp forminp-text">
                                                <?php echo wc_help_tip( esc_html__( 'Enter the email for the outlet.', 'ddwc-multipos' ), true ); ?>
                                                <input type="text" name="ddwcpos_outlet_email" class="wcfm-text" id="ddwcpos-outlet-email" value="<?php echo esc_attr( $email ); ?>" required />
                                            </td>
                                        </tr>
                                        <tr valign="middle">
                                            <th scope="row" class="titledesc">
                                                <label for="ddwcpos-outlet-payments"><?php esc_html_e( 'Payments', 'ddwc-multipos' ); ?> <abbr class="required" title="<?php esc_attr_e( 'Required', 'ddwc-multipos' ); ?>">*</abbr></label>
                                            </th>
                                            <td class="forminp forminp-text">
                                                <?php echo wc_help_tip( esc_html__( 'Select the payment methods to be enabled for the outlet.', 'ddwc-multipos' ), true ); ?>
                                                <select name="ddwcpos_outlet_payments[]" class="wcfm-select" id="ddwcpos-outlet-payments" multiple required>
                                                    <?php
                                                    foreach ( $ddwcpos_configuration[ 'payment_method' ] as $key => $value ) {
                                                        if ( 'enabled' === $value[ 'status' ] ) {
                                                            ?>
                                                            <option value="<?php echo esc_attr( $value[ 'slug' ] ); ?>" <?php echo esc_attr( in_array( $value[ 'slug' ], $payments, true ) ? 'selected="selected"' : '' ); ?>><?php echo esc_html( $value[ 'name' ] ); ?></option>
                                                            <?php
                                                        }
                                                    }
                                                    ?>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr valign="middle">
                                            <th scope="row" class="titledesc">
                                                <label for="ddwcpos-outlet-invoice"><?php esc_html_e( 'Invoice', 'ddwc-multipos' ); ?> <abbr class="required" title="<?php esc_attr_e( 'Required', 'ddwc-multipos' ); ?>">*</abbr></label>
                                            </th>
                                            <td class="forminp forminp-text">
                                                <?php echo wc_help_tip( esc_html__( 'Select the invoice for the outlet.', 'ddwc-multipos' ), true ); ?>
                                                <select name="ddwcpos_outlet_invoice" class="wcfm-select" id="ddwcpos-outlet-invoice" required>
                                                    <?php
                                                    foreach ( $ddwcpos_configuration[ 'invoices' ] as $key => $value ) {
                                                        if ( 'enabled' === $value[ 'status' ] ) {
                                                            ?>
                                                            <option value="<?php echo esc_attr( $value[ 'slug' ] ); ?>" <?php echo esc_attr( $value[ 'slug' ] === $invoice ? 'selected="selected"' : '' ); ?>><?php echo esc_html( $value[ 'name' ] ); ?></option>
                                                            <?php
                                                        }
                                                    }
                                                    ?>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr valign="middle">
                                            <th scope="row" class="titledesc">
                                                <label for="ddwcpos-outlet-tables"><?php esc_html_e( 'Tables', 'ddwc-multipos' ); ?></label>
                                            </th>
                                            <td class="forminp forminp-text">
                                                <?php echo wc_help_tip( esc_html__( 'Select the tables to be enabled for the outlet, used in the restaurant/cafe mode only.', 'ddwc-multipos' ), true ); ?>
                                                <select name="ddwcpos_outlet_tables[]" class="wcfm-select" id="ddwcpos-outlet-tables" multiple>
                                                    <?php
                                                    foreach ( $ddwcpos_configuration[ 'tables' ] as $key => $value ) {
                                                        if ( 'enabled' === $value[ 'status' ] ) {
                                                            ?>
                                                            <option value="<?php echo esc_attr( $value[ 'slug' ] ); ?>" <?php echo esc_attr( in_array( $value[ 'slug' ], $tables, true ) ? 'selected="selected"' : '' ); ?>><?php echo esc_html( $value[ 'name' ] ); ?></option>
                                                            <?php
                                                        }
                                                    }
                                                    ?>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr valign="middle">
                                            <th scope="row" class="titledesc">
                                                <label for="ddwcpos-outlet-status"><?php esc_html_e( 'Status', 'ddwc-multipos' ); ?> <abbr class="required" title="<?php esc_attr_e( 'Required', 'ddwc-multipos' ); ?>">*</abbr></label>
                                            </th>
                                            <td class="forminp forminp-text">
                                                <?php echo wc_help_tip( esc_html__( 'Select the status for the outlet.', 'ddwc-multipos' ), true ); ?>
                                                <select name="ddwcpos_outlet_status" class="wcfm-select" id="ddwcpos-outlet-status" required>
                                                    <option value="enabled" <?php echo esc_attr( 'enabled' === $status ? 'selected="selected"' : '' ); ?>><?php esc_html_e( 'Enabled', 'ddwc-multipos' ); ?></option>
                                                    <option value="disabled" <?php echo esc_attr( 'disabled' === $status ? 'selected="selected"' : '' ); ?>><?php esc_html_e( 'Disabled', 'ddwc-multipos' ); ?></option>
                                                </select>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <p class="submit">
                                    <?php wp_nonce_field( 'ddwcpos_nonce_action', 'ddwcpos_nonce' ); ?>
                                    <input name="ddwcpos_save_outlet_submit" class="wcfm_submit_button" type="submit" value="<?php esc_attr_e( 'Save', 'ddwc-multipos' ); ?>">
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
