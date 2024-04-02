<?php
/**
 * Plugin Name: MultiPOS - Point of Sale for WCFM Marketplace
 * Description: MultiPOS - Point of Sale for WCFM Marketplace module allows store owners & WCFM vendors to sell products online as well as in their physical stores. It can sync your online store to point of sale with orders, customers and product listings and vice versa.
 * Plugin URI: https://devdiggers.com/woocommerce-extensions/?utm_source=MultiPOS - Point of Sale for WCFM Marketplace Plugin&utm_medium=Plugins List&utm_campaign=WooCommerce Extensions
 * Author: DevDiggers
 * Author URI: https://devdiggers.com/
 * Version: 2.3.0
 * Text Domain: ddwc-multipos
 * Domain Path: /i18n
 * WC requires at least: 5.0.0
 * WC tested up to: 7.8.x
 * WP requires at least: 5.0.0
 * WP tested up to: 6.2.x
 *
 * @package MultiPOS - Point of Sale for WCFM Marketplace
 */

// dwcpos: MultiPOS - Point of Sale for WCFM Marketplace.

use DDWCMultiPOS\Includes\DDWCPOS_File_Handler;

defined( 'ABSPATH' ) || exit();

// Define Constants.
defined( 'DDWCPOS_PLUGIN_FILE' ) || define( 'DDWCPOS_PLUGIN_FILE', plugin_dir_path( __FILE__ ) );
defined( 'DDWCPOS_PLUGIN_URL' ) || define( 'DDWCPOS_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
defined( 'DDWCPOS_SCRIPT_VERSION' ) || define( 'DDWCPOS_SCRIPT_VERSION', '1.0.3' );

if ( ! function_exists( 'ddwcpos_includes' ) ) {
	/**
	 * Includes function
	 *
	 * @return void
	 */
	function ddwcpos_includes() {
		load_plugin_textdomain( 'ddwc-multipos', false, basename( dirname( __FILE__ ) ) . '/i18n' );

		if ( ! class_exists( 'WooCommerce' ) || ! class_exists( 'WCFMmp' ) ) {
			add_action( 'admin_notices', function () {
				?>
				<div class="error">
					<p>
						<?php
						/* translators: %1$s for a opening tag and %2$s for a closing tag */
						echo sprintf( esc_html__( 'MultiPOS - Point of Sale for WCFM Marketplace is activated but not effective. It requires %1$sWooCommerce Plugin%2$s and %3$sWCFM Marketplace Plugin%4$s in order to use its functionalities.', 'ddwc-multipos' ), '<a href="' . esc_url( '//wordpress.org/plugins/woocommerce/' ) . '" target="_blank">', '</a>', '<a href="' . esc_url( '//wordpress.org/plugins/wc-multivendor-marketplace/' ) . '" target="_blank">', '</a>' );
						?>
					</p>
				</div>
				<?php
			} );
		} else {
			require_once DDWCPOS_PLUGIN_FILE . 'autoload/autoload.php';
			require_once DDWCPOS_PLUGIN_FILE . 'includes/core-functions.php';
			new DDWCPOS_File_Handler();
		}
	}

	add_action( 'plugins_loaded', 'ddwcpos_includes' );
}

if ( ! function_exists( 'ddwcpos_plugin_settings_link' ) ) {
	/**
	 * Plugin settings link
	 *
	 * @param array $links Links Array.
	 * @return array $links
	 */
	function ddwcpos_plugin_settings_link( $links ) {
		ob_start();
		?>
		<a href="<?php echo esc_url( admin_url( 'admin.php?page=ddwcpos-configuration' ) ); ?>"><?php esc_html_e( 'Configuration', 'ddwc-multipos' ); ?></a>
		<?php
		array_unshift( $links, ob_get_clean() );
		return $links;
	}

	add_filter( 'plugin_action_links_' . plugin_basename( __FILE__ ), 'ddwcpos_plugin_settings_link' );

	/**
	 * Plugin Doc link
	 *
	 * @param array  $links Links.
	 * @param string $file File name.
	 * @return array $links
	 */
	function ddwcpos_plugin_row_meta( $links, $file ) {
		if ( plugin_basename( __FILE__ ) === $file ) {
			$row_meta = [
				'support'       => '<a href="mailto:support@devdiggers.com" aria-label="' . esc_attr__( 'Support', 'ddwc-multipos' ) . '">' . esc_html__( 'Support', 'ddwc-multipos' ) . '</a>',
				'documentation' => '<a href="//devdiggers.com/multipos-point-of-sale-for-wcfm-marketplace/" aria-label="' . esc_attr__( 'Documentation', 'ddwc-multipos' ) . '">' . esc_html__( 'Documentation', 'ddwc-multipos' ) . '</a>',
				'review'        => '<a href="//codecanyon.net/downloads" target="_blank" title="' . esc_attr__( 'Review', 'ddwc-multipos' ) . '" aria-label="' . esc_attr__( 'Review', 'ddwc-multipos' ) . '"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 32" height="10"><path d="M16 26.534L6.111 32 8 20.422l-8-8.2 11.056-1.688L16 0l4.944 10.534L32 12.223l-8 8.2L25.889 32zm40 0L46.111 32 48 20.422l-8-8.2 11.056-1.688L56 0l4.944 10.534L72 12.223l-8 8.2L65.889 32zm40 0L86.111 32 88 20.422l-8-8.2 11.056-1.688L96 0l4.944 10.534L112 12.223l-8 8.2L105.889 32zm40 0L126.111 32 128 20.422l-8-8.2 11.056-1.688L136 0l4.944 10.534L152 12.223l-8 8.2L145.889 32zm40 0L166.111 32 168 20.422l-8-8.2 11.056-1.688L176 0l4.944 10.534L192 12.223l-8 8.2L185.889 32z" fill="#F5A623" fill-rule="evenodd"/></svg></a>',
			];
			$links = array_merge( $links, $row_meta );
		}

		return $links;
	}

	add_filter( 'plugin_row_meta', 'ddwcpos_plugin_row_meta', 10, 2 );
}

if ( ! function_exists( 'ddwcpos_create_schema' ) ) {
	require_once DDWCPOS_PLUGIN_FILE . 'includes/install.php';
	register_activation_hook( __FILE__, [ 'DDWCPOS_Install', 'ddwcpos_create_schema' ] );
}
