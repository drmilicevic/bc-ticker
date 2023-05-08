<?php

namespace BCBlocksAndPatterns;

use WP_Block_Type_Registry;

class BCTicker
{
    private $blockName = 'bc-theme/bc-ticker';

    public function __construct()
    {
        add_action('init', [$this, 'registerBlock']);
    }
    
    public function registerBlock()
    {
        if (function_exists('register_block_type') && class_exists('WP_Block_Type_Registry')) {
            if (!WP_Block_Type_Registry::get_instance()->is_registered($this->blockName)) {
                register_block_type(
                    $this->blockName,
                    [
                        'attributes'      => [],
                        'render_callback' => [$this, 'render'],
                    ]
                );
            }
        }
    }
    
    public function render($attributes)
    {
        return '';
    }
}
new BCTicker();
