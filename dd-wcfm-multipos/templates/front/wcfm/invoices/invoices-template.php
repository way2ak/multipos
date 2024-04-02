<?php
/**
 * Invoices template class
 *
 * @package MultiPOS - Point of Sale for WCFM Marketplace
 * @version 1.0.0
 */

namespace DDWCMultiPOS\Templates\Front\WCFM\Invoices;

use DDWCMultiPOS\Helper\Error\DDWCPOS_Error_Helper;
use DDWCMultiPOS\Helper\Invoice\DDWCPOS_Invoice_Helper;

defined( 'ABSPATH' ) || exit();

if ( ! class_exists( 'DDWCPOS_Invoices_Template' ) ) {
	/**
	 * Invoices template class
	 */
	class DDWCPOS_Invoices_Template {
		/**
		 * Construct
		 * 
         * @param array $ddwcpos_configuration
		 */
		public function __construct( $ddwcpos_configuration ) {
            global $wp;
            $invoice_helper = new DDWCPOS_Invoice_Helper( $ddwcpos_configuration );

            if ( ! empty( $wp->query_vars[ 'ddwcpos-invoices' ] ) ) {
                $slug = $wp->query_vars[ 'ddwcpos-invoices' ];

                if ( ! empty( $_POST[ 'ddwcpos_nonce' ] ) && wp_verify_nonce( $_POST[ 'ddwcpos_nonce' ], 'ddwcpos_nonce_action' ) ) {
                    if ( ! empty( $_POST[ 'ddwcpos_invoice_composer_default_submit' ] ) ) {
                        foreach ( $ddwcpos_configuration[ 'invoices' ] as $key => $invoice ) {
                            if ( $ddwcpos_configuration[ 'invoices' ][ $key ][ 'slug' ] === $slug ) {
                                unset( $ddwcpos_configuration[ 'invoices' ][ $key ][ 'html' ] );
                                unset( $ddwcpos_configuration[ 'invoices' ][ $key ][ 'css' ] );
                            }
                        }

                        $message = esc_html__( 'Invoice is reset to default Successfully.', 'ddwc-multipos' );
                    } elseif ( ! empty( $_POST[ 'ddwcpos_invoice_composer_submit' ] ) ) {
                        foreach ( $ddwcpos_configuration[ 'invoices' ] as $key => $invoice ) {
                            if ( $ddwcpos_configuration[ 'invoices' ][ $key ][ 'slug' ] === $slug ) {
                                $ddwcpos_configuration[ 'invoices' ][ $key ][ 'html' ] = ! empty( $_POST[ 'ddwcpos_invoice_html' ] ) ? stripslashes( $_POST[ 'ddwcpos_invoice_html' ] ) : '';
                                $ddwcpos_configuration[ 'invoices' ][ $key ][ 'css' ] = ! empty( $_POST[ 'ddwcpos_invoice_css' ] ) ? stripslashes( $_POST[ 'ddwcpos_invoice_css' ] ) : '';
                            }
                        }

                        $message = esc_html__( 'Saved Successfully.', 'ddwc-multipos' );
                    }

                    update_user_meta( get_current_user_id(), '_ddwcpos_invoices', $ddwcpos_configuration[ 'invoices' ] );

                    // $this->ddwcpos_print_notification( $message, 'success' );
                }

                $invoice = array_filter( $ddwcpos_configuration[ 'invoices' ], function( $invoice ) use ( $slug ) {
                    return $invoice[ 'slug' ] === $slug;
                } );

                $invoice = array_values( $invoice );

                $invoice = $invoice[0];
                ?>
                <div class="collapse wcfm-collapse" id="wcfm_products_listing">
                    <div class="wcfm-page-headig">
                        <span class="wcfmfa fa-cubes"></span>
                        <span class="wcfm-page-heading-text"><?php esc_html_e( 'Compose Invoice', 'ddwc-multipos' ); ?></span>
                    </div>
                    <div class="wcfm-collapse-content">
                    <div id="wcfm_page_load"></div>
                        <div class="wcfm-container wcfm-top-element-container">
                            <a class="add_new_wcfm_ele_dashboard text_tip" href="<?php echo esc_url( ddwcpos_get_wfcm_custom_menus_url( 'ddwcpos-invoices' ) ); ?>" data-tip="<?php esc_attr_e( 'Back to Invoices', 'ddwc-multipos' ); ?>"><span class="wcfmfa fa-cube"></span><span class="text"><?php esc_html_e( 'Back', 'ddwc-multipos' ); ?></span></a>
                            <p class="ddwcpos-info"><?php esc_html_e( 'Pre-defined placeholders can be used by using ${variable_name}, ex- ${order_id} for the order ID and ${applyFilters} is used for the customization compatibility which doesn\'t affect the invoice.', 'ddwc-multipos' ); ?></p>
                            <div class="wcfm-clearfix"></div>
                        </div>
                        <div class="wcfm-clearfix"></div><br />
                        <div class="wcfm-container">
                            <form method="POST" class="form-table">
                                <div class="ddwcpos-invoice-composer-container">
                                    <div>
                                        <div class="ddwcpos-editor-switch-buttons">
                                            <span class="ddwcpos-editor-switch-button ddwcpos-active" data-target="editor"><?php esc_html_e( 'Editor', 'ddwc-multipos' ); ?></span>
                                            <span class="ddwcpos-editor-switch-button" data-target="html"><?php esc_html_e( 'HTML', 'ddwc-multipos' ); ?></span>
                                        </div>
                                        <textarea id="ddwcpos-invoice-html" class="wcfm-text" name="ddwcpos_invoice_html" rows="25"><?php echo esc_html( ! empty( $invoice[ 'html' ] ) ? $invoice[ 'html' ] : $invoice_helper->ddwcpos_get_invoice_html() ); ?></textarea>
                                    </div>

                                    <div>
                                        <div class="ddwcpos-editor-switch-buttons">
                                            <span class="ddwcpos-active"><?php esc_html_e( 'CSS', 'ddwc-multipos' ); ?></span>
                                        </div>
                                        <textarea id="ddwcpos-invoice-css" class="wcfm-text" name="ddwcpos_invoice_css" rows="25"><?php echo esc_html( ! empty( $invoice[ 'css' ] ) ? $invoice[ 'css' ] : $invoice_helper->ddwcpos_get_invoice_css() ); ?></textarea>
                                    </div>
                                </div>
                                <p class="submit">
                                    <?php wp_nonce_field( 'ddwcpos_nonce_action', 'ddwcpos_nonce' ); ?>
                                    <input name="ddwcpos_invoice_composer_submit" class="wcfm_submit_button" type="submit" value="<?php esc_attr_e( 'Save', 'ddwc-multipos' ); ?>">
                                    <input name="ddwcpos_invoice_composer_default_submit" class="wcfm_submit_button" type="submit" value="<?php esc_attr_e( 'Reset Default', 'ddwc-multipos' ); ?>">
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
                <?php
            } else {
                ?>
                <div class="collapse wcfm-collapse" id="wcfm_products_listing">
                    <div class="wcfm-page-headig">
                        <span class="wcfmfa fa-cubes"></span>
                        <span class="wcfm-page-heading-text"><?php esc_html_e( 'Invoices', 'ddwc-multipos' ); ?></span>
                    </div>
                    <div class="wcfm-collapse-content">
                    <div id="wcfm_page_load"></div>
                        <div class="wcfm-container">
                            <form method="POST" class="ddwcpos-payment-configuration-form">
                                <table>
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
                                        if ( ! empty( $ddwcpos_configuration[ 'invoices' ] ) ) {
                                            foreach ( $ddwcpos_configuration[ 'invoices' ] as $key => $invoice ) {
                                                ?>
                                                <tr valign="top">
                                                    <td class="forminp forminp-text">
                                                        <input type="hidden" name="_ddwcpos_invoices[<?php echo esc_attr( $key ); ?>][permanent]" value="<?php echo esc_attr( $invoice[ 'permanent' ] ); ?>" />

                                                        <textarea class="ddwcpos-hide" name="_ddwcpos_invoices[<?php echo esc_attr( $key ); ?>][html]"><?php echo esc_html( ! empty( $invoice[ 'html' ] ) ? $invoice[ 'html' ] : '' ); ?></textarea>

                                                        <textarea class="ddwcpos-hide" name="_ddwcpos_invoices[<?php echo esc_attr( $key ); ?>][css]"><?php echo esc_html( ! empty( $invoice[ 'css' ] ) ? $invoice[ 'css' ] : '' ); ?></textarea>

                                                        <input type="text" name="_ddwcpos_invoices[<?php echo esc_attr( $key ); ?>][name]" class="wcfm-text ddwcpos-width-90" autocomplete="off" value="<?php echo esc_attr( $invoice[ 'name' ] ); ?>" />
                                                    </td>
                                                    <td class="forminp forminp-text">
                                                        <input type="text" name="_ddwcpos_invoices[<?php echo esc_attr( $key ); ?>][slug]" class="wcfm-text ddwcpos-width-90" autocomplete="off" value="<?php echo esc_attr( $invoice[ 'slug' ] ); ?>" readonly />
                                                    </td>
                                                    <td class="forminp forminp-text">
                                                        <select class="wcfm-select ddwcpos-width-90" name="_ddwcpos_invoices[<?php echo esc_attr( $key ); ?>][status]" data-placeholder="<?php esc_attr_e( 'Select Status', 'ddwc-multipos' ); ?>">
                                                            <option value="enabled" <?php echo esc_attr( 'enabled' === $invoice[ 'status' ] ? 'selected="selected"' : '' ); ?>><?php esc_html_e( 'Enabled', 'ddwc-multipos' ); ?></option>
                                                            <option value="disabled" <?php echo esc_attr( 'disabled' === $invoice[ 'status' ] ? 'selected="selected"' : '' ); ?>><?php esc_html_e( 'Disabled', 'ddwc-multipos' ); ?></option>
                                                        </select>
                                                    </td>
                                                    <td class="forminp forminp-text">
                                                        <a href="<?php echo esc_url( ddwcpos_get_wfcm_custom_menus_url( 'ddwcpos-invoices', $invoice[ 'slug' ] ) ); ?>" class="button small alt"><?php esc_html_e( 'Compose', 'ddwc-multipos' ); ?></a>
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
                                                <a href="javascript:void(0);" class="ddwcpos-add-row button small alt" data-template="ddwcpos-invoices-configuration-row"><?php esc_html_e( 'Add Row', 'ddwc-multipos' ); ?></a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <input type="hidden" id="ddwcpos-max-index" value="<?php echo esc_attr( isset( $key ) ? $key : -1 ); ?>">

                                <p class="submit">
                                    <?php wp_nonce_field( 'ddwcpos_nonce_action', 'ddwcpos_nonce' ); ?>
                                    <input name="ddwcpos_save_invoice_submit" class="wcfm_submit_button" type="submit" value="<?php esc_attr_e( 'Save', 'ddwc-multipos' ); ?>">
                                </p>
                            </form>

                            <!-- Invoices Configuration Row Template -->
                            <script id="tmpl-ddwcpos-invoices-configuration-row" type="text/html">
                                <tr valign="top">
                                    <td class="forminp forminp-text">
                                        <input type="hidden" name="_ddwcpos_invoices[{{data.key}}][permanent]" value="no" />
                                        <input type="hidden" name="_ddwcpos_invoices[{{data.key}}][html]" value="" />
                                        <input type="hidden" name="_ddwcpos_invoices[{{data.key}}][css]" value="" />

                                        <input type="text" name="_ddwcpos_invoices[{{data.key}}][name]" class="wcfm-text ddwcpos-width-90" autocomplete="off" />
                                    </td>
                                    <td class="forminp forminp-text">
                                        <input type="text" name="_ddwcpos_invoices[{{data.key}}][slug]" class="wcfm-text ddwcpos-width-90" autocomplete="off" />
                                    </td>
                                    <td class="forminp forminp-text">
                                        <select class="wcfm-select ddwcpos-width-90" name="_ddwcpos_invoices[{{data.key}}][status]" data-placeholder="<?php esc_attr_e( 'Select Status', 'ddwc-multipos' ); ?>">
                                            <option value="enabled"><?php esc_html_e( 'Enabled', 'ddwc-multipos' ); ?></option>
                                            <option value="disabled"><?php esc_html_e( 'Disabled', 'ddwc-multipos' ); ?></option>
                                        </select>
                                    </td>
                                    <td class="forminp forminp-text">
                                        <a href="#" class="button small alt" disabled><?php esc_html_e( 'Compose', 'ddwc-multipos' ); ?></a>
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
                </div>
                <?php
            }
        }
	}
}
