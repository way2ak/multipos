<?php
/**
 * API Create Refund class
 *
 * @package MultiPOS - Point of Sale for WooCommerce
 * @version 1.0.0
 */

namespace DDWCMultiPOS\API\Includes\Orders;

use DDWCMultiPOS\Helper\Transaction\DDWCPOS_Transaction_Helper;

defined( 'ABSPATH' ) || exit();

if ( ! class_exists( 'DDWCPOS_API_Create_Refund' ) ) {
    /**
     * API Create Refund Class.
     */
    class DDWCPOS_API_Create_Refund {
        /**
         * Base Name.
         *
         * @var string the route base
         */
        public $base = 'create-refund';

        /**
         * DB Variable
         *
         * @var object
         */
        protected $wpdb;

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
            global $wpdb;
            $this->wpdb                  = $wpdb;
            $this->ddwcpos_configuration = $ddwcpos_configuration;
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

                $refund_data = json_decode( $request[ 'refund_data' ], true );
                $order_id    = ! empty( $refund_data[ 'orderId' ] ) ? intval( $refund_data[ 'orderId' ] ) : '';
                $order       = wc_get_order( $order_id );

                if ( ! $order ) {
                    return new \WP_Error( 'rest_invalid_param', esc_html__( 'Order not found.', 'ddwc-multipos' ) );
                }

                $order_response     = [];
                $outlet_id          = $request[ 'outlet_id' ];
                $cashier_id         = $request[ 'cashier_id' ];
                $transaction_helper = new DDWCPOS_Transaction_Helper();
                $refund_reason      = ! empty( $refund_data[ 'refundReason' ] ) ? $refund_data[ 'refundReason' ] : '';
                $refund_products    = ! empty( $refund_data[ 'refundProducts' ] ) ? $refund_data[ 'refundProducts' ] : [];
                $restock_items      = ! empty( $refund_data[ 'restockItems' ] ) ? $refund_data[ 'restockItems' ] : false;

                $order_items = $order->get_items();

                // Prepare line items which we are refunding.
                $line_items    = [];
                $refund_amount = 0;

                // order items loop
                foreach ( $order_items as $item_id => $order_item ) {
                    if ( array_key_exists( $item_id, $refund_products ) ) {
                        $order_item_data     = $order_item->get_data();

                        $product_total_price = $order_item_data[ 'subtotal' ];
                        $product_unit_price  = $product_total_price / $order_item_data[ 'quantity' ];

                        $refund_amount += wc_format_decimal( $product_unit_price * $refund_products[ $item_id ] );

                        $refund_tax = $order_item_data[ 'taxes' ][ 'subtotal' ];

                        if ( ! empty( $refund_tax ) ) {
                            foreach ( $refund_tax as $key => $value ) {
                                $tax = wc_format_decimal( $refund_tax[ $key ] / $order_item_data[ 'quantity' ] * $refund_products[ $item_id ] );
                                $refund_amount += $tax;
                                $refund_tax[ $key ] = $tax;
                            }
                        }

                        $line_items[ $item_id ] = array(
                            'qty'          => $refund_products[ $item_id ],
                            'refund_total' => wc_format_decimal( $product_unit_price * $refund_products[ $item_id ] ),
                            'refund_tax'   => $refund_tax,
                        );
                    }
                }

                // Create the refund object.
                $refund = wc_create_refund(
                    [
                        'amount'         => $refund_amount,
                        'reason'         => $refund_reason,
                        'order_id'       => $order_id,
                        'line_items'     => $line_items,
                        'refund_payment' => false,
                        'restock_items'  => $restock_items,
                    ]
                );

                $order_items     = $order->get_items();
                $tendered        = floatval( get_post_meta( $order_id, '_ddwcpos_tendered_amount', true ) );
                $table           = get_post_meta( $order_id, '_ddwcpos_table', true );
                $payment_methods = get_post_meta( $order_id, '_ddwcpos_payment_methods', true );
                $offline_id      = get_post_meta( $order_id, '_ddwcpos_offline_id', true );

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

                $transaction_data = [
                    'cashier_id' => $cashier_id,
                    'outlet_id'  => $outlet_id,
                    'order_id'   => $order_id,
                    'in'         => 0,
                    'out'        => $refund_amount,
                    'method'     => $order_response[ 'payment_method' ],
                    'reference'  => esc_html__( 'Refund is done for the order.', 'ddwc-multipos' ),
                    'date'       => current_time( 'Y-m-d H:i:s' ),
                ];

                $transaction_data[ 'id' ]             = strval( $transaction_helper->ddwcpos_save_transaction( $transaction_data ) );
                $order_response[ 'transactions' ][]   = $transaction_data;

                return apply_filters( 'ddwcpos_modify_api_create_refund_response', $order_response, $order, $request );
            } catch ( \Exception $e ) {
                return new \WP_Error( 'data_error', $e->getMessage() );
            }
        }
    }
}