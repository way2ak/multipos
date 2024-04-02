<?php
/**
 * Kitchen Layout template class
 *
 * @package MultiPOS - Point of Sale for WCFM Marketplace
 * @version 1.0.0
 */

namespace DDWCMultiPOS\Templates\Front\Kitchen;

defined( 'ABSPATH' ) || exit();

if ( ! class_exists( 'DDWCPOS_Kitchen_Layout' ) ) {
	/**
	 * Kitchen Layout template class
	 */
	class DDWCPOS_Kitchen_Layout {
		/**
		 * Construct
		 */
		public function __construct( $ddwcpos_configuration ) {
            ?>
            <!DOCTYPE html>
            <html <?php language_attributes(); ?>>
				<head>
					<title><?php echo esc_html( get_bloginfo() ); ?></title>
					<meta charset="<?php bloginfo( 'charset' ); ?>">
					<meta name="viewport" content="width=device-width, initial-scale=1"/>
					<link rel="icon" type="image/x-icon" href="<?php echo esc_url( get_site_icon_url() ); ?>">
					<style>
						:root {
							--pos-layout-primary-color: <?php echo esc_attr( $ddwcpos_configuration[ 'layout_primary_color' ] ); ?>;
							--pos-layout-secondary-color: <?php echo esc_attr( $ddwcpos_configuration[ 'layout_secondary_color' ] ); ?>;
							--pos-layout-font-color: #fff;
							--pos-font-color: #555;
							--pos-secondary-color: #fff;
							--pos-grey-background: #f8f8f8;
							--pos-layout-font-size: <?php echo esc_attr( $ddwcpos_configuration[ 'layout_font_size' ] ); ?>px;
						}
					</style>
					<?php wp_head(); ?>
				</head>
				<body>
                    <div id="app"></div>
				</body>

				<!-- Prompt a message in the browser if users disabled JS -->
				<noscript><?php esc_html_e( 'Your browser does not support JavaScript!', 'ddwc-multipos' ); ?></noscript>
            </html>
            <?php
        }
	}
}
