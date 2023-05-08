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
        foreach($this->blocks  as $block){
            if($block['callback']) {
                include_once(__DIR__ . "/blocks/{$block['name']}/{$block['callback']}.php");
            }

            if(
                $block['name'] === 'bc-carousel'
                && file_exists(WP_PLUGIN_DIR . '/' . Init::FOLDER . '/src/assets/js/bc-carousel-large-screen.js')
            ) {
                add_action('wp_enqueue_scripts', function(){
                    wp_enqueue_script(
                        'bc-carousel-large-screen',
                        WP_PLUGIN_URL . '/' . Init::FOLDER . '/src/assets/js/bc-carousel-large-screen.js',
                        [],
                        false,
                        true
                    );
                });
            }
        }
    }
}