<?php
/**
 * PWA Configuration template class
 *
 * @package MultiPOS - Point of Sale for WCFM Marketplace
 * @version 1.0.0
 */

namespace DDWCMultiPOS\Templates\Admin\Configuration;

use DDWCMultiPOS\Helper\File\DDWCPOS_File_Create_Helper;

defined( 'ABSPATH' ) || exit();

if ( ! class_exists( 'DDWCPOS_PWA_Configuration_Template' ) ) {
	/**
	 * PWA Configuration template class
	 */
	class DDWCPOS_PWA_Configuration_Template {
		/**
		 * Construct
		 */
		public function __construct( $ddwcpos_configuration ) {
            if ( ! empty( $_GET[ 'settings-updated' ] ) && 'true' === $_GET[ 'settings-updated' ] ) {
                $file_create_helper = new DDWCPOS_File_Create_Helper( $ddwcpos_configuration );
                $file_create_helper->ddwcpos_generate_new_manifest_file();
            }

            $icons_path = DDWCPOS_PLUGIN_URL . 'assets/images/';
            ?>
            <div class="wrap">
				<hr class="wp-header-end" />
                <?php
                settings_errors();
                ?>
                <div class="ddwcpos-configuration-container ddwcpos-padding-top-bottom-0">
                    <form action="options.php" method="POST">
                        <?php settings_fields( 'ddwcpos-pwa-configuration-fields' ); ?>
                        <h2><?php esc_html_e( 'PWA Configuration', 'ddwc-multipos' ); ?></h2>
                        <table class="form-table">
                            <tbody>
                                <tr valign="top">
                                    <th scope="row" class="titledesc">
                                        <label for="ddwcpos-pwa-name"><?php esc_html_e( 'Name', 'ddwc-multipos' ); ?></label>
                                    </th>
                                    <td>
                                        <input type="text" id="ddwcpos-pwa-name" class="regular-text" name="_ddwcpos_pwa_name" value="<?php echo esc_attr( $ddwcpos_configuration[ 'pwa_name' ] ); ?>" />
                                        <?php echo wc_help_tip( esc_html__( 'Enter the pwa name.', 'ddwc-multipos' ), true ); ?>
                                    </td>
                                </tr>
                                <tr valign="top">
                                    <th scope="row" class="titledesc">
                                        <label for="ddwcpos-pwa-short-name"><?php esc_html_e( 'Short Name', 'ddwc-multipos' ); ?></label>
                                    </th>
                                    <td>
                                        <input type="text" id="ddwcpos-pwa-short-name" class="regular-text" name="_ddwcpos_pwa_short_name" value="<?php echo esc_attr( $ddwcpos_configuration[ 'pwa_short_name' ] ); ?>" />
                                        <?php echo wc_help_tip( esc_html__( 'Enter the pwa short name.', 'ddwc-multipos' ), true ); ?>
                                    </td>
                                </tr>
                                <tr valign="top">
                                    <th scope="row" class="titledesc">
                                        <label for="ddwcpos-pwa-description"><?php esc_html_e( 'Description', 'ddwc-multipos' ); ?></label>
                                    </th>
                                    <td>
                                        <input type="text" id="ddwcpos-pwa-description" class="regular-text" name="_ddwcpos_pwa_description" value="<?php echo esc_attr( $ddwcpos_configuration[ 'pwa_description' ] ); ?>" />
                                        <?php echo wc_help_tip( esc_html__( 'Enter the pwa description.', 'ddwc-multipos' ), true ); ?>
                                    </td>
                                </tr>
                                <tr valign="top">
                                    <th scope="row" class="titledesc">
                                        <label for="ddwcpos-pwa-theme-color"><?php esc_html_e( 'Theme Color', 'ddwc-multipos' ); ?></label>
                                    </th>
                                    <td>
                                        <input type="color" id="ddwcpos-pwa-theme-color" class="regular-text" name="_ddwcpos_pwa_theme_color" value="<?php echo esc_attr( $ddwcpos_configuration[ 'pwa_theme_color' ] ); ?>" />
                                        <?php echo wc_help_tip( esc_html__( 'Select the pwa theme color.', 'ddwc-multipos' ), true ); ?>
                                    </td>
                                </tr>
                                <tr valign="top">
                                    <th scope="row" class="titledesc">
                                        <label for="ddwcpos-pwa-background-color"><?php esc_html_e( 'Background Color', 'ddwc-multipos' ); ?></label>
                                    </th>

                                    <td>
                                        <input type="color" id="ddwcpos-pwa-background-color" class="regular-text" name="_ddwcpos_pwa_background_color" value="<?php echo esc_attr( $ddwcpos_configuration[ 'pwa_background_color' ] ); ?>" />
                                        <?php echo wc_help_tip( esc_html__( 'Select the pwa background color.', 'ddwc-multipos' ), true ); ?>
                                    </td>
                                </tr>
                                <tr valign="top">
                                    <th scope="row" class="titledesc">
                                        <label for="ddwcpos-pwa-icon48"><?php esc_html_e( 'App Icon (48x48)', 'ddwc-multipos' ); ?></label>
                                    </th>
                                    <td>
                                        <img src="<?php echo esc_url( ! empty( $ddwcpos_configuration[ 'pwa_icon48' ] ) ? wp_get_attachment_url( $ddwcpos_configuration[ 'pwa_icon48' ] ) : $icons_path . 'pwa48.png' ); ?>" alt='icon' class="image-url" width="48">
                                        <input type="hidden" id="ddwcpos-pwa-icon48" name="_ddwcpos_pwa_icon48" value="<?php echo esc_attr( $ddwcpos_configuration[ 'pwa_icon48' ] ); ?>" />
                                        <br />
                                        <button data-id="ddwcpos-pwa-icon48" class="button-primary ddwcpos-icon-upload"><?php esc_html_e('Upload Icon', 'ddwc-multipos'); ?></button>
                                        <?php echo wc_help_tip( esc_html__( 'Upload the image with the size of 48x48.', 'ddwc-multipos' ), true ); ?>
                                    </td>
                                </tr>
                                <tr valign="top">
                                    <th scope="row" class="titledesc">
                                        <label for="ddwcpos-pwa-icon96"><?php esc_html_e( 'App Icon (96x96)', 'ddwc-multipos' ); ?></label>
                                    </th>
                                    <td>
                                        <img src="<?php echo esc_url( ! empty( $ddwcpos_configuration[ 'pwa_icon96' ] ) ? wp_get_attachment_url( $ddwcpos_configuration[ 'pwa_icon96' ] ) : $icons_path . 'pwa96.png' ); ?>" alt='icon' class="image-url" width="96">
                                        <input type="hidden" id="ddwcpos-pwa-icon96" name="_ddwcpos_pwa_icon96" value="<?php echo esc_attr( $ddwcpos_configuration[ 'pwa_icon96' ] ); ?>" />
                                        <br />
                                        <button data-id="ddwcpos-pwa-icon96" class="button-primary ddwcpos-icon-upload"><?php esc_html_e('Upload Icon', 'ddwc-multipos'); ?></button>
                                        <?php echo wc_help_tip( esc_html__( 'Upload the image with the size of 96x96.', 'ddwc-multipos' ), true ); ?>
                                    </td>
                                </tr>
                                <tr valign="top">
                                    <th scope="row" class="titledesc">
                                        <label for="ddwcpos-pwa-icon144"><?php esc_html_e( 'App Icon (144x144)', 'ddwc-multipos' ); ?></label>
                                    </th>
                                    <td>
                                        <img src="<?php echo esc_url( ! empty( $ddwcpos_configuration[ 'pwa_icon144' ] ) ? wp_get_attachment_url( $ddwcpos_configuration[ 'pwa_icon144' ] ) : $icons_path . 'pwa144.png' ); ?>" alt='icon' class="image-url" width="144">
                                        <input type="hidden" id="ddwcpos-pwa-icon144" name="_ddwcpos_pwa_icon144" value="<?php echo esc_attr( $ddwcpos_configuration[ 'pwa_icon144' ] ); ?>" />
                                        <br />
                                        <button data-id="ddwcpos-pwa-icon144" class="button-primary ddwcpos-icon-upload"><?php esc_html_e('Upload Icon', 'ddwc-multipos'); ?></button>
                                        <?php echo wc_help_tip( esc_html__( 'Upload the image with the size of 144x144.', 'ddwc-multipos' ), true ); ?>
                                    </td>
                                </tr>
                                <tr valign="top">
                                    <th scope="row" class="titledesc">
                                        <label for="ddwcpos-pwa-icon196"><?php esc_html_e( 'App Icon (196x196)', 'ddwc-multipos' ); ?></label>
                                    </th>
                                    <td>
                                        <img src="<?php echo esc_url( ! empty( $ddwcpos_configuration[ 'pwa_icon196' ] ) ? wp_get_attachment_url( $ddwcpos_configuration[ 'pwa_icon196' ] ) : $icons_path . 'pwa196.png' ); ?>" alt='icon' class="image-url" width="196">
                                        <input type="hidden" id="ddwcpos-pwa-icon196" name="_ddwcpos_pwa_icon196" value="<?php echo esc_attr( $ddwcpos_configuration[ 'pwa_icon196' ] ); ?>" />
                                        <br />
                                        <button data-id="ddwcpos-pwa-icon196" class="button-primary ddwcpos-icon-upload"><?php esc_html_e( 'Upload Icon', 'ddwc-multipos' ); ?></button>
                                        <?php echo wc_help_tip( esc_html__( 'Upload the image with the size of 196x196.', 'ddwc-multipos' ), true ); ?>
                                    </td>
                                </tr>
                                <tr valign="top">
                                    <th scope="row" class="titledesc">
                                        <label for="ddwcpos-pwa-icon512"><?php esc_html_e( 'App Icon (512x512)', 'ddwc-multipos' ); ?></label>
                                    </th>
                                    <td>
                                        <img src="<?php echo esc_url( ! empty( $ddwcpos_configuration[ 'pwa_icon512' ] ) ? wp_get_attachment_url( $ddwcpos_configuration[ 'pwa_icon512' ] ) : $icons_path . 'pwa512.png' ); ?>" alt='icon' class="image-url" width="512">
                                        <input type="hidden" id="ddwcpos-pwa-icon512" name="_ddwcpos_pwa_icon512" value="<?php echo esc_attr( $ddwcpos_configuration[ 'pwa_icon512' ] ); ?>" />
                                        <br />
                                        <button data-id="ddwcpos-pwa-icon512" class="button-primary ddwcpos-icon-upload"><?php esc_html_e( 'Upload Icon', 'ddwc-multipos' ); ?></button>
                                        <?php echo wc_help_tip( esc_html__( 'Upload the image with the size of 512x512.', 'ddwc-multipos' ), true ); ?>
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
