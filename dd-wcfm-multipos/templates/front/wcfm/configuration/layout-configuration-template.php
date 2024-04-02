<?php
/**
 * Layout Configuration template class
 *
 * @package MultiPOS - Point of Sale for WCFM Marketplace
 * @version 1.0.0
 */

namespace DDWCMultiPOS\Templates\Front\WCFM\Configuration;

use DDWCMultiPOS\Helper\File\DDWCPOS_File_Create_Helper;

defined( 'ABSPATH' ) || exit();

if ( ! class_exists( 'DDWCPOS_Layout_Configuration_Template' ) ) {
	/**
	 * Layout Configuration template class
	 */
	class DDWCPOS_Layout_Configuration_Template {
		/**
		 * Construct
		 */
		public function __construct( $ddwcpos_configuration ) {
            ?>
            <form method="POST" class="ddwcpos-configuration-form">
                <table class="form-table">
                    <tbody>
                        <tr valign="top">
                            <th scope="row" class="titledesc"><label for="ddwcpos-layout-primary-color"><?php esc_html_e( 'Gradient Primary Color', 'ddwc-multipos' ); ?></label>
                            </th>
                            <td>
                                <?php echo wc_help_tip( esc_html__( 'This is the primary color used for the gradient in the POS.', 'ddwc-multipos' ), true ); ?>
                                <input type="color" id="ddwcpos-layout-primary-color" class="wcfm-text" name="_ddwcpos_layout_primary_color" value="<?php echo esc_attr( $ddwcpos_configuration[ 'layout_primary_color' ] ); ?>" />
                            </td>
                        </tr>
                        <tr valign="top">
                            <th scope="row" class="titledesc"><label for="ddwcpos-layout-secondary-color"><?php esc_html_e( 'Gradient Secondary Color', 'ddwc-multipos' ); ?></label>
                            </th>
                            <td>
                                <?php echo wc_help_tip( esc_html__( 'This is the secondary color used for the gradient in the POS.', 'ddwc-multipos' ), true ); ?>
                                <input type="color" id="ddwcpos-layout-secondary-color" class="wcfm-text" name="_ddwcpos_layout_secondary_color" value="<?php echo esc_attr( $ddwcpos_configuration[ 'layout_secondary_color' ] ); ?>" />
                            </td>
                        </tr>
                        <tr valign="top">
                            <th scope="row" class="titledesc"><label for="ddwcpos-layout-font-size"><?php esc_html_e( 'Font Size', 'ddwc-multipos' ); ?></label>
                            </th>
                            <td>
                                <?php echo wc_help_tip( esc_html__( 'This is the font size used in the POS.', 'ddwc-multipos' ), true ); ?>
                                <input type="number" min="1" id="ddwcpos-layout-font-size" class="wcfm-text" name="_ddwcpos_layout_font_size" value="<?php echo esc_attr( $ddwcpos_configuration[ 'layout_font_size' ] ); ?>" /> px
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p class="submit">
                    <?php wp_nonce_field( 'ddwcpos_nonce_action', 'ddwcpos_nonce' ); ?>
                    <input name="ddwcpos_save_layout_configuration_submit" class="wcfm_submit_button" type="submit" value="<?php esc_attr_e( 'Save', 'ddwc-multipos' ); ?>">
                </p>
            </form>
            <?php
        }
	}
}
