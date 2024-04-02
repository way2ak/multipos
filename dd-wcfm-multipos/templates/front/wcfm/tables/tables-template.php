<?php
/**
 * Tables template class
 *
 * @package MultiPOS - Point of Sale for WCFM Marketplace
 * @version 1.0.0
 */

namespace DDWCMultiPOS\Templates\Front\WCFM\Tables;

defined( 'ABSPATH' ) || exit();

if ( ! class_exists( 'DDWCPOS_Tables_Template' ) ) {
	/**
	 * Tables template class
	 */
	class DDWCPOS_Tables_Template {
		/**
		 * Construct
		 */
		public function __construct( $ddwcpos_configuration ) {
            ?>
            <div class="collapse wcfm-collapse" id="wcfm_products_listing">
                <div class="wcfm-page-headig">
                    <span class="wcfmfa fa-cubes"></span>
                    <span class="wcfm-page-heading-text"><?php esc_html_e( 'Tables', 'ddwc-multipos' ); ?></span>
                </div>
                <div class="wcfm-collapse-content">
                    <div id="wcfm_page_load"></div>
                    <div class="wcfm-clearfix"></div><br />

                    <div class="wcfm-container">
                        <form method="POST" class="ddwcpos-payment-configuration-form">
                            <table>
                                <thead>
                                    <tr>
                                        <th><strong><?php echo esc_html__( 'Name', 'ddwc-multipos' ) . wc_help_tip( esc_html__( 'This is the name of the table.', 'ddwc-multipos' ) ); ?></strong></th>
                                        <th><strong><?php echo esc_html__( 'Slug', 'ddwc-multipos' ) . wc_help_tip( esc_html__( 'This is the slug of the table.', 'ddwc-multipos' ) ); ?></strong></th>
                                        <th><strong><?php echo esc_html__( 'Number of Seats', 'ddwc-multipos' ) . wc_help_tip( esc_html__( 'This is the number of seats available in the table.', 'ddwc-multipos' ) ); ?></strong></th>
                                        <th><strong><?php echo esc_html__( 'Status', 'ddwc-multipos' ) . wc_help_tip( esc_html__( 'This is the status of the table which can either be enabled or disabled.', 'ddwc-multipos' ) ); ?></strong></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php
                                    if ( ! empty( $ddwcpos_configuration[ 'tables' ] ) ) {
                                        foreach ( $ddwcpos_configuration[ 'tables' ] as $key => $tables ) {
                                            ?>
                                            <tr valign="top">
                                                <td class="forminp forminp-text">
                                                    <input type="text" name="_ddwcpos_tables[<?php echo esc_attr( $key ); ?>][name]" class="wcfm-text ddwcpos-width-90" autocomplete="off" value="<?php echo esc_attr( $tables[ 'name' ] ); ?>" />
                                                </td>
                                                <td class="forminp forminp-text">
                                                    <input type="text" name="_ddwcpos_tables[<?php echo esc_attr( $key ); ?>][slug]" class="wcfm-text ddwcpos-width-90" autocomplete="off" value="<?php echo esc_attr( $tables[ 'slug' ] ); ?>" readonly />
                                                </td>
                                                <td class="forminp forminp-text">
                                                    <input type="number" min="1" name="_ddwcpos_tables[<?php echo esc_attr( $key ); ?>][seats]" class="wcfm-text ddwcpos-width-90" autocomplete="off" value="<?php echo esc_attr( $tables[ 'seats' ] ); ?>" />
                                                </td>
                                                <td class="forminp forminp-text">
                                                    <select class="wcfm-select ddwcpos-width-90" name="_ddwcpos_tables[<?php echo esc_attr( $key ); ?>][status]" data-placeholder="<?php esc_attr_e( 'Select Status', 'ddwc-multipos' ); ?>">
                                                        <option value="enabled" <?php echo esc_attr( 'enabled' === $tables[ 'status' ] ? 'selected="selected"' : '' ); ?>><?php esc_html_e( 'Enabled', 'ddwc-multipos' ); ?></option>
                                                        <option value="disabled" <?php echo esc_attr( 'disabled' === $tables[ 'status' ] ? 'selected="selected"' : '' ); ?>><?php esc_html_e( 'Disabled', 'ddwc-multipos' ); ?></option>
                                                    </select>
                                                    <span class="dashicons dashicons-trash ddwcpos-remove-row" title="<?php esc_attr_e( 'Remove', 'ddwc-multipos' ); ?>"></span>
                                                </td>
                                            </tr>
                                            <?php
                                        }
                                    }
                                    ?>
                                    <tr>
                                        <td colspan="3">
                                            <a href="javascript:void(0);" class="ddwcpos-add-row button small alt" data-template="ddwcpos-tables-configuration-row"><?php esc_html_e( 'Add Row', 'ddwc-multipos' ); ?></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <input type="hidden" id="ddwcpos-max-index" value="<?php echo esc_attr( isset( $key ) ? $key : -1 ); ?>">

                            <p class="submit">
                                <?php wp_nonce_field( 'ddwcpos_nonce_action', 'ddwcpos_nonce' ); ?>
                                <input name="ddwcpos_save_table_submit" class="wcfm_submit_button" type="submit" value="<?php esc_attr_e( 'Save', 'ddwc-multipos' ); ?>">
                            </p>
                        </form>

                        <!-- Tables Configuration Row Template -->
                        <script id="tmpl-ddwcpos-tables-configuration-row" type="text/html">
                            <tr valign="top">
                                <td class="forminp forminp-text">
                                    <input type="text" name="_ddwcpos_tables[{{data.key}}][name]" class="wcfm-text ddwcpos-width-90" autocomplete="off" />
                                </td>
                                <td class="forminp forminp-text">
                                    <input type="text" name="_ddwcpos_tables[{{data.key}}][slug]" class="wcfm-text ddwcpos-width-90" autocomplete="off" />
                                </td>
                                <td class="forminp forminp-text">
                                    <input type="number" min="1" name="_ddwcpos_tables[{{data.key}}][seats]" class="wcfm-text ddwcpos-width-90" autocomplete="off" />
                                </td>
                                <td class="forminp forminp-text">
                                    <select class="wcfm-select ddwcpos-width-90" name="_ddwcpos_tables[{{data.key}}][status]" data-placeholder="<?php esc_attr_e( 'Select Status', 'ddwc-multipos' ); ?>">
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
                    </div>
                </div>
            </div>
            <?php
        }
	}
}
