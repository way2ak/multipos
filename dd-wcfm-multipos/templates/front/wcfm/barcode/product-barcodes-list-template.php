<?php
/**
 * Product Barcodes List Template
 *
 * @package MultiPOS - Point of Sale for WCFM Marketplace
 * @version 1.0.0
 */

namespace DDWCMultiPOS\Templates\Front\WCFM\Barcode;

use DDWCMultiPOS\Helper\Barcode\DDWCPOS_Barcode_Helper;

if ( ! class_exists( 'DDWCPOS_Product_Barcodes_List_Template' ) ) {
	/**
	 * Product Barcodes List class
	 */
	class DDWCPOS_Product_Barcodes_List_Template {
		/**
		 * Class constructor
		 */
		public function __construct( $ddwcpos_configuration ) {
			global $wp;

            $search = '';

			if ( ! empty( $_POST[ 'ddwcpos_filter_submit' ] ) && ! empty( $_POST[ 'ddwcpos_nonce' ] ) && wp_verify_nonce( $_POST[ 'ddwcpos_nonce' ], 'ddwcpos_nonce_action' ) ) {
				$search       = ! empty( $_POST[ 'ddwcpos_product_search' ] ) ? sanitize_text_field( wp_unslash( $_POST[ 'ddwcpos_product_search' ] ) ) : '';
			}

            $per_page     = 20;
            $current_page = ! empty( $wp->query_vars[ 'ddwcpos-assign-barcodes' ] ) ? $wp->query_vars[ 'ddwcpos-assign-barcodes' ] : 1;
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
            ?>
            <div class="collapse wcfm-collapse" id="wcfm_products_listing">
                <div class="wcfm-page-headig">
                    <span class="wcfmfa fa-cubes"></span>
                    <span class="wcfm-page-heading-text"><?php esc_html_e( 'Products', 'ddwc-multipos' ); ?></span>
                </div>
                <div class="wcfm-collapse-content">
				<div id="wcfm_page_load"></div>
                    <div class="wcfm-container wcfm-top-element-container">
						<form method="post" class="ddwcpos-wcfm-right">
							<?php wp_nonce_field( 'ddwcpos_nonce_action', 'ddwcpos_nonce' ); ?>
							<input type="search" class="wcfm-text" placeholder="<?php esc_attr_e( 'Enter product name...', 'ddwc-multipos' ); ?>" name="ddwcpos_product_search" value="<?php echo esc_attr( $search ); ?>" />
							<input type="submit" name="ddwcpos_filter_submit" class="button" value="<?php esc_attr_e( 'Search', 'ddwc-multipos' ); ?>" />
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
										<th><?php esc_html_e( 'Price', 'ddwc-multipos' ); ?></th>
										<th><?php esc_html_e( 'Barcode', 'ddwc-multipos' ); ?></th>
										<th><?php esc_html_e( 'Barcode Image', 'ddwc-multipos' ); ?></th>
										<th><?php esc_html_e( 'Barcode Print', 'ddwc-multipos' ); ?></th>
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
												if ( $product_type == 'simple' ) {
													$product_type    = esc_html__( 'Simple', 'ddwc-multipos' );
													$main_product_id = $product_id;
												} else {
													$product_type    = esc_html__( 'Variation', 'ddwc-multipos' );
													$main_product_id = $product->get_parent_id();
												}

												$barcode_init  = $barcode_helper->ddwcpos_get_barcode_init( $product );
												$barcode_final = $barcode_helper->ddwcpos_generate_barcode( $barcode_init );

												$barcode_image_url       = DDWCPOS_PLUGIN_URL . "helper/barcode/barcode-image.php?code={$barcode_final}";
												$barcode_image_print_url = DDWCPOS_PLUGIN_URL . "helper/barcode/barcode-image.php?orientation={$ddwcpos_configuration[ 'barcode_orientation' ]}&code={$barcode_final}";

												?>
												<tr>
													<td><?php echo wp_kses_post( $product->get_image( 'thumbnail' ) ); ?></td>
													<td><?php echo wp_kses_post( $product->get_name() ); ?></td>
													<td><?php echo esc_html( $product_type ); ?></td>
													<td><?php echo wp_kses_post( $product->get_price_html() ); ?></td>
													<td>
														<input type="text" class="ddwcpos-barcode wcfm-text ddwcpos-width-60" value="<?php echo esc_attr( $barcode_init ); ?>" />
														<button class="button small ddwcpos-product-action" data-action="update_barcode" data-product-id="<?php echo esc_attr( $product_id ); ?>"><?php esc_html_e( 'Update', 'ddwc-multipos' ); ?></button>
													</td>
													<td><img class="ddwcpos-barcode-image" src="<?php echo esc_url( $barcode_image_url ); ?>" alt="<?php esc_attr_e( 'Barcode', 'ddwc-multipos' ); ?>" /></td>
													<td>
														<input type="number" min="1" class="ddwcpos-barcode-quantity wcfm-text ddwcpos-width-60" placeholder="<?php esc_attr_e( 'Quantity', 'ddwc-multipos' ); ?>" />
														<button class="button small alt ddwcpos-product-action" data-action="print_barcode" data-product-id="<?php echo esc_attr( $product_id ); ?>" data-barcode-image="<?php echo esc_url( $barcode_image_print_url ); ?>"><?php esc_html_e( 'Print', 'ddwc-multipos' ); ?></button>
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
										<th><?php esc_html_e( 'Price', 'ddwc-multipos' ); ?></th>
										<th><?php esc_html_e( 'Barcode', 'ddwc-multipos' ); ?></th>
										<th><?php esc_html_e( 'Barcode Image', 'ddwc-multipos' ); ?></th>
										<th><?php esc_html_e( 'Barcode Print', 'ddwc-multipos' ); ?></th>
									</tr>
								</tfoot>
							</table>
							<div class="ddwcpos-wcfm-right">
								<?php
								if ( 1 < $total_items ) {
									if ( 1 !== $current_page && $current_page > 1 ) {
										?>
										<a href="<?php echo esc_url( ddwcpos_get_wfcm_custom_menus_url( 'ddwcpos-assign-barcodes', --$current_page ) ); ?>"><?php esc_html_e( 'Previous', 'ddwc-multipos' ); ?></a>
										<?php
									}
									if ( ceil( $total_items / $per_page ) > $current_page ) {
										?>
										<a href="<?php echo esc_url( ddwcpos_get_wfcm_custom_menus_url( 'ddwcpos-assign-barcodes', ++$current_page ) ); ?>"><?php esc_html_e( 'Next', 'ddwc-multipos' ); ?></a>
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
