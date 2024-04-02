<?php
/**
 * Common hooks class
 *
 * @package MultiPOS - Point of Sale for WCFM Marketplace
 * @version 1.0.0
 */

namespace DDWCMultiPOS\Includes\Common;

defined( 'ABSPATH' ) || exit();

if ( ! class_exists( 'DDWCPOS_Common_Hooks' ) ) {
	/**
	 * Common hooks class
	 */
	class DDWCPOS_Common_Hooks extends DDWCPOS_Common_Functions {
		/**
		 * Construct
		 */
		public function __construct( $ddwcpos_configuration ) {
            parent::__construct( $ddwcpos_configuration );

            add_filter( 'init', [ $this, 'ddwcpos_init' ] );
        }
	}
}
