<?php
/**
 * API Create Order class
 *
 * @package MultiPOS - Point of Sale for WooCommerce
 * @version 1.0.0
 */

namespace DDWCMultiPOS\API\Includes\Orders;

use DDWCMultiPOS\Helper\Outlet\DDWCPOS_Outlet_Helper;
use DDWCMultiPOS\Helper\Transaction\DDWCPOS_Transaction_Helper;
use Automattic\WooCommerce\Utilities\NumberUtil;
use Automattic\WooCommerce\Proxies\LegacyProxy;

defined( 'ABSPATH' ) || exit();

if ( ! class_exists( 'DDWCPOS_API_Create_Order' ) ) {
    /**
     * API Create Order Class.
     */
    class DDWCPOS_API_Create_Order {
        /**
         * Base Name.
         *
         * @var string the route base
         */
        public $base = 'create-order';

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

                if ( ! empty( $request[ 'order_data' ] ) ) {
                    $order_data = json_decode( $request[ 'order_data' ], true );
                    $order      = $this->ddwcpos_create_order( $order_data, $request );
                    return $order;
                } else if ( ! empty( $request[ 'offline_orders' ] ) ) {
                    $orders              = [];
                    $offline_orders_data = json_decode( $request[ 'offline_orders' ], true );

                    foreach ( $offline_orders_data as $order_data ) {
                        $orders[] = $this->ddwcpos_create_order( $order_data, $request );
                    }

                    return $orders;
                }
            } catch ( \Exception $e ) {
                return new \WP_Error( 'data_error', $e->getMessage() );
            }
        }

        /**
         * Create Order.
         * 
         * @param array $order_data
         * @param object $request
         * @return array
         */
        public function ddwcpos_create_order( $order_data, $request ) {
            $order_response     = [];
            $outlet_id          = $request[ 'outlet_id' ];
            $cashier_id         = $request[ 'cashier_id' ];
            $outlet_helper      = new DDWCPOS_Outlet_Helper();
            $transaction_helper = new DDWCPOS_Transaction_Helper();
            $outlet_data        = $outlet_helper->ddwcpos_get_outlet_details_by_id( $outlet_id );
            $inventory_type     = $outlet_helper->ddwcpos_get_inventory_type( $outlet_id );
            $customer_id        = $order_data[ 'customer_id' ];
            $offline_id         = ! empty( $order_data[ 'offline_id' ] ) ? $order_data[ 'offline_id' ] : '';
            $coupons            = ! empty( $order_data[ 'coupons' ] ) ? $order_data[ 'coupons' ] : [];
            $discount           = ! empty( $order_data[ 'discount' ] ) ? $order_data[ 'discount' ] : '';
            $order_note         = ! empty( $order_data[ 'order_note' ] ) ? sanitize_text_field( $order_data[ 'order_note' ] ) : '';
            $payment_methods    = $order_data[ 'payment_methods' ];
            $table              = $order_data[ 'table' ];
            $tax                = new \WC_Tax();
            $tendered           = 0;
            $customer           = new \WC_Customer( $customer_id );

            $states_list = WC()->countries->get_states( $outlet_data[ 'country' ] );

            if ( is_array( $states_list ) ) {
                $state_code = array_search( $outlet_data[ 'state' ], $states_list );
            }

            $state_code = ! empty( $state_code ) ? $state_code : $outlet_data[ 'state' ];

            $billing_address = [
                'first_name' => $customer->get_billing_first_name() ? $customer->get_billing_first_name() : $customer->get_first_name(),
                'last_name'  => $customer->get_billing_last_name() ? $customer->get_billing_last_name() : $customer->get_last_name(),
                'company'    => $customer->get_billing_company(),
                'address_1'  => $outlet_data[ 'address1' ],
                'address_2'  => $outlet_data[ 'address2' ],
                'city'       => $outlet_data[ 'city' ],
                'state'      => $state_code,
                'postcode'   => $outlet_data[ 'postcode' ],
                'country'    => $outlet_data[ 'country' ],
                'email'      => $customer->get_billing_email(),
                'phone'      => $customer->get_billing_phone(),
            ];

            $shipping_address = [
                'first_name' => $customer->get_shipping_first_name(),
                'last_name'  => $customer->get_shipping_last_name(),
                'company'    => $customer->get_shipping_company(),
                'address_1'  => $outlet_data[ 'address1' ],
                'address_2'  => $outlet_data[ 'address2' ],
                'city'       => $outlet_data[ 'city' ],
                'state'      => $state_code,
                'postcode'   => $outlet_data[ 'postcode' ],
                'country'    => $outlet_data[ 'country' ],
            ];

            $order = wc_create_order( [ 'customer_id' => $customer_id ] );

            if ( empty( $this->ddwcpos_configuration[ 'order_mails_enabled' ] ) ) {
                remove_action( 'woocommerce_order_status_pending_to_processing_notification', [ WC()->mailer()->emails[ 'WC_Email_New_Order' ], 'trigger' ] );
                remove_action( 'woocommerce_order_status_pending_to_processing_notification', [ WC()->mailer()->emails[ 'WC_Email_Customer_Processing_Order' ], 'trigger' ] );
                remove_action( 'woocommerce_order_status_pending_to_completed_notification', [ WC()->mailer()->emails[ 'WC_Email_New_Order' ], 'trigger' ] );
                remove_action( 'woocommerce_order_status_completed_notification', [ WC()->mailer()->emails[ 'WC_Email_Customer_Completed_Order' ], 'trigger' ] );
            }

            $order_id = $order->get_id();

            if ( count( $payment_methods ) > 1 ) {
                $payment_method       = 'split';
                $payment_method_title = esc_html__( 'Split', 'ddwc-multipos' );

                foreach ( $payment_methods as $key => $value ) {
                    $tendered += floatval( $value[ 'amount' ] );

                    update_post_meta( $order_id, '_ddwcpos_payment_' . $value[ 'slug' ], $value[ 'amount' ] );
                }
            } else {
                $payment_method       = $payment_methods[0][ 'slug' ];
                $payment_method_title = $payment_methods[0][ 'name' ];
                $tendered             = $payment_methods[0][ 'amount' ];
            }

            // $order_items_count = 0;

            update_post_meta( $order_id, '_ddwcpos_tendered_amount', $tendered );
            update_post_meta( $order_id, '_ddwcpos_table', $table );

            if ( ! empty( $offline_id ) ) {
                update_post_meta( $order_id, '_ddwcpos_offline_id', $offline_id );
            }

            update_post_meta( $order_id, '_ddwcpos_payment_methods', $payment_methods );

            $tax_display_cart = get_option( 'woocommerce_tax_display_cart' );
            $global_tax_rate  = 0;

            // $prices_include_tax = get_option( 'woocommerce_prices_include_tax' );

            if ( wc_tax_enabled() ) {
                $rates = $tax->find_rates( [
                    'country'  => $outlet_data[ 'country' ],
                    'city'     => $outlet_data[ 'city' ],
                    'state'    => $state_code,
                    'postcode' => $outlet_data[ 'postcode' ],
                ] );

                foreach ( $rates as $key => $rate ) {
                    $global_tax_rate += $rate[ 'rate' ];
                }
            }

            foreach ( $order_data[ 'products' ] as $item ) {
                if ( $item[ 'custom' ] ) {
                    $custom_product_price = $item[ 'total' ];

                    if ( wc_tax_enabled() && 'excl' !== $tax_display_cart ) {
                        $custom_product_price = $item[ 'total' ] * 100 / ( 100 + $tax_rate );
                    }

                    // $this->wpdb->insert(
                    //     $this->wpdb->prefix . 'woocommerce_order_items',
                    //     [
                    //         'order_item_name' => $item[ 'name' ],
                    //         'order_item_type' => 'line_item',
                    //         'order_id'        => $order_id,
                    //     ],
                    //     [
                    //         '%s',
                    //         '%s',
                    //         '%d',
                    //     ]
                    // );

                    // $order_items_count = $order_items_count + $item[ 'quantity' ];

                    // $order_item_id = $this->wpdb->insert_id;

                    // $insert_data = [
                    //     '_line_subtotal_tax' => $item[ 'tax' ],
                    //     '_line_total'        => $custom_product_price,
                    //     '_qty'               => $item[ 'quantity' ],
                    //     '_line_subtotal'     => $custom_product_price,
                    //     '_tax_class'         => $item[ 'tax_label' ],
                    //     '_line_tax'          => $item[ 'tax' ],
                    // ];

                    $order_custom_item = wc_get_container()->get( LegacyProxy::class )->get_instance_of( \WC_Order_Item_Product::class );

                    $order_custom_item->set_props(
                        [
                            'name'      => $item[ 'name' ],
                            'quantity'  => $item[ 'quantity' ],
                            'tax_class' => null,
                            'total'     => $custom_product_price,
                            'subtotal'  => $custom_product_price,
                            // 'taxes'     => [
                            //     'total'    => $item[ 'tax' ],
                            //     'subtotal' => $item[ 'tax' ],
                            // ],
                        ]
                    );

                    $order_custom_item->set_order_id( $order_id );
                    $order_custom_item->save();

                    $order->add_item( $order_custom_item );

                    // $query_string = "INSERT INTO {$this->wpdb->prefix}woocommerce_order_itemmeta ( order_item_id, meta_key, meta_value) VALUES ";

                    // $custom_fields = $place_holders = [];

                    // foreach ( $insert_data as $key => $value ) {
                    //     array_push( $custom_fields, $order_item_id, $key, $value );
                    //     $place_holders[] = "(%d, %s, %s)";
                    // }

                    // $query_string .= implode( ', ', $place_holders );

                    // $this->wpdb->query( $this->wpdb->prepare( $query_string, $custom_fields ) );
                }
            }

            foreach ( $order_data[ 'products' ] as $item ) {
                if ( ! $item[ 'custom' ] ) {
                    $product = wc_get_product( $item[ 'product_id' ] );

                    if ( $product ) {
                        $product_id    = $item[ 'product_id' ];
                        $product_title = $item[ 'name' ];
                        $tax_status    = $product->get_tax_status();
                        $tax_class     = $product->get_tax_class();

						$tax_rate = 0;

						if ( wc_tax_enabled() ) {
							if ( ! empty( $tax_class ) ) {
								$rates = $tax->get_rates_for_tax_class( $tax_class );

                                $priority = 1;

								foreach ( $rates as $key => $rate ) {
                                    if ( $rate->tax_rate_priority == $priority ) {
                                        ++$priority;
                                        if ( ( empty( $rate->tax_rate_country ) || $outlet_data[ 'country' ] === $rate->tax_rate_country ) && ( empty( $rate->tax_rate_state ) || $state_code === $rate->tax_rate_state ) && ( empty( $rate->city_count ) || $outlet_data[ 'city' ] === $rate->city_count ) && ( empty( $rate->postcode_count ) || $outlet_data[ 'postcode' ] === $rate->postcode_count ) ) {
                                            $tax_rate += floatval( $rate->tax_rate );
                                        }
                                    }
								}
							} else {
                                $tax_rate = $global_tax_rate;
							}
						}

                        if ( 'incl' === $tax_display_cart && 'none' !== $tax_status  ) {
                            $tax_excluded_price = $item[ 'uf' ] * $item[ 'quantity' ] / ( ( $tax_rate / 100 ) + 1 );

                            $item_id = $order->add_product( $product, $item[ 'quantity' ], [
                                'subtotal'  => $tax_excluded_price,
                                'total'     => $tax_excluded_price,
                                'name'      => $product_title,
                                'variation' => $item[ 'attributes' ],
                            ] );
                        } else {
                            $item_id = $order->add_product( $product, $item[ 'quantity' ], [
                                'subtotal'  => $item[ 'uf' ] * $item[ 'quantity' ],
                                'total'     => $item[ 'uf' ] * $item[ 'quantity' ],
                                'name'      => $product_title,
                                'variation' => $item[ 'attributes' ],
                            ] );
                        }

                        do_action( 'ddwcpos_after_adding_product_in_order', $item_id, $item, $order, $request );

                        // $order_items_count = $order_items_count + $item[ 'quantity' ];

                        if ( 'custom' === $inventory_type ) {
                            $custom_stock = get_post_meta( $product_id, '_ddwcpos_outlet_stock_' . $outlet_id, true );

                            update_post_meta( $product_id, '_ddwcpos_outlet_stock_' . $outlet_id, $custom_stock - $item[ 'quantity' ] );

                            $product_stock = $product->get_stock_quantity();

                            wc_update_product_stock( $product, $product_stock + $item[ 'quantity' ] );
                        }
                    }
                }
            }

            $order->set_address( $billing_address, 'billing' );
            $order->set_address( $shipping_address, 'shipping' );

            $order->set_payment_method( $payment_method );
            $order->set_payment_method_title( $payment_method_title );

            $order_items = $order->get_items();

            $order_discount = 0;

            if ( ! empty( $coupons ) ) {
                $coupon_amount = 0;

                foreach ( $coupons as $coupon_key => $coupon_val ) {
                    if ( 'percent' === $coupon_val[ 'type' ] ) {
                        foreach ( $order_items as $order_item ) {
                            $total          = $order_item->get_total();
                            $discount_total = $order_item->get_subtotal() * floatval( $coupon_val[ 'price' ] ) / 100;
                            $order_item->set_total( $total - $discount_total );
                            $order_item->save();
                        }

                        $coupon_amount = $order->get_subtotal() * $coupon_val[ 'price' ] / 100;
                    } else {
                        // $discount_amount = floatval( number_format( $coupon_val[ 'price' ], 2 ) );

                        // if ( 'yes' === $prices_include_tax ) {
                        //     $real_price      = ( $discount_amount * 100 ) / ( 100 + $tax_rate );
                        //     $product_tax     = $discount_amount - $real_price;
                        //     $discount_amount = $real_price;
                        // } else {
                        //     $discount_amount = floatval( number_format( $coupon_val[ 'price' ], 2 ) );
                        // }

                        // $this_order = $order_items_count;

                        $items = [];

                        if ( 'fixed_product' === $coupon_val[ 'type' ] ) {
                            $this->ddwcpos_apply_coupon_fixed_product( $coupon_val, $order_items );
                        } elseif ( 'fixed_cart' === $coupon_val[ 'type' ] ) {
                            $total_discount = $this->ddwcpos_apply_coupon_fixed_cart( $coupon_val, $order_items );
                        }

                        // foreach ( $order_items as $order_item ) {
                        //     $items[] = $order_item->get_total();
                        //     return absint( NumberUtil::round( $order_item->get_total() - $this->get_discount( $item->key, true ) ) );
                        // }

                        // foreach ( $order_items as $order_item ) {
                        //     $total          = $order_item->get_total();
                        //     $qty            = $order_item->get_quantity();
                        //     $discount_total = $discount_amount / $this_order;


                        //     // if ( $total > $qty * $discount_total ) {
                        //     //     $order_item->set_total( $total - $qty * $discount_total );
                        //     //     $discount_amount = $discount_amount - ( $qty * $discount_total );
                        //     //     $this_order      = $this_order - $qty;
                        //     // } else {
                        //     //     $order_item->set_total( $total - $total );
                        //     //     $discount_amount = $discount_amount - $total;
                        //     //     $this_order      = $this_order - $qty;
                        //     // }

                        //     $order_item->save();
                        // }

                        $coupon_amount = $coupon_val[ 'price' ];
                    }

                    $item = new \WC_Order_Item_Coupon();

                    $item->set_props(
                        [
                            'code'         => $coupon_val[ 'code' ],
                            'discount'     => floatval( $coupon_amount ),
                            'discount_tax' => 0,
                            'order_id'     => $order_id,
                        ]
                    );

                    $order->add_item( $item );
                }
            }

            $order->calculate_totals();

            $order_total = $order->get_total();

            if ( ! empty( $discount ) ) {
                if ( 'percentage' === $discount[ 'type' ] ) {
                    $discount_amount = wc_format_decimal( floatval( $order_total * $discount[ 'amount' ] / 100 ), 2 );
                } elseif ( 'fixed' === $discount[ 'type' ] ) {
                    $discount_amount = floatval( $discount[ 'amount' ] );
                }

                if ( ! empty( $discount_amount ) ) {
                    $order_total -= $discount_amount;

                    $item = new \WC_Order_Item_Fee();

                    $item->set_order_id( $order_id );
                    $item->set_name( esc_html__( 'POS Custom Discount', 'ddwc-multipos' ) );
                    $item->set_tax_class( '' );
                    $item->set_taxes( [
                        'total' => [],
                    ] );
                    $item->set_tax_status( 'none' );
                    $item->set_total_tax( 0 );
                    $item->set_total( -$discount_amount );

                    $order->add_item( $item );
                }

                if ( $order_total < 0 ) {
                    $order_total = 0;
                }

                $order->set_total( $order_total );
            }

            if ( ! empty( $order_note ) ) {
                $order->add_order_note( $order_note );
            }

            update_post_meta( $order_id, '_ddwcpos_outlet_id', $outlet_id );
            update_post_meta( $order_id, '_ddwcpos_cashier_id', $cashier_id );

            do_action( 'ddwcpos_before_payment_complete_in_order_at_pos', $order, $order_data, $request );

            if ( apply_filters( 'ddwcpos_process_order_payment_complete', true, $order, $order_data, $request ) ) {
                $order->payment_complete();
            }

            $order = apply_filters( 'ddwcpos_modify_creating_pos_order', $order, $order_data, $request );

            do_action( 'ddwcpos_after_creating_order', $order, $order_data, $request );

            if ( apply_filters( 'ddwcpos_process_order_update_status', true, $order, $order_data, $request ) ) {
                // $order->set_status( 'wc-processing' );
                // $order->save();
                $order->update_status( str_replace( 'wc-', '', $this->ddwcpos_configuration[ 'order_status' ] ) );
            }

            $order->save();

            // $order->update_status( 'wc-processing' );
            // $order->calculate_totals();
            // $order->update_status( 'wc-completed' );

            $order_status = wc_get_order_statuses();

            $order_response[ 'order_status' ]          = $order->get_status();
            $order_response[ 'order_status_label' ]    = wc_get_order_status_name( $order_response[ 'order_status' ] );
            $order_response[ 'order_currency' ]        = $order->get_currency();
            $order_response[ 'order_currency_symbol' ] = html_entity_decode( get_woocommerce_currency_symbol( $order->get_currency() ) );
            $order_response[ 'id' ]                    = $order_id;
            $order_response[ 'order_id' ]              = $order->get_order_number();
            $order_response[ 'customer_id' ]           = $order->get_customer_id();

            $id = 0;

            $order_response[ 'products' ] = [];

            $order       = wc_get_order( $order_id );
            $order_items = $order->get_items();

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

                $value_data[ 'quantity' ] = ! empty( $value_data[ 'quantity' ] ) ? $value_data[ 'quantity' ] : 1;

                $variable_id         = $value->get_variation_id();
                $product_total_price = $value_data[ 'subtotal' ];
                $product_unit_price  = $product_total_price / $value_data[ 'quantity' ];
                $returned_quantity   = $order->get_qty_refunded_for_item( $key );

                $taxes = $value_data[ 'taxes' ][ 'subtotal' ];

                if ( ! empty( $taxes ) ) {
                    foreach ( $taxes as $k => $v ) {
                        $taxes[ $k ] = wc_format_decimal( floatval( $taxes[ $k ] ) / $value_data[ 'quantity' ] );
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

            $order_response[ 'order_notes' ]          = $notes;
            $order_response[ 'tendered' ]             = $tendered;
            $order_response[ 'table' ]                = $table;
            $order_response[ 'change' ]               = ( $tendered - $order_total ) > 0 ? $tendered - $order_total : 0;
            $order_response[ 'email' ]                = $order->get_billing_email();
            $order_response[ 'order_date' ]           = $order_date;
            $order_response[ 'payment_method' ]       = $payment_method;
            $order_response[ 'payment_method_title' ] = $payment_method_title;
            $order_response[ 'offline_id' ]           = $offline_id;
            $order_response[ 'payment_methods' ]      = $payment_methods;

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

            $order_response[ 'transactions' ] = [];

            foreach ( $payment_methods as $key => $value ) {
                $transaction_data = [
                    'cashier_id' => $cashier_id,
                    'outlet_id'  => $outlet_id,
                    'order_id'   => $order_id,
                    'in'         => $value[ 'amount' ],
                    'out'        => 'cash' === $value[ 'slug' ] ? $order_response[ 'change' ] : 0,
                    'method'     => $value[ 'slug' ],
                    'reference'  => '',
                    'date'       => current_time( 'Y-m-d H:i:s' ),
                ];

                $transaction_data[ 'id' ]             = strval( $transaction_helper->ddwcpos_save_transaction( $transaction_data ) );
                $order_response[ 'transactions' ][]   = $transaction_data;
            }

            $order_response = apply_filters( 'ddwcpos_modify_api_order_response', $order_response, $order, $request );

            return apply_filters( 'ddwcpos_modify_api_create_order_response', $order_response, $order, $request );
        }

        /**
         * Apply fixed cart discount to items.
         *
         * @param  array $coupon Coupon array.
         * @param  array $items_to_apply Array of items to apply the coupon to.
         * @param  int $amount Fixed discount amount to apply in cents. Leave blank to pull from coupon.
         * @return int Total discounted.
         */
        protected function ddwcpos_apply_coupon_fixed_cart( $coupon, $items_to_apply, $amount = null ) {
            $total_discount = 0;
            $amount         = $amount ? $amount : wc_add_number_precision( $coupon[ 'price' ] );
            $items_to_apply = array_filter( $items_to_apply, array( $this, 'ddwcpos_filter_products_with_price' ) );

            $item_count = 0;

            foreach ( $items_to_apply as $key => $item ) {
                $item_count += $item->get_quantity();
            }

            if ( ! $item_count ) {
                return $total_discount;
            }

            if ( ! $amount ) {
                // If there is no amount we still send it through so filters are fired.
                $total_discount = $this->ddwcpos_apply_coupon_fixed_product( $coupon, $items_to_apply, 0 );
            } else {
                $per_item_discount = absint( $amount / $item_count ); // round it down to the nearest cent.

                if ( $per_item_discount > 0 ) {
                    $total_discount = $this->ddwcpos_apply_coupon_fixed_product( $coupon, $items_to_apply, $per_item_discount );

                    /**
                     * If there is still discount remaining, repeat the process.
                     */
                    if ( $total_discount > 0 && $total_discount < $amount ) {
                        $total_discount += $this->ddwcpos_apply_coupon_fixed_cart( $coupon, $items_to_apply, $amount - $total_discount );
                    }
                } elseif ( $amount > 0 ) {
                    $total_discount += $this->ddwcpos_apply_coupon_remainder( $coupon, $items_to_apply, $amount );
                }
            }

            return $total_discount;
        }

        /**
         * Apply fixed product discount to items.
         *
         * @param  array $coupon Coupon array.
         * @param  array     $items_to_apply Array of items to apply the coupon to.
         * @param  int       $amount Fixed discount amount to apply in cents. Leave blank to pull from coupon.
         * @return int Total discounted.
         */
        protected function ddwcpos_apply_coupon_fixed_product( $coupon, $items_to_apply, $amount = null ) {
            $total_discount  = 0;
            $amount          = $amount ? $amount : wc_add_number_precision( $coupon[ 'price' ] );

            foreach ( $items_to_apply as $item ) {
                // Find out how much price is available to discount for the item.
                $discounted_price = $this->ddwcpos_get_discounted_price_in_cents( $item );

                // Get the price we actually want to discount, based on settings.
                $price_to_discount = ( 'yes' === get_option( 'woocommerce_calc_discounts_sequentially', 'no' ) ) ? $discounted_price : $item->get_total();

                $apply_quantity = $item->get_quantity();
                $discount       = $amount * $apply_quantity;

                $discount       = min( $discounted_price, $discount );
                $total_discount = $total_discount + $discount;

                $item->set_total( wc_remove_number_precision_deep( $discounted_price - $discount ) );

                // Store code and discount amount per item.
                // $this->discounts[ $coupon->get_code() ][ $item->key ] += $discount;
            }
            return $total_discount;
        }

        /**
         * Deal with remaining fractional discounts by splitting it over items
         * until the amount is expired, discounting 1 cent at a time.
         *
         * @since 3.2.0
         * @param  array $coupon Coupon array.
         * @param  array     $items_to_apply Array of items to apply the coupon to.
         * @param  int       $amount Fixed discount amount to apply.
         * @return int Total discounted.
         */
        protected function ddwcpos_apply_coupon_remainder( $coupon, $items_to_apply, $amount ) {
            $total_discount = 0;

            foreach ( $items_to_apply as $item ) {
                for ( $i = 0; $i < $item->get_quantity(); $i ++ ) {
                    // Find out how much price is available to discount for the item.
                    $price_to_discount = $this->ddwcpos_get_discounted_price_in_cents( $item );

                    // Run coupon calculations.
                    $discount = min( $price_to_discount, 1 );

                    // Store totals.
                    $total_discount += $discount;

                    $item->set_total( wc_remove_number_precision_deep( $price_to_discount - $discount ) );

                    // Store code and discount amount per item.
                    // $this->discounts[ $coupon->get_code() ][ $item->key ] += $discount;

                    if ( $total_discount >= $amount ) {
                        break 2;
                    }
                }
                if ( $total_discount >= $amount ) {
                    break;
                }
            }
            return $total_discount;
        }

        /**
         * Filter out all products which have been fully discounted to 0.
         * Used as array_filter callback.
         *
         * @since  3.2.0
         * @param  object $item Get data for this item.
         * @return bool
         */
        protected function ddwcpos_filter_products_with_price( $item ) {
            return $this->ddwcpos_get_discounted_price_in_cents( $item ) > 0;
        }

        /**
         * Get discounted price of an item to precision (in cents).
         *
         * @param  object $item Get data for this item.
         * @return int
         */
        public function ddwcpos_get_discounted_price_in_cents( $item ) {
            return absint( NumberUtil::round( wc_add_number_precision( $item->get_total() ) ) );
        }
    }
}