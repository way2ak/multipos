<?php
/**
 * API Register Route class
 *
 * @package MultiPOS - Point of Sale for WooCommerce
 * @version 1.0.0
 */

namespace DDWCMultiPOS\API;

use DDWCMultiPOS\API\Includes;

defined( 'ABSPATH' ) || exit();

if ( ! class_exists( 'DDWCPOS_API_Register_Routes' ) ) {
    /**
     * Register API Routes Class.
     */
    class DDWCPOS_API_Register_Routes {
        /**
         * Configuration Variable
         *
         * @var array
         */
        protected $ddwcpos_configuration;

        /**
        * Constructor.
        */
        public function __construct( $ddwcpos_configuration ) {
            $this->ddwcpos_configuration = $ddwcpos_configuration;

            add_action( 'woocommerce_init', [ $this, 'ddwcpos_init_api' ] );
			add_filter( 'ddwcpos_data_stores', [ $this, 'ddwcpos_add_data_stores' ] );
        }

        /**
         * Init API function
         *
         * @return void
         */
        public function ddwcpos_init_api() {
            if ( is_user_logged_in() ) {
                if ( ! is_admin() ) {
                    WC()->frontend_includes();

                    if ( empty( WC()->customer ) ) {
                        WC()->customer = new \WC_Customer( get_current_user_ID() );
                    }

                    if ( empty( WC()->cart ) ) {
                        WC()->cart = new \WC_Cart();
                    }
                    if ( empty( WC()->session ) ) {
                        WC()->session = new \WC_Session_Handler();
                        WC()->session->init();
                    }
                }

                add_action( 'rest_api_init', [ $this, 'ddwcpos_register_api_routes' ] );
            }

            add_action( 'rest_api_init', [ $this, 'ddwcpos_register_kitchen_api_routes' ] );
        }

        /**
         * Register API routes function
         *
         * @return void
         */
        public function ddwcpos_register_api_routes() {
            do_action( 'ddwcpos_before_register_pos_rest_routes' );

            if ( ! is_admin() ) {
                $api_routes = [
                    'get-products'            => new Includes\Products\DDWCPOS_API_Get_Products( $this->ddwcpos_configuration ),
                    'get-product-categories'  => new Includes\Products\DDWCPOS_API_GET_Product_Categories(),
                    'get-customers'           => new Includes\Customers\DDWCPOS_API_Get_Customers( $this->ddwcpos_configuration ),
                    'get-countries-states'    => new Includes\Misc\DDWCPOS_API_Get_Countries_States(),
                    'check-coupon'            => new Includes\Misc\DDWCPOS_API_Coupon_Check(),
                    'check-centralized-stock' => new Includes\Misc\DDWCPOS_API_Check_Centralized_Stock(),
                    'manage-customer'         => new Includes\Customers\DDWCPOS_API_Manage_Customer(),
                    'delete-customer'         => new Includes\Customers\DDWCPOS_API_Delete_Customer(),
                    'create-refund'           => new Includes\Orders\DDWCPOS_API_Create_Refund( $this->ddwcpos_configuration ),
                    'create-order'            => new Includes\Orders\DDWCPOS_API_Create_Order( $this->ddwcpos_configuration ),
                    'get-orders'              => new Includes\Orders\DDWCPOS_API_Get_Orders(),
                    'save-cashier'            => new Includes\Misc\DDWCPOS_API_Save_Cashier(),
                    'get-transactions'        => new Includes\Transactions\DDWCPOS_API_Get_Transactions(),
                    'create-transaction'      => new Includes\Transactions\DDWCPOS_API_Create_Transaction(),
                ];

                foreach ( $api_routes as $key => $value ) {
                    register_rest_route(
                        'ddwcpos/v1',
                        $value->base,
                        [
                            'methods'             => 'POST',
                            'permission_callback' => '__return_true',
                            'callback'            => [ $value, 'ddwcpos_get_data' ],
                        ]
                    );
                }
            }

            $api_routes = [
                'reports/revenue/stats'  => new Includes\Reports\Revenue\DDWCPOS_API_Revenue_Stats_Controller(),
                'reports/products/stats' => new Includes\Reports\Products\DDWCPOS_API_Products_Stats_Controller(),
                'reports/coupons/stats'  => new Includes\Reports\Coupons\DDWCPOS_API_Coupons_Stats_Controller(),
                'reports/orders/stats'   => new Includes\Reports\Orders\DDWCPOS_API_Orders_Stats_Controller(),
                'reports/taxes/stats'    => new Includes\Reports\Taxes\DDWCPOS_API_Taxes_Stats_Controller(),
            ];

            foreach ( $api_routes as $key => $value ) {
                register_rest_route(
                    'ddwcpos/v1',
                    $value->base,
                    [
                        'methods'             => 'GET',
                        'permission_callback' => '__return_true',
                        'callback'            => [ $value, 'ddwcpos_get_data' ],
                    ]
                );
            }

            do_action( 'ddwcpos_after_register_pos_rest_routes' );
        }

        /**
         * Register Kitchen API routes function
         *
         * @return void
         */
        public function ddwcpos_register_kitchen_api_routes() {
            if ( ! is_admin() ) {
                $api_routes = [
                    'manage-kitchen-orders'   => new Includes\Kitchen\DDWCPOS_API_Manage_Kitchen_Orders(),
                ];

                foreach ( $api_routes as $key => $value ) {
                    register_rest_route(
                        'ddwcpos/v1',
                        $value->base,
                        [
                            'methods'             => 'POST',
                            'permission_callback' => '__return_true',
                            'callback'            => [ $value, 'ddwcpos_get_data' ],
                        ]
                    );
                }
            }
        }

        /**
		 * Adds data stores.
		 *
		 * @param array $data_stores List of data stores.
		 * @return array
		 */
		public function ddwcpos_add_data_stores( $data_stores ) {
			return array_merge(
				$data_stores,
				[
					'report-revenue-stats'  => 'DDWCMultiPOS\Api\Includes\Reports\Revenue\Stats\DDWCPOS_Revenue_Stats',
					'report-products-stats' => 'DDWCMultiPOS\Api\Includes\Reports\Products\Stats\DDWCPOS_Products_Stats',
					'report-coupons-stats'  => 'DDWCMultiPOS\Api\Includes\Reports\Coupons\Stats\DDWCPOS_Coupons_Stats',
					'report-orders-stats'   => 'DDWCMultiPOS\Api\Includes\Reports\Orders\Stats\DDWCPOS_Orders_Stats',
					'report-taxes-stats'    => 'DDWCMultiPOS\Api\Includes\Reports\Taxes\Stats\DDWCPOS_Taxes_Stats',
                ]
			);
		}
    }
}