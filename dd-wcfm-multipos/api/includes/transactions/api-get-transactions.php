<?php
/**
 * API Get Transactions class
 *
 * @package MultiPOS - Point of Sale for WCFM Marketplace
 * @version 1.0.0
 */

namespace DDWCMultiPOS\Api\Includes\Transactions;

defined( 'ABSPATH' ) || exit();

if ( ! class_exists( 'DDWCPOS_API_Get_Transactions' ) ) {
    /**
     * API Get Transactions class
     */
    class DDWCPOS_API_Get_Transactions {
        /**
         * Base Name.
         *
         * @var string the route base
         */
        public $base = 'get-transactions';

        /**
         * API Callback.
         *
         * @param array $request
		 * @return array
         */
        public function ddwcpos_get_data( $request ) {
            try {
                if ( empty( $request[ 'cashier_id' ] ) || empty( $request[ 'outlet_id' ] ) ) {
                    return new \WP_Error( 'rest_invalid_param', esc_html__( 'Params are missing.', 'ddwc-multipos' ) );
                }

                global $wpdb;

                $result = $wpdb->get_results( $wpdb->prepare( "SELECT * FROM {$wpdb->prefix}ddwcpos_wcfm_transactions WHERE outlet_id=%d AND cashier_id=%d AND DATE(date)=%s ORDER BY id DESC", $request[ 'outlet_id' ], $request[ 'cashier_id' ], $request[ 'date' ] ), ARRAY_A );

                return ! empty( $result ) ? $result : [];
            } catch ( \Exception $e ) {
                return \WP_Error( 'data_error', $e->getMessage() );
            }
        }
    }
}
