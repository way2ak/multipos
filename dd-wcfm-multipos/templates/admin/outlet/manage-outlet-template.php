<?php
/**
 * Manage Outlet template class
 *
 * @package MultiPOS - Point of Sale for WCFM Marketplace
 * @version 1.0.0
 */

namespace DDWCMultiPOS\Templates\Admin\Outlet;

use DDWCMultiPOS\Helper\Error\DDWCPOS_Error_Helper;
use DDWCMultiPOS\Helper\Outlet\DDWCPOS_Outlet_Helper;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( 'DDWCPOS_Manage_Outlet_Template' ) ) {
	/**
	 * Manage Outlet template class
	 */
	class DDWCPOS_Manage_Outlet_Template {
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
         * Outlet helper variable
         *
         * @var object
         */
        protected $outlet_helper;

        /**
         * Outlet data variable
         *
         * @var array
         */
        protected $outlet_data;

        /**
         * Construct
         */
        public function __construct( $ddwcpos_configuration ) {
            $this->ddwcpos_configuration = $ddwcpos_configuration;
            $this->outlet_helper         = new DDWCPOS_Outlet_Helper();
			$this->ddwcpos_handle_save_outlet();

            $this->outlet_data = [
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

            if ( ! empty( $_GET[ 'id' ] ) ) {
                $outlet_data       = $this->outlet_helper->ddwcpos_get_outlet_details_by_id( $_GET[ 'id' ] );
                $this->outlet_data = wp_parse_args( $outlet_data, $this->outlet_data );
            }

            $this->outlet_data[ 'payments' ] = maybe_unserialize( $this->outlet_data[ 'payments' ] );
            $this->outlet_data[ 'tables' ]   = ! empty( $this->outlet_data[ 'tables' ] ) ? maybe_unserialize( $this->outlet_data[ 'tables' ] ) : maybe_unserialize( [] );

			$this->ddwcpos_get_manage_outlet_template();
        }

        /**
		 * Save Outlet function
		 *
		 * @return void
		 */
        public function ddwcpos_handle_save_outlet() {
            if ( ! empty( $_POST[ 'ddwcpos_save_outlet_submit' ] ) && ! empty( $_POST[ 'ddwcpos_nonce' ] ) && wp_verify_nonce( $_POST[ 'ddwcpos_nonce' ], 'ddwcpos_nonce_action' ) ) {
                $id             = ! empty( $_POST[ 'ddwcpos_outlet_id' ] ) ? sanitize_text_field( $_POST[ 'ddwcpos_outlet_id' ] ) : '';
                $name           = ! empty( $_POST[ 'ddwcpos_outlet_name' ] ) ? sanitize_text_field( $_POST[ 'ddwcpos_outlet_name' ] ) : '';
                $author         = ! empty( $_POST[ 'ddwcpos_outlet_author' ] ) ? sanitize_text_field( $_POST[ 'ddwcpos_outlet_author' ] ) : get_current_user_id();
                $mode           = ! empty( $_POST[ 'ddwcpos_outlet_mode' ] ) ? sanitize_text_field( $_POST[ 'ddwcpos_outlet_mode' ] ) : '';
                $inventory_type = ! empty( $_POST[ 'ddwcpos_outlet_inventory_type' ] ) ? sanitize_text_field( $_POST[ 'ddwcpos_outlet_inventory_type' ] ) : '';
                $address1       = ! empty( $_POST[ 'ddwcpos_outlet_address1' ] ) ? sanitize_text_field( $_POST[ 'ddwcpos_outlet_address1' ] ) : '';
                $address2       = ! empty( $_POST[ 'ddwcpos_outlet_address2' ] ) ? sanitize_text_field( $_POST[ 'ddwcpos_outlet_address2' ] ) : '';
                $city           = ! empty( $_POST[ 'ddwcpos_outlet_city' ] ) ? sanitize_text_field( $_POST[ 'ddwcpos_outlet_city' ] ) : '';
                $state          = ! empty( $_POST[ 'ddwcpos_outlet_state' ] ) ? sanitize_text_field( $_POST[ 'ddwcpos_outlet_state' ] ) : '';
                $country        = ! empty( $_POST[ 'ddwcpos_outlet_country' ] ) ? sanitize_text_field( $_POST[ 'ddwcpos_outlet_country' ] ) : '';
                $postcode       = ! empty( $_POST[ 'ddwcpos_outlet_postcode' ] ) ? sanitize_text_field( $_POST[ 'ddwcpos_outlet_postcode' ] ) : '';
                $phone          = ! empty( $_POST[ 'ddwcpos_outlet_phone' ] ) ? sanitize_text_field( $_POST[ 'ddwcpos_outlet_phone' ] ) : '';
                $email          = ! empty( $_POST[ 'ddwcpos_outlet_email' ] ) ? sanitize_text_field( $_POST[ 'ddwcpos_outlet_email' ] ) : '';
                $payments       = ! empty( $_POST[ 'ddwcpos_outlet_payments' ] ) ? maybe_serialize( $_POST[ 'ddwcpos_outlet_payments' ] ) : '';
                $invoice        = ! empty( $_POST[ 'ddwcpos_outlet_invoice' ] ) ? maybe_serialize( $_POST[ 'ddwcpos_outlet_invoice' ] ) : '';
                $tables         = ! empty( $_POST[ 'ddwcpos_outlet_tables' ] ) ? maybe_serialize( $_POST[ 'ddwcpos_outlet_tables' ] ) : maybe_serialize( [] );
                $status         = ! empty( $_POST[ 'ddwcpos_outlet_status' ] ) ? sanitize_text_field( $_POST[ 'ddwcpos_outlet_status' ] ) : '';

                if ( ! empty( $name ) && ! empty( $author ) && ! empty( $mode ) && ! empty( $address1 ) && ! empty( $city ) && ! empty( $state ) && ! empty( $country ) && ! empty( $postcode ) && ! empty( $phone ) && ! empty( $email ) && ! empty( $payments ) && ! empty( $invoice ) && ! empty( $status ) ) {
                    $data = compact( 'id', 'name', 'author', 'mode', 'inventory_type', 'address1', 'address2', 'city', 'state', 'country', 'postcode', 'phone', 'email', 'payments', 'invoice', 'tables', 'status' );

                    $outlet_id = $this->outlet_helper->ddwcpos_save_outlet( $data );

                    if ( $outlet_id ) {
                        wp_safe_redirect( admin_url( 'admin.php?page=' . $_REQUEST[ 'page' ] . '&success=saved' ) );
                        exit();
                    }
                } else {
                    $this->ddwcpos_print_notification( esc_html__( 'Fields are either empty or invalid.', 'ddwc-multipos' ), 'error' );
                }
            }
        }

        /**
		 * Get Manage Outlet Template function
		 *
		 * @return void
		 */
        public function ddwcpos_get_manage_outlet_template() {
            $countries_obj = new \WC_Countries();
            $countries     = $countries_obj->__get( 'countries' );
            $base_country  = $countries_obj->get_base_country();
            $outlet_modes  = $this->outlet_helper->ddwcpos_get_outlet_modes();

            extract( $this->outlet_data );
            ?>
			<div class="wrap">
                <?php
                if ( ! empty( $_REQUEST[ 'action' ] ) && 'edit' === $_REQUEST[ 'action' ] ) {
                    ?>
                    <h1 class="wp-heading-inline"><?php esc_html_e( 'Edit Outlet', 'ddwc-multipos' ); ?></h1>
                    <?php
                } else {
                    ?>
                    <h1 class="wp-heading-inline"><?php esc_html_e( 'Add Outlet', 'ddwc-multipos' ); ?></h1>
                    <?php
                }
                ?>
                <hr class="wp-header-end" />

                <div class="ddwcpos-configuration-container">
                    <form method="post">
                        <table class="form-table">
                            <tbody>
                                <tr valign="middle">
                                    <th scope="row" class="titledesc">
                                        <label for="ddwcpos-outlet-name"><?php esc_html_e( 'Name', 'ddwc-multipos' ); ?> <abbr class="required" title="<?php esc_attr_e( 'Required', 'ddwc-multipos' ); ?>">*</abbr></label>
                                    </th>
                                    <td class="forminp forminp-text">
                                        <?php echo wc_help_tip( esc_html__( 'Enter the name for the outlet.', 'ddwc-multipos' ), true ); ?>
                                        <input type="hidden" name="ddwcpos_outlet_id" class="regular-text" id="ddwcpos-outlet-id" value="<?php echo esc_attr( $id ); ?>" />
                                        <input type="text" name="ddwcpos_outlet_name" class="regular-text" id="ddwcpos-outlet-name" value="<?php echo esc_attr( $name ); ?>" />
                                    </td>
                                </tr>
                                <tr valign='top'>
                                    <th scope='row' class='titledesc'>
                                        <label for='ddwcpos-outlet-author'><?php esc_html_e( 'Store', 'ddwc-multipos' ); ?></label>
                                    </th>
                                    <td class='forminp forminp-text'>
                                        <?php echo wc_help_tip( esc_html__( 'Select the outlet store for the POS.', 'ddwc-multipos' ), true ); ?>
                                        <select id="ddwcpos-outlet-author" name="ddwcpos_outlet_author" class="ddwcpos-vendors regular-text">
                                            <?php
                                            if ( ! empty( $author ) ) {
                                                $user = get_userdata( $author );
                                                ?>
                                                <option value="<?php echo esc_attr( $author ); ?>" selected="selected"><?php echo esc_html( wcfm_get_vendor_store_name( $user->ID ) . ' - ' . $user->display_name . ' (#' . $user->ID . ' - ' . $user->user_login . ')' ); ?></option>
                                                <?php
                                            }
                                            ?>
                                        </select>
                                    </td>
                                </tr>
                                <tr valign='top'>
                                    <th scope='row' class='titledesc'>
                                        <label for='ddwcpos-outlet-mode'><?php esc_html_e( 'Mode', 'ddwc-multipos' ); ?> <abbr class="required" title="<?php esc_attr_e( 'Required', 'ddwc-multipos' ); ?>">*</abbr></label>
                                    </th>
                                    <td class='forminp forminp-text'>
                                        <?php echo wc_help_tip( esc_html__( 'Select the outlet mode for the POS.', 'ddwc-multipos' ), true ); ?>
                                        <select id="ddwcpos-outlet-mode" name="ddwcpos_outlet_mode" class="regular-text">
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
                                        <select id="ddwcpos-outlet-inventory-type" name="ddwcpos_outlet_inventory_type" class="regular-text">
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
                                        <input type="text" name="ddwcpos_outlet_address1" class="regular-text" id="ddwcpos-outlet-address1" value="<?php echo esc_attr( $address1 ); ?>" />
                                    </td>
                                </tr>
                                <tr valign="middle">
                                    <th scope="row" class="titledesc">
                                        <label for="ddwcpos-outlet-address2"><?php esc_html_e( 'Address Line 2', 'ddwc-multipos' ); ?></label>
                                    </th>
                                    <td class="forminp forminp-text">
                                        <?php echo wc_help_tip( esc_html__( 'Enter the address2 for the outlet.', 'ddwc-multipos' ), true ); ?>
                                        <input type="text" name="ddwcpos_outlet_address2" class="regular-text" id="ddwcpos-outlet-address2" value="<?php echo esc_attr( $address2 ); ?>" />
                                    </td>
                                </tr>
                                <tr valign="middle">
                                    <th scope="row" class="titledesc">
                                        <label for="ddwcpos-outlet-city"><?php esc_html_e( 'City', 'ddwc-multipos' ); ?> <abbr class="required" title="<?php esc_attr_e( 'Required', 'ddwc-multipos' ); ?>">*</abbr></label>
                                    </th>
                                    <td class="forminp forminp-text">
                                        <?php echo wc_help_tip( esc_html__( 'Enter the city for the outlet.', 'ddwc-multipos' ), true ); ?>
                                        <input type="text" name="ddwcpos_outlet_city" class="regular-text" id="ddwcpos-outlet-city" value="<?php echo esc_attr( $city ); ?>" />
                                    </td>
                                </tr>
                                <tr valign="middle">
                                    <th scope="row" class="titledesc">
                                        <label for="ddwcpos-outlet-state"><?php esc_html_e( 'State', 'ddwc-multipos' ); ?> <abbr class="required" title="<?php esc_attr_e( 'Required', 'ddwc-multipos' ); ?>">*</abbr></label>
                                    </th>
                                    <td class="forminp forminp-text">
                                        <?php echo wc_help_tip( esc_html__( 'Enter the state for the outlet.', 'ddwc-multipos' ), true ); ?>
                                        <input type="text" name="ddwcpos_outlet_state" class="regular-text" id="ddwcpos-outlet-state" value="<?php echo esc_attr( $state ); ?>" />
                                    </td>
                                </tr>
                                <tr valign="middle">
                                    <th scope="row" class="titledesc">
                                        <label for="ddwcpos-outlet-country"><?php esc_html_e( 'Country', 'ddwc-multipos' ); ?> <abbr class="required" title="<?php esc_attr_e( 'Required', 'ddwc-multipos' ); ?>">*</abbr></label>
                                    </th>
                                    <td class="forminp forminp-text">
                                        <?php echo wc_help_tip( esc_html__( 'Select the country for the outlet.', 'ddwc-multipos' ), true ); ?>
                                        <select name="ddwcpos_outlet_country" class="regular-text" id="ddwcpos-outlet-country">
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
                                        <input type="text" name="ddwcpos_outlet_postcode" class="regular-text" id="ddwcpos-outlet-postcode" value="<?php echo esc_attr( $postcode ); ?>" />
                                    </td>
                                </tr>
                                <tr valign="middle">
                                    <th scope="row" class="titledesc">
                                        <label for="ddwcpos-outlet-phone"><?php esc_html_e( 'Phone', 'ddwc-multipos' ); ?> <abbr class="required" title="<?php esc_attr_e( 'Required', 'ddwc-multipos' ); ?>">*</abbr></label>
                                    </th>
                                    <td class="forminp forminp-text">
                                        <?php echo wc_help_tip( esc_html__( 'Enter the phone for the outlet.', 'ddwc-multipos' ), true ); ?>
                                        <input type="text" name="ddwcpos_outlet_phone" class="regular-text" id="ddwcpos-outlet-phone" value="<?php echo esc_attr( $phone ); ?>" />
                                    </td>
                                </tr>
                                <tr valign="middle">
                                    <th scope="row" class="titledesc">
                                        <label for="ddwcpos-outlet-email"><?php esc_html_e( 'Email', 'ddwc-multipos' ); ?> <abbr class="required" title="<?php esc_attr_e( 'Required', 'ddwc-multipos' ); ?>">*</abbr></label>
                                    </th>
                                    <td class="forminp forminp-text">
                                        <?php echo wc_help_tip( esc_html__( 'Enter the email for the outlet.', 'ddwc-multipos' ), true ); ?>
                                        <input type="text" name="ddwcpos_outlet_email" class="regular-text" id="ddwcpos-outlet-email" value="<?php echo esc_attr( $email ); ?>" />
                                    </td>
                                </tr>
                                <tr valign="middle">
                                    <th scope="row" class="titledesc">
                                        <label for="ddwcpos-outlet-payments"><?php esc_html_e( 'Payments', 'ddwc-multipos' ); ?> <abbr class="required" title="<?php esc_attr_e( 'Required', 'ddwc-multipos' ); ?>">*</abbr></label>
                                    </th>
                                    <td class="forminp forminp-text">
                                        <?php echo wc_help_tip( esc_html__( 'Select the payment methods to be enabled for the outlet.', 'ddwc-multipos' ), true ); ?>
                                        <select name="ddwcpos_outlet_payments[]" class="regular-text" id="ddwcpos-outlet-payments" multiple>
                                            <?php
                                            foreach ( $this->ddwcpos_configuration[ 'payment_method' ] as $key => $value ) {
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
                                        <select name="ddwcpos_outlet_invoice" class="regular-text" id="ddwcpos-outlet-invoice">
                                            <?php
                                            foreach ( $this->ddwcpos_configuration[ 'invoices' ] as $key => $value ) {
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
                                        <select name="ddwcpos_outlet_tables[]" class="regular-text" id="ddwcpos-outlet-tables" multiple>
                                            <?php
                                            foreach ( $this->ddwcpos_configuration[ 'tables' ] as $key => $value ) {
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
                                        <select name="ddwcpos_outlet_status" class="regular-text" id="ddwcpos-outlet-status">
                                            <option value="enabled" <?php echo esc_attr( 'enabled' === $status ? 'selected="selected"' : '' ); ?>><?php esc_html_e( 'Enabled', 'ddwc-multipos' ); ?></option>
                                            <option value="disabled" <?php echo esc_attr( 'disabled' === $status ? 'selected="selected"' : '' ); ?>><?php esc_html_e( 'Disabled', 'ddwc-multipos' ); ?></option>
                                        </select>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <p class="submit">
                            <?php wp_nonce_field( 'ddwcpos_nonce_action', 'ddwcpos_nonce' ); ?>
                            <input name="ddwcpos_save_outlet_submit" class="button-primary " type="submit" value="<?php esc_attr_e( 'Save', 'ddwc-multipos' ); ?>">
                        </p>
                    </form>
                </div>
			</div>
            <?php
        }

	}
}
