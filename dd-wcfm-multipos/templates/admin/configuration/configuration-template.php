<?php
/**
 * Configuration template class
 *
 * @package MultiPOS - Point of Sale for WCFM Marketplace
 * @version 1.0.0
 */

namespace DDWCMultiPOS\Templates\Admin\Configuration;

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
                'general'  => esc_html__( 'General', 'ddwc-multipos' ),
                'payments' => esc_html__( 'Payments', 'ddwc-multipos' ),
                'pwa'      => esc_html__( 'PWA', 'ddwc-multipos' ),
                'login'    => esc_html__( 'Login', 'ddwc-multipos' ),
                'printer'  => esc_html__( 'Printer', 'ddwc-multipos' ),
                'layout'   => esc_html__( 'Layout', 'ddwc-multipos' ),
            ];

            $page        = $_GET[ 'page' ];
            $current_tab = ! empty( $_GET[ 'tab' ] ) ? sanitize_title( $_GET[ 'tab' ] ) : 'general';
            ?>
            <div class="wrap">
                <nav class="nav-tab-wrapper">
                    <?php
                    foreach ( $tabs as $key => $label ) {
                        ?>
                        <a href="<?php echo esc_url( admin_url( "admin.php?page=$page&tab=$key" ) ); ?>" class="nav-tab <?php echo esc_attr( $current_tab == $key ? 'nav-tab-active' : '' ); ?>"><?php echo esc_html( $label ); ?></a>
                        <?php
                    }
                    ?>
                </nav>
                <?php
                $current_tab = ucfirst( $current_tab );
                $class_name = "DDWCMultiPOS\Templates\Admin\Configuration\DDWCPOS_{$current_tab}_Configuration_Template";
                new $class_name( $ddwcpos_configuration );
                ?>
            </div>
            <?php
        }
	}
}
