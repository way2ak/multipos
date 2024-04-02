<?php
/**
 * Login Configuration template class
 *
 * @package MultiPOS - Point of Sale for WooCommerce
 * @version 1.0.0
 */

namespace DDWCMultiPOS\Templates\Admin\Configuration;

defined( 'ABSPATH' ) || exit();

if ( ! class_exists( 'DDWCPOS_Login_Configuration_Template' ) ) {
	/**
	 * Login Configuration template class
	 */
	class DDWCPOS_Login_Configuration_Template {
		/**
		 * Construct
		 */
		public function __construct( $ddwcpos_configuration ) {
            ?>
            <div class="wrap">
				<hr class="wp-header-end" />
                <?php settings_errors(); ?>
                <div class="ddwcpos-configuration-container ddwcpos-padding-top-bottom-0">
                    <form action="options.php" method="POST">
                        <?php settings_fields( 'ddwcpos-login-configuration-fields' ); ?>
                        <h2 class="wp-heading-inline"><?php esc_html_e( 'Login Configuration', 'ddwc-multipos' ); ?></h1>
                        <table class="form-table">
                            <tbody>
                                <tr valign="top">
                                    <th scope="row" class="titledesc"><label for="ddwcpos-login-heading-text"><?php esc_html_e( 'Heading Text', 'ddwc-multipos' ); ?></label>
                                    </th>
                                    <td>
                                        <?php echo wc_help_tip( esc_html__( 'This is the text which will shown in heading on the POS login page.', 'ddwc-multipos' ), true ); ?>
                                        <input type="text" id="ddwcpos-login-heading-text" class="regular-text" name="_ddwcpos_login_heading_text" value="<?php echo esc_attr( $ddwcpos_configuration[ 'login_heading_text' ] ); ?>" />
                                    </td>
                                </tr>
                                <tr valign="top">
                                    <th scope="row" class="titledesc"><label for="ddwcpos-login-footer-text"><?php esc_html_e( 'Footer Text', 'ddwc-multipos' ); ?></label>
                                    </th>
                                    <td>
                                        <?php echo wc_help_tip( esc_html__( 'This is the text which will shown in footer on the POS login page.', 'ddwc-multipos' ), true ); ?>
                                        <input type="text" id="ddwcpos-login-footer-text" class="regular-text" name="_ddwcpos_login_footer_text" value="<?php echo esc_attr( $ddwcpos_configuration[ 'login_footer_text' ] ); ?>" />
                                    </td>
                                </tr>
                                <tr valign="top">
                                    <th scope="row" class="titledesc"><label for="ddwcpos-login-button-text"><?php esc_html_e( 'Login Button Text', 'ddwc-multipos' ); ?></label>
                                    </th>
                                    <td>
                                        <?php echo wc_help_tip( esc_html__( 'This is the text which will shown in login button on the POS login page.', 'ddwc-multipos' ), true ); ?>
                                        <input type="text" id="ddwcpos-login-button-text" class="regular-text" name="_ddwcpos_login_button_text" value="<?php echo esc_attr( $ddwcpos_configuration[ 'login_button_text' ] ); ?>" />
                                    </td>
                                </tr>
                                <tr valign='top'>
                                    <th scope='row' class='titledesc'>
                                        <label for='ddwcpos-login-rememberme-enabled'><?php esc_html_e( 'Enable/Disable', 'ddwc-multipos' ); ?></label>
                                    </th>
                                    <td class='forminp forminp-text'>
                                        <?php echo wc_help_tip( esc_html__( 'Enable/Disable remember me option on the POS login page.', 'ddwc-multipos' ), true ); ?>
                                        <input type="checkbox" value="yes" id="ddwcpos-login-rememberme-enabled" name="_ddwcpos_login_rememberme_enabled" <?php checked( $ddwcpos_configuration[ 'login_rememberme_enabled' ], 'yes' ); ?> />
                                        <label for='ddwcpos-login-rememberme-enabled'><?php esc_html_e( 'Enable Remember Me Option', 'ddwc-multipos' ); ?></label>
                                    </td>
                                </tr>
                                <tr valign='top'>
                                    <th scope='row' class='titledesc'>
                                        <label for='ddwcpos-login-forgot-enabled'><?php esc_html_e( 'Enable/Disable', 'ddwc-multipos' ); ?></label>
                                    </th>
                                    <td class='forminp forminp-text'>
                                        <?php echo wc_help_tip( esc_html__( 'Enable/Disable forgot password option to recover password on the POS login page.', 'ddwc-multipos' ), true ); ?>
                                        <input type="checkbox" value="yes" id="ddwcpos-login-forgot-enabled" name="_ddwcpos_login_forgot_enabled" <?php checked( $ddwcpos_configuration[ 'login_forgot_enabled' ], 'yes' ); ?> />
                                        <label for='ddwcpos-login-forgot-enabled'><?php esc_html_e( 'Enable Forgot Password Option', 'ddwc-multipos' ); ?></label>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <h2><?php esc_html_e( 'Styling', 'ddwc-multipos' ); ?></h2>
                        <table class="form-table">
                            <tbody>
                                <tr valign="top">
                                    <th scope="row" class="titledesc"><label for="ddwcpos-login-bg-primary-color"><?php esc_html_e( 'Background Primary Color', 'ddwc-multipos' ); ?></label>
                                    </th>
                                    <td>
                                        <?php echo wc_help_tip( esc_html__( 'This is the primary color used for the gradient background of the POS login page.', 'ddwc-multipos' ), true ); ?>
                                        <input type="color" id="ddwcpos-login-bg-primary-color" class="regular-text" name="_ddwcpos_login_bg_primary_color" value="<?php echo esc_attr( $ddwcpos_configuration[ 'login_bg_primary_color' ] ); ?>" />
                                    </td>
                                </tr>
                                <tr valign="top">
                                    <th scope="row" class="titledesc"><label for="ddwcpos-login-bg-secondary-color"><?php esc_html_e( 'Background Secondary Color', 'ddwc-multipos' ); ?></label>
                                    </th>
                                    <td>
                                        <?php echo wc_help_tip( esc_html__( 'This is the secondary color used for the gradient background of the POS login page.', 'ddwc-multipos' ), true ); ?>
                                        <input type="color" id="ddwcpos-login-bg-secondary-color" class="regular-text" name="_ddwcpos_login_bg_secondary_color" value="<?php echo esc_attr( $ddwcpos_configuration[ 'login_bg_secondary_color' ] ); ?>" />
                                    </td>
                                </tr>
                                <tr valign="top">
                                    <th scope="row" class="titledesc"><label for="ddwcpos-login-font-color"><?php esc_html_e( 'Font Color', 'ddwc-multipos' ); ?></label>
                                    </th>
                                    <td>
                                        <?php echo wc_help_tip( esc_html__( 'This is the font color used in the POS login page.', 'ddwc-multipos' ), true ); ?>
                                        <input type="color" id="ddwcpos-login-font-color" class="regular-text" name="_ddwcpos_login_font_color" value="<?php echo esc_attr( $ddwcpos_configuration[ 'login_font_color' ] ); ?>" />
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
