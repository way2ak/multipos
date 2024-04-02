<?php
/**
 * Configuration template class
 *
 * @package MultiPOS - Point of Sale for WCFM Marketplace
 * @version 1.0.0
 */

namespace DDWCMultiPOS\Templates\Front\WCFM\Configuration;

defined( 'ABSPATH' ) || exit();

if ( ! class_exists( 'DDWCPOS_Configuration_Template' ) ) {
	/**
	 * Configuration template class
	 */
	class DDWCPOS_Configuration_Template {
		/**
		 * Construct
		 */
		public function __construct( $ddwcpos_configuration ) {
            $tabs = [
                'layout'   => esc_html__( 'Layout', 'ddwc-multipos' ),
                'printer'  => esc_html__( 'Printer', 'ddwc-multipos' ),
                'payments' => esc_html__( 'Payments', 'ddwc-multipos' ),
                'general'  => esc_html__( 'General', 'ddwc-multipos' ),
            ];

            global $wp;

            $current_tab = ! empty( $wp->query_vars[ 'ddwcpos-configuration' ] ) ? sanitize_title( $wp->query_vars[ 'ddwcpos-configuration' ] ) : 'general';
            ?>
            <div class="collapse wcfm-collapse" id="wcfm_products_listing">
                <div class="wcfm-page-headig">
                    <span class="wcfmfa fa-cubes"></span>
                    <span class="wcfm-page-heading-text"><?php echo esc_html( $tabs[ $current_tab ] ) . ' ' . esc_html__( 'Configuration', 'ddwc-multipos' ); ?></span>
                </div>
                <div class="wcfm-collapse-content">
                    <div id="wcfm_page_load"></div>
                    <div class="wcfm-container wcfm-top-element-container">
                        <?php
                        foreach ( $tabs as $key => $label ) {
                            ?>
                            <a href="<?php echo esc_url( ddwcpos_get_wfcm_custom_menus_url( 'ddwcpos-configuration', $key ) ); ?>" class="wcfm_submit_button <?php echo esc_attr( $current_tab == $key ? 'active' : '' ); ?>"><?php echo esc_html( $label ); ?></a>
                            <?php
                        }
                        ?>
                        <div class="wcfm-clearfix"></div>
                    </div>
                    <div class="wcfm-clearfix"></div><br />

                    <div class="wcfm-container">
                        <?php
                        $current_tab = ucfirst( $current_tab );
                        $class_name = "DDWCMultiPOS\Templates\Front\WCFM\Configuration\DDWCPOS_{$current_tab}_Configuration_Template";
                        new $class_name( $ddwcpos_configuration );
                        ?>
                    </div>
                </div>
            </div>
            <?php
        }
	}
}
