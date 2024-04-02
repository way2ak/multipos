<?php
/**
 * Common functions class
 *
 * @package MultiPOS - Point of Sale for WCFM Marketplace
 * @version 1.0.0
 */

namespace DDWCMultiPOS\Includes\Common;

use DDWCMultiPOS\Includes\Common\DDWCPOS_Email_Notification_Handler;

defined( 'ABSPATH' ) || exit();

if ( ! class_exists( 'DDWCPOS_Common_Functions' ) ) {
	/**
	 * Common functions
	 */
	class DDWCPOS_Common_Functions {
		/**
         * Configuration Variable
         *
         * @var array
         */
        protected $ddwcpos_configuration;

        /**
         * Construct
         */
        public function __construct( $ddwcpos_configuration ) {
            $this->ddwcpos_configuration = $ddwcpos_configuration;
        }

		/**
         * Init function
		 *
		 * @return void
		 */
        public function ddwcpos_init() {
			add_rewrite_endpoint( $this->ddwcpos_configuration[ 'endpoint' ], EP_ROOT | EP_PAGES );
			add_rewrite_endpoint( $this->ddwcpos_configuration[ 'kitchen_endpoint' ], EP_ROOT | EP_PAGES );
		}
	}
}
