<?php
/**
 * Invoices template class
 *
 * @package MultiPOS - Point of Sale for WCFM Marketplace
 * @version 1.0.0
 */

namespace DDWCMultiPOS\Templates\Admin\Invoices;

use DDWCMultiPOS\Helper\Error\DDWCPOS_Error_Helper;
use DDWCMultiPOS\Helper\Invoice\DDWCPOS_Invoice_Helper;

defined( 'ABSPATH' ) || exit();

if ( ! class_exists( 'DDWCPOS_Invoices_Template' ) ) {
	/**
	 * Invoices template class
	 */
	class DDWCPOS_Invoices_Template {
        /**
		 * Error Helper Trait
		 */
		use DDWCPOS_Error_Helper;

        /**
         * Configuration Variable
         *
         * @var array
         */
        protected $ddwcpos_configuration;

        /**
         * Invoice Helper Variable
         *
         * @var object
         */
        protected $invoice_helper;

		/**
		 * Construct
		 * 
         * @param array $ddwcpos_configuration
		 */
		public function __construct( $ddwcpos_configuration ) {
            $this->ddwcpos_configuration = $ddwcpos_configuration;
            $this->invoice_helper        = new DDWCPOS_Invoice_Helper( $ddwcpos_configuration );

            if ( ! empty( $_GET[ 'slug' ] ) ) {
                $slug = $_GET[ 'slug' ];

                if ( ! empty( $_POST[ 'ddwcpos_nonce' ] ) && wp_verify_nonce( $_POST[ 'ddwcpos_nonce' ], 'ddwcpos_nonce_action' ) ) {
                    if ( ! empty( $_POST[ 'ddwcpos_invoice_composer_default_submit' ] ) ) {
                        foreach ( $this->ddwcpos_configuration[ 'invoices' ] as $key => $invoice ) {
                            if ( $this->ddwcpos_configuration[ 'invoices' ][ $key ][ 'slug' ] === $slug ) {
                                unset( $this->ddwcpos_configuration[ 'invoices' ][ $key ][ 'html' ] );
                                unset( $this->ddwcpos_configuration[ 'invoices' ][ $key ][ 'css' ] );
                            }
                        }

                        $message = esc_html__( 'Invoice is reset to default Successfully.', 'ddwc-multipos' );
                    } elseif ( ! empty( $_POST[ 'ddwcpos_invoice_composer_submit' ] ) ) {
                        foreach ( $this->ddwcpos_configuration[ 'invoices' ] as $key => $invoice ) {
                            if ( $this->ddwcpos_configuration[ 'invoices' ][ $key ][ 'slug' ] === $slug ) {
                                $this->ddwcpos_configuration[ 'invoices' ][ $key ][ 'html' ] = ! empty( $_POST[ 'ddwcpos_invoice_html' ] ) ? stripslashes( $_POST[ 'ddwcpos_invoice_html' ] ) : '';
                                $this->ddwcpos_configuration[ 'invoices' ][ $key ][ 'css' ] = ! empty( $_POST[ 'ddwcpos_invoice_css' ] ) ? stripslashes( $_POST[ 'ddwcpos_invoice_css' ] ) : '';
                            }
                        }

                        $message = esc_html__( 'Saved Successfully.', 'ddwc-multipos' );
                    }

                    update_option( '_ddwcpos_invoices', $this->ddwcpos_configuration[ 'invoices' ] );

                    $this->ddwcpos_print_notification( $message, 'success' );
                }

                $invoice = array_filter( $this->ddwcpos_configuration[ 'invoices' ], function( $invoice ) use ( $slug ) {
                    return $invoice[ 'slug' ] === $slug;
                } );

                $invoice = array_values( $invoice );

                $message = esc_html__( 'Pre-defined placeholders can be used by using ${variable_name}, ex- ${order_id} for the order ID and ${applyFilters} is used for the customization compatibility which doesn\'t affect the invoice.', 'ddwc-multipos' );
                $this->ddwcpos_print_notification( $message, 'info' );

                $this->ddwcpos_invoice_composer( $invoice[0] );
            } else {
                $this->ddwcpos_get_invoice_template();
            }
        }

        /**
         * Invoice composer function
         *
         * @param string $slug
         * @return void
         */
        public function ddwcpos_invoice_composer( $invoice ) {
            ?>
            <div class="wrap">
				<h1 class="wp-heading-inline"><?php esc_html_e( 'Compose Invoice', 'ddwc-multipos' ); ?></h1>
                <a href="<?php echo esc_url( admin_url( 'admin.php?page=' . $_REQUEST[ 'page' ] ) ); ?>" class="page-title-action"><?php esc_html_e( 'Back', 'ddwc-multipos' ); ?></a>
				<hr class="wp-header-end" />
                <?php settings_errors(); ?>
                <div class="ddwcpos-invoice-container">
                    <form method="POST" class="form-table">
                        <div class="ddwcpos-invoice-composer-container">
                            <div>
                                <div class="ddwcpos-editor-switch-buttons">
                                    <span class="ddwcpos-editor-switch-button ddwcpos-active" data-target="editor"><?php esc_html_e( 'Editor', 'ddwc-multipos' ); ?></span>
                                    <span class="ddwcpos-editor-switch-button" data-target="html"><?php esc_html_e( 'HTML', 'ddwc-multipos' ); ?></span>
                                </div>
                                <textarea id="ddwcpos-invoice-html" class="regular-text" name="ddwcpos_invoice_html" rows="25"><?php echo esc_html( ! empty( $invoice[ 'html' ] ) ? $invoice[ 'html' ] : $this->invoice_helper->ddwcpos_get_invoice_html() ); ?></textarea>
                            </div>

                            <div>
                                <div class="ddwcpos-editor-switch-buttons">
                                    <span class="ddwcpos-active"><?php esc_html_e( 'CSS', 'ddwc-multipos' ); ?></span>
                                </div>
                                <textarea id="ddwcpos-invoice-css" class="regular-text" name="ddwcpos_invoice_css" rows="25"><?php echo esc_html( ! empty( $invoice[ 'css' ] ) ? $invoice[ 'css' ] : $this->invoice_helper->ddwcpos_get_invoice_css() ); ?></textarea>
                            </div>
                        </div>

                        <p class="description">
                            <i>
                                <?php
                                echo sprintf( esc_html__( 'If you really like our plugin, please leave us a %s rating, we\'ll really appreciate it.', 'ddwc-multipos' ), '<a href="//codecanyon.net/downloads" target="_blank" title="' . esc_attr__( 'Review', 'ddwc-multipos' ) . '" aria-label="' . esc_attr__( 'Review', 'ddwc-multipos' ) . '"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 32" height="10"><path d="M16 26.534L6.111 32 8 20.422l-8-8.2 11.056-1.688L16 0l4.944 10.534L32 12.223l-8 8.2L25.889 32zm40 0L46.111 32 48 20.422l-8-8.2 11.056-1.688L56 0l4.944 10.534L72 12.223l-8 8.2L65.889 32zm40 0L86.111 32 88 20.422l-8-8.2 11.056-1.688L96 0l4.944 10.534L112 12.223l-8 8.2L105.889 32zm40 0L126.111 32 128 20.422l-8-8.2 11.056-1.688L136 0l4.944 10.534L152 12.223l-8 8.2L145.889 32zm40 0L166.111 32 168 20.422l-8-8.2 11.056-1.688L176 0l4.944 10.534L192 12.223l-8 8.2L185.889 32z" fill="#F5A623" fill-rule="evenodd"/></svg></a>' )
                                ?>
                            </i>
                        </p>
                        <p class="submit">
                            <?php wp_nonce_field( 'ddwcpos_nonce_action', 'ddwcpos_nonce' ); ?>
                            <input name="ddwcpos_invoice_composer_submit" class="button-primary" type="submit" value="<?php esc_attr_e( 'Save', 'ddwc-multipos' ); ?>">
                            <input name="ddwcpos_invoice_composer_default_submit" class="button-secondary" type="submit" value="<?php esc_attr_e( 'Reset Default', 'ddwc-multipos' ); ?>">
                        </p>
                    </form>
                </div>
            </div>
            <?php
        }

        /**
         * Get invoice template function
         *
         * @return void
         */
        public function ddwcpos_get_invoice_template() {
            ?>
            <div class="wrap">
				<h1 class="wp-heading-inline"><?php esc_html_e( 'Invoices', 'ddwc-multipos' ); ?></h1>
				<hr class="wp-header-end" />
                <?php settings_errors(); ?>
                <div class="ddwcpos-payments-container ddwcpos-configuration-container">
                    <form action="options.php" method="POST">
                        <?php settings_fields( 'ddwcpos-invoices-configuration-fields' ); ?>
                        <table class="widefat fixed">
                            <thead>
                                <tr>
                                    <th><strong><?php echo esc_html__( 'Name', 'ddwc-multipos' ) . wc_help_tip( esc_html__( 'This is the name of the invoice.', 'ddwc-multipos' ) ); ?></strong></th>
                                    <th><strong><?php echo esc_html__( 'Slug', 'ddwc-multipos' ) . wc_help_tip( esc_html__( 'This is the slug of the invoice.', 'ddwc-multipos' ) ); ?></strong></th>
                                    <th><strong><?php echo esc_html__( 'Status', 'ddwc-multipos' ) . wc_help_tip( esc_html__( 'This is the status of the invoice which can either be enabled or disabled.', 'ddwc-multipos' ) ); ?></strong></th>
                                    <th><strong><?php echo esc_html__( 'Action', 'ddwc-multipos' ) . wc_help_tip( esc_html__( 'This is the action for the invoice.', 'ddwc-multipos' ) ); ?></strong></th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php
                                if ( ! empty( $this->ddwcpos_configuration[ 'invoices' ] ) ) {
                                    foreach ( $this->ddwcpos_configuration[ 'invoices' ] as $key => $invoice ) {
                                        ?>
                                        <tr valign="top">
                                            <td class="forminp forminp-text">
                                                <input type="hidden" name="_ddwcpos_invoices[<?php echo esc_attr( $key ); ?>][permanent]" value="<?php echo esc_attr( $invoice[ 'permanent' ] ); ?>" />

                                                <textarea class="ddwcpos-hide" name="_ddwcpos_invoices[<?php echo esc_attr( $key ); ?>][html]"><?php echo esc_html( ! empty( $invoice[ 'html' ] ) ? $invoice[ 'html' ] : '' ); ?></textarea>

                                                <textarea class="ddwcpos-hide" name="_ddwcpos_invoices[<?php echo esc_attr( $key ); ?>][css]"><?php echo esc_html( ! empty( $invoice[ 'css' ] ) ? $invoice[ 'css' ] : '' ); ?></textarea>

                                                <input type="text" name="_ddwcpos_invoices[<?php echo esc_attr( $key ); ?>][name]" class="regular-text ddwcpos-width-90" autocomplete="off" value="<?php echo esc_attr( $invoice[ 'name' ] ); ?>" />
                                            </td>
                                            <td class="forminp forminp-text">
                                                <input type="text" name="_ddwcpos_invoices[<?php echo esc_attr( $key ); ?>][slug]" class="regular-text ddwcpos-width-90" autocomplete="off" value="<?php echo esc_attr( $invoice[ 'slug' ] ); ?>" readonly />
                                            </td>
                                            <td class="forminp forminp-text">
                                                <select class="regular-text ddwcpos-width-90" name="_ddwcpos_invoices[<?php echo esc_attr( $key ); ?>][status]" data-placeholder="<?php esc_attr_e( 'Select Status', 'ddwc-multipos' ); ?>">
                                                    <option value="enabled" <?php echo esc_attr( 'enabled' === $invoice[ 'status' ] ? 'selected="selected"' : '' ); ?>><?php esc_html_e( 'Enabled', 'ddwc-multipos' ); ?></option>
                                                    <option value="disabled" <?php echo esc_attr( 'disabled' === $invoice[ 'status' ] ? 'selected="selected"' : '' ); ?>><?php esc_html_e( 'Disabled', 'ddwc-multipos' ); ?></option>
                                                </select>
                                            </td>
                                            <td class="forminp forminp-text">
                                                <a href="<?php echo esc_url( admin_url( 'admin.php?page=' . $_REQUEST[ 'page' ] . '&slug=' . $invoice[ 'slug' ] ) ); ?>" class="button button-primary"><?php esc_html_e( 'Compose', 'ddwc-multipos' ); ?></a>
                                                <?php
                                                if ( 'no' === $invoice[ 'permanent' ] ) {
                                                    ?>
                                                    <span class="dashicons dashicons-trash ddwcpos-remove-row" title="<?php esc_attr_e( 'Remove', 'ddwc-multipos' ); ?>"></span>
                                                    <?php
                                                }
                                                ?>
                                            </td>
                                        </tr>
                                        <?php
                                    }
                                }
                                ?>
                                <tr>
                                    <td colspan="3">
                                        <a href="javascript:void(0);" class="ddwcpos-add-row button" data-template="ddwcpos-invoices-configuration-row"><?php esc_html_e( 'Add Row', 'ddwc-multipos' ); ?></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <input type="hidden" id="ddwcpos-max-index" value="<?php echo esc_attr( isset( $key ) ? $key : -1 ); ?>">

                        <p class="description">
                            <i>
                                <?php
                                echo sprintf( esc_html__( 'If you really like our plugin, please leave us a %s rating, we\'ll really appreciate it.', 'ddwc-multipos' ), '<a href="//codecanyon.net/downloads" target="_blank" title="' . esc_attr__( 'Review', 'ddwc-multipos' ) . '" aria-label="' . esc_attr__( 'Review', 'ddwc-multipos' ) . '"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 32" height="10"><path d="M16 26.534L6.111 32 8 20.422l-8-8.2 11.056-1.688L16 0l4.944 10.534L32 12.223l-8 8.2L25.889 32zm40 0L46.111 32 48 20.422l-8-8.2 11.056-1.688L56 0l4.944 10.534L72 12.223l-8 8.2L65.889 32zm40 0L86.111 32 88 20.422l-8-8.2 11.056-1.688L96 0l4.944 10.534L112 12.223l-8 8.2L105.889 32zm40 0L126.111 32 128 20.422l-8-8.2 11.056-1.688L136 0l4.944 10.534L152 12.223l-8 8.2L145.889 32zm40 0L166.111 32 168 20.422l-8-8.2 11.056-1.688L176 0l4.944 10.534L192 12.223l-8 8.2L185.889 32z" fill="#F5A623" fill-rule="evenodd"/></svg></a>' )
                                ?>
                            </i>
                        </p>
                        <?php submit_button( esc_html__( 'Save Changes', 'ddwc-multipos' ) ); ?>
                    </form>

                    <!-- Invoices Configuration Row Template -->
                    <script id="tmpl-ddwcpos-invoices-configuration-row" type="text/html">
                        <tr valign="top">
                            <td class="forminp forminp-text">
                                <input type="hidden" name="_ddwcpos_invoices[{{data.key}}][permanent]" value="no" />
                                <input type="hidden" name="_ddwcpos_invoices[{{data.key}}][html]" value="" />
                                <input type="hidden" name="_ddwcpos_invoices[{{data.key}}][css]" value="" />

                                <input type="text" name="_ddwcpos_invoices[{{data.key}}][name]" class="regular-text ddwcpos-width-90" autocomplete="off" />
                            </td>
                            <td class="forminp forminp-text">
                                <input type="text" name="_ddwcpos_invoices[{{data.key}}][slug]" class="regular-text ddwcpos-width-90" autocomplete="off" />
                            </td>
                            <td class="forminp forminp-text">
                                <select class="regular-text ddwcpos-width-90" name="_ddwcpos_invoices[{{data.key}}][status]" data-placeholder="<?php esc_attr_e( 'Select Status', 'ddwc-multipos' ); ?>">
                                    <option value="enabled"><?php esc_html_e( 'Enabled', 'ddwc-multipos' ); ?></option>
                                    <option value="disabled"><?php esc_html_e( 'Disabled', 'ddwc-multipos' ); ?></option>
                                </select>
                            </td>
                            <td class="forminp forminp-text">
                                <a href="#" class="button button-primary" disabled><?php esc_html_e( 'Compose', 'ddwc-multipos' ); ?></a>
                                <span class="dashicons dashicons-trash ddwcpos-remove-row" title="<?php esc_attr_e( 'Remove', 'ddwc-multipos' ); ?>"></span>
                            </td>
                        </tr>
                    </script>

                    <!-- Invalid form data Template -->
                    <script id="tmpl-ddwcpos_form_data_error" type="text/html">
                        <div class='notice notice-error is-dismissible'>
                            <p><?php esc_html_e( 'Some Fields are empty or not valid.', 'ddwc-multipos' ); ?></p>
                        </div>
                    </script>
                </div>
            </div>
            <?php
        }
	}
}
