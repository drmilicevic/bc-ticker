<?php
/**
 * Plugin Name:       BC Thicker
 * Description:       BC Thicker block
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            BC WP team Nis
 * Text Domain:       bc-theme
 */

require WP_PLUGIN_DIR . '/bc-ticker/Init.php';
\BCBlocksAndPatterns\Init::getInstance();
