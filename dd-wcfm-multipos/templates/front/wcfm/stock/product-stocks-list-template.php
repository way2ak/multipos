<?php

/**

 * Product Stocks List Template

 *

 * @package MultiPOS - Point of Sale for WCFM Marketplace

 * @version 1.0.0

 */



namespace DDWCMultiPOS\Templates\Front\WCFM\Stock;



use DDWCMultiPOS\Helper\Outlet\DDWCPOS_Outlet_Helper;

use DDWCMultiPOS\Helper\Barcode\DDWCPOS_Barcode_Helper;



if ( ! class_exists( 'DDWCPOS_Product_Stocks_List_Template' ) ) {

	/**

	 * Product Stocks List class

	 */

	class DDWCPOS_Product_Stocks_List_Template {

		/**

		 * Class constructor

		 */

		public function __construct( $ddwcpos_configuration ) {

			global $wp;



            $search    = '';

            $outlet_id = '';



			if ( ! empty( $_POST[ 'ddwcpos_filter_submit' ] ) && ! empty( $_POST[ 'ddwcpos_nonce' ] ) && wp_verify_nonce( $_POST[ 'ddwcpos_nonce' ], 'ddwcpos_nonce_action' ) ) {

				$search    = ! empty( $_POST[ 'ddwcpos_product_search' ] ) ? sanitize_text_field( wp_unslash( $_POST[ 'ddwcpos_product_search' ] ) ) : '';

				$outlet_id = ! empty( $_POST[ 'ddwcpos_outlet_id' ] ) ? sanitize_text_field( wp_unslash( $_POST[ 'ddwcpos_outlet_id' ] ) ) : '';

			}



            $per_page     = 20;

            $current_page = ! empty( $wp->query_vars[ 'ddwcpos-assign-stocks' ] ) ? $wp->query_vars[ 'ddwcpos-assign-stocks' ] : 1;

            $user_id      = get_current_user_id();



			$search_results = new \WP_Query( [

				's'                   => $search,

				'author'              => $user_id,

				'ignore_sticky_posts' => 1,

				'post_type'           => [ 'product', 'product_variation' ],

				'order'               => 'DESC',

				'orderby'             => 'ID',

				'post_status'         => 'publish',

				'posts_per_page'      => -1,

				'fields'              => 'ids',

				'search_columns'      => [ 'post_title' ],

			] );



			wp_reset_postdata();



            $total_items = $search_results->post_count;



			$off = ( $current_page - 1 ) * $per_page;



			$args = [

				's'                   => $search,

				'author'              => $user_id,

				'ignore_sticky_posts' => 1,

				'post_type'           => [ 'product', 'product_variation' ],

				'post_status'         => 'publish',

				'order'               => 'DESC',

				'orderby'             => 'ID',

				'posts_per_page'      => $per_page,

				'offset'              => $off,

				'search_columns'      => [ 'post_title' ],

				'fields'              => 'ids',

			];



			$args = apply_filters( 'ddwcpos_modify_products_list_args', $args );



			$search_results = new \WP_Query( $args );



			wp_reset_postdata();



			$outlet_helper = new DDWCPOS_Outlet_Helper();

			$outlets       = $outlet_helper->ddwcpos_get_all_outlets_by_vendor_id( 999999, 0, '', $user_id );



            ?>

            <div class="collapse wcfm-collapse" id="wcfm_products_listing">

                <div class="wcfm-page-headig">

                    <span class="wcfmfa fa-cubes"></span>

                    <span class="wcfm-page-heading-text"><?php esc_html_e( 'Products', 'ddwc-multipos' ); ?></span>

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

										<th><span class="wcfmfa fa-image text_tip" data-tip="<?php esc_html_e( 'Image', 'ddwc-multipos' ); ?>"></span></th>

										<th><?php esc_html_e( 'Name', 'ddwc-multipos' ); ?></th>

										<th><?php esc_html_e( 'Product Type', 'ddwc-multipos' ); ?></th>

										<th><?php esc_html_e( 'Barcode', 'ddwc-multipos' ); ?></th>

										<th><?php esc_html_e( 'Price', 'ddwc-multipos' ); ?></th>

										<th><?php echo esc_html__( 'Centralized Stock', 'ddwc-multipos' ) . wc_help_tip( esc_html__( 'This is the WooCommerce stock which is same for all the outlets.', 'ddwc-multipos' ) ); ?></th>

										<th><?php echo esc_html__( 'Custom Stock', 'ddwc-multipos' ) . wc_help_tip( esc_html__( 'This is the custom stock which can be different for different outlets.', 'ddwc-multipos' ) ); ?></th>

									</tr>

								</thead>

								<tbody>

									<?php

									if ( $search_results->have_posts() ) {

										$barcode_helper = new DDWCPOS_Barcode_Helper( $ddwcpos_configuration );



										while ( $search_results->have_posts() ) {

											$search_results->the_post();



											$product_id   = $search_results->post;

											$product      = wc_get_product( $product_id );



											if ( ! $product ) {

												continue;

											}



											$product_type = $product->get_type();



											if ( 'simple' === $product_type || 'variation' === $product_type ) {

												if ( 'simple' === $product_type ) {

													$product_type    = esc_html__( 'Simple', 'ddwc-multipos' );

													$main_product_id = $product_id;

												} else {

													$product_type    = esc_html__( 'Variation', 'ddwc-multipos' );

													$main_product_id = $product->get_parent_id();

												}



												$barcode_init = $barcode_helper->ddwcpos_get_barcode_init( $product );

												$stock_status = $product->get_stock_status();



												$barcode_final = $barcode_helper->ddwcpos_generate_barcode( $barcode_init );



												$barcode_image_url       = DDWCPOS_PLUGIN_URL . "helper/barcode/barcode-image.php?code={$barcode_final}";



												$barcode_image_print_url = DDWCPOS_PLUGIN_URL . "helper/barcode/barcode-image.php?orientation={$ddwcpos_configuration[ 'barcode_orientation' ]}&code={$barcode_final}";



												ob_start();

												?>

												<input type="number" min="1" class="ddwcpos-barcode-quantity wcfm-text ddwcpos-width-60" placeholder="<?php esc_attr_e( 'Quantity', 'ddwc-multipos' ); ?>" />

												<button class="button small alt ddwcpos-product-action" data-action="print_barcode" data-product-id="<?php echo esc_attr( $product_id ); ?>" data-barcode-image="<?php echo esc_url( $barcode_image_print_url ); ?>"><?php esc_html_e( 'Print', 'ddwc-multipos' ); ?></button>

												<?php

												$barcode_print = ob_get_clean();



												?>

												<tr>

													<td><?php echo wp_kses_post( $product->get_image( 'thumbnail' ) ); ?></td>

													<td><?php echo wp_kses_post( $product->get_name() ); ?></td>

													<td><?php echo esc_html( $product_type ); ?></td>

													<td><?php echo esc_html( $barcode_init ); ?></td>

													<td><?php echo wp_kses_post( $product->get_price_html() ); ?></td>

													<td>

														<?php

														if ( 'instock' === $stock_status ) {

															$stock_quantity = $product->get_stock_quantity();

															if ( $stock_quantity > 0 ) {

																?>

																<mark class="instock">

																	<?php

																	/* translators: %s for product stock quantity */

																	echo sprintf( esc_html__( 'In Stock(%s)', 'ddwc-multipos' ), $stock_quantity ); 

																	?>

																</mark>

																<?php

															} else {

																?>

																<mark class="instock"><?php esc_html_e( 'In Stock', 'ddwc-multipos' ); ?></mark>

																<?php

															}

														} else {

															?>

															<mark class="outofstock"><?php esc_html_e( 'Out of Stock', 'ddwc-multipos' ); ?></mark>

															<?php

														}

														?>

													</td>

													<td>

														<?php

														if ( ! empty( $outlet_id ) ) {

															$custom_stock = get_post_meta( $product_id, '_ddwcpos_outlet_stock_' . $outlet_id, true );

															?>

															<input type="number" min="0" class="ddwcpos-custom-stock ddwcpos-width-60" placeholder="<?php esc_attr_e( 'Quantity', 'ddwc-multipos' ); ?>" value="<?php echo esc_attr( ! empty( $custom_stock ) ? $custom_stock : 0 ); ?>" />

															<button class="button ddwcpos-product-action" data-action="update_custom_stock" data-product-id="<?php echo esc_attr( $product_id ); ?>" data-outlet-id="<?php echo esc_attr( $outlet_id ); ?>"><?php esc_html_e( 'Update', 'ddwc-multipos' ); ?></button>

															<?php

														} else {

															esc_html_e( 'Select Outlet First!', 'ddwc-multipos' );

														}

														?>

													</td>

												</tr>

												<?php

											}

										}

									}

									?>

								</tbody>

								<tfoot>

									<tr>

										<th><span class="wcfmfa fa-image text_tip" data-tip="<?php esc_html_e( 'Image', 'ddwc-multipos' ); ?>"></span></th>

										<th><?php esc_html_e( 'Name', 'ddwc-multipos' ); ?></th>

										<th><?php esc_html_e( 'Product Type', 'ddwc-multipos' ); ?></th>

										<th><?php esc_html_e( 'Barcode', 'ddwc-multipos' ); ?></th>

										<th><?php esc_html_e( 'Price', 'ddwc-multipos' ); ?></th>

										<th><?php echo esc_html__( 'Centralized Stock', 'ddwc-multipos' ) . wc_help_tip( esc_html__( 'This is the WooCommerce stock which is same for all the outlets.', 'ddwc-multipos' ) ); ?></th>

										<th><?php echo esc_html__( 'Custom Stock', 'ddwc-multipos' ) . wc_help_tip( esc_html__( 'This is the custom stock which can be different for different outlets.', 'ddwc-multipos' ) ); ?></th>

									</tr>

								</tfoot>

							</table>

							<div class="ddwcpos-wcfm-right">

								<?php

								if ( 1 < $total_items ) {

									if ( 1 !== $current_page && $current_page > 1 ) {

										?>

										<a href="<?php echo esc_url( ddwcpos_get_wfcm_custom_menus_url( 'ddwcpos-assign-stocks', --$current_page ) ); ?>"><?php esc_html_e( 'Previous', 'ddwc-multipos' ); ?></a>

										<?php

									}

									if ( ceil( $total_items / $per_page ) > $current_page ) {

										?>

										<a href="<?php echo esc_url( ddwcpos_get_wfcm_custom_menus_url( 'ddwcpos-assign-stocks', ++$current_page ) ); ?>"><?php esc_html_e( 'Next', 'ddwc-multipos' ); ?></a>

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

