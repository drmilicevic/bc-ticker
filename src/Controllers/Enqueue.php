<?php
/**
 * Class Enqueue
 */
class Enqueue
{
    /**
     * Enqueue constructor.
     */
    public function __construct()
    {
        add_action('admin_enqueue_scripts', [$this, 'loadAdminScripts']);
    }

    public function loadAdminScripts()
    {

        $assetFile = include BC_PLUGIN_DIR . 'build/index.asset.php';

        foreach ( $assetFile['dependencies'] as $style ) {
            wp_enqueue_style( $style );
        }

        wp_register_script(
            'bc-ticker-app',
            BC_PLUGIN_DIR . 'build/index.js',
            $assetFile['dependencies'],
            $assetFile['version']
        );
        wp_enqueue_script( 'bc-ticker-app' );
        wp_localize_script( 'bc-ticker-app', 'ticker_cache_ajax', array(
            'ajax_url' => admin_url( 'admin-ajax.php' ),
            'nonce' => wp_create_nonce( 'ticker-cache-nonce' ),
        ) );
    }
}