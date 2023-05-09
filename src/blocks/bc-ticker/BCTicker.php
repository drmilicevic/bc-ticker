<?php

namespace BCBlocksAndPatterns;

use WP_Block_Type_Registry;

class BCTicker
{
    private $blockName = 'bc-theme/bc-ticker';

    public function __construct()
    {
        add_action('wp_ajax_get_experts_list_json', [$this, 'getExpertsListJson']);
        add_action('init', [$this, 'registerBlock']);
    }
    
    public function registerBlock()
    {
        if (function_exists('register_block_type') && class_exists('WP_Block_Type_Registry')) {
            if (!WP_Block_Type_Registry::get_instance()->is_registered($this->blockName)) {
                register_block_type(
                    $this->blockName,
                    [
                        'attributes'      => ['sport', 'countryId', 'dateFrom', 'leagueId', 'title', 'nextNumberOfDays'],
                        'render_callback' => [$this, 'render'],
                    ]
                );
            }
        }
    }
    
    public function render($attributes)
    {
        extract($attributes);

    }

    public function sportsData() {
        $sports = [
            'football' => 'football',
            'basketball' => 'basketball',
            'tennis' => 'tennis',
            'cricket' => 'cricket',
        ];

        wp_send_json_success([
            'sports' => $sports
        ]);
    }
}
new BCTicker();
