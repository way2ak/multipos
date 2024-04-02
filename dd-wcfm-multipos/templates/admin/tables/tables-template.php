<?php
/**
 * Tables template class
 *
 * @package MultiPOS - Point of Sale for WCFM Marketplace
 * @version 1.0.0
 */

namespace DDWCMultiPOS\Templates\Admin\Tables;

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
            <div class="wrap">
				<h1 class="wp-heading-inline"><?php esc_html_e( 'Tables', 'ddwc-multipos' ); ?></h1>
				<hr class="wp-header-end" />
                <?php settings_errors(); ?>
                <div class="ddwcpos-payments-container ddwcpos-configuration-container">
                    <form action="options.php" method="POST">
                        <?php settings_fields( 'ddwcpos-tables-configuration-fields' ); ?>
                        <table class="widefat fixed">
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
                                                <input type="text" name="_ddwcpos_tables[<?php echo esc_attr( $key ); ?>][name]" class="regular-text ddwcpos-width-90" autocomplete="off" value="<?php echo esc_attr( $tables[ 'name' ] ); ?>" />
                                            </td>
                                            <td class="forminp forminp-text">
                                                <input type="text" name="_ddwcpos_tables[<?php echo esc_attr( $key ); ?>][slug]" class="regular-text ddwcpos-width-90" autocomplete="off" value="<?php echo esc_attr( $tables[ 'slug' ] ); ?>" readonly />
                                            </td>
                                            <td class="forminp forminp-text">
                                                <input type="number" min="1" name="_ddwcpos_tables[<?php echo esc_attr( $key ); ?>][seats]" class="regular-text ddwcpos-width-90" autocomplete="off" value="<?php echo esc_attr( $tables[ 'seats' ] ); ?>" />
                                            </td>
                                            <td class="forminp forminp-text">
                                                <select class="regular-text ddwcpos-width-90" name="_ddwcpos_tables[<?php echo esc_attr( $key ); ?>][status]" data-placeholder="<?php esc_attr_e( 'Select Status', 'ddwc-multipos' ); ?>">
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
                                        <a href="javascript:void(0);" class="ddwcpos-add-row button" data-template="ddwcpos-tables-configuration-row"><?php esc_html_e( 'Add Row', 'ddwc-multipos' ); ?></a>
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

                    <!-- Tables Configuration Row Template -->
                    <script id="tmpl-ddwcpos-tables-configuration-row" type="text/html">
                        <tr valign="top">
                            <td class="forminp forminp-text">
                                <input type="text" name="_ddwcpos_tables[{{data.key}}][name]" class="regular-text ddwcpos-width-90" autocomplete="off" />
                            </td>
                            <td class="forminp forminp-text">
                                <input type="text" name="_ddwcpos_tables[{{data.key}}][slug]" class="regular-text ddwcpos-width-90" autocomplete="off" />
                            </td>
                            <td class="forminp forminp-text">
                                <input type="number" min="1" name="_ddwcpos_tables[{{data.key}}][seats]" class="regular-text ddwcpos-width-90" autocomplete="off" />
                            </td>
                            <td class="forminp forminp-text">
                                <select class="regular-text ddwcpos-width-90" name="_ddwcpos_tables[{{data.key}}][status]" data-placeholder="<?php esc_attr_e( 'Select Status', 'ddwc-multipos' ); ?>">
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
            <?php
        }
	}
}
