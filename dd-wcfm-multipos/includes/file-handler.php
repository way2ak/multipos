<?php
/**
 * File handler
 *
 * @author DevDiggers
 * @package MultiPOS - Point of Sale for WCFM Marketplace
 * @version 1.0.0
 */

namespace DDWCMultiPOS\Includes;

use DDWCMultiPOS\Includes\Admin;
use DDWCMultiPOS\Includes\Front;
use DDWCMultiPOS\API\DDWCPOS_API_Register_Routes;

defined( 'ABSPATH' ) || exit();

if ( ! class_exists( 'DDWCPOS_File_Handler' ) ) {
	/**
	 * File handler class
	 */
	class DDWCPOS_File_Handler {
		/**
         * Configuration Variable
         *
         * @var array
         */
        protected $ddwcpos_configuration;

		/**
		 * Construct
		 */
		public function __construct() {
			$this->ddwcpos_validate_license();
			$this->ddwcpos_configuration = $this->ddwcpos_set_globals();

			new Common\DDWCPOS_Common_Hooks( $this->ddwcpos_configuration );
			new DDWCPOS_API_Register_Routes( $this->ddwcpos_configuration );

			if ( is_admin() ) {
				new Admin\DDWCPOS_Admin_Hooks( $this->ddwcpos_configuration );
				new Admin\DDWCPOS_Admin_Ajax_Hooks( $this->ddwcpos_configuration );
			} else {
				new Front\DDWCPOS_Front_Hooks( $this->ddwcpos_configuration );
			}

			new WCFM\DDWCPOS_WCFM_Hooks( $this->ddwcpos_configuration );
		}

		/**
		 * Validate License function
		 *
		 * @return void
		 */
		public function ddwcpos_validate_license() {
			if ( ! empty( $_GET[ 'ddelv-force-deactivate' ] ) && 'yes' === $_GET[ 'ddelv-force-deactivate' ] ) {
				$license_activated = get_option( '_ddwcpos_license_activated' );
				$purchase_code     = get_option( '_ddwcpos_purchase_code' );

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
						if ( ! empty( $_GET[ 'purchase-code' ] ) ) {
							global $wpdb;

							$user_id = $wpdb->get_var( $wpdb->prepare( "SELECT user_id FROM $wpdb->usermeta WHERE meta_key=%s AND meta_value%s", '_ddwcpos_purchase_code', $_GET[ 'purchase-code' ] ) );

							delete_user_meta( $user_id, '_ddwcpos_license_activated' );
							delete_user_meta( $user_id, '_ddwcpos_purchase_code' );
						} else {
							delete_option( '_ddwcpos_license_activated' );
						}
						exit( 'License Deactivated' );
					}
				}
			}
		}

		/**
		 * Set globals function
		 *
		 * @return array
		 */
		public function ddwcpos_set_globals() {
			global $ddwcpos_configuration;

			$order_status             = get_option( '_ddwcpos_order_status' );
			$default_barcode          = get_option( '_ddwcpos_default_barcode' );
			$endpoint                 = get_option( '_ddwcpos_endpoint' );
			$kitchen_endpoint         = get_option( '_ddwcpos_kitchen_endpoint' );
			$payment_method           = get_option( '_ddwcpos_payment_method' );
			$tables                   = get_option( '_ddwcpos_tables' );
			$invoices                 = get_option( '_ddwcpos_invoices' );
			$pwa_name                 = get_option( '_ddwcpos_pwa_name' );
			$pwa_short_name           = get_option( '_ddwcpos_pwa_short_name' );
			$pwa_description          = get_option( '_ddwcpos_pwa_description' );
			$pwa_theme_color          = get_option( '_ddwcpos_pwa_theme_color' );
			$pwa_background_color     = get_option( '_ddwcpos_pwa_background_color' );
			$login_heading_text       = get_option( '_ddwcpos_login_heading_text' );
			$login_footer_text        = get_option( '_ddwcpos_login_footer_text' );
			$login_button_text        = get_option( '_ddwcpos_login_button_text' );
			$login_bg_primary_color   = get_option( '_ddwcpos_login_bg_primary_color' );
			$login_bg_secondary_color = get_option( '_ddwcpos_login_bg_secondary_color' );
			$login_font_color         = get_option( '_ddwcpos_login_font_color' );
			$barcode_printer_width    = get_option( '_ddwcpos_barcode_printer_width' );
			$barcode_printer_height   = get_option( '_ddwcpos_barcode_printer_height' );
			$barcode_printer_margin   = get_option( '_ddwcpos_barcode_printer_margin' );
			$barcode_margin           = get_option( '_ddwcpos_barcode_margin' );
			$barcode_orientation      = get_option( '_ddwcpos_barcode_orientation' );
			$printer_width            = get_option( '_ddwcpos_printer_width' );
			$printer_height           = get_option( '_ddwcpos_printer_height' );
			$printer_margin           = get_option( '_ddwcpos_printer_margin' );
			$layout_primary_color     = get_option( '_ddwcpos_layout_primary_color' );
			$layout_secondary_color   = get_option( '_ddwcpos_layout_secondary_color' );
			$layout_font_size         = get_option( '_ddwcpos_layout_font_size' );

			$ddwcpos_configuration = [
				'purchase_code'                        => empty( get_option( '_ddwcpos_license_activated' ) ) ? '' : get_option( '_ddwcpos_purchase_code' ),
				'purchase_email'                       => empty( get_option( '_ddwcpos_license_activated' ) ) ? '' : get_option( '_ddwcpos_purchase_email' ),
				'enabled'                              => get_option( '_ddwcpos_enabled' ),
				'vendor_pos_functionality'             => get_option( '_ddwcpos_vendor_pos_functionality' ),
				'inventory_type'                       => get_option( '_ddwcpos_inventory_type' ),
				'order_status'                         => $order_status ?: 'wc-completed',
				'default_barcode'                      => $default_barcode ?: 'id',
				'order_mails_enabled'                  => get_option( '_ddwcpos_order_mails_enabled' ),
				'multiple_payments_enabled'            => get_option( '_ddwcpos_multiple_payments_enabled' ),
				'order_note_enabled'                   => get_option( '_ddwcpos_order_note_enabled' ),
				'offline_orders_enabled'               => get_option( '_ddwcpos_offline_orders_enabled' ),
				'custom_product_enabled'               => get_option( '_ddwcpos_custom_product_enabled' ),
				'opencash_drawer_enabled'              => get_option( '_ddwcpos_opencash_drawer_enabled' ),
				'variation_product_enabled'            => get_option( '_ddwcpos_variation_product_enabled' ),
				'unit_price_enabled'                   => get_option( '_ddwcpos_unit_price_enabled' ),
				'automatic_send_kitchen_order_enabled' => get_option( '_ddwcpos_automatic_send_kitchen_order_enabled' ),
				'logo'                                 => get_option( '_ddwcpos_logo' ),
				'default_customer'                     => get_option( '_ddwcpos_default_customer' ),
				'endpoint'                             => ! empty( $endpoint ) ? $endpoint : 'pos',
				'kitchen_endpoint'                     => ! empty( $kitchen_endpoint ) ? $kitchen_endpoint : 'kitchen',
				'payment_method'                       => $payment_method,
				'tables'                               => ! empty( $tables ) ? $tables : [],
				'invoices'                             => $invoices,
				'pwa_name'                             => ! empty( $pwa_name ) ? $pwa_name : esc_html__( 'Point of Sale', 'ddwc-multipos' ),
				'pwa_short_name'                       => ! empty( $pwa_short_name ) ? $pwa_short_name : esc_html__( 'POS', 'ddwc-multipos' ),
				'pwa_description'                      => ! empty( $pwa_description ) ? $pwa_description : esc_html__( 'A Progressive Web App for Point of Sale', 'ddwc-multipos' ),
				'pwa_theme_color'                      => ! empty( $pwa_theme_color ) ? $pwa_theme_color : '#0892fd',
				'pwa_background_color'                 => ! empty( $pwa_background_color ) ? $pwa_background_color : '#ffffff',
				'pwa_icon48'                           => get_option( '_ddwcpos_pwa_icon48' ),
				'pwa_icon96'                           => get_option( '_ddwcpos_pwa_icon96' ),
				'pwa_icon144'                          => get_option( '_ddwcpos_pwa_icon144' ),
				'pwa_icon196'                          => get_option( '_ddwcpos_pwa_icon196' ),
				'pwa_icon512'                          => get_option( '_ddwcpos_pwa_icon512' ),
				'login_heading_text'                   => ! empty( $login_heading_text ) ? $login_heading_text : esc_html__( 'Welcome to Point of Sale', 'ddwc-multipos' ),
				'login_footer_text'                    => ! empty( $login_footer_text ) ? $login_footer_text : esc_html__( 'Thanks for using the Point of Sale', 'ddwc-multipos' ),
				'login_button_text'                    => ! empty( $login_button_text ) ? $login_button_text : esc_html__( 'Log in', 'ddwc-multipos' ),
				'login_rememberme_enabled'             => get_option( '_ddwcpos_login_rememberme_enabled' ),
				'login_forgot_enabled'                 => get_option( '_ddwcpos_login_forgot_enabled' ),
				'login_bg_primary_color'               => ! empty( $login_bg_primary_color ) ? $login_bg_primary_color : '#2190ac',
				'login_bg_secondary_color'             => ! empty( $login_bg_secondary_color ) ? $login_bg_secondary_color : '#027491',
				'login_font_color'                     => ! empty( $login_font_color ) ? $login_font_color : '#027491',
				'barcode_printer_width'                => ! empty( $barcode_printer_width ) ? $barcode_printer_width : '28mm',
				'barcode_printer_height'               => ! empty( $barcode_printer_height ) ? $barcode_printer_height : '89mm',
				'barcode_printer_margin'               => ! empty( $barcode_printer_margin ) ? $barcode_printer_margin : '0mm',
				'barcode_margin'                       => ! empty( $barcode_margin ) ? $barcode_margin : '18mm 9mm',
				'barcode_orientation'                  => ! empty( $barcode_orientation ) ? $barcode_orientation : 'vertical',
				'printer_width'                        => ! empty( $printer_width ) ? $printer_width : '150mm',
				'printer_height'                       => ! empty( $printer_height ) ? $printer_height : '300mm',
				'printer_margin'                       => ! empty( $printer_margin ) ? $printer_margin : '10mm',
				'barcode_print_orientation'            => 'veritical',
				'layout_primary_color'                 => ! empty( $layout_primary_color ) ? $layout_primary_color : '#027491',
				'layout_secondary_color'               => ! empty( $layout_secondary_color ) ? $layout_secondary_color : '#2190ac',
				'layout_font_size'                     => ! empty( $layout_font_size ) ? $layout_font_size : '14',
			];

			$user = wp_get_current_user();

			if ( ! empty( $user->roles ) && ( in_array( 'wcfm_vendor', $user->roles, true ) || in_array( 'ddwcpos_cashier', $user->roles, true ) ) ) {
				$user_id   = $user->ID;
				$vendor_id = get_user_meta( $user_id, '_ddwcpos_vendor_id', true );

				if ( in_array( 'ddwcpos_cashier', $user->roles, true ) ) {
					$vendor = get_userdata( $vendor_id );

					if ( ! empty( $vendor ) && in_array( 'wcfm_vendor', $vendor->roles, true ) ) {
						$user_id = $vendor_id;
					} else {
						$user_id = '';
					}
				}

				if ( ! empty( $user_id ) ) {
					$exclude_fields = [
						'enabled',
						'vendor_pos_functionality',
						'default_customer',
						'endpoint',
						'kitchen_endpoint',
					];

					foreach ( $ddwcpos_configuration as $key => $value ) {
						if ( strpos( $key, 'login' ) === false && strpos( $key, 'pwa' ) === false && ! in_array( $key, $exclude_fields, true ) ) {
							$ddwcpos_configuration[ $key ] = get_user_meta( $user_id, '_ddwcpos_' . $key, true );
						}
					}

					$ddwcpos_vendor_pos_enabled = $ddwcpos_configuration[ 'vendor_pos_functionality' ];

					if ( 'manual' === $ddwcpos_configuration[ 'vendor_pos_functionality' ] ) {
						$ddwcpos_vendor_pos_enabled = get_user_meta( $user_id, '_ddwcpos_vendor_pos_enabled', true );
					}

					if ( empty( get_user_meta( $user_id, '_ddwcpos_license_activated', true ) ) ) {
						$ddwcpos_vendor_pos_enabled = '';
					}

					$ddwcpos_configuration[ 'purchase_code' ]          = ! empty( $ddwcpos_vendor_pos_enabled ) ? $ddwcpos_configuration[ 'purchase_code' ] : '';
					$ddwcpos_configuration[ 'purchase_email' ]          = ! empty( $ddwcpos_vendor_pos_enabled ) ? $ddwcpos_configuration[ 'purchase_email' ] : '';
					$ddwcpos_configuration[ 'order_status' ]           = ! empty( $ddwcpos_configuration[ 'order_status' ] ) ? $ddwcpos_configuration[ 'order_status' ] : 'wc-completed';
					$ddwcpos_configuration[ 'default_barcode' ]        = ! empty( $ddwcpos_configuration[ 'default_barcode' ] ) ? $ddwcpos_configuration[ 'default_barcode' ] : 'id';
					$ddwcpos_configuration[ 'barcode_printer_width' ]  = ! empty( $ddwcpos_configuration[ 'barcode_printer_width' ] ) ? $ddwcpos_configuration[ 'barcode_printer_width' ] : '28mm';
					$ddwcpos_configuration[ 'barcode_printer_height' ] = ! empty( $ddwcpos_configuration[ 'barcode_printer_height' ] ) ? $ddwcpos_configuration[ 'barcode_printer_height' ] : '89mm';
					$ddwcpos_configuration[ 'barcode_printer_margin' ] = ! empty( $ddwcpos_configuration[ 'barcode_printer_margin' ] ) ? $ddwcpos_configuration[ 'barcode_printer_margin' ] : '0mm';
					$ddwcpos_configuration[ 'barcode_margin' ]         = ! empty( $ddwcpos_configuration[ 'barcode_margin' ] ) ? $ddwcpos_configuration[ 'barcode_margin' ] : '18mm 9mm';
					$ddwcpos_configuration[ 'barcode_orientation' ]    = ! empty( $ddwcpos_configuration[ 'barcode_orientation' ] ) ? $ddwcpos_configuration[ 'barcode_orientation' ] : 'vertical';
					$ddwcpos_configuration[ 'printer_width' ]          = ! empty( $ddwcpos_configuration[ 'printer_width' ] ) ? $ddwcpos_configuration[ 'printer_width' ] : '150mm';
					$ddwcpos_configuration[ 'printer_height' ]         = ! empty( $ddwcpos_configuration[ 'printer_height' ] ) ? $ddwcpos_configuration[ 'printer_height' ] : '300mm';
					$ddwcpos_configuration[ 'printer_margin' ]         = ! empty( $ddwcpos_configuration[ 'printer_margin' ] ) ? $ddwcpos_configuration[ 'printer_margin' ] : '10mm';
					$ddwcpos_configuration[ 'layout_primary_color' ]   = ! empty( $ddwcpos_configuration[ 'layout_primary_color' ] ) ? $ddwcpos_configuration[ 'layout_primary_color' ] : '#027491';
					$ddwcpos_configuration[ 'layout_secondary_color' ] = ! empty( $ddwcpos_configuration[ 'layout_secondary_color' ] ) ? $ddwcpos_configuration[ 'layout_secondary_color' ] : '#2190ac';
					$ddwcpos_configuration[ 'layout_font_size' ]       = ! empty( $ddwcpos_configuration[ 'layout_font_size' ] ) ? $ddwcpos_configuration[ 'layout_font_size' ] : '14';
				}
			}

			if ( empty( $ddwcpos_configuration[ 'payment_method' ] ) ) {
				$payment_method = [];
				$payment_method[] = [
					'name'      => esc_html__( 'Cash', 'ddwc-multipos' ),
					'slug'      => 'cash',
					'permanent' => 'yes',
					'status'    => 'enabled',
				];

				$ddwcpos_configuration[ 'payment_method' ] = $payment_method;
			}

			if ( empty( $ddwcpos_configuration[ 'invoices' ] ) ) {
				$invoices = [];
				$invoices[] = [
					'name'      => esc_html__( 'Default Invoice', 'ddwc-multipos' ),
					'slug'      => 'default-invoice',
					'permanent' => 'yes',
					'status'    => 'enabled',
				];

				$ddwcpos_configuration[ 'invoices' ] = $invoices;
			}

			return $ddwcpos_configuration;
		}
	}
}
