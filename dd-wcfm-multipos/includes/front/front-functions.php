<?php
/**
 * @author DevDiggers
 * @version 1.0.0
 * This file handles all front end action callbacks.
 */

namespace DDWCMultiPOS\Includes\Front;

use DDWCMultiPOS\Templates\Front;
use DDWCMultiPOS\Helper\Outlet\DDWCPOS_Outlet_Helper;
use DDWCMultiPOS\Helper\Invoice\DDWCPOS_Invoice_Helper;
use Automattic\WooCommerce\Admin\Features\Features;
use DDWCMultiPOS\Helper\Transaction\DDWCPOS_Transaction_Helper;

defined( 'ABSPATH' ) || exit();

if ( ! class_exists( 'DDWCPOS_Front_Functions' ) ) {    
    /**
     * Front functions class
     */
    class DDWCPOS_Front_Functions {
        /**
         * Configuration Variable
         *
         * @var array
         */
        protected $ddwcpos_configuration;

        /**
         * Construct
         */
        public function __construct( $ddwcpos_configuration ) {
            $this->ddwcpos_configuration = $ddwcpos_configuration;
        }

        /**
		 * Add Query Vars function
		 *
		 * @param array $vars
		 * @return array
		 */
		public function ddwcpos_add_query_vars( $vars ) {
			$vars[] = $this->ddwcpos_configuration[ 'endpoint' ];
			$vars[] = $this->ddwcpos_configuration[ 'kitchen_endpoint' ];
            return $vars;
		}

        /**
         * Parse request function
         *
         * @return void
         */
        public function ddwcpos_parse_request( $wp ) {
            if ( array_key_exists( $this->ddwcpos_configuration[ 'endpoint' ], $wp->query_vars ) ) {
                new Front\POS\DDWCPOS_Layout( $this->ddwcpos_configuration );
                exit();
            }
            if ( array_key_exists( $this->ddwcpos_configuration[ 'kitchen_endpoint' ], $wp->query_vars ) ) {
                new Front\Kitchen\DDWCPOS_Kitchen_Layout( $this->ddwcpos_configuration );
                exit();
            }
        }

        /**
         * WP loaded function
         *
         * @return void
         */
        public function ddwcpos_wp_loaded() {
            if ( is_user_logged_in() && preg_match( "/\b\/{$this->ddwcpos_configuration[ 'endpoint' ]}\b/", $_SERVER[ 'REQUEST_URI' ] ) ) {
                $user = wp_get_current_user();
                if ( ! ( in_array( 'ddwcpos_cashier', $user->roles, true ) || in_array( 'administrator', $user->roles, true ) || in_array( 'shop_manager', $user->roles, true ) || in_array( 'wcfm_vendor', $user->roles, true ) || apply_filters( 'ddwcpos_allow_administrator_access_for_pos_to_user', false ) ) ) {
                    wp_safe_redirect( get_permalink( get_option( 'woocommerce_myaccount_page_id' ) ) );
                    exit();
                }
            }
        }

        /**
         * Login failed function
         *
         * @param object $user
         * @return void
         */
        public function ddwcpos_login_failed( $user ) {
            // check what page the login attempt is coming from
            $referrer = ! empty( $_SERVER[ 'HTTP_REFERER' ] ) ? $_SERVER[ 'HTTP_REFERER' ] : '';

            $error = false;

            if ( empty( $_POST[ 'log' ] ) || empty( $_POST[ 'pwd' ] ) ) {
                $error = true;
            }

            if ( strstr( $referrer, '/' . $this->ddwcpos_configuration[ 'endpoint' ] ) !== false && ( $user !== null || $error ) ) {
                $url = site_url( $this->ddwcpos_configuration[ 'endpoint' ] );
                // make sure we don't already have a failed login attempt
                if ( ! strstr( $referrer, '?login=failed' ) ) {
                    // Redirect to the login page and append a querystring of login failed
                    wp_redirect( $url . '?login=failed' );
                } else {
                    wp_redirect( $url );
                }

                exit();
            }
        }

        /**
         * Stop mails at pos end function
         *
         * @param object $order
         * @return void
         */
        public function ddwcpos_stop_mails_at_pos_end( $order ) {
            if ( empty( $this->ddwcpos_configuration[ 'order_mails_enabled' ] ) && ! empty( get_post_meta( $order->get_id(), '_ddwcpos_outlet_id', true ) ) ) {
                remove_action( 'woocommerce_order_status_pending_to_processing_notification', [ WC()->mailer()->emails[ 'WC_Email_New_Order' ], 'trigger' ] );
                remove_action( 'woocommerce_order_status_pending_to_completed_notification', [ WC()->mailer()->emails[ 'WC_Email_New_Order' ], 'trigger' ] );
                remove_action( 'woocommerce_order_status_pending_to_on-hold_notification', [ WC()->mailer()->emails[ 'WC_Email_New_Order' ], 'trigger' ] );
                remove_action( 'woocommerce_order_status_failed_to_processing_notification', [ WC()->mailer()->emails[ 'WC_Email_New_Order' ], 'trigger' ] );
                remove_action( 'woocommerce_order_status_failed_to_completed_notification', [ WC()->mailer()->emails[ 'WC_Email_New_Order' ], 'trigger' ] );
                remove_action( 'woocommerce_order_status_failed_to_on-hold_notification', [ WC()->mailer()->emails[ 'WC_Email_New_Order' ], 'trigger' ] );
                remove_action( 'woocommerce_order_status_cancelled_to_processing_notification', [ WC()->mailer()->emails[ 'WC_Email_New_Order' ], 'trigger' ] );
                remove_action( 'woocommerce_order_status_cancelled_to_completed_notification', [ WC()->mailer()->emails[ 'WC_Email_New_Order' ], 'trigger' ] );
                remove_action( 'woocommerce_order_status_cancelled_to_on-hold_notification', [ WC()->mailer()->emails[ 'WC_Email_New_Order' ], 'trigger' ] );
            }
        }

        /**
		 * Front scripts enqueue function
		 *
		 * @return void
		 */
		public function ddwcpos_front_scripts() {
            global $wp;
            if ( array_key_exists( $this->ddwcpos_configuration[ 'endpoint' ], $wp->query_vars ) ) {
                wp_enqueue_style( 'ddwcpos-login-style', DDWCPOS_PLUGIN_URL . 'assets/css/login.css', [], DDWCPOS_SCRIPT_VERSION );

                wp_enqueue_script( 'ddwcpos-login-script', DDWCPOS_PLUGIN_URL . 'assets/js/login.js', [], DDWCPOS_SCRIPT_VERSION );

                wp_localize_script(
                    'ddwcpos-login-script',
                    'ddwcposLoginObj',
                    [
                        'siteUrl' => esc_url( site_url() ),
                    ]
                );

                if ( is_user_logged_in() ) {
                    $dependencies = apply_filters( 'ddwcpos_modify_pos_script_dependencies', [ 'wp-element' ] );

                    wp_enqueue_style( 'ddwcpos-pos-style', DDWCPOS_PLUGIN_URL . 'assets/css/pos.css', [], DDWCPOS_SCRIPT_VERSION );
                    wp_enqueue_script( 'ddwcpos-pos-script', DDWCPOS_PLUGIN_URL . 'assets/js/pos.js', $dependencies, DDWCPOS_SCRIPT_VERSION );

                    wp_set_script_translations( 'ddwcpos-pos-script', 'ddwc-multipos' );

                    $ddwcpos_configuration = $this->ddwcpos_configuration;
                    $user                  = wp_get_current_user();
                    $tax_display_cart      = get_option( 'woocommerce_tax_display_cart' );
                    $outlet_helper         = new DDWCPOS_Outlet_Helper();
                    $invoice_helper        = new DDWCPOS_Invoice_Helper( $this->ddwcpos_configuration );
                    $site_url              = site_url();

                    $user_data = (array) $user->data;

                    $user_data[ 'first_name' ] = $user->first_name;
                    $user_data[ 'last_name' ]  = $user->last_name;

                    if ( in_array( 'ddwcpos_cashier', $user->roles, true ) ) {
                        $assigned_outlets = get_user_meta( $user->ID, '_ddwcpos_assigned_outlets', true );
                        $assigned_outlets = $outlet_helper->ddwcpos_get_outlet_details_by_ids( $assigned_outlets );
                    } else if ( in_array( 'administrator', $user->roles, true ) || in_array( 'shop_manager', $user->roles, true ) || in_array( 'wcfm_vendor', $user->roles, true ) || apply_filters( 'ddwcpos_allow_administrator_access_for_pos_to_user', false ) ) {
                        if ( in_array( 'wcfm_vendor', $user->roles, true ) ) {
                            $assigned_outlets = $outlet_helper->ddwcpos_get_all_outlets_by_vendor_id( 999999, 0, '', $user->ID );
                        } else {
                            $assigned_outlets = $outlet_helper->ddwcpos_get_all_outlets( 999999, 0, '' );
                        }
                    }

                    if ( 'excl' !== $tax_display_cart ) {
                        $tax_label = ' <small class="tax_label">' . WC()->countries->inc_tax_or_vat() . '</small>';
                    } else {
                        $tax_label = ' <small class="tax_label">' . WC()->countries->ex_tax_or_vat() . '</small>';
                    }

                    $order_status = wc_get_order_statuses();

                    $ddwcpos_configuration[ 'tax_included_label' ]  = WC()->countries->inc_tax_or_vat();
                    $ddwcpos_configuration[ 'tax_label' ]           = $tax_label;
                    $ddwcpos_configuration[ 'current_date' ]        = current_time( 'Y-m-d' );
                    $ddwcpos_configuration[ 'per_page' ]            = 200;
                    $ddwcpos_configuration[ 'invoice_html' ]        = $invoice_helper->ddwcpos_get_invoice_html();
                    $ddwcpos_configuration[ 'invoice_css' ]         = $invoice_helper->ddwcpos_get_invoice_css();
                    $ddwcpos_configuration[ 'placeholder_image' ]   = wc_placeholder_img_src();
                    $ddwcpos_configuration[ 'language_attributes' ] = get_language_attributes( 'html' );
                    $ddwcpos_configuration[ 'order_status_label' ]  = $order_status[ $ddwcpos_configuration[ 'order_status' ] ];
                    $ddwcpos_configuration[ 'logo_url' ]            = ! empty( $ddwcpos_configuration[ 'logo' ] ) ? wp_get_attachment_url( $ddwcpos_configuration[ 'logo' ] ) : DDWCPOS_PLUGIN_URL . 'assets/images/logo.png';

                    $api = [
                        'GET_PRODUCTS_ENDPOINT'            => $site_url . '/wp-json/ddwcpos/v1/get-products',
                        'GET_CATEGORIES_ENDPOINT'          => $site_url . '/wp-json/ddwcpos/v1/get-product-categories',
                        'GET_CUSTOMERS_ENDPOINT'           => $site_url . '/wp-json/ddwcpos/v1/get-customers',
                        'GET_COUNTRIES_STATES_ENDPOINT'    => $site_url . '/wp-json/ddwcpos/v1/get-countries-states',
                        'CHECK_COUPON_ENDPOINT'            => $site_url . '/wp-json/ddwcpos/v1/check-coupon',
                        'CHECK_CENTRALIZED_STOCK_ENDPOINT' => $site_url . '/wp-json/ddwcpos/v1/check-centralized-stock',
                        'MANAGE_CUSTOMER_ENDPOINT'         => $site_url . '/wp-json/ddwcpos/v1/manage-customer',
                        'DELETE_CUSTOMER_ENDPOINT'         => $site_url . '/wp-json/ddwcpos/v1/delete-customer',
                        'CREATE_REFUND_ENDPOINT'           => $site_url . '/wp-json/ddwcpos/v1/create-refund',
                        'CREATE_ORDER_ENDPOINT'            => $site_url . '/wp-json/ddwcpos/v1/create-order',
                        'GET_ORDERS_ENDPOINT'              => $site_url . '/wp-json/ddwcpos/v1/get-orders',
                        'SAVE_CASHIER_ENDPOINT'            => $site_url . '/wp-json/ddwcpos/v1/save-cashier',
                        'GET_TRANSACTIONS_ENDPOINT'        => $site_url . '/wp-json/ddwcpos/v1/get-transactions',
                        'CREATE_TRANSACTION_ENDPOINT'      => $site_url . '/wp-json/ddwcpos/v1/create-transaction',
                        'MANAGE_KITCHEN_ORDERS_ENDPOINT'   => $site_url . '/wp-json/ddwcpos/v1/manage-kitchen-orders',
                    ];					

                    $parsed_url = parse_url( $site_url, PHP_URL_PATH );

                    wp_localize_script(
                        'ddwcpos-pos-script',
                        'ddwcposPOSObj',
                        [
                            'ajax'                         => [
                                'ajaxUrl'   => admin_url( 'admin-ajax.php' ),
                                'ajaxNonce' => wp_create_nonce( 'ddwcpos-nonce' ),
                            ],
                            'site_url'                     => $site_url,
                            'siteUrl'                      => $parsed_url ? $parsed_url : '',
                            'assignedOutlets'              => ! empty( $assigned_outlets ) ? $assigned_outlets : [],
                            'ddwcpos_configuration'        => $ddwcpos_configuration,
                            'user'                         => $user_data,
                            'API'                          => $api,
                            'currency_format_num_decimals' => esc_attr( wc_get_price_decimals() ),
                            'currency_format_symbol'       => get_woocommerce_currency_symbol(),
                            'currency_code'                => get_woocommerce_currency(),
                            'currency_format_decimal_sep'  => esc_attr( wc_get_price_decimal_separator() ),
                            'currency_format_thousand_sep' => esc_attr( wc_get_price_thousand_separator() ),
                            'currency_format'              => esc_attr( str_replace( [ '%1$s', '%2$s' ], [ '%s', '%v' ], get_woocommerce_price_format() ) ),
                            'logout_url'                   => wp_logout_url( site_url( $ddwcpos_configuration[ 'endpoint' ] ) ),
                            'tax_enabled'                  => get_option( 'woocommerce_calc_taxes' ),
                            'tax_type'                     => get_option( 'woocommerce_prices_include_tax' ),
                            'tax_display_cart'             => $tax_display_cart,
                            'weight_unit'                  => get_option( 'woocommerce_weight_unit' ),
                            'current_date'                 => apply_filters( 'ddwcpos_modify_current_date_for_pos_transactions', current_time( 'Y-m-d' ) ),
                            'plugin_url'                   => DDWCPOS_PLUGIN_URL,
                            'plugin_file'                  => DDWCPOS_PLUGIN_FILE,
                        ]
                    );
                }
			} else if ( array_key_exists( $this->ddwcpos_configuration[ 'kitchen_endpoint' ], $wp->query_vars ) ) {
                wp_enqueue_style( 'ddwcpos-login-style', DDWCPOS_PLUGIN_URL . 'assets/css/login.css', [], DDWCPOS_SCRIPT_VERSION );
                wp_enqueue_style( 'ddwcpos-kitchen-style', DDWCPOS_PLUGIN_URL . 'assets/css/kitchen.css', [], DDWCPOS_SCRIPT_VERSION );
                wp_enqueue_script( 'ddwcpos-kitchen-script', DDWCPOS_PLUGIN_URL . 'assets/js/kitchen.js', [ 'wp-element' ], DDWCPOS_SCRIPT_VERSION );

                wp_set_script_translations( 'ddwcpos-kitchen-script', 'ddwc-multipos' );

                $site_url              = site_url();
                $ddwcpos_configuration = $this->ddwcpos_configuration;

                $ddwcpos_configuration[ 'placeholder_image' ] = wc_placeholder_img_src();

                $api = [
                    'MANAGE_KITCHEN_ORDERS_ENDPOINT' => $site_url . '/wp-json/ddwcpos/v1/manage-kitchen-orders',
                ];					

                wp_localize_script(
                    'ddwcpos-kitchen-script',
                    'ddwcposKitchenObj',
                    [
                        'ajax'                  => [
                            'ajaxUrl'   => admin_url( 'admin-ajax.php' ),
                            'ajaxNonce' => wp_create_nonce( 'ddwcpos-nonce' ),
                        ],
                        'ddwcpos_configuration' => $ddwcpos_configuration,
                        'API'                   => $api,
                    ]
                );
            }

            $user = wp_get_current_user();

            if ( in_array( 'wcfm_vendor', $user->roles, true ) ) {
                wp_register_style( 'jquery-ui', plugins_url() . '/woocommerce/assets/css/jquery-ui/jquery-ui.min.css', [], DDWCPOS_SCRIPT_VERSION );

                wp_register_script( 'jquery-tiptip', WC()->plugin_url() . '/assets/js/jquery-tiptip/jquery.tipTip.min.js', [ 'jquery' ], DDWCPOS_SCRIPT_VERSION, true );

                wp_register_style( 'ddwcpos-wcfm-style', DDWCPOS_PLUGIN_URL . 'assets/css/wcfm.css', [ 'dashicons' ], DDWCPOS_SCRIPT_VERSION );
                wp_register_script( 'ddwcpos-wcfm-script', DDWCPOS_PLUGIN_URL . 'assets/js/wcfm.js', [ 'select2', 'wp-util' ], DDWCPOS_SCRIPT_VERSION );

                wp_register_script( 'tinymce_js', includes_url( 'js/tinymce/' ) . 'wp-tinymce.php', [ 'jquery' ], DDWCPOS_SCRIPT_VERSION, true );

                wp_register_style( 'codemirror', DDWCPOS_PLUGIN_URL . 'assets/css/codemirror.css', [], DDWCPOS_SCRIPT_VERSION );

                wp_register_script( 'codemirror', DDWCPOS_PLUGIN_URL . 'assets/js/codemirror.js', [], DDWCPOS_SCRIPT_VERSION );

                wp_localize_script(
                    'ddwcpos-wcfm-script',
                    'ddwcposWCFMObj',
                    [
                        'ajax' => [
                            'ajaxUrl'   => admin_url( 'admin-ajax.php' ),
                            'ajaxNonce' => wp_create_nonce( 'ddwcpos-nonce' ),
                        ],
                        'i18n' => [
                            'pleaseEnter'          => esc_html__( 'Please enter', 'ddwc-multipos' ),
                            'moreCharacter'        => esc_html__( 'or more character', 'ddwc-multipos' ),
                            'noResult'             => esc_html__( 'No result Found', 'ddwc-multipos' ),
                            'uploadIcon'           => esc_html__( 'Upload Icon', 'ddwc-multipos' ),
                            'barcodeError'         => esc_html__( 'Barcode field is empty.', 'ddwc-multipos' ),
                            'barcodeQuantityError' => esc_html__( 'Barcode quantity field is empty.', 'ddwc-multipos' ),
                            'customStockError'     => esc_html__( 'Custom stock value is invalid.', 'ddwc-multipos' ),
                        ],
                        'ddwcpos_configuration' => $this->ddwcpos_configuration,
                        'siteReferer'           => ! empty( $_SERVER[ 'HTTP_REFERER' ] ) ? strpos( $_SERVER[ 'HTTP_REFERER' ], 'ddwcpos-cashiers' ) : false,
                    ]
                );

                $scripts = [
                    'wc-explat',
                    'wc-experimental',
                    'wc-customer-effort-score',
                    // NOTE: This should be removed when Gutenberg is updated and the notices package is removed from WooCommerce Admin.
                    'wc-notices',
                    'wc-number',
                    'wc-tracks',
                    'wc-date',
                    'wc-components',
                    WC_ADMIN_APP,
                    'wc-csv',
                    'wc-store-data',
                    'wc-currency',
                    'wc-navigation',
                ];

                $scripts_map = [
                    WC_ADMIN_APP    => 'app',
                    'wc-csv'        => 'csv-export',
                    'wc-store-data' => 'data',
                ];

                $translated_scripts = [
                    'wc-currency',
                    'wc-date',
                    'wc-components',
                    'wc-customer-effort-score',
                    WC_ADMIN_APP,
                ];

                foreach ( $scripts as $script ) {
                    $script_path_name = isset( $scripts_map[ $script ] ) ? $scripts_map[ $script ] : str_replace( 'wc-', '', $script );

                    try {
                        $script_assets_filename = self::get_script_asset_filename( $script_path_name, 'index' );
                        $script_assets          = require WC_ADMIN_ABSPATH . WC_ADMIN_DIST_JS_FOLDER . $script_path_name . '/' . $script_assets_filename;

                        wp_register_script(
                            $script,
                            self::get_url( $script_path_name . '/index', 'js' ),
                            $script_assets[ 'dependencies' ],
                            DDWCPOS_SCRIPT_VERSION,
                            true
                        );

                        if ( in_array( $script, $translated_scripts, true ) ) {
                            wp_set_script_translations( $script, 'woocommerce' );
                        }
                    } catch ( \Exception $e ) {
                        // Avoid crashing WordPress if an asset file could not be loaded.
                        wc_caught_exception( $e, __CLASS__ . '::' . __FUNCTION__, $script_path_name );
                    }
                }

                wp_register_style(
                    'wc-components',
                    self::get_url( 'components/style', 'css' ),
                    [],
                    DDWCPOS_SCRIPT_VERSION
                );
                wp_style_add_data( 'wc-components', 'rtl', 'replace' );

                wp_register_style(
                    'wc-customer-effort-score',
                    self::get_url( 'customer-effort-score/style', 'css' ),
                    [],
                    DDWCPOS_SCRIPT_VERSION
                );
                wp_style_add_data( 'wc-customer-effort-score', 'rtl', 'replace' );

                wp_register_style(
                    'wc-experimental',
                    self::get_url( 'experimental/style', 'css' ),
                    [],
                    DDWCPOS_SCRIPT_VERSION
                );
                wp_style_add_data( 'wc-experimental', 'rtl', 'replace' );

                wp_localize_script(
                    WC_ADMIN_APP,
                    'wcAdminAssets',
                    [
                        'path'    => plugins_url( self::get_path( 'js' ), WC_ADMIN_PLUGIN_FILE ),
                        'version' => DDWCPOS_SCRIPT_VERSION,
                    ]
                );

                wp_register_style(
                    WC_ADMIN_APP,
                    self::get_url( 'app/style', 'css' ),
                    [ 'wc-components', 'wc-customer-effort-score', 'wp-components', 'wc-experimental' ],
                    DDWCPOS_SCRIPT_VERSION
                );
                wp_style_add_data( WC_ADMIN_APP, 'rtl', 'replace' );

                wp_register_style(
                    'wc-onboarding',
                    self::get_url( 'onboarding/style', 'css' ),
                    [],
                    DDWCPOS_SCRIPT_VERSION
                );
                wp_style_add_data( 'wc-onboarding', 'rtl', 'replace' );

                wp_register_style( 'ddwcpos-reports-style', DDWCPOS_PLUGIN_URL . 'assets/css/reports.css', [ 'wp-components', 'wc-components' ], DDWCPOS_SCRIPT_VERSION );

                wp_register_script( 'ddwcpos-reports-script', DDWCPOS_PLUGIN_URL . 'assets/js/reports.js', [ 'wc-components', 'wp-mediaelement' ], DDWCPOS_SCRIPT_VERSION );

                wp_set_script_translations( 'ddwcpos-reports-script', 'ddwc-multipos' );

                $code          = get_woocommerce_currency();
                $outlet_helper = new DDWCPOS_Outlet_Helper();
                $outlets       = $outlet_helper->ddwcpos_get_all_outlets_by_vendor_id( 999999, 0, '', get_current_user_id() );
                $site_url      = site_url();
                $parsed_url    = parse_url( $site_url, PHP_URL_PATH );

                $wcfm_modified_endpoints = (array) get_option( 'wcfm_endpoints' );

                global $WCFM_Query;

                // ddwcpos_get_wfcm_custom_menus_url( 'ddwcpos-analytics' );

                wp_localize_script(
                    'ddwcpos-reports-script',
                    'ddwcposReportsObj',
                    [
                        'SITE_URL' => $site_url,
                        'siteUrl'  => ( $parsed_url ? $parsed_url : '' ) . "/store-manager/" . ( ! empty( $WCFM_Query->query_vars[ 'ddwcpos-analytics' ] ) ? $WCFM_Query->query_vars[ 'ddwcpos-analytics' ] : 'ddwcpos-analytics' ),
                        'user_id'  => get_current_user_id(),
                        'outlets'  => $outlets,
                        'currency' => [
                            'code'              => $code,
                            'precision'         => wc_get_price_decimals(),
                            'symbol'            => html_entity_decode( get_woocommerce_currency_symbol( $code ) ),
                            'symbolPosition'    => get_option( 'woocommerce_currency_pos' ),
                            'decimalSeparator'  => wc_get_price_decimal_separator(),
                            'thousandSeparator' => wc_get_price_thousand_separator(),
                            'priceFormat'       => html_entity_decode( get_woocommerce_price_format() ),
                        ],
                    ]
                );
            }
		}

        /**
         * Determines if a minified JS file should be served.
         *
         * @param  boolean $script_debug Only serve unminified files if script debug is on.
         * @return boolean If js asset should use minified version.
         */
        public static function should_use_minified_js_file( $script_debug ) {
            // minified files are only shipped in non-core versions of wc-admin, return false if minified files are not available.
            if ( ! Features::exists( 'minified-js' ) ) {
                return false;
            }

            // Otherwise we will serve un-minified files if SCRIPT_DEBUG is on, or if anything truthy is passed in-lieu of SCRIPT_DEBUG.
            return ! $script_debug;
        }

        /**
         * Gets the URL to an asset file.
         *
         * @param  string $file File name (without extension).
         * @param  string $ext File extension.
         * @return string URL to asset.
         */
        public static function get_url( $file, $ext ) {
            $suffix = '';

            // Potentially enqueue minified JavaScript.
            if ( 'js' === $ext ) {
                $script_debug = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG;
                $suffix       = self::should_use_minified_js_file( $script_debug ) ? '.min' : '';
            }

            return plugins_url( self::get_path( $ext ) . $file . $suffix . '.' . $ext, WC_ADMIN_PLUGIN_FILE );
        }

        /**
         * Gets the path for the asset depending on file type.
         *
         * @param  string $ext File extension.
         * @return string Folder path of asset.
         */
        private static function get_path( $ext ) {
            return ( 'css' === $ext ) ? WC_ADMIN_DIST_CSS_FOLDER : WC_ADMIN_DIST_JS_FOLDER;
        }

        /**
         * Gets a script asset registry filename. The asset registry lists dependencies for the given script.
         *
         * @param  string $script_path_name Path to where the script asset registry is contained.
         * @param  string $file File name (without extension).
         * @return string complete asset filename.
         *
         * @throws \Exception Throws an exception when a readable asset registry file cannot be found.
         */
        public static function get_script_asset_filename( $script_path_name, $file ) {
            $minification_supported = Features::exists( 'minified-js' );
            $script_min_filename    = $file . '.min.asset.php';
            $script_nonmin_filename = $file . '.asset.php';
            $script_asset_path      = WC_ADMIN_ABSPATH . WC_ADMIN_DIST_JS_FOLDER . $script_path_name . '/';

            // Check minification is supported first, to avoid multiple is_readable checks when minification is
            // not supported.
            if ( $minification_supported && is_readable( $script_asset_path . $script_min_filename ) ) {
                return $script_min_filename;
            } elseif ( is_readable( $script_asset_path . $script_nonmin_filename ) ) {
                return $script_nonmin_filename;
            } else {
                // could not find an asset file, throw an error.
                throw new \Exception( 'Could not find asset registry for ' . $script_path_name );
            }
        }

        /**
         * Deregister front scripts function
         *
         * @return void
         */
        public function ddwcpos_deregister_front_scripts() {
            global $wp;
            if ( array_key_exists( $this->ddwcpos_configuration[ 'endpoint' ], $wp->query_vars ) || array_key_exists( $this->ddwcpos_configuration[ 'kitchen_endpoint' ], $wp->query_vars ) ) {
                global $wp_styles, $wp_scripts;
                $styles = apply_filters( 'ddwcpos_modify_css_handles', [ 'ddwcpos-login-style', 'ddwcpos-pos-style', 'ddwcpos-variables-style', 'ddwcpos-kitchen-style' ] );
                foreach ( $wp_styles->queue as $s ) {
                    if ( ! in_array( $s, $styles, true ) && ! empty( $wp_styles->registered[ $s ] ) ) {
                        wp_dequeue_style( $wp_styles->registered[$s]->handle );
                        wp_deregister_style( $wp_styles->registered[$s]->handle );
                    }
                }

                $scripts = apply_filters( 'ddwcpos_modify_js_handles', [ 'ddwcpos-login-script', 'ddwcpos-pos-script', 'ddwcpos-kitchen-script' ] );
                foreach ( $wp_scripts->queue as $s ) {
                    if ( ! in_array( $s, $scripts, true ) && ! empty( $wp_scripts->registered[ $s ] ) ) {
                        wp_dequeue_script( $wp_scripts->registered[$s]->handle );
                        wp_deregister_script( $wp_scripts->registered[$s]->handle );
                    }
                }
            }
        }
    }
}
