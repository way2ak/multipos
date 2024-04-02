<?php
/**
 * @author DevDiggers
 * @version 1.0.0
 * This file handles all admin end action hooks.
 */

namespace DDWCMultiPOS\Includes\Admin;

defined( 'ABSPATH' ) || exit();

if ( ! class_exists( 'DDWCPOS_Admin_Hooks' ) ) {
    /**
     * Admin end hook handler class
     */
    class DDWCPOS_Admin_Hooks extends DDWCPOS_Admin_Functions {
        /**
         * Construct
         */
        public function __construct( $ddwcpos_configuration ) {
            parent::__construct( $ddwcpos_configuration );

            add_action( 'admin_menu', [ $this, 'ddwcpos_add_dashboard_menu' ] );

            add_action( 'admin_head', [ $this, 'ddwcpos_admin_head' ] );

			add_filter( 'set-screen-option', [ $this, 'ddwcpos_set_options' ], 10, 3 );

			add_filter( 'woocommerce_screen_ids', [ $this, 'ddwcpos_set_wc_screen_ids' ] );

            add_action( 'admin_init', [ $this, 'ddwcpos_register_settings' ] );

            add_action( 'admin_enqueue_scripts', [ $this, 'ddwcpos_enqueue_admin_scripts' ] );

            add_action( 'user_new_form', [ $this, 'ddwcpos_add_user_form_fields' ] );

            add_filter( 'user_profile_update_errors', [ $this, 'ddwcpos_validate_user_fields' ] );

            add_action( 'user_register', [ $this, 'ddwcpos_save_user_custom_data' ] );

            add_action( 'show_user_profile', [ $this, 'ddwcpos_display_custom_user_profile_fields' ] );

			add_action( 'edit_user_profile', [ $this, 'ddwcpos_display_custom_user_profile_fields' ] );

            add_action( 'personal_options_update', [ $this, 'ddwcpos_save_custom_user_profile_fields' ] );

            add_action( 'edit_user_profile_update', [ $this, 'ddwcpos_save_custom_user_profile_fields' ] );

            add_action( 'admin_bar_menu', [ $this, 'ddwcpos_admin_bar_menu' ] );

            add_action( 'woocommerce_refund_created', [ $this, 'ddwcpos_woocommerce_refund_created' ], 10, 2 );
        }
    }
}
