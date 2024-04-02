<?php
/**
 * Layout Configuration template class
 *
 * @package MultiPOS - Point of Sale for WooCommerce
 * @version 1.0.0
 */

namespace DDWCMultiPOS\Templates\Admin\Configuration;

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
            <div class="wrap">
				<hr class="wp-header-end" />
                <?php settings_errors(); ?>
                <div class="ddwcpos-configuration-container ddwcpos-padding-top-bottom-0">
                    <form action="options.php" method="POST" id="ddwcpos-general-form">
                        <?php settings_fields( 'ddwcpos-layout-configuration-fields' ); ?>
                        <h2 class="wp-heading-inline"><?php esc_html_e( 'Layout Configuration', 'ddwc-multipos' ); ?></h1>
                        <table class="form-table">
                            <tbody>
                                <tr valign="top">
                                    <th scope="row" class="titledesc"><label for="ddwcpos-layout-primary-color"><?php esc_html_e( 'Gradient Primary Color', 'ddwc-multipos' ); ?></label>
                                    </th>
                                    <td>
                                        <?php echo wc_help_tip( esc_html__( 'This is the primary color used for the gradient in the POS.', 'ddwc-multipos' ), true ); ?>
                                        <input type="color" id="ddwcpos-layout-primary-color" class="regular-text" name="_ddwcpos_layout_primary_color" value="<?php echo esc_attr( $ddwcpos_configuration[ 'layout_primary_color' ] ); ?>" />
                                    </td>
                                </tr>
                                <tr valign="top">
                                    <th scope="row" class="titledesc"><label for="ddwcpos-layout-secondary-color"><?php esc_html_e( 'Gradient Secondary Color', 'ddwc-multipos' ); ?></label>
                                    </th>
                                    <td>
                                        <?php echo wc_help_tip( esc_html__( 'This is the secondary color used for the gradient in the POS.', 'ddwc-multipos' ), true ); ?>
                                        <input type="color" id="ddwcpos-layout-secondary-color" class="regular-text" name="_ddwcpos_layout_secondary_color" value="<?php echo esc_attr( $ddwcpos_configuration[ 'layout_secondary_color' ] ); ?>" />
                                    </td>
                                </tr>
                                <tr valign="top">
                                    <th scope="row" class="titledesc"><label for="ddwcpos-layout-font-size"><?php esc_html_e( 'Font Size', 'ddwc-multipos' ); ?></label>
                                    </th>
                                    <td>
                                        <?php echo wc_help_tip( esc_html__( 'This is the font size used in the POS.', 'ddwc-multipos' ), true ); ?>
                                        <input type="number" min="1" id="ddwcpos-layout-font-size" class="regular-text" name="_ddwcpos_layout_font_size" value="<?php echo esc_attr( $ddwcpos_configuration[ 'layout_font_size' ] ); ?>" /> px
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
