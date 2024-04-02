<?php
/**
 * API Check Centralized Stock class
 *
 * @package MultiPOS - Point of Sale for WCFM Marketplace
 * @version 1.0.0
 */

namespace DDWCMultiPOS\Api\Includes\Misc;

defined( 'ABSPATH' ) || exit();

if ( ! class_exists( 'DDWCPOS_API_Check_Centralized_Stock' ) ) {
    /**
     * API API Check Centralized Stock class
     */
    class DDWCPOS_API_Check_Centralized_Stock {
        /**
         * Base Name.
         *
         * @var string the route base
         */
        public $base = 'check-centralized-stock';

        /**
         * API Callback.
         *
         * @param array $request
		 * @return array
         */
        public function ddwcpos_get_data( $request ) {
            try {
                $cart_list = json_decode( $request[ 'cart_data' ] );

                $response = [ 'out_of_stock_products' => [] ];

                if ( ! empty( $cart_list ) ) {
                    foreach ( $cart_list as $key => $cart_data ) {
                        $product_id   = $cart_data->product_id;
                        $quantity     = $cart_data->quantity;
                        $manage_stock = get_post_meta( $product_id, '_manage_stock', true );

                        if ( 'yes' === $manage_stock ) {
                            $product_stock = intval( get_post_meta( $product_id, '_stock', true ) );
                        } else {
                            $product_stock = get_post_meta( $product_id, '_stock_status', true );
                        }

                        if ( 'outofstock' === $product_stock || ( is_numeric( $product_stock ) && $quantity > $product_stock ) ) {
                            $response[ 'out_of_stock_products' ][] = $product_id;
                        }
                    }
                }

                return apply_filters( 'ddwcpos_modify_api_check_centralized_stock_response', $response, $cart_list );
            } catch (Exception $e) {
                return \WP_Error( 'data_error', $e->getMessage() );
            }
        }
    }
}
