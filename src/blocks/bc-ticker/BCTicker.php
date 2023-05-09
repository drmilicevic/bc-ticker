<?php
namespace BCBlocksAndPatterns;
use WP_Block_Type_Registry;
class BCTicker
{
    private $blockName = 'bc-theme/bc-ticker';
    public function __construct()
    {
        add_action('init', [$this, 'registerBlock']);
        add_action('wp_ajax_bc_get_countries', [$this, 'getCountries']);
        add_action('wp_ajax_bc_get_leagues', [$this, 'getLeagues']);
        add_action('wp_ajax_bc_get_matches', [$this, 'getMatches']);
    }
    public function registerBlock()
    {
        if (function_exists('register_block_type') && class_exists('WP_Block_Type_Registry')) {
            if (!WP_Block_Type_Registry::get_instance()->is_registered($this->blockName)) {
                register_block_type(
                    $this->blockName,
                    [
                        'attributes'      => [
                            'sport',
                            'country',
                            'league',
                            'scrollamount',
                            'bgColor',
                            'textColor',
                            'fontSize'
                        ],
                        'render_callback' => [$this, 'render'],
                    ]
                );
            }
        }
    }

    public function getCountries()
    {
        $countries = wp_remote_get(
            sprintf('https://apiv2.allsportsapi.com/%s/?met=Countries&APIkey=c48d0beffaba746a01c72aa7802d8e3cedd005f4471e488e542bb810b21c02fd', $_POST['sport'])
        );

        wp_send_json_success(wp_remote_retrieve_body($countries), 200);
    }

    public function getLeagues()
    {
        $leagues = wp_remote_get(
            sprintf('https://apiv2.allsportsapi.com/%s/?met=Leagues&APIkey=c48d0beffaba746a01c72aa7802d8e3cedd005f4471e488e542bb810b21c02fd&countryId=%s', $_POST['sport'], $_POST['country'])
        );

        wp_send_json_success(wp_remote_retrieve_body($leagues), 200);
    }

    public function getMatches() {
        $sport = $_POST['sport'] ?? 'football';
        $country = $_POST['country'] ?? '41';
        $league = $_POST['league'] ?? null;

        $fixtures = wp_remote_get(
            sprintf('https://apiv2.allsportsapi.com/%s/?met=Fixtures&APIkey=c48d0beffaba746a01c72aa7802d8e3cedd005f4471e488e542bb810b21c02fd&countryId=%s&leagueId=%s&from=%s&to=%s', $sport, $country, $league, date("Y-m-d"), date('Y-m-d', strtotime("+30 days")))
        );

        $allFixtures = wp_remote_retrieve_body($fixtures);

        ob_start();

        include("templates/default.php");

        wp_send_json(ob_get_clean());
    }

    public function render($attributes)
    {
        $sport = $attributes['sport'] ?? 'football';
        $country = $attributes['country'] ?? '41';
        $league = $attributes['league'] ?? '';
        $scrollamount = $attributes['scrollamount'] ?? '';
        $bgColor = $attributes['bgColor'] ?? '';

        $fixtures = wp_remote_get(
            sprintf('https://apiv2.allsportsapi.com/%s/?met=Fixtures&APIkey=c48d0beffaba746a01c72aa7802d8e3cedd005f4471e488e542bb810b21c02fd&countryId=%s&leagueId=%s&from=%s&to=%s', $sport, $country, $league, date("Y-m-d"), date('Y-m-d', strtotime("+30 days")))
        );
        
        $allFixtures = wp_remote_retrieve_body($fixtures);

        ob_start();

        include("templates/default.php");

        return ob_get_clean();
    }
}
new BCTicker();
