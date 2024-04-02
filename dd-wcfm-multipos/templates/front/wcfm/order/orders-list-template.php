<?php
/**
 * Orders List Template
 *
 * @package MultiPOS - Point of Sale for WCFM Marketplace
 * @version 1.0.0
 */

namespace DDWCMultiPOS\Templates\Front\WCFM\Order;

use DDWCMultiPOS\Helper\Outlet\DDWCPOS_Outlet_Helper;

if ( ! class_exists( 'DDWCPOS_Orders_List_Template' ) ) {
	/**
	 * Orders List class
	 */
	class DDWCPOS_Orders_List_Template {
		/**
		 * Class constructor
		 */
		public function __construct( $ddwcpos_configuration ) {
			global $wp;
			$outlet_helper = new DDWCPOS_Outlet_Helper();
			$search        = '';
			$outlet_id     = '';

			if ( ! empty( $_POST[ 'ddwcpos_filter_submit' ] ) && ! empty( $_POST[ 'ddwcpos_nonce' ] ) && wp_verify_nonce( $_POST[ 'ddwcpos_nonce' ], 'ddwcpos_nonce_action' ) ) {
				$search    = ! empty( $_POST[ 'ddwcpos_product_search' ] ) ? sanitize_text_field( wp_unslash( $_POST[ 'ddwcpos_product_search' ] ) ) : '';
				$outlet_id = ! empty( $_POST[ 'ddwcpos_outlet_id' ] ) ? sanitize_text_field( wp_unslash( $_POST[ 'ddwcpos_outlet_id' ] ) ) : '';
			}

            $per_page     = 20;
            $current_page = ! empty( $wp->query_vars[ 'ddwcpos-orders' ] ) ? $wp->query_vars[ 'ddwcpos-orders' ] : 1;
            $user_id      = get_current_user_id();

			$vendor_outlets = explode( ', ', ddwcpos_get_all_outlet_ids_for_sql_by_vendor_id( $user_id ) );

			if ( ! empty( $outlet_id ) ) {
				$search_results = new \WP_Query( [
					'p'                   => esc_attr( $search ),
					'ignore_sticky_posts' => 1,
					'post_type'           => 'shop_order',
					'post_status'         => 'any',
					'posts_per_page'      => -1,
					'order'               => 'DESC',
					'orderby'             => 'ID',
					'fields'              => 'ids',
					'meta_query'          => [
						[
							'key'     => '_ddwcpos_outlet_id',
							'compare' => '=',
							'value'   => $outlet_id
						]
					],
				] );
			} else {
				$search_results = new \WP_Query( [
					'p'                   => esc_attr( $search ),
					'ignore_sticky_posts' => 1,
					'post_type'           => 'shop_order',
					'post_status'         => 'any',
					'posts_per_page'      => -1,
					'order'               => 'DESC',
					'orderby'             => 'ID',
					'fields'              => 'ids',
					'meta_query'          => [
						[
							'key'     => '_ddwcpos_outlet_id',
							'compare' => 'IN',
							'value'   => $vendor_outlets
						]
					],
				] );
			}

			wp_reset_postdata();

            $total_items = $search_results->post_count;

            $offset = ( $current_page - 1 ) * $per_page;

			if ( ! empty( $outlet_id ) ) {
				$search_results = new \WP_Query( [
					'p'                   => esc_attr( $search ),
					'ignore_sticky_posts' => 1,
					'posts_per_page'      => $per_page,
					'offset'              => $offset,
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
				] );
			} else {
				$search_results = new \WP_Query( [
					'p'                   => esc_attr( $search ),
					'ignore_sticky_posts' => 1,
					'posts_per_page'      => $per_page,
					'offset'              => $offset,
					'post_type'           => 'shop_order',
					'order'               => 'DESC',
					'orderby'             => 'ID',
					'post_status'         => 'any',
					'fields'              => 'ids',
					'meta_query'          => [
						[
							'key'     => '_ddwcpos_outlet_id',
							'compare' => 'IN',
							'value'   => $vendor_outlets,
						]
					],
				] );
			}

			wp_reset_postdata();

			$outlets = $outlet_helper->ddwcpos_get_all_outlets_by_vendor_id( 999999, 0, '', $user_id );

            ?>
            <div class="collapse wcfm-collapse" id="wcfm_products_listing">
                <div class="wcfm-page-headig">
                    <span class="wcfmfa fa-cubes"></span>
                    <span class="wcfm-page-heading-text"><?php esc_html_e( 'Orders', 'ddwc-multipos' ); ?></span>
                </div>
                <div class="wcfm-collapse-content">
				<div id="wcfm_page_load"></div>
                    <div class="wcfm-container wcfm-top-element-container">
						<form method="post">
							<?php wp_nonce_field( 'ddwcpos_nonce_action', 'ddwcpos_nonce' ); ?>
							<div class="ddwcpos-wcfm-left">
								<select name="ddwcpos_outlet_id" class="wcfm-select">
									<option value=""><?php esc_html_e( 'Select Outlet', 'ddwc-multipos' ); ?></option>
									<?php
									if ( ! empty( $outlets ) ) {
										foreach ( $outlets as $key => $outlet ) {
											?>
											<option value="<?php echo esc_attr( $outlet[ 'id' ] ); ?>" <?php echo esc_attr( $outlet[ 'id' ] == $outlet_id ? 'selected="selected"' : '' ); ?>><?php echo esc_html( $outlet[ 'name' ] ); ?></option>
											<?php
										}
									}
									?>
								</select>

								<input type="submit" name="ddwcpos_filter_submit" class="button" value="<?php esc_attr_e( 'Filter', 'ddwc-multipos' ); ?>" />
							</div>
							<div class="ddwcpos-wcfm-right">
								<input type="search" class="wcfm-text" placeholder="<?php esc_attr_e( 'Enter product name...', 'ddwc-multipos' ); ?>" name="ddwcpos_product_search" value="<?php echo esc_attr( $search ); ?>" />
								<input type="submit" name="ddwcpos_filter_submit" class="button" value="<?php esc_attr_e( 'Search', 'ddwc-multipos' ); ?>" />
							</div>
						</form>
                        <div class="wcfm-clearfix"></div>
                    </div>
                    <div class="wcfm-clearfix"></div><br />
                    <div class="wcfm-container">
                        <div id="wcfm_products_listing_expander" class="wcfm-content">
							<table id="wcfm-products" class="display ddwcpos-wcfm-products-table ddwcpos-wcfm-table" cellspacing="0" width="100%">
								<thead>
									<tr>
										<th><?php esc_html_e( 'Order', 'ddwc-multipos' ); ?></th>
										<th><?php esc_html_e( 'Offline Order ID', 'ddwc-multipos' ); ?></th>
										<th><?php esc_html_e( 'Date', 'ddwc-multipos' ); ?></th>
										<th><?php esc_html_e( 'Status', 'ddwc-multipos' ); ?></th>
										<th><?php esc_html_e( 'Total', 'ddwc-multipos' ); ?></th>
										<th><?php esc_html_e( 'Outlet', 'ddwc-multipos' ); ?></th>
										<th><?php esc_html_e( 'Cashier', 'ddwc-multipos' ); ?></th>
									</tr>
								</thead>
								<tbody>
									<?php
									if ( $search_results->have_posts() ) {
										while ( $search_results->have_posts() ) {
											$search_results->the_post();

											$order_id = $search_results->post;
											$order    = wc_get_order( $order_id );
											$buyer    = '';

											if ( $order->get_billing_first_name() || $order->get_billing_last_name() ) {
												/* translators: 1: first name 2: last name */
												$buyer = trim( sprintf( _x( '%1$s %2$s', 'full name', 'ddwc-multipos' ), $order->get_billing_first_name(), $order->get_billing_last_name() ) );
											} elseif ( $order->get_billing_company() ) {
												$buyer = trim( $order->get_billing_company() );
											} elseif ( $order->get_customer_id() ) {
												$user  = get_user_by( 'ID', $order->get_customer_id() );
												$buyer = ucwords( $user->display_name );
											}

											/**
											 * Filter buyer name in list table orders.
											 *
											 * @since 3.7.0
											 * @param string   $buyer Buyer name.
											 * @param WC_Order $order Order data.
											 */
											$buyer = apply_filters( 'woocommerce_admin_order_buyer_name', $buyer, $order );

											if ( 'trash' === $order->get_status() ) {
												$order_html = '<strong>#' . esc_attr( $order->get_order_number() ) . ' ' . esc_html( $buyer ) . '</strong>';
											} else {
												$order_html = '<a href="' . esc_url( get_wcfm_view_order_url( $order->get_id() ) ) . '" class="order-view"><strong>#' . esc_attr( $order->get_order_number() ) . ' ' . esc_html( $buyer ) . '</strong></a>';
											}

											$tooltip                 = '';
											$comment_count           = get_comment_count( $order_id );
											$approved_comments_count = absint( $comment_count[ 'approved' ] );

											if ( $approved_comments_count ) {
												$latest_notes = wc_get_order_notes(
													[
														'order_id' => $order_id,
														'limit'    => 1,
														'orderby'  => 'date_created_gmt',
													]
												);

												$latest_note = current( $latest_notes );

												if ( isset( $latest_note->content ) && 1 === $approved_comments_count ) {
													$tooltip = wc_sanitize_tooltip( $latest_note->content );
												} elseif ( isset( $latest_note->content ) ) {
													/* translators: %d: notes count */
													$tooltip = wc_sanitize_tooltip( $latest_note->content . '<br/><small>' . sprintf( _n( 'Plus %d other note', 'Plus %d other notes', ( $approved_comments_count - 1 ), 'ddwc-multipos' ), $approved_comments_count - 1 ) . '</small>' );
												} else {
													/* translators: %d: notes count */
													$tooltip = wc_sanitize_tooltip( sprintf( _n( '%d note', '%d notes', $approved_comments_count, 'ddwc-multipos' ), $approved_comments_count ) );
												}
											}

											if ( $tooltip ) {
												$status = sprintf( '<mark class="order-status %s tips" data-tip="%s"><span>%s</span></mark>', esc_attr( sanitize_html_class( 'status-' . $order->get_status() ) ), wp_kses_post( $tooltip ), esc_html( wc_get_order_status_name( $order->get_status() ) ) );
											} else {
												$status = sprintf( '<mark class="order-status %s"><span>%s</span></mark>', esc_attr( sanitize_html_class( 'status-' . $order->get_status() ) ), esc_html( wc_get_order_status_name( $order->get_status() ) ) );
											}

											$order_timestamp = $order->get_date_created() ? $order->get_date_created()->getTimestamp() : '';

											if ( ! $order_timestamp ) {
												echo '&ndash;';
												return;
											}

											// Check if the order was created within the last 24 hours, and not in the future.
											if ( $order_timestamp > strtotime( '-1 day', time() ) && $order_timestamp <= time() ) {
												$show_date = sprintf(
													/* translators: %s: human-readable time difference */
													_x( '%s ago', '%s = human-readable time difference', 'ddwc-multipos' ),
													human_time_diff( $order->get_date_created()->getTimestamp(), time() )
												);
											} else {
												$show_date = $order->get_date_created()->date_i18n( apply_filters( 'woocommerce_admin_order_date_format', __( 'M j, Y', 'ddwc-multipos' ) ) );
											}

											$date = sprintf(
												'<time datetime="%1$s" title="%2$s">%3$s</time>',
												esc_attr( $order->get_date_created()->date( 'c' ) ),
												esc_html( $order->get_date_created()->date_i18n( get_option( 'date_format' ) . ' ' . get_option( 'time_format' ) ) ),
												esc_html( $show_date )
											);

											if ( $order->get_payment_method_title() ) {
												/* translators: %s: method */
												$total = '<span class="tips" data-tip="' . esc_attr( sprintf( __( 'via %s', 'ddwc-multipos' ), $order->get_payment_method_title() ) ) . '">' . wp_kses_post( $order->get_formatted_order_total() ) . '</span>';
											} else {
												$total = wp_kses_post( $order->get_formatted_order_total() );
											}

											$outlet_id   = get_post_meta( $order_id, '_ddwcpos_outlet_id', true );
											$offline_id  = get_post_meta( $order_id, '_ddwcpos_offline_id', true );
											$cashier_id  = get_post_meta( $order_id, '_ddwcpos_cashier_id', true );
											$outlet      = $outlet_helper->ddwcpos_get_outlet_details_by_id( $outlet_id );
											$cashier     = $cashier_id;
											$cashier_obj = get_user_by( 'ID', $cashier_id );

											if ( $cashier_obj ) {
												$email   = $cashier_obj->user_email . ' (#' . $cashier_id . ')';
												$cashier = '<a href=' . esc_url( ddwcpos_get_wfcm_custom_menus_url( 'ddwcpos-manage-cashier', $cashier_id ) ) . '>' . esc_html( $email ) . '</a>';
											}

											?>
											<tr>
												<td><?php echo wp_kses_post( $order_html ); ?></td>
												<td><?php echo esc_html( ! empty( $offline_id ) ? '#' . $offline_id : '-' ); ?></td>
												<td><?php echo wp_kses_post( $date ); ?></td>
												<td><?php echo wp_kses_post( $status ); ?></td>
												<td><?php echo wp_kses_post( $total ); ?></td>
												<td><?php echo esc_html( $outlet[ 'name' ] ); ?></td>
												<td><?php echo wp_kses_post( $cashier ); ?></td>
											</tr>
											<?php
										}
									}
									?>
								</tbody>
								<tfoot>
									<tr>
										<th><?php esc_html_e( 'Order', 'ddwc-multipos' ); ?></th>
										<th><?php esc_html_e( 'Offline Order ID', 'ddwc-multipos' ); ?></th>
										<th><?php esc_html_e( 'Date', 'ddwc-multipos' ); ?></th>
										<th><?php esc_html_e( 'Status', 'ddwc-multipos' ); ?></th>
										<th><?php esc_html_e( 'Total', 'ddwc-multipos' ); ?></th>
										<th><?php esc_html_e( 'Outlet', 'ddwc-multipos' ); ?></th>
										<th><?php esc_html_e( 'Cashier', 'ddwc-multipos' ); ?></th>
									</tr>
								</tfoot>
							</table>
							<div class="ddwcpos-wcfm-right">
								<?php
								if ( 1 < $total_items ) {
									if ( 1 !== $current_page && $current_page > 1 ) {
										?>
										<a href="<?php echo esc_url( ddwcpos_get_wfcm_custom_menus_url( 'ddwcpos-orders', --$current_page ) ); ?>"><?php esc_html_e( 'Previous', 'ddwc-multipos' ); ?></a>
										<?php
									}
									if ( ceil( $total_items / $per_page ) > $current_page ) {
										?>
										<a href="<?php echo esc_url( ddwcpos_get_wfcm_custom_menus_url( 'ddwcpos-orders', ++$current_page ) ); ?>"><?php esc_html_e( 'Next', 'ddwc-multipos' ); ?></a>
										<?php
									}
								}
								?>
							</div>
                            <div class="wcfm-clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
            <?php
		}
    }
}
