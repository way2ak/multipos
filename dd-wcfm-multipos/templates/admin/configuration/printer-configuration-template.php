<?php
/**
 * Printer Configuration template class
 *
 * @package MultiPOS - Point of Sale for WCFM Marketplace
 * @version 1.0.0
 */

namespace DDWCMultiPOS\Templates\Admin\Configuration;

defined( 'ABSPATH' ) || exit();

if ( ! class_exists( 'DDWCPOS_Printer_Configuration_Template' ) ) {
	/**
	 * Printer Configuration template class
	 */
	class DDWCPOS_Printer_Configuration_Template {
		/**
		 * Construct
		 */
		public function __construct( $ddwcpos_configuration ) {
            ?>
            <div class="wrap">
				<h1 class="wp-heading-inline"><?php esc_html_e( 'Printer Configuration', 'ddwc-multipos' ); ?></h1>
				<hr class="wp-header-end" />
                <?php
                settings_errors();
                ?>
                <div class="ddwcpos-configuration-container ddwcpos-padding-top-bottom-0">
                    <form action="options.php" method="POST">
                        <?php settings_fields( 'ddwcpos-printer-configuration-fields' ); ?>
                        <h2 class="wp-heading-inline"><?php esc_html_e( 'Barcode', 'ddwc-multipos' ); ?></h1>
                        <table class="form-table">
                            <tbody>
                                <tr valign="top">
                                    <th scope="row" class="titledesc"><label for="ddwcpos-barcode-printer-width"><?php esc_html_e( 'Page Width (in mm)', 'ddwc-multipos' ); ?></label>
                                    </th>
                                    <td>
                                        <?php echo wc_help_tip( esc_html__( 'This is the page width used for printing the barcodes.', 'ddwc-multipos' ), true ); ?>
                                        <input type="text" id="ddwcpos-barcode-printer-width" class="regular-text" name="_ddwcpos_barcode_printer_width" value="<?php echo esc_attr( $ddwcpos_configuration[ 'barcode_printer_width' ] ); ?>" />
                                    </td>
                                </tr>
                                <tr valign="top">
                                    <th scope="row" class="titledesc"><label for="ddwcpos-barcode-printer-height"><?php esc_html_e( 'Page Height (in mm)', 'ddwc-multipos' ); ?></label>
                                    </th>
                                    <td>
                                        <?php echo wc_help_tip( esc_html__( 'This is the page height used for printing the barcode.', 'ddwc-multipos' ), true ); ?>
                                        <input type="text" id="ddwcpos-barcode-printer-height" class="regular-text" name="_ddwcpos_barcode_printer_height" value="<?php echo esc_attr( $ddwcpos_configuration[ 'barcode_printer_height' ] ); ?>" />
                                    </td>
                                </tr>
                                <tr valign="top">
                                    <th scope="row" class="titledesc"><label for="ddwcpos-barcode-printer-margin"><?php esc_html_e( 'Page Margin (in mm)', 'ddwc-multipos' ); ?></label>
                                    </th>
                                    <td>
                                        <?php echo wc_help_tip( esc_html__( 'This is the page margin used for printing the barcode. Values can be 4 (Top Right Bottom Left), 2 (Top/Bottom Left/Right) or 1 (all sides).', 'ddwc-multipos' ), true ); ?>
                                        <input type="text" id="ddwcpos-barcode-printer-margin" class="regular-text" name="_ddwcpos_barcode_printer_margin" value="<?php echo esc_attr( $ddwcpos_configuration[ 'barcode_printer_margin' ] ); ?>" />
                                    </td>
                                </tr>
                                <tr valign="top">
                                    <th scope="row" class="titledesc"><label for="ddwcpos-barcode-margin"><?php esc_html_e( 'Barcode Margin (in mm)', 'ddwc-multipos' ); ?></label>
                                    </th>
                                    <td>
                                        <?php echo wc_help_tip( esc_html__( 'This is the barcode margin used for seperating multiple barcode in the single printing page. Values can be 4 (Top Right Bottom Left), 2 (Top/Bottom Left/Right) or 1 (all sides).', 'ddwc-multipos' ), true ); ?>
                                        <input type="text" id="ddwcpos-barcode-margin" class="regular-text" name="_ddwcpos_barcode_margin" value="<?php echo esc_attr( $ddwcpos_configuration[ 'barcode_margin' ] ); ?>" />
                                    </td>
                                </tr>
                                <tr valign="top">
                                    <th scope="row" class="titledesc"><label for="ddwcpos-barcode-orientation"><?php esc_html_e( 'Barcode Orientation', 'ddwc-multipos' ); ?></label>
                                    </th>
                                    <td>
                                        <?php echo wc_help_tip( esc_html__( 'This is the barcode orientation used for printing the barcode.', 'ddwc-multipos' ), true ); ?>
                                        <select id="ddwcpos-barcode-orientation" class="regular-text" name="_ddwcpos_barcode_orientation">
                                            <option value="vertical" <?php echo esc_attr( 'vertical' === $ddwcpos_configuration[ 'barcode_margin' ] ? 'selected="selected"' : '' ); ?>><?php esc_html_e( 'Vertical', 'ddwc-multipos' ); ?></option>
                                            <option value="horizontal" <?php echo esc_attr( 'horizontal' === $ddwcpos_configuration[ 'barcode_margin' ] ? 'selected="selected"' : '' ); ?>><?php esc_html_e( 'Horizontal', 'ddwc-multipos' ); ?></option>
                                        </select>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <h2 class="wp-heading-inline"><?php esc_html_e( 'Invoice', 'ddwc-multipos' ); ?></h1>
                        <table class="form-table">
                            <tbody>
                                <tr valign="top">
                                    <th scope="row" class="titledesc"><label for="ddwcpos-printer-width"><?php esc_html_e( 'Page Width (in mm)', 'ddwc-multipos' ); ?></label>
                                    </th>
                                    <td>
                                        <?php echo wc_help_tip( esc_html__( 'This is the page width used for printing the invoice/receipt at POS end.', 'ddwc-multipos' ), true ); ?>
                                        <input type="text" id="ddwcpos-printer-width" class="regular-text" name="_ddwcpos_printer_width" value="<?php echo esc_attr( $ddwcpos_configuration[ 'printer_width' ] ); ?>" />
                                    </td>
                                </tr>
                                <tr valign="top">
                                    <th scope="row" class="titledesc"><label for="ddwcpos-printer-height"><?php esc_html_e( 'Page Height (in mm)', 'ddwc-multipos' ); ?></label>
                                    </th>
                                    <td>
                                        <?php echo wc_help_tip( esc_html__( 'This is the page height used for printing the invoice/receipt at POS end.', 'ddwc-multipos' ), true ); ?>
                                        <input type="text" id="ddwcpos-printer-height" class="regular-text" name="_ddwcpos_printer_height" value="<?php echo esc_attr( $ddwcpos_configuration[ 'printer_height' ] ); ?>" />
                                    </td>
                                </tr>
                                <tr valign="top">
                                    <th scope="row" class="titledesc"><label for="ddwcpos-printer-margin"><?php esc_html_e( 'Page Margin (in mm)', 'ddwc-multipos' ); ?></label>
                                    </th>
                                    <td>
                                        <?php echo wc_help_tip( esc_html__( 'This is the page margin used for printing the invoice/receipt at POS end.', 'ddwc-multipos' ), true ); ?>
                                        <input type="text" id="ddwcpos-printer-margin" class="regular-text" name="_ddwcpos_printer_margin" value="<?php echo esc_attr( $ddwcpos_configuration[ 'printer_margin' ] ); ?>" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <p class="description">
                            <i>
                                <?php
                                echo sprintf( esc_html__( 'If you really like our plugin, please leave us a %s rating, we\'ll really appreciate it.', 'ddwc-multipos' ), '<a href="//codecanyon.net/downloads" target="_blank" title="' . esc_attr__( 'Review', 'ddwc-multipos' ) . '" aria-label="' . esc_attr__( 'Review', 'ddwc-multipos' ) . '"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 32" height="10"><path d="M16 26.534L6.111 32 8 20.422l-8-8.2 11.056-1.688L16 0l4.944 10.534L32 12.223l-8 8.2L25.889 32zm40 0L46.111 32 48 20.422l-8-8.2 11.056-1.688L56 0l4.944 10.534L72 12.223l-8 8.2L65.889 32zm40 0L86.111 32 88 20.422l-8-8.2 11.056-1.688L96 0l4.944 10.534L112 12.223l-8 8.2L105.889 32zm40 0L126.111 32 128 20.422l-8-8.2 11.056-1.688L136 0l4.944 10.534L152 12.223l-8 8.2L145.889 32zm40 0L166.111 32 168 20.422l-8-8.2 11.056-1.688L176 0l4.944 10.534L192 12.223l-8 8.2L185.889 32z" fill="#F5A623" fill-rule="evenodd"/></svg></a>' )
                                ?>
                            </i>
                        </p>
                        <?php submit_button( esc_html__( 'Save Changes', 'ddwc-multipos' ) ); ?>
                    </form>
                </div>
            </div>
            <?php
        }
	}
}
