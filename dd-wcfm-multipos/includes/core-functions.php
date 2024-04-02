<?php
/**
 * @author DevDiggers
 * @version 1.0.0
 * This file handles all core functions.
 */

if ( ! function_exists( 'ddwcpos_get_wfcm_custom_menus_url' ) ) {
	/**
	 * Get WCFM custom menus url function
	 *
	 * @param string $endpoint
	 * @param string $args
	 * @return string
	 */
	function ddwcpos_get_wfcm_custom_menus_url( $endpoint, $args = '' ) {
		return wcfm_get_endpoint_url( $endpoint, $args, get_wcfm_page() );
	}
}

if ( ! function_exists( 'ddwcpos_get_all_outlet_ids_for_sql_by_vendor_id' ) ) {
	/**
	 * Get all outlet ids for sql by vendor id function
	 *
	 * @param string $author
	 * @return string
	 */
	function ddwcpos_get_all_outlet_ids_for_sql_by_vendor_id( $author ) {
		global $wpdb;
		$data = $wpdb->get_results( $wpdb->prepare( "SELECT id FROM {$wpdb->prefix}ddwcpos_wcfm_outlets WHERE author=%d", $author ), ARRAY_A );

		$outlet_ids = [];
		foreach ( $data as $key => $value ) {
			$outlet_ids[] = $value[ 'id' ];
		}

		$ids = implode( ', ', $outlet_ids );

		return $ids;
	}
}
