<?php

namespace BCBlocksAndPatterns;

class BlocksLoader
{
    private $blocks;

    public function __construct()
    {
        $settings     = Init::$settings;
        $this->blocks = !empty($settings['blocks']) ? $settings['blocks'] : [];
        $this->loadAllBlocks();
    }

    public function loadAllBlocks()
    {
        add_action('wp_enqueue_scripts', function(){

            wp_enqueue_script(
                'bc-load-more-posts',
                WP_PLUGIN_URL . '/' . Init::FOLDER . '/src/assets/js/load-more.js',
                [],
                false,
                true
            );
            wp_localize_script( 'bc-load-more-posts', 'ajaxObj',
                array(
                    'ajaxurl' => admin_url( 'admin-ajax.php' ),
                )
            );
        });

        foreach($this->blocks  as $block){
            if($block['callback']) {
                include_once(__DIR__ . "/blocks/{$block['name']}/{$block['callback']}.php");
            }

        }
    }
}
