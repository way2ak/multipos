<?php
/**
 * Error Helper trait
 *
 * @package MultiPOS - Point of Sale for WCFM Marketplace
 */

namespace DDWCMultiPOS\Helper\Error;

defined( 'ABSPATH' ) || exit();

if ( ! trait_exists( 'DDWCPOS_Error_Helper' ) ) {
    /**
     *Error Helper trait
     */
    trait DDWCPOS_Error_Helper {
        /**
         * Print Notification function
         *
         * @param string $message
         * @param string $error_type
         * @return void
         */
        public function ddwcpos_print_notification( $message, $error_type = 'success' ) {
            if ( is_admin() ) {
                ?>
                <div class='notice notice-<?php echo esc_attr( $error_type ); ?> is-dismissible'>
                    <p><?php echo wp_kses_post( $message ); ?></p>
                </div>
                <?php
            } else {
                wc_print_notice( $message, $error_type );
            }
        }
    }
}