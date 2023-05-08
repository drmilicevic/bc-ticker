<?php
/**
 * Plugin Name:       BC Ticker
 * Description:       BC Ticker Gutenberg block for showing fixture data.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            WP Hackaton Team
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       bc-ticker
 *
 * @package           create-block
 */


define('BC_PLUGIN_DIR', plugin_dir_url( __FILE__ ));
define('BC_PLUGIN_TEXT_DOMAIN', 'bc-ticker');

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_bc_ticker_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_bc_ticker_block_init' );