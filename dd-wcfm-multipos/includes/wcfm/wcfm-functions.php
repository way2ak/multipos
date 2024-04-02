<?php
/**
 * @author DevDiggers
 * @version 1.0.0
 * This file handles all wcfm end action callbacks.
 */

namespace DDWCMultiPOS\Includes\WCFM;

use DDWCMultiPOS\Templates\Front;
use DDWCMultiPOS\Helper\Outlet\DDWCPOS_Outlet_Helper;
use DDWCMultiPOS\Helper\Invoice\DDWCPOS_Invoice_Helper;
use Automattic\WooCommerce\Admin\Features\Features;
use DDWCMultiPOS\Helper\Transaction\DDWCPOS_Transaction_Helper;

defined( 'ABSPATH' ) || exit();

if ( ! class_exists( 'DDWCPOS_WCFM_Functions' ) ) {    
    /**
     * WCFM functions class
     */
    class DDWCPOS_WCFM_Functions {
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

        //    echo '<pre>';
        //    var_dump( get_user_meta( 99, '_wcfm_vendor', true ) );
        //    echo '</pre><br>';
        //    die;

        }

        /**
         * API product categories different approach by vendor function
         *
         * @param array $categories
         * @param array $request
         * @return array
         */
        public function ddwcpos_api_product_categories_different_approach_by_vendor( $initial, $request ) {
            $outlet_id     = $request[ 'outlet_id' ];
            $outlet_helper = new DDWCPOS_Outlet_Helper();
            $outlet_data   = $outlet_helper->ddwcpos_get_outlet_details_by_id( $outlet_id );
            $outlet_author = get_userdata( $outlet_data[ 'author' ] );

            if ( ! empty( $outlet_author->roles ) && in_array( 'wcfm_vendor', $outlet_author->roles, true ) ) {
                return true;
            }

            return $initial;
        }

        /**
         * API product categories different approach response by vendor function
         *
         * @param array $categories
         * @param array $request
         * @return array
         */
        public function ddwcpos_api_product_categories_different_approach_response_by_vendor( $categories, $request ) {
            $outlet_id     = $request[ 'outlet_id' ];
            $outlet_helper = new DDWCPOS_Outlet_Helper();
            $outlet_data   = $outlet_helper->ddwcpos_get_outlet_details_by_id( $outlet_id );
            $outlet_author = get_userdata( $outlet_data[ 'author' ] );
            $categories    = [];

            if ( ! empty( $outlet_author->roles ) && in_array( 'wcfm_vendor', $outlet_author->roles, true ) ) {
                $store_user        = wcfmmp_get_store( $outlet_author );
                $vendor_categories = $store_user->get_store_taxonomies();

                if ( ! empty( $vendor_categories ) ) {
                    $preferred_taxonomy = 'product_cat';

                    foreach ( $vendor_categories as $vendor_category_id => $vendor_category ) {
                        if ( ! apply_filters( 'wcfm_is_allow_vendor_store_taxomony_by_id', true, $vendor_category_id, $store_user->get_id(), $preferred_taxonomy ) ) {
                            continue;
                        }

                        if ( is_array( $vendor_category ) && ! empty( $vendor_category ) ) {
                            $vendor_term = get_term( absint( $vendor_category_id ), $preferred_taxonomy );

                            $cat_thumbnail_id = get_term_meta( $vendor_term->term_id, 'thumbnail_id', true );
                            $cat_image_url    = wp_get_attachment_url( $cat_thumbnail_id );

                            $categories[] = [
                                'id'     => $vendor_category_id,
                                'name'   => $vendor_term->name,
                                'image'  => $cat_image_url,
                                'parent' => $vendor_term->parent,
                            ];

                            foreach ( $vendor_category as $vendor_category_child_id => $vendor_category_child ) {
                                if ( ! apply_filters( 'wcfm_is_allow_vendor_store_taxomony_by_id', true, $vendor_category_child_id, $store_user->get_id(), $preferred_taxonomy ) ) {
                                    continue;
                                }

                                $vendor_child_term = get_term( absint( $vendor_category_child_id ), $preferred_taxonomy );

                                $cat_thumbnail_id = get_term_meta( $vendor_child_term->term_id, 'thumbnail_id', true );
                                $cat_image_url    = wp_get_attachment_url( $cat_thumbnail_id );

                                $categories[] = [
                                    'id'     => $vendor_category_child_id,
                                    'name'   => $vendor_child_term->name,
                                    'image'  => $cat_image_url,
                                    'parent' => $vendor_child_term->parent,
                                ];
                            }
                        } else {
                            $vendor_term = get_term( absint( $vendor_category ), $preferred_taxonomy );

                            $cat_thumbnail_id = get_term_meta( $vendor_term->term_id, 'thumbnail_id', true );
                            $cat_image_url    = wp_get_attachment_url( $cat_thumbnail_id );

                            $categories[] = [
                                'id'     => $vendor_category,
                                'name'   => $vendor_term->name,
                                'image'  => $cat_image_url,
                                'parent' => $vendor_term->parent,
                            ];
                        }
                    }
                }

                return $categories;
            }
        }

        /**
         * Modify api product categories args by vendor function
         *
         * @param array $args
         * @param array $request
         * @return array
         */
        public function ddwcpos_modify_api_product_categories_args_by_vendor( $args, $request ) {
            $outlet_id     = $request[ 'outlet_id' ];
            $outlet_helper = new DDWCPOS_Outlet_Helper();
            $outlet_data   = $outlet_helper->ddwcpos_get_outlet_details_by_id( $outlet_id );
            $outlet_author = get_userdata( $outlet_data[ 'author' ] );

            if ( ! empty( $outlet_author->roles ) && in_array( 'wcfm_vendor', $outlet_author->roles, true ) ) {
                $wcfm_product_type_categories = wcfm_get_option( 'wcfm_product_type_categories', [] );

                $include_ids = array_merge( ! empty( $wcfm_product_type_categories[ 'simple' ] ) ? $wcfm_product_type_categories[ 'simple' ] : [], ! empty( $wcfm_product_type_categories[ 'variable' ] ) ? $wcfm_product_type_categories[ 'variable' ] : [] );

                $args[ 'include' ] = $include_ids;
            }

            return $args;
        }

        /**
         * Modify customer args by vendor function
         *
         * @param array $args
         * @param array $request
         * @return array
         */
        public function ddwcpos_modify_customer_args_by_vendor( $args, $request ) {
            $outlet_id     = $request[ 'outlet_id' ];
            $outlet_helper = new DDWCPOS_Outlet_Helper();
            $outlet_data   = $outlet_helper->ddwcpos_get_outlet_details_by_id( $outlet_id );
            $outlet_author = get_userdata( $outlet_data[ 'author' ] );

            if ( ! empty( $outlet_author->roles ) && in_array( 'wcfm_vendor', $outlet_author->roles, true ) ) {
                $vendor_id   = apply_filters( 'wcfm_current_vendor_id', $outlet_data[ 'author' ] );

                $args[ 'meta_key' ]   = '_wcfm_vendor';
                $args[ 'meta_value' ] = absint( $vendor_id );

                global $wpdb;

                $vendor_customers = [];

                // Own Customers
                $wcfm_customers_array = get_users( $args );
                if ( ! empty( $wcfm_customers_array ) ) {
                    foreach( $wcfm_customers_array as $user_id ) {
                        $vendor_customers[ $user_id ] = $user_id;
                    }
                }

                // Order Customers
                $sql = 'SELECT customer_id FROM ' . $wpdb->prefix . 'wcfm_marketplace_orders';
                $sql .= ' WHERE 1=1';
                $sql .= " AND `vendor_id` = %d";
                $wcfm_orders_array = $wpdb->get_results( $wpdb->prepare( $sql, $vendor_id ) );

                if ( ! empty( $wcfm_orders_array ) ) {
                    foreach ( $wcfm_orders_array as $wcfm_orders_single ) {
                        if ( $wcfm_orders_single->customer_id ) {
                            $vendor_customers[ $wcfm_orders_single->customer_id ] = $wcfm_orders_single->customer_id;
                        }
                    }
                }

                if ( ! empty( $vendor_customers ) ) {
                    $args[ 'include' ] = array_keys( array_unique( $vendor_customers ) );
                } else {
                    $args[ 'include' ] = [0];
                }

                $args[ 'include' ][] = $this->ddwcpos_configuration[ 'default_customer' ];

                if( isset( $args[ 'meta_key' ] ) ) unset( $args[ 'meta_key' ] );
                if( isset( $args[ 'meta_value' ] ) ) unset( $args[ 'meta_value' ] );
            }

            return $args;
        }

        /**
         * Save customer meta for vendor function
         *
         * @param int $customer_id
         * @param array $customer_data
         * @param array $request
         * @return void
         */
        public function ddwcpos_save_customer_meta_for_vendor( $customer_id, $customer_data, $request ) {
            $outlet_id     = $request[ 'outlet_id' ];
            $outlet_helper = new DDWCPOS_Outlet_Helper();
            $outlet_data   = $outlet_helper->ddwcpos_get_outlet_details_by_id( $outlet_id );
            $outlet_author = get_userdata( $outlet_data[ 'author' ] );

            if ( ! empty( $outlet_author->roles ) && in_array( 'wcfm_vendor', $outlet_author->roles, true ) ) {
                update_user_meta( $customer_id, '_wcfm_vendor', $outlet_data[ 'author' ] );
            }
        }

        /**
         * Modify outlet products args by vendor function
         *
         * @param array $args
         * @param array $request
         * @return array
         */
        public function ddwcpos_modify_outlet_products_args_by_vendor( $args, $request ) {
            $outlet_id     = $request[ 'outlet_id' ];
            $outlet_helper = new DDWCPOS_Outlet_Helper();
            $outlet_data   = $outlet_helper->ddwcpos_get_outlet_details_by_id( $outlet_id );
            $outlet_author = get_userdata( $outlet_data[ 'author' ] );

            if ( ! empty( $outlet_author->roles ) && in_array( 'administrator', $outlet_author->roles, true ) ) {
                $users = get_users( [
                    'role' => 'administrator',
                ] );

                $author_in = [];

                /* foreach ( $users as $user ) {
                    $author_in[] = $user->ID;
                } */
            } else {
                $author_in = [ $outlet_data[ 'author' ] ];
            }

            $args[ 'author__in' ] = $author_in;

            return $args;
        }

        /**
         * WCFM - Custom Menus Query Var
         */
        public function ddwcpos_wcfm_query_vars( $query_vars ) {
            $wcfm_modified_endpoints = (array) get_option( 'wcfm_endpoints' );

            $query_custom_menus_vars = [
                'ddwcpos-analytics'      => ! empty( $wcfm_modified_endpoints[ 'ddwcpos-analytics' ] ) ? $wcfm_modified_endpoints[ 'ddwcpos-analytics' ] : 'ddwcpos-analytics',
                'ddwcpos-outlets'        => ! empty( $wcfm_modified_endpoints[ 'ddwcpos-outlets' ] ) ? $wcfm_modified_endpoints[ 'ddwcpos-outlets' ] : 'ddwcpos-outlets',
                'ddwcpos-manage-outlet'  => ! empty( $wcfm_modified_endpoints[ 'ddwcpos-manage-outlet' ] ) ? $wcfm_modified_endpoints[ 'ddwcpos-manage-outlet' ] : 'ddwcpos-manage-outlet',
                'ddwcpos-cashiers'       => ! empty( $wcfm_modified_endpoints[ 'ddwcpos-cashiers' ] ) ? $wcfm_modified_endpoints[ 'ddwcpos-cashiers' ] : 'ddwcpos-cashiers',
                'ddwcpos-manage-cashier' => ! empty( $wcfm_modified_endpoints[ 'ddwcpos-manage-cashier' ] ) ? $wcfm_modified_endpoints[ 'ddwcpos-manage-cashier' ] : 'ddwcpos-manage-cashier',
                'ddwcpos-tables'         => ! empty( $wcfm_modified_endpoints[ 'ddwcpos-tables' ] ) ? $wcfm_modified_endpoints[ 'ddwcpos-tables' ] : 'ddwcpos-tables',
                'ddwcpos-assign-barcodes' => ! empty( $wcfm_modified_endpoints[ 'ddwcpos-assign-barcodes' ] ) ? $wcfm_modified_endpoints[ 'ddwcpos-assign-barcodes' ] : 'ddwcpos-assign-barcodes',
                'ddwcpos-assign-stocks'   => ! empty( $wcfm_modified_endpoints[ 'ddwcpos-assign-stocks' ] ) ? $wcfm_modified_endpoints[ 'ddwcpos-assign-stocks' ] : 'ddwcpos-assign-stocks',
                'ddwcpos-orders'          => ! empty( $wcfm_modified_endpoints[ 'ddwcpos-orders' ] ) ? $wcfm_modified_endpoints[ 'ddwcpos-orders' ] : 'ddwcpos-orders',
                'ddwcpos-transactions'    => ! empty( $wcfm_modified_endpoints[ 'ddwcpos-transactions' ] ) ? $wcfm_modified_endpoints[ 'ddwcpos-transactions' ] : 'ddwcpos-transactions',
                'ddwcpos-invoices'        => ! empty( $wcfm_modified_endpoints[ 'ddwcpos-invoices' ] ) ? $wcfm_modified_endpoints[ 'ddwcpos-invoices' ] : 'ddwcpos-invoices',
                'ddwcpos-invoice-compose' => ! empty( $wcfm_modified_endpoints[ 'ddwcpos-invoice-compose' ] ) ? $wcfm_modified_endpoints[ 'ddwcpos-invoice-compose' ] : 'ddwcpos-invoice-compose',
                'ddwcpos-configuration'  => ! empty( $wcfm_modified_endpoints[ 'ddwcpos-configuration' ] ) ? $wcfm_modified_endpoints[ 'ddwcpos-configuration' ] : 'ddwcpos-configuration',
            ];

            $query_vars = array_merge( $query_vars, $query_custom_menus_vars );

            return $query_vars;
        }

        /**
         * WCFM - Custom Menus End Point Title
         */
        public function ddwcpos_wcfm_endpoint_title( $title, $endpoint ) {
            switch ( $endpoint ) {
                case 'ddwcpos-analytics' :
                    $title = esc_html__( 'Analytics', 'ddwc-multipos' );
                    break;
                case 'ddwcpos-outlets' :
                    $title = esc_html__( 'Outlets', 'ddwc-multipos' );
                    break;
                case 'ddwcpos-cashiers' :
                    $title = esc_html__( 'Cashiers', 'ddwc-multipos' );
                    break;
                case 'ddwcpos-tables' :
                    $title = esc_html__( 'Tables', 'ddwc-multipos' );
                    break;
                case 'ddwcpos-assign-barcodes' :
                    $title = esc_html__( 'Assign Barcodes', 'ddwc-multipos' );
                    break;
                case 'ddwcpos-assign-stocks' :
                    $title = esc_html__( 'Assign Stocks', 'ddwc-multipos' );
                    break;
                case 'ddwcpos-orders' :
                    $title = esc_html__( 'Orders', 'ddwc-multipos' );
                    break;
                case 'ddwcpos-transactions' :
                    $title = esc_html__( 'Transactions', 'ddwc-multipos' );
                    break;
                case 'ddwcpos-invoices' :
                    $title = esc_html__( 'Invoices', 'ddwc-multipos' );
                    break;
                case 'ddwcpos-configuration' :
                    $title = esc_html__( 'Configuration', 'ddwc-multipos' );
                    break;
            }

            return $title;
        }

        /**
         * WCFM - Custom Menus
         */
        public function ddwcpos_wcfm_menus( $menus ) {
            $custom_menus = [
                'ddwcpos-analytics' => [
                    'label'    => esc_html__( 'POS Analytics', 'ddwc-multipos' ),
                    'url'      => ddwcpos_get_wfcm_custom_menus_url( 'ddwcpos-analytics' ),
                    'icon'     => 'chart-line',
                    'priority' => 5.1,
                ],
                'ddwcpos-outlets' => [
                    'label'    => esc_html__( 'POS Outlets', 'ddwc-multipos' ),
                    'url'      => ddwcpos_get_wfcm_custom_menus_url( 'ddwcpos-outlets' ),
                    'icon'     => 'store',
                    'priority' => 5.2,
                ],
                'ddwcpos-cashiers' => [
                    'label'    => esc_html__( 'POS Cashiers', 'ddwc-multipos' ),
                    'url'      => ddwcpos_get_wfcm_custom_menus_url( 'ddwcpos-cashiers' ),
                    'icon'     => 'user',
                    'priority' => 5.3,
                ],
                'ddwcpos-tables' => [
                    'label'    => esc_html__( 'POS Tables', 'ddwc-multipos' ),
                    'url'      => ddwcpos_get_wfcm_custom_menus_url( 'ddwcpos-tables' ),
                    'icon'     => 'utensils',
                    'priority' => 5.4,
                ],
                'ddwcpos-assign-barcodes' => [
                    'label'    => esc_html__( 'POS Barcodes', 'ddwc-multipos' ),
                    'url'      => ddwcpos_get_wfcm_custom_menus_url( 'ddwcpos-assign-barcodes' ),
                    'icon'     => 'barcode',
                    'priority' => 5.5,
                ],
                'ddwcpos-assign-stocks' => [
                    'label'    => esc_html__( 'POS Assign Stocks', 'ddwc-multipos' ),
                    'url'      => ddwcpos_get_wfcm_custom_menus_url( 'ddwcpos-assign-stocks' ),
                    'icon'     => 'warehouse',
                    'priority' => 5.6,
                ],
                'ddwcpos-orders' => [
                    'label'    => esc_html__( 'POS Orders', 'ddwc-multipos' ),
                    'url'      => ddwcpos_get_wfcm_custom_menus_url( 'ddwcpos-orders' ),
                    'icon'     => 'cart-arrow-down',
                    'priority' => 5.7,
                ],
                'ddwcpos-transactions' => [
                    'label'    => esc_html__( 'POS Transactions', 'ddwc-multipos' ),
                    'url'      => ddwcpos_get_wfcm_custom_menus_url( 'ddwcpos-transactions' ),
                    'icon'     => 'credit-card',
                    'priority' => 5.8,
                ],
                'ddwcpos-invoices' => [
                    'label'    => esc_html__( 'POS Invoices', 'ddwc-multipos' ),
                    'url'      => ddwcpos_get_wfcm_custom_menus_url( 'ddwcpos-invoices' ),
                    'icon'     => 'receipt',
                    'priority' => 5.9,
                ],
                'ddwcpos-configuration' => [
                    'label'    => esc_html__( 'POS Configuration', 'ddwc-multipos' ),
                    'url'      => ddwcpos_get_wfcm_custom_menus_url( 'ddwcpos-configuration' ),
                    'icon'     => 'cogs',
                    'priority' => 5.91,
                ],
            ];

            $menus = array_merge( $menus, $custom_menus );

            return $menus;
        }

        /**
         *  WCFM - Custom Menus Views
         */
        public function ddwcpos_wcfm_load_views( $end_point ) {
            switch( $end_point ) {
                case 'ddwcpos-analytics':
                    wp_enqueue_style( 'ddwcpos-reports-style' );
                    wp_enqueue_script( 'ddwcpos-reports-script' );
                    $this->ddwcpos_enqueue_wcfm_scripts();
                    ?>
                    <div class="collapse wcfm-collapse" id="wcfm_products_listing">
                        <div class="wcfm-page-headig">
                            <span class="wcfmfa fa-cubes"></span>
                            <span class="wcfm-page-heading-text"><?php esc_html_e( 'Analytics', 'ddwc-multipos' ); ?></span>
                        </div>
                        <div id="app" class="ddwcpos-analytics-container"></div>
                    </div>
                    <?php
                    break;
                case 'ddwcpos-outlets':
                    $this->ddwcpos_enqueue_wcfm_scripts();
                    new Front\WCFM\Outlet\DDWCPOS_Outlets_List_Template( $this->ddwcpos_configuration );
                    break;
                case 'ddwcpos-manage-outlet':
                    $this->ddwcpos_enqueue_wcfm_scripts();
                    new Front\WCFM\Outlet\DDWCPOS_Manage_Outlet_Template( $this->ddwcpos_configuration );
                    break;
                case 'ddwcpos-cashiers':
                    $this->ddwcpos_enqueue_wcfm_scripts();
                    new Front\WCFM\Cashier\DDWCPOS_Cashiers_List_Template( $this->ddwcpos_configuration );
                    break;
                case 'ddwcpos-manage-cashier':
                    $this->ddwcpos_enqueue_wcfm_scripts();
                    new Front\WCFM\Cashier\DDWCPOS_Manage_Cashier_Template( $this->ddwcpos_configuration );
                    break;
                case 'ddwcpos-tables':
                    $this->ddwcpos_enqueue_wcfm_scripts();
                    new Front\WCFM\Tables\DDWCPOS_Tables_Template( $this->ddwcpos_configuration );
                    break;
                case 'ddwcpos-assign-barcodes':
                    $this->ddwcpos_enqueue_wcfm_scripts();
                    new Front\WCFM\Barcode\DDWCPOS_Product_Barcodes_List_Template( $this->ddwcpos_configuration );
                    break;
                case 'ddwcpos-assign-stocks':
                    $this->ddwcpos_enqueue_wcfm_scripts();
                    new Front\WCFM\Stock\DDWCPOS_Product_Stocks_List_Template( $this->ddwcpos_configuration );
                    break;
                case 'ddwcpos-orders':
                    $this->ddwcpos_enqueue_wcfm_scripts();
                    new Front\WCFM\Order\DDWCPOS_Orders_List_Template( $this->ddwcpos_configuration );
                    break;
                case 'ddwcpos-transactions':
                    $this->ddwcpos_enqueue_wcfm_scripts();
                    new Front\WCFM\Transaction\DDWCPOS_Transactions_List_Template( $this->ddwcpos_configuration );
                    break;
                case 'ddwcpos-invoices':
                    $this->ddwcpos_enqueue_wcfm_scripts();
                    new Front\WCFM\Invoices\DDWCPOS_Invoices_Template( $this->ddwcpos_configuration );
                    break;
                case 'ddwcpos-invoice-compose':
                    $this->ddwcpos_enqueue_wcfm_scripts();
                    new Front\WCFM\Tables\DDWCPOS_Tables_Template( $this->ddwcpos_configuration );
                    break;
                case 'ddwcpos-configuration':
                    wp_enqueue_media();
                    $this->ddwcpos_enqueue_wcfm_scripts();
                    new Front\WCFM\Configuration\DDWCPOS_Configuration_Template( $this->ddwcpos_configuration );
                    break;
            }
        }

        /**
         * Enqueue WCFM scripts function
         *
         * @return void
         */
        public function ddwcpos_enqueue_wcfm_scripts() {
            wp_enqueue_style( 'jquery-ui' );
            wp_enqueue_style( 'ddwcpos-wcfm-style' );
            wp_enqueue_script( 'jquery-tiptip' );
            wp_enqueue_script( 'jquery-ui-datepicker' );
            wp_enqueue_script( 'ddwcpos-wcfm-script' );
            wp_enqueue_script( 'tinymce_js' );
            wp_enqueue_style( 'codemirror' );
            wp_enqueue_script( 'codemirror' );
        }

        /**
         * Handle WP Loaded function
         *
         * @return void
         */
        public function ddwcpos_handle_wp_loaded() {
            $user_id = get_current_user_id();

            // $vendor_configuration_fields = [
            //     'purchase_code',
            //     'inventory_type',
            //     'order_status',
            //     'default_barcode',
            //     'order_mails_enabled',
            //     'multiple_payments_enabled',
            //     'order_note_enabled',
            //     'offline_orders_enabled',
            //     'custom_product_enabled',
            //     'opencash_drawer_enabled',
            //     'variation_product_enabled',
            //     'unit_price_enabled',
            //     'automatic_send_kitchen_order_enabled',
            //     'logo',
            //     'payment_method',
            //     'tables',
            //     'barcode_printer_width',
            //     'barcode_printer_height',
            //     'barcode_printer_margin',
            //     'barcode_margin',
            //     'barcode_orientation',
            //     'printer_width',
            //     'printer_height',
            //     'printer_margin',
            //     'barcode_print_orientation',
            //     'layout_primary_color',
            //     'layout_secondary_color',
            //     'layout_font_size',
            // ];

            if ( ! empty( $_POST[ 'ddwcpos_nonce' ] ) && wp_verify_nonce( $_POST[ 'ddwcpos_nonce' ], 'ddwcpos_nonce_action' ) ) {
                if ( ! empty( $_POST[ 'ddwcpos_save_general_configuration_submit' ] ) ) {
                    $configuration_fields = [
                        'purchase_code',
                        'inventory_type',
                        'order_status',
                        'default_barcode',
                        'order_mails_enabled',
                        'multiple_payments_enabled',
                        'order_note_enabled',
                        'offline_orders_enabled',
                        'custom_product_enabled',
                        'opencash_drawer_enabled',
                        'variation_product_enabled',
                        'unit_price_enabled',
                        'automatic_send_kitchen_order_enabled',
                        'logo',
                    ];

                    foreach ( $configuration_fields as $configuration_field ) {
                        $key   = '_ddwcpos_' . $configuration_field;
                        $value = '';

                        if ( array_key_exists( $key, $_POST ) ) {
                            $value = $_POST[ $key ];
                        }

                        update_user_meta( $user_id, $key, $value );
                    }

                    wc_add_notice( esc_html__( 'General configuration saved successfully.', 'ddwc-multipos' ), 'success' );

                    wp_safe_redirect( ddwcpos_get_wfcm_custom_menus_url( 'ddwcpos-configuration', 'general' ) );
                    exit();
                }

                if ( ! empty( $_POST[ 'ddwcpos_save_payments_configuration_submit' ] ) ) {
                    $configuration_fields = [
                        'payment_method',
                    ];

                    foreach ( $configuration_fields as $configuration_field ) {
                        $key   = '_ddwcpos_' . $configuration_field;
                        $value = '';

                        if ( array_key_exists( $key, $_POST ) ) {
                            $value = $_POST[ $key ];
                        }

                        update_user_meta( $user_id, $key, $value );
                    }

                    wc_add_notice( esc_html__( 'Payments configuration saved successfully.', 'ddwc-multipos' ), 'success' );

                    wp_safe_redirect( ddwcpos_get_wfcm_custom_menus_url( 'ddwcpos-configuration', 'payments' ) );
                    exit();
                }

                if ( ! empty( $_POST[ 'ddwcpos_save_printer_configuration_submit' ] ) ) {
                    $configuration_fields = [
                        'barcode_printer_width',
                        'barcode_printer_height',
                        'barcode_printer_margin',
                        'barcode_margin',
                        'barcode_orientation',
                        'printer_width',
                        'printer_height',
                        'printer_margin',
                        'barcode_print_orientation',
                    ];

                    foreach ( $configuration_fields as $configuration_field ) {
                        $key   = '_ddwcpos_' . $configuration_field;
                        $value = '';

                        if ( array_key_exists( $key, $_POST ) ) {
                            $value = $_POST[ $key ];
                        }

                        update_user_meta( $user_id, $key, $value );
                    }

                    wc_add_notice( esc_html__( 'Printer configuration saved successfully.', 'ddwc-multipos' ), 'success' );

                    wp_safe_redirect( ddwcpos_get_wfcm_custom_menus_url( 'ddwcpos-configuration', 'printer' ) );
                    exit();
                }

                if ( ! empty( $_POST[ 'ddwcpos_save_layout_configuration_submit' ] ) ) {
                    $configuration_fields = [
                        'layout_primary_color',
                        'layout_secondary_color',
                        'layout_font_size',
                    ];

                    foreach ( $configuration_fields as $configuration_field ) {
                        $key   = '_ddwcpos_' . $configuration_field;
                        $value = '';

                        if ( array_key_exists( $key, $_POST ) ) {
                            $value = $_POST[ $key ];
                        }

                        update_user_meta( $user_id, $key, $value );
                    }

                    wc_add_notice( esc_html__( 'Layout configuration saved successfully.', 'ddwc-multipos' ), 'success' );

                    wp_safe_redirect( ddwcpos_get_wfcm_custom_menus_url( 'ddwcpos-configuration', 'layout' ) );
                    exit();
                }

                if ( ! empty( $_POST[ 'ddwcpos_save_table_submit' ] ) ) {
                    foreach ( $_POST as $key => $value ) {
                        if ( strpos( $key, '_ddwcpos' ) !== false ) {
                            update_user_meta( $user_id, $key, $value );
                        }
                    }

                    wc_add_notice( esc_html__( 'Tables saved successfully.', 'ddwc-multipos' ), 'success' );

                    wp_safe_redirect( ddwcpos_get_wfcm_custom_menus_url( 'ddwcpos-tables' ) );
                    exit();
                }

                if ( ! empty( $_POST[ 'ddwcpos_save_cashier_submit' ] ) ) {
                    $id               = ! empty( $_POST[ 'ddwcpos_cashier_id' ] ) ? sanitize_text_field( $_POST[ 'ddwcpos_cashier_id' ] ) : '';
                    $username         = ! empty( $_POST[ 'ddwcpos_cashier_username' ] ) ? sanitize_text_field( $_POST[ 'ddwcpos_cashier_username' ] ) : '';
                    $firstname        = ! empty( $_POST[ 'ddwcpos_cashier_firstname' ] ) ? sanitize_text_field( $_POST[ 'ddwcpos_cashier_firstname' ] ) : '';
                    $lastname         = ! empty( $_POST[ 'ddwcpos_cashier_lastname' ] ) ? sanitize_text_field( $_POST[ 'ddwcpos_cashier_lastname' ] ) : '';
                    $email            = ! empty( $_POST[ 'ddwcpos_cashier_email' ] ) ? sanitize_text_field( $_POST[ 'ddwcpos_cashier_email' ] ) : '';
                    $assigned_outlets = ! empty( $_POST[ 'ddwcpos_cashier_assigned_outlets' ] ) ? $_POST[ 'ddwcpos_cashier_assigned_outlets' ] : [];

                    if ( ! empty( $username ) && ! empty( $email ) ) {
                        if ( empty( $id ) ) {
                            if ( email_exists( $email ) ) {
                                $error = esc_html__( 'Email already exists.', 'ddwc-multipos' );
                            } else if ( username_exists( $username ) ) {
                                $error = esc_html__( 'Username already exists.', 'ddwc-multipos' );
                            } else {
                                $random_password = wp_generate_password( $length = 12, $include_standard_special_chars = false );
                                $id              = wp_create_user( $username, $random_password, $email );
                                $user_id_role    = new \WP_User( $id );
                                $user_id_role->set_role( 'ddwcpos_cashier' );
                                update_user_meta( $id, '_ddwcpos_vendor_id', $user_id );
                            }
                        }

                        if ( empty( $error ) ) {
                            wp_update_user( [
                                'ID'         => $id,
                                'first_name' => $firstname,
                                'last_name'  => $lastname,
                                'user_email' => $email,
                                'login'      => $username,
                            ] );

                            update_user_meta( $id, '_ddwcpos_assigned_outlets', $assigned_outlets );
                            wc_add_notice( esc_html__( 'Cashier saved successfully.', 'ddwc-multipos' ), 'success' );

                            wp_safe_redirect( ddwcpos_get_wfcm_custom_menus_url( 'ddwcpos-cashiers' ) );
                            exit();
                        }
                    } else {
                        wp_safe_redirect( ddwcpos_get_wfcm_custom_menus_url( 'ddwcpos-manage-cashier', $wp->query_vars[ 'manage-cashier' ] . '/error' ) );
                        exit();
                    }
                }

                if ( ! empty( $_POST[ 'ddwcpos_save_invoice_submit' ] ) ) {
                    update_user_meta( $user_id, '_ddwcpos_invoices', $_POST[ '_ddwcpos_invoices' ] );
                    wc_add_notice( esc_html__( 'Invoices saved successfully.', 'ddwc-multipos' ), 'success' );
                    wp_safe_redirect( ddwcpos_get_wfcm_custom_menus_url( 'ddwcpos-invoices' ) );
                    exit();
                }

                if ( ! empty( $_POST[ 'ddwcpos_save_outlet_submit' ] ) ) {
                    $outlet_helper  = new DDWCPOS_Outlet_Helper();
                    $id             = ! empty( $_POST[ 'ddwcpos_outlet_id' ] ) ? sanitize_text_field( $_POST[ 'ddwcpos_outlet_id' ] ) : '';
                    $name           = ! empty( $_POST[ 'ddwcpos_outlet_name' ] ) ? sanitize_text_field( $_POST[ 'ddwcpos_outlet_name' ] ) : '';
                    $author         = get_current_user_id();
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

                        $outlet_id = $outlet_helper->ddwcpos_save_outlet( $data );

                        if ( $outlet_id ) {
                            wc_add_notice( esc_html__( 'Outlet saved successfully.', 'ddwc-multipos' ), 'success' );

                            wp_safe_redirect( ddwcpos_get_wfcm_custom_menus_url( 'ddwcpos-outlets' ) );
                            exit();
                        }
                    } else {
                        wp_safe_redirect( ddwcpos_get_wfcm_custom_menus_url( 'ddwcpos-manage-outlet', $wp->query_vars[ 'manage-outlet' ] . '/error' ) );
                        exit();
                    }
                }

                if ( ! empty( $_POST[ '_ddwcpos_delete_transaction' ] ) ) {
                    $transaction_helper = new DDWCPOS_Transaction_Helper();

                    $transaction_helper->ddwcpos_delete_transaction( $_POST[ '_ddwcpos_delete_transaction' ] );
                    wc_add_notice( esc_html__( 'Transaction deleted successfully.', 'ddwc-multipos' ), 'success' );
                    wp_safe_redirect( ddwcpos_get_wfcm_custom_menus_url( 'ddwcpos-transactions' ) );
                    exit();
                }
            }
        }

        /**
         * Allow WCFM vendor to access POS function
         *
         * @param boolean $initial
         * @param object $user
         * @return boolean
         */
        public function ddwcpos_allow_wcfm_vendor_to_access_pos( $initial, $user ) {
            return in_array( 'wcfm_vendor', $user->roles, true );
        }
    }
}
