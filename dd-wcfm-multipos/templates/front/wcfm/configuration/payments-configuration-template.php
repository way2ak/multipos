<?php
/**
 * Payments Configuration template class
 *
 * @package MultiPOS - Point of Sale for WCFM Marketplace
 * @version 1.0.0
 */

namespace DDWCMultiPOS\Templates\Front\WCFM\Configuration;

defined( 'ABSPATH' ) || exit();

if ( ! class_exists( 'DDWCPOS_Payments_Configuration_Template' ) ) {
	/**
	 * Payments Configuration template class
	 */
	class DDWCPOS_Payments_Configuration_Template {
		/**
		 * Construct
		 */
		public function __construct( $ddwcpos_configuration ) {
            ?>
            <form method="POST" class="ddwcpos-configuration-form ddwcpos-payment-configuration-form">
                <table>
                    <thead>
                        <tr>
                            <th><strong><?php echo esc_html__( 'Name', 'ddwc-multipos' ) . wc_help_tip( esc_html__( 'This is the name of the payment method.', 'ddwc-multipos' ) ); ?></strong></th>
                            <th><strong><?php echo esc_html__( 'Slug', 'ddwc-multipos' ) . wc_help_tip( esc_html__( 'This is the slug of the payment method.', 'ddwc-multipos' ) ); ?></strong></th>
                            <th><strong><?php echo esc_html__( 'Status', 'ddwc-multipos' ) . wc_help_tip( esc_html__( 'This is the status of the payment method which can either be enabled or disabled.', 'ddwc-multipos' ) ); ?></strong></th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        if ( ! empty( $ddwcpos_configuration[ 'payment_method' ] ) ) {
                            foreach ( $ddwcpos_configuration[ 'payment_method' ] as $key => $payment_method ) {
                                ?>
                                <tr valign="top">
                                    <td class="forminp forminp-text">
                                        <input type="hidden" name="_ddwcpos_payment_method[<?php echo esc_attr( $key ); ?>][permanent]" value="<?php echo esc_attr( $payment_method[ 'permanent' ] ); ?>" />
                                        <input type="text" name="_ddwcpos_payment_method[<?php echo esc_attr( $key ); ?>][name]" class="wcfm-text ddwcpos-width-90" autocomplete="off" value="<?php echo esc_attr( $payment_method[ 'name' ] ); ?>" />
                                    </td>
                                    <td class="forminp forminp-text">
                                        <input type="text" name="_ddwcpos_payment_method[<?php echo esc_attr( $key ); ?>][slug]" class="wcfm-text ddwcpos-width-90" autocomplete="off" value="<?php echo esc_attr( $payment_method[ 'slug' ] ); ?>" readonly />
                                    </td>
                                    <td class="forminp forminp-text">
                                        <select class="wcfm-select ddwcpos-width-90" name="_ddwcpos_payment_method[<?php echo esc_attr( $key ); ?>][status]" data-placeholder="<?php esc_attr_e( 'Select Status', 'ddwc-multipos' ); ?>">
                                            <option value="enabled" <?php echo esc_attr( 'enabled' === $payment_method[ 'status' ] ? 'selected="selected"' : '' ); ?>><?php esc_html_e( 'Enabled', 'ddwc-multipos' ); ?></option>
                                            <option value="disabled" <?php echo esc_attr( 'disabled' === $payment_method[ 'status' ] ? 'selected="selected"' : '' ); ?>><?php esc_html_e( 'Disabled', 'ddwc-multipos' ); ?></option>
                                        </select>
                                        <?php
                                        if ( 'no' === $payment_method[ 'permanent' ] ) {
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
                                <a href="javascript:void(0);" class="ddwcpos-add-row button small alt" data-template="ddwcpos-payments-configuration-row"><?php esc_html_e( 'Add Row', 'ddwc-multipos' ); ?></a>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <input type="hidden" id="ddwcpos-max-index" value="<?php echo esc_attr( isset( $key ) ? $key : 0 ); ?>">

                <p class="submit">
                    <?php wp_nonce_field( 'ddwcpos_nonce_action', 'ddwcpos_nonce' ); ?>
                    <input name="ddwcpos_save_payments_configuration_submit" class="wcfm_submit_button" type="submit" value="<?php esc_attr_e( 'Save', 'ddwc-multipos' ); ?>">
                </p>
            </form>

            <!-- Payments Configuration Row Template -->
            <script id="tmpl-ddwcpos-payments-configuration-row" type="text/html">
                <tr valign="top">
                    <td class="forminp forminp-text">
                        <input type="hidden" name="_ddwcpos_payment_method[{{data.key}}][permanent]" value="no" />
                        <input type="text" name="_ddwcpos_payment_method[{{data.key}}][name]" class="wcfm-text ddwcpos-width-90" autocomplete="off" />
                    </td>
                    <td class="forminp forminp-text">
                        <input type="text" name="_ddwcpos_payment_method[{{data.key}}][slug]" class="wcfm-text ddwcpos-width-90" autocomplete="off" />
                    </td>
                    <td class="forminp forminp-text">
                        <select class="wcfm-select ddwcpos-width-90" name="_ddwcpos_payment_method[{{data.key}}][status]" data-placeholder="<?php esc_attr_e( 'Select Status', 'ddwc-multipos' ); ?>">
                            <option value="enabled"><?php esc_html_e( 'Enabled', 'ddwc-multipos' ); ?></option>
                            <option value="disabled"><?php esc_html_e( 'Disabled', 'ddwc-multipos' ); ?></option>
                        </select>
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
            <?php
        }
	}
}
