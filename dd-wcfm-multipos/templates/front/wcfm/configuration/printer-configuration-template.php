<?php
/**
 * Printer Configuration template class
 *
 * @package MultiPOS - Point of Sale for WCFM Marketplace
 * @version 1.0.0
 */

namespace DDWCMultiPOS\Templates\Front\WCFM\Configuration;

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
            <form method="POST" class="ddwcpos-configuration-form">
                <h2><?php esc_html_e( 'Barcode', 'ddwc-multipos' ); ?></h2>
                <table>
                    <tbody>
                        <tr valign="top">
                            <th scope="row" class="titledesc"><label for="ddwcpos-barcode-printer-width"><?php esc_html_e( 'Page Width (in mm)', 'ddwc-multipos' ); ?></label>
                            </th>
                            <td>
                                <?php echo wc_help_tip( esc_html__( 'This is the page width used for printing the barcodes.', 'ddwc-multipos' ), true ); ?>
                                <input type="text" id="ddwcpos-barcode-printer-width" class="wcfm-text" name="_ddwcpos_barcode_printer_width" value="<?php echo esc_attr( $ddwcpos_configuration[ 'barcode_printer_width' ] ); ?>" />
                            </td>
                        </tr>
                        <tr valign="top">
                            <th scope="row" class="titledesc"><label for="ddwcpos-barcode-printer-height"><?php esc_html_e( 'Page Height (in mm)', 'ddwc-multipos' ); ?></label>
                            </th>
                            <td>
                                <?php echo wc_help_tip( esc_html__( 'This is the page height used for printing the barcode.', 'ddwc-multipos' ), true ); ?>
                                <input type="text" id="ddwcpos-barcode-printer-height" class="wcfm-text" name="_ddwcpos_barcode_printer_height" value="<?php echo esc_attr( $ddwcpos_configuration[ 'barcode_printer_height' ] ); ?>" />
                            </td>
                        </tr>
                        <tr valign="top">
                            <th scope="row" class="titledesc"><label for="ddwcpos-barcode-printer-margin"><?php esc_html_e( 'Page Margin (in mm)', 'ddwc-multipos' ); ?></label>
                            </th>
                            <td>
                                <?php echo wc_help_tip( esc_html__( 'This is the page margin used for printing the barcode. Values can be 4 (Top Right Bottom Left), 2 (Top/Bottom Left/Right) or 1 (all sides).', 'ddwc-multipos' ), true ); ?>
                                <input type="text" id="ddwcpos-barcode-printer-margin" class="wcfm-text" name="_ddwcpos_barcode_printer_margin" value="<?php echo esc_attr( $ddwcpos_configuration[ 'barcode_printer_margin' ] ); ?>" />
                            </td>
                        </tr>
                        <tr valign="top">
                            <th scope="row" class="titledesc"><label for="ddwcpos-barcode-margin"><?php esc_html_e( 'Barcode Margin (in mm)', 'ddwc-multipos' ); ?></label>
                            </th>
                            <td>
                                <?php echo wc_help_tip( esc_html__( 'This is the barcode margin used for seperating multiple barcode in the single printing page. Values can be 4 (Top Right Bottom Left), 2 (Top/Bottom Left/Right) or 1 (all sides).', 'ddwc-multipos' ), true ); ?>
                                <input type="text" id="ddwcpos-barcode-margin" class="wcfm-text" name="_ddwcpos_barcode_margin" value="<?php echo esc_attr( $ddwcpos_configuration[ 'barcode_margin' ] ); ?>" />
                            </td>
                        </tr>
                        <tr valign="top">
                            <th scope="row" class="titledesc"><label for="ddwcpos-barcode-orientation"><?php esc_html_e( 'Barcode Orientation', 'ddwc-multipos' ); ?></label>
                            </th>
                            <td>
                                <?php echo wc_help_tip( esc_html__( 'This is the barcode orientation used for printing the barcode.', 'ddwc-multipos' ), true ); ?>
                                <select id="ddwcpos-barcode-orientation" class="wcfm-select" name="_ddwcpos_barcode_orientation">
                                    <option value="vertical" <?php echo esc_attr( 'vertical' === $ddwcpos_configuration[ 'barcode_margin' ] ? 'selected="selected"' : '' ); ?>><?php esc_html_e( 'Vertical', 'ddwc-multipos' ); ?></option>
                                    <option value="horizontal" <?php echo esc_attr( 'horizontal' === $ddwcpos_configuration[ 'barcode_margin' ] ? 'selected="selected"' : '' ); ?>><?php esc_html_e( 'Horizontal', 'ddwc-multipos' ); ?></option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h2><?php esc_html_e( 'Invoice', 'ddwc-multipos' ); ?></h1>
                <table>
                    <tbody>
                        <tr valign="top">
                            <th scope="row" class="titledesc"><label for="ddwcpos-printer-width"><?php esc_html_e( 'Page Width (in mm)', 'ddwc-multipos' ); ?></label>
                            </th>
                            <td>
                                <?php echo wc_help_tip( esc_html__( 'This is the page width used for printing the invoice/receipt at POS end.', 'ddwc-multipos' ), true ); ?>
                                <input type="text" id="ddwcpos-printer-width" class="wcfm-text" name="_ddwcpos_printer_width" value="<?php echo esc_attr( $ddwcpos_configuration[ 'printer_width' ] ); ?>" />
                            </td>
                        </tr>
                        <tr valign="top">
                            <th scope="row" class="titledesc"><label for="ddwcpos-printer-height"><?php esc_html_e( 'Page Height (in mm)', 'ddwc-multipos' ); ?></label>
                            </th>
                            <td>
                                <?php echo wc_help_tip( esc_html__( 'This is the page height used for printing the invoice/receipt at POS end.', 'ddwc-multipos' ), true ); ?>
                                <input type="text" id="ddwcpos-printer-height" class="wcfm-text" name="_ddwcpos_printer_height" value="<?php echo esc_attr( $ddwcpos_configuration[ 'printer_height' ] ); ?>" />
                            </td>
                        </tr>
                        <tr valign="top">
                            <th scope="row" class="titledesc"><label for="ddwcpos-printer-margin"><?php esc_html_e( 'Page Margin (in mm)', 'ddwc-multipos' ); ?></label>
                            </th>
                            <td>
                                <?php echo wc_help_tip( esc_html__( 'This is the page margin used for printing the invoice/receipt at POS end.', 'ddwc-multipos' ), true ); ?>
                                <input type="text" id="ddwcpos-printer-margin" class="wcfm-text" name="_ddwcpos_printer_margin" value="<?php echo esc_attr( $ddwcpos_configuration[ 'printer_margin' ] ); ?>" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p class="submit">
                    <?php wp_nonce_field( 'ddwcpos_nonce_action', 'ddwcpos_nonce' ); ?>
                    <input name="ddwcpos_save_printer_configuration_submit" class="wcfm_submit_button" type="submit" value="<?php esc_attr_e( 'Save', 'ddwc-multipos' ); ?>">
                </p>
            </form>
            <?php
        }
	}
}
