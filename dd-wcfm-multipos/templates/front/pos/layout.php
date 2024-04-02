<?php
/**
 * Layout template class
 *
 * @package MultiPOS - Point of Sale for WooCommerce
 * @version 1.0.0
 */

namespace DDWCMultiPOS\Templates\Front\POS;

defined( 'ABSPATH' ) || exit();

if ( ! class_exists( 'DDWCPOS_Layout' ) ) {
	/**
	 * Layout template class
	 */
	class DDWCPOS_Layout {
		/**
		 * Construct
		 */
		public function __construct( $ddwcpos_configuration ) {
            $icons_path = DDWCPOS_PLUGIN_URL . 'assets/images/';

            ?>
            <!DOCTYPE html>
            <html <?php language_attributes(); ?>>
				<head>
					<title><?php echo esc_html( get_bloginfo() ); ?></title>
					<meta charset="<?php bloginfo( 'charset' ); ?>">
					<meta name="viewport" content="width=device-width, initial-scale=1"/>
					<link rel="icon" type="image/x-icon" href="<?php echo esc_url( get_site_icon_url() ); ?>">
					<link rel="manifest" href="<?php echo esc_url( site_url( '/ddwcpos-manifest.json' ) ); ?>" />
					<link rel="apple-touch-icon" href="<?php echo esc_url( ! empty( $ddwcpos_configuration[ 'pwa_icon196' ] ) ? wp_get_attachment_url( $ddwcpos_configuration[ 'pwa_icon196' ] ) : $icons_path . 'pwa196.png' ); ?>">
					<meta name="theme-color" content="<?php echo esc_attr( $ddwcpos_configuration[ 'pwa_theme_color' ] ); ?>"/>
					<style>
						:root {
							--pos-layout-primary-color: <?php echo esc_attr( $ddwcpos_configuration[ 'layout_primary_color' ] ); ?>;
							--pos-layout-secondary-color: <?php echo esc_attr( $ddwcpos_configuration[ 'layout_secondary_color' ] ); ?>;
							--pos-layout-font-color: #fff;
							--pos-font-color: #555;
							--pos-secondary-color: #fff;
							--pos-grey-background: #f8f8f8;
							--pos-layout-font-size: <?php echo esc_attr( $ddwcpos_configuration[ 'layout_font_size' ] ); ?>px;
						}
					</style>
					<?php wp_head(); ?>
				</head>
				<body>
					<?php
					if ( is_user_logged_in() ) {
						$user = wp_get_current_user();
                         //print_r($user);die();
						if ( in_array( 'ddwcpos_cashier', $user->roles, true ) || in_array( 'administrator', $user->roles, true ) || in_array( 'shop_manager', $user->roles, true ) || apply_filters( 'ddwcpos_allow_administrator_access_for_pos_to_user', false, $user ) ) { 
							?>
							<div id="app"></div>
							<?php
						}
					} else {
						?>
						<div class="ddwcpos-login-wrapper" style="<?php echo esc_attr( 'background-image: linear-gradient(' . $ddwcpos_configuration[ 'login_bg_primary_color' ] . ' 0%,' . $ddwcpos_configuration[ 'login_bg_secondary_color' ] . ' 100%);color:' . $ddwcpos_configuration[ 'login_font_color' ] ); ?>">
							<style>
								#ddwcpos-login-submit {
									background-color: <?php echo esc_attr( $ddwcpos_configuration[ 'login_font_color' ] ); ?>;
									color: #fff;
								}
								#ddwcpos-login-submit:disabled {
									opacity: .5;
								}
								form input:not([type='checkbox']):not([type='submit']):focus {
									background-color: <?php echo esc_attr( $ddwcpos_configuration[ 'login_font_color' ] ); ?>;
									color: <?php echo esc_attr( $ddwcpos_configuration[ 'login_bg_primary_color' ] ); ?>;
								}
								form input:not([type='checkbox']):not([type='submit']) {
									color: <?php echo esc_attr( $ddwcpos_configuration[ 'login_font_color' ] ); ?>;
									border: solid 1px <?php echo esc_attr( $ddwcpos_configuration[ 'login_font_color' ] ); ?>;
								}
							</style>
							<div class="ddwcpos-login-container">
								<h1><?php echo esc_html( $ddwcpos_configuration[ 'login_heading_text' ] ); ?></h1>
								<?php
								// In case of a login error.
								if ( ! empty( $_GET[ 'login' ] ) && 'failed' === $_GET[ 'login' ] ) {
									?>
									<div class="ddwcpos-login-error">
										<p><?php esc_html_e( 'Wrong Credentials, Try Again!', 'ddwc-multipos' ); ?></p>
									</div>
									<?php
								}
								$args = [
									'echo'           => true,
									'redirect'       => site_url( $ddwcpos_configuration[ 'endpoint' ] ),
									'form_id'        => 'ddwcpos-login-form',
									'label_username' => esc_html__( 'Username or Email', 'ddwc-multipos' ),
									'label_password' => esc_html__( 'Password', 'ddwc-multipos' ),
									'label_remember' => esc_html__( 'Remember Me', 'ddwc-multipos' ),
									'label_log_in'   =>  $ddwcpos_configuration[ 'login_button_text' ],
									'id_username'    => 'user_login',
									'id_password'    => 'user_pass',
									'id_remember'    => 'rememberme',
									'id_submit'      => 'ddwcpos-login-submit',
									'remember'       => ! empty( $ddwcpos_configuration[ 'login_rememberme_enabled' ] ),
									'value_username' => null,
									'value_remember' => true,
								];

								// wp_login_form( $args );

								$before_login_button = apply_filters( 'ddwcpos_before_login_button', '', $args );

								$form =
									sprintf(
										'<form name="%1$s" id="%1$s" action="%2$s" method="post">',
										esc_attr( $args[ 'form_id' ] ),
										esc_url( site_url( 'wp-login.php', 'login_post' ) )
									) .
									sprintf(
										'<p class="login-username">
											<label for="%1$s">%2$s</label>
											<input type="text" name="log" id="%1$s" autocomplete="username" class="input" value="%3$s" size="20" />
										</p>',
										esc_attr( $args[ 'id_username' ] ),
										esc_html( $args[ 'label_username' ] ),
										esc_attr( $args[ 'value_username' ] )
									) .
									sprintf(
										'<p class="login-password">
											<label for="%1$s">%2$s</label>
											<input type="password" name="pwd" id="%1$s" autocomplete="current-password" spellcheck="false" class="input" value="" size="20" />
										</p>',
										esc_attr( $args[ 'id_password' ] ),
										esc_html( $args[ 'label_password' ] )
									) .
									( ! empty( $ddwcpos_configuration[ 'login_forgot_enabled' ] ) ?
										sprintf(
											'<p class="login-forgot-password"><label><a href="%1$s" class="ddwcpos-lost-password" style="color:%2$s;">%3$s</a></p>',
											esc_url( wc_lostpassword_url() ),
											esc_attr( $ddwcpos_configuration[ 'login_font_color' ] ),
											esc_html__( 'Forgot Password', 'ddwc-multipos' )
										) : ''
									) .
									( $args[ 'remember' ] ?
										sprintf(
											'<p class="login-remember"><label><input name="rememberme" type="checkbox" id="%1$s" value="forever"%2$s /> %3$s</label></p>',
											esc_attr( $args[ 'id_remember' ] ),
											( $args['value_remember'] ? ' checked="checked"' : '' ),
											esc_html( $args[ 'label_remember' ] )
										) : ''
									) .
									$before_login_button .
									sprintf(
										'<p class="login-submit">
											<input type="submit" name="wp-submit" id="%1$s" class="button button-primary" value="%2$s" />
											<input type="hidden" name="redirect_to" value="%3$s" />
										</p>',
										esc_attr( $args[ 'id_submit' ] ),
										esc_attr( $args[ 'label_log_in' ] ),
										esc_url( $args[ 'redirect' ] )
									) .
									'</form>';

								echo $form;

								?>
								<h3><?php echo esc_html( $ddwcpos_configuration[ 'login_footer_text' ] ); ?></h3>
							</div>
							<ul class="ddwcpos-bubbles">
								<li></li>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
							</ul>
						</div>
						<?php
					}
					?>
				</body>

				<!-- Prompt a message in the browser if users disabled JS -->
				<noscript><?php esc_html_e( 'Your browser does not support JavaScript!', 'ddwc-multipos' ); ?></noscript>
            </html>
            <?php
        }
	}
}
