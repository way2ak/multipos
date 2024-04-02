<?php
/**
 * @author DevDiggers
 * @version 1.0.0
 * This file handles all wcfm end action hooks.
 */

namespace DDWCMultiPOS\Includes\WCFM;

defined( 'ABSPATH' ) || exit();

if ( ! class_exists( 'DDWCPOS_WCFM_Hooks' ) ) {
    /**
     * WCFM end hooks class
     */
    class DDWCPOS_WCFM_Hooks extends DDWCPOS_WCFM_Functions {
        /**
         * Construct
         */
        public function __construct( $ddwcpos_configuration ) {
            parent::__construct( $ddwcpos_configuration );

            if ( ! empty( $ddwcpos_configuration[ 'enabled' ] ) ) {
                add_filter( 'ddwcpos_api_product_categories_different_approach', [ $this, 'ddwcpos_api_product_categories_different_approach_by_vendor' ], 10, 2 );
                add_filter( 'ddwcpos_api_product_categories_different_approach_response', [ $this, 'ddwcpos_api_product_categories_different_approach_response_by_vendor' ], 10, 2 );

                // add_filter( 'ddwcpos_modify_api_product_categories_args', [ $this, 'ddwcpos_modify_api_product_categories_args_by_vendor' ], 10, 2 );
                add_filter( 'ddwcpos_modify_api_total_customers_count_args', [ $this, 'ddwcpos_modify_customer_args_by_vendor' ], 10, 2 );
                add_filter( 'ddwcpos_modify_api_customers_args', [ $this, 'ddwcpos_modify_customer_args_by_vendor' ], 10, 2 );
                add_filter( 'ddwcpos_api_after_customer_save', [ $this, 'ddwcpos_save_customer_meta_for_vendor' ], 10, 3 );

                add_filter( 'ddwcpos_modify_api_total_products_count_args', [ $this, 'ddwcpos_modify_outlet_products_args_by_vendor' ], 10, 2 );
                add_filter( 'ddwcpos_modify_api_products_list_args', [ $this, 'ddwcpos_modify_outlet_products_args_by_vendor' ], 10, 2 );

                $user                       = wp_get_current_user();
                $ddwcpos_vendor_pos_enabled = $ddwcpos_configuration[ 'vendor_pos_functionality' ];

                if ( 'manual' === $ddwcpos_configuration[ 'vendor_pos_functionality' ] ) {
                    $ddwcpos_vendor_pos_enabled = get_user_meta( $user->ID, '_ddwcpos_vendor_pos_enabled', true );
                }

                if ( ! empty( $user->roles ) && in_array( 'wcfm_vendor', $user->roles, true ) && ! empty( $ddwcpos_vendor_pos_enabled ) ) {
                    add_filter( 'wcfm_query_vars', [ $this, 'ddwcpos_wcfm_query_vars' ], 50 );
                    add_filter( 'wcfm_endpoint_title', [ $this, 'ddwcpos_wcfm_endpoint_title' ], 50, 2 );
                    add_filter( 'wcfm_menus', [ $this, 'ddwcpos_wcfm_menus' ], 20 );
                    add_action( 'wcfm_load_views', [ $this, 'ddwcpos_wcfm_load_views' ], 50 );
                    add_action( 'wp_loaded', [ $this, 'ddwcpos_handle_wp_loaded' ] );
                    add_filter( 'ddwcpos_allow_administrator_access_for_pos_to_user', [ $this, 'ddwcpos_allow_wcfm_vendor_to_access_pos' ], 10, 2 );
                }
            }
        }
    }
}
