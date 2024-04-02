<?php
/**
 * Create Schema on Activation
 *
 * @package MultiPOS - Point of Sale for WCFM Marketplace
 * @version 1.0.0
 */

defined( 'ABSPATH' ) || exit();

if ( ! class_exists( 'DDWCPOS_Install' ) ) {
	/**
	 * Activation class
	 */
	class DDWCPOS_Install {
		/**
		 * Create Schema
		 */
		public static function ddwcpos_create_schema() {
			require_once ABSPATH . 'wp-admin/includes/upgrade.php';

			global $wpdb;

			$charset_collate = $wpdb->get_charset_collate();

			// Outlets table.
			$outlets_table = $wpdb->prefix . 'ddwcpos_wcfm_outlets';
			$outlets = "CREATE TABLE $outlets_table (
				`id` bigint(20) NOT NULL AUTO_INCREMENT,
				`author` bigint(20) NOT NULL,
				`name` varchar(200) NOT NULL,
				`mode` varchar(50) NOT NULL,
				`inventory_type` varchar(50) NOT NULL,
				`address1` varchar(500) NOT NULL,
				`address2` varchar(500) NOT NULL,
				`city` varchar(100) NOT NULL,
				`state` varchar(100) NOT NULL,
				`postcode` varchar(20) NOT NULL,
				`country` varchar(100) NOT NULL,
				`phone` varchar(20) NOT NULL,
				`email` varchar(200) NOT NULL,
				`payments` text NOT NULL,
				`invoice` text NOT NULL,
				`tables` text NOT NULL,
				`status` varchar(20),
				`created` datetime NOT NULL,
				`updated` datetime NOT NULL,
				PRIMARY KEY (id)
			) $charset_collate;";

            dbDelta( $outlets );

			// Outlet meta table.
			$outletmeta_table = $wpdb->prefix . 'ddwcpos_wcfm_outletmeta';
			$outletmeta = "CREATE TABLE IF NOT EXISTS $outletmeta_table (
				`id` bigint(20) NOT NULL AUTO_INCREMENT,
				`outlet_id` bigint(20) NOT NULL,
				`meta_key` varchar(255) NOT NULL,
				`meta_value` longtext DEFAULT NULL,
				PRIMARY KEY (id)
			) $charset_collate;";

            dbDelta( $outletmeta );

			// Transactions table.
			$transactions_table = $wpdb->prefix . 'ddwcpos_wcfm_transactions';
			$transactions = "CREATE TABLE IF NOT EXISTS $transactions_table (
				`id` bigint(20) NOT NULL AUTO_INCREMENT,
				`cashier_id` bigint(20) NOT NULL,
				`outlet_id` bigint(20) NOT NULL,
				`order_id` bigint(20) DEFAULT NULL,
				`in` varchar(200) NOT NULL,
				`out` varchar(200) NOT NULL,
				`method` varchar(200) NOT NULL,
				`reference` text NOT NULL,
				`date` datetime NOT NULL,
				PRIMARY KEY (id)
			) $charset_collate;";

            dbDelta( $transactions );

			self::ddwcpos_create_role();
		}

		/**
		 * Create POS Cashier role function
		 *
		 * @return void
		 */
		public static function ddwcpos_create_role() {
			if ( empty( get_role( 'ddwcpos_cashier' ) ) ) {
				add_role(
					'ddwcpos_cashier',
					'POS Cashier',
					[
						'read'    => true,
						'level_0' => true,
					]
				);
			}
		}
	}
}
