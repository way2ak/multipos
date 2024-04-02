<?php
/**
 * API Get Orders class
 *
 * @package MultiPOS - Point of Sale for WooCommerce
 * @version 1.0.0
 */

namespace DDWCMultiPOS\API\Includes\Orders;

use DDWCMultiPOS\Helper\Outlet\DDWCPOS_Outlet_Helper;

defined( 'ABSPATH' ) || exit();

if ( ! class_exists( 'DDWCPOS_API_Get_Orders' ) ) {
    /**
     * API Get Orders Class.
     */
    class DDWCPOS_API_Get_Orders {
        /**
        * Base Name.
        *
        * @var string the route base
        */
        public $base = 'get-orders';

        protected $wpdb = '';

        /**
         * Constructor.
         */
        public function __construct() {
            global $wpdb;
            $this->wpdb = $wpdb;
        }

        /**
         * API Callback.
         * 
         * @param object $request
         * @return array
         */
        public function ddwcpos_get_data( $request ) {
            try {
                if ( empty( $request[ 'cashier_id' ] ) || empty( $request[ 'outlet_id' ] ) ) {
                    return new \WP_Error( 'rest_invalid_param', esc_html__( 'Params are missing.', 'ddwc-multipos' ) );
                }

                $cashier_id   = $request[ 'cashier_id' ];
                $outlet_id    = $request[ 'outlet_id' ];
                $per_page     = $request[ 'per_page' ];
                $current_page = $request[ 'current_page' ];

                if ( -1 === $per_page ) {
                    $args = apply_filters(
                        'ddwcpos_modify_api_get_orders_count_args',
                        [
                            'ignore_sticky_posts' => 1,
                            'post_type'           => 'shop_order',
                            'posts_per_page'      => $per_page,
                            'order'               => 'DESC',
                            'orderby'             => 'ID',
                            'post_status'         => 'any',
                            'fields'              => 'ids',
                            'meta_query'          => [
                                [
                                    'key'     => '_ddwcpos_outlet_id',
                                    'compare' => '=',
                                    'value'   => $outlet_id,
                                ]
                            ],
                        ],
                        $request
                    );

                    $result = new \WP_Query( $args );

                    wp_reset_postdata();

                    return apply_filters( 'ddwcpos_modify_api_total_orders_count', $result->post_count, $request );
                } else {
                    $data = [];

                    $off = ( $current_page - 1 ) * $per_page;

                    $args = apply_filters(
                        'ddwcpos_modify_api_get_orders_args',
                        [
                            'ignore_sticky_posts' => 1,
                            'posts_per_page'      => $per_page,
                            'offset'              => $off,
                            'post_type'           => 'shop_order',
                            'order'               => 'DESC',
                            'orderby'             => 'ID',
                            'post_status'         => 'any',
                            'fields'              => 'ids',
                            'meta_query'          => [
                                [
                                    'key'     => '_ddwcpos_outlet_id',
                                    'compare' => '=',
                                    'value'   => $outlet_id,
                                ]
                            ],
                        ],
                        $request
                    );

                    $result = new \WP_Query( $args );

                    wp_reset_postdata();

                    if ( $result->have_posts() ) {
                        while ( $result->have_posts() ) {
                            $result->the_post();

                            $order_response  = [];
                            $order_id        = $result->post;
                            $order           = wc_get_order( $order_id );
                            $order_items     = $order->get_items();
                            $tendered        = floatval( get_post_meta( $order_id, '_ddwcpos_tendered_amount', true ) );
                            $table           = get_post_meta( $order_id, '_ddwcpos_table', true );
                            $payment_methods = get_post_meta( $order_id, '_ddwcpos_payment_methods', true );
                            $offline_id      = get_post_meta( $order_id, '_ddwcpos_offline_id', true );
                            $order_status    = wc_get_order_statuses();

                            $order_response[ 'order_status' ]          = $order->get_status();
                            $order_response[ 'order_status_label' ]    = wc_get_order_status_name( $order_response[ 'order_status' ] );
                            $order_response[ 'order_currency' ]        = $order->get_currency();
                            $order_response[ 'order_currency_symbol' ] = html_entity_decode( get_woocommerce_currency_symbol( $order->get_currency() ) );
                            $order_response[ 'id' ]                    = $order_id;
                            $order_response[ 'order_id' ]              = $order->get_order_number();
                            $order_response[ 'customer_id' ]           = $order->get_customer_id();

                            $id = 0;

                            $order_response[ 'products' ] = [];

                            // order items loop
                            foreach ( $order_items as $key => $value ) {
                                $product_id = $value->get_product_id();
                                $value_data = $value->get_data();
                                $meta       = apply_filters( 'ddwcpos_get_order_item_meta_data', [], $value_data );
                                $image      = null;

                                if ( $product_id == 0 ) {
                                    $product_id = 'custom_' . $id;
                                    $type       = 'custom';
                                    ++$id;
                                } else {
                                    $product = wc_get_product( $product_id );
                                    $image   = $product->get_image( 'thumbnail' );
                                    $type    = $product->get_type();
                                }

                                $variable_id         = $value->get_variation_id();
                                $product_total_price = $value_data[ 'subtotal' ];
                                $product_unit_price  = $product_total_price / $value_data[ 'quantity' ];
                                $returned_quantity   = $order->get_qty_refunded_for_item( $key );

                                $taxes = $value_data[ 'taxes' ][ 'subtotal' ];

                                if ( ! empty( $taxes ) ) {
                                    foreach ( $taxes as $k => $v ) {
                                        $taxes[ $k ] = wc_format_decimal( $taxes[ $k ] / $value_data[ 'quantity' ] );
                                    }
                                }

                                $order_response[ 'products' ][] = [
                                    'item_id'           => $key,
                                    'id'                => $variable_id ? $variable_id : $product_id,
                                    'parent'            => $variable_id ? $product_id : 0,
                                    'product_id'        => $product_id,
                                    'type'              => $type,
                                    'name'              => $value[ 'name' ],
                                    'quantity'          => $value_data[ 'quantity' ],
                                    'image'             => $image,
                                    'uf'                => $product_unit_price,
                                    'uf_total'          => $product_total_price,
                                    'meta_data'         => $meta,
                                    'taxes'             => $taxes,
                                    'returned_quantity' => abs( $returned_quantity ),
                                ];
                            }

                            $order_response[ 'tax_lines' ] = [];

                            // order tax
                            foreach ( $order->get_tax_totals() as $tax_code => $tax ) {
                                $order_response[ 'tax_lines' ][] = [
                                    'id'       => $tax->id,
                                    'rate_id'  => $tax->rate_id,
                                    'code'     => $tax_code,
                                    'label'    => $tax->label,
                                    'total'    => wc_format_decimal( $tax->amount, 2 ),
                                    'compound' => (bool) $tax->is_compound,
                                ];
                            }

                            $order_response[ 'billing' ] = [
                                'fname'    => $order->get_billing_first_name(),
                                'lname'    => $order->get_billing_last_name(),
                                'address1' => $order->get_billing_address_1(),
                                'address2' => $order->get_billing_address_2(),
                                'phone'    => $order->get_billing_phone(),
                                'city'     => $order->get_billing_city(),
                                'state'    => $order->get_billing_state(),
                                'country'  => WC()->countries->countries[ $order->get_billing_country() ],
                                'postcode' => $order->get_billing_postcode(),
                            ];

                            $order_response[ 'shipping' ] = [
                                'fname'    => $order->get_shipping_first_name(),
                                'lname'    => $order->get_shipping_last_name(),
                                'address1' => $order->get_shipping_address_1(),
                                'address2' => $order->get_shipping_address_2(),
                                'city'     => $order->get_shipping_city(),
                                'state'    => $order->get_shipping_state(),
                                'country'  => WC()->countries->countries[ $order->get_shipping_country() ],
                                'postcode' => $order->get_shipping_postcode(),
                            ];

                            remove_filter( 'comments_clauses', [ 'WC_Comments', 'exclude_order_comments' ], 10, 1 );

                            $notes = get_comments( [
                                'post_id' => $order_id,
                                'orderby' => 'comment_ID',
                                'order'   => 'DESC',
                                'approve' => 'approve',
                                'type'    => 'order_note',
                            ] );

                            add_filter( 'comments_clauses', [ 'WC_Comments', 'exclude_order_comments' ], 10, 1 );

                            if ( ! empty( $notes ) ) {
                                $notes = wp_list_pluck( $notes, 'comment_content' );
                            } else {
                                $notes = [];
                            }

                            $order_date  = $order->get_date_created();

                            $order_response[ 'order_created' ] = $order_date->date( 'Y-m-d H:i:s' );

                            $order_date  = $order_date->date_i18n( get_option( 'date_format' ) . ' ' . get_option( 'time_format' ) );
                            $order_total = floatval( $order->get_total() );
                            $tendered    = ! empty( $tendered ) ? $tendered : $order_total;

                            $order_response[ 'order_notes' ]          = $notes;
                            $order_response[ 'tendered' ]             = $tendered;
                            $order_response[ 'table' ]                = $table;
                            $order_response[ 'change' ]               = ( $tendered - $order_total ) > 0 ? $tendered - $order_total : 0;
                            $order_response[ 'email' ]                = $order->get_billing_email();
                            $order_response[ 'order_date' ]           = $order_date;
                            $order_response[ 'payment_method' ]       = $order->get_payment_method();
                            $order_response[ 'payment_method_title' ] = $order->get_payment_method_title();
                            $order_response[ 'offline_id' ]           = $offline_id;
                            $order_response[ 'payment_methods' ]      = ! empty( $payment_methods ) ? $payment_methods : [];

                            $coupons = [];

                            $order_coupons = $order->get_items( 'coupon' );

                            if ( ! empty( $order_coupons ) ) {
                                foreach ( $order_coupons as $order_coupon ) {
                                    $coupons[] = [
                                        'code'   => $order_coupon->get_code(),
                                        'amount' => $order_coupon->get_discount(),
                                    ];
                                }
                            }

                            $order_response[ 'coupons' ] = $coupons;

                            $order_response[ 'order_subtotal' ] = $order->get_subtotal();

                            $custom_discount_item_id = $this->wpdb->get_var( $this->wpdb->prepare( "SELECT order_item_id FROM {$this->wpdb->prefix}woocommerce_order_items WHERE order_id=%d AND order_item_name LIKE %s", $order_id, esc_html__( 'POS Custom Discount', 'ddwc-multipos' ) ) );

                            $order_response[ 'discount' ] = 0;

                            if ( $custom_discount_item_id ) {
                                $custom_discount_amount = $this->wpdb->get_var( $this->wpdb->prepare( "SELECT meta_value FROM {$this->wpdb->prefix}woocommerce_order_itemmeta WHERE order_item_id=%d AND meta_key LIKE %s", $custom_discount_item_id, '_line_total' ) );

                                if ( $custom_discount_amount ) {
                                    $order_response[ 'discount' ] = $custom_discount_amount;
                                }
                            }

                            $order_response[ 'order_type' ]     = 'online';
                            $order_response[ 'order_total' ]    = $order_total;
                            $order_response[ 'order_refunded' ] = $order->get_total_refunded();

                            $data[] = apply_filters( 'ddwcpos_modify_api_order_response', $order_response, $order, $request );
                        }
                    }

                    return apply_filters( 'ddwcpos_modify_api_get_orders_response', $data, $request );
                }
            } catch ( \Exception $e ) {
                return new \WP_Error( 'data_error', $e->getMessage() );
            }
        }
    }
}
