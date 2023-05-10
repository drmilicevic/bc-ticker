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
        add_action('wp_ajax_bc_get_countries', [$this, 'getCountries']);
        add_action('wp_ajax_bc_get_leagues', [$this, 'getLeagues']);
        add_action('wp_ajax_bc_get_matches', [$this, 'getMatches']);
        add_action('wp_ajax_bc_get_roster',[$this, 'getTeamsRoster']);
        add_action( 'wp_enqueue_scripts', [$this,'enqueScripts'] );
    }

    public function enqueScripts() {
        wp_enqueue_script( 'teamModal', WP_PLUGIN_URL . '/bc-ticker/src/blocks/bc-ticker/components/teamModal.js', array(), '1.0.0', true );
        wp_localize_script( 'teamModal', 'ticker_ajax', array(
            'ajaxurl' => admin_url( 'admin-ajax.php' ),
        ) );
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
                            'fontSize',
                            'nextNumberOfDays'
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
        $scrollamount = $_POST['scrollamount'] ?? '';
        $bgColor = $_POST['bgColor'] ?? '';
        $fontSize = $_POST['fontSize'] ?? '12';
        $textColor = $_POST['textColor'] ?? '';


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
        $fontSize = $attributes['fontSize'] ?? '';
        $textColor = $attributes['textColor'] ?? '';

        $fixtures = wp_remote_get(
            sprintf('https://apiv2.allsportsapi.com/%s/?met=Fixtures&APIkey=c48d0beffaba746a01c72aa7802d8e3cedd005f4471e488e542bb810b21c02fd&countryId=%s&leagueId=%s&from=%s&to=%s', $sport, $country, $league, date("Y-m-d"), date('Y-m-d', strtotime("+30 days")))
        );
        
        $allFixtures = wp_remote_retrieve_body($fixtures);

        ob_start();

        include("templates/default.php");

        return ob_get_clean();
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

    public function getTeamsRoster() {
        $teamId = $_POST['teamId'];

        $homeTeamRosterGet = wp_remote_get(
            'https://apiv2.allsportsapi.com/football/?&met=Teams&teamId='.$teamId.'&APIkey=c48d0beffaba746a01c72aa7802d8e3cedd005f4471e488e542bb810b21c02fd'
        );
        $homeTeamRoster = wp_remote_retrieve_body($homeTeamRosterGet);

        $homeTeam = json_decode($homeTeamRoster);
        $homeTeamRoster =$homeTeam->result;
        $homeTeamPlayers = $homeTeamRoster[0]->players;

        ob_start();

        include("templates/player.php");

        $output = ob_get_clean();
        $title = '';

        wp_send_json_success([
            'title' => $title,
            'output'=> $output
        ]);
    }
}
new BCTicker();
