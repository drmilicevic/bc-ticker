<?php
namespace BCBlocksAndPatterns;
use WP_Block_Type_Registry;
class BCTicker
{
    private $blockName = 'bc-theme/bc-ticker';
    private $apiKey = 'c48d0beffaba746a01c72aa7802d8e3cedd005f4471e488e542bb810b21c02fd';
    private $apiUrl = 'https://apiv2.allsportsapi.com/';

    public function __construct()
    {
        add_action('wp_ajax_get_experts_list_json', [$this, 'getExpertsListJson']);
        add_action('init', [$this, 'registerBlock']);
        add_action('wp_ajax_bc_get_countries', [$this, 'getCountries']);
        add_action('wp_ajax_bc_get_leagues', [$this, 'getLeagues']);
        add_action('wp_ajax_bc_get_matches', [$this, 'getMatches']);
        add_action('wp_ajax_bc_get_roster',[$this, 'getTeamsRoster']);
        add_action('wp_ajax_nopriv_bc_get_roster',[$this, 'getTeamsRoster']);
        add_action('wp_ajax_bc_get_basketball_odds',[$this, 'getBasketballOdds']);
        add_action('wp_ajax_nopriv_bc_get_basketball_odds',[$this, 'getBasketballOdds']);
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
        $url = $this->apiUrl . $_POST['sport'] . '/?';

        $params = [
            'met' => 'Countries',
            'APIkey' => $this->apiKey
        ];

        $countries = wp_remote_get($url . http_build_query($params));

        wp_send_json_success(wp_remote_retrieve_body($countries), 200);
    }

    public function getLeagues()
    {
        $url = $this->apiUrl . $_POST['sport'] . '/?';

        $params = [
            'met' => 'Leagues',
            'APIkey' => $this->apiKey,
            'countryId' => $_POST['country']
        ];

        $leagues = wp_remote_get($url . http_build_query($params));

        wp_send_json_success(wp_remote_retrieve_body($leagues), 200);
    }

    public function getMatches() {
        $sport = $_POST['sport'] ?? 'football';
        $country = $_POST['country'] ?? '44';
        $league = $_POST['league'] ?? '152';
        $scrollamount = $_POST['scrollamount'] ?? '80';
        $bgColor = $_POST['bgColor'] ?? '';
        $fontSize = $_POST['fontSize'] ?? '12';
        $textColor = $_POST['textColor'] ?? '';
        $nextNumberOfDays = $_POST['nextNumberOfDays'] ?? '5';

        $url = $this->apiUrl . $sport . '/?';

        $params = [
            'met' => 'Fixtures',
            'APIkey' => $this->apiKey,
            'leagueId' => $league,
            'from' => date("Y-m-d"),
            'to' => date('Y-m-d', strtotime( "+" . $nextNumberOfDays . " days"))
        ];
        $fixtures = wp_remote_get($url . http_build_query($params));

        $allFixtures = wp_remote_retrieve_body($fixtures);

        ob_start();

        include("templates/default.php");

        wp_send_json(ob_get_clean());
    }

    public function render($attributes)
    {
        $sport = $attributes['sport'] ?? 'football';
        $country = $attributes['country'] ?? '44';
        $league = $attributes['league'] ?? '152';
        $scrollamount = $attributes['scrollamount'] ?? '80';
        $bgColor = $attributes['bgColor'] ?? '';
        $fontSize = $attributes['fontSize'] ?? '';
        $textColor = $attributes['textColor'] ?? '';
        $nextNumberOfDays = $attributes['nextNumberOfDays'] ?? '5';

        $url = $this->apiUrl . $sport . '/?';

        $params = [
            'met' => 'Fixtures',
            'APIkey' => $this->apiKey,
            'leagueId' => $league,
            'from' => date("Y-m-d"),
            'to' => date('Y-m-d', strtotime( "+" . $nextNumberOfDays . " days"))
        ];
        $fixtures = wp_remote_get($url . http_build_query($params));

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
        $url = $this->apiUrl . 'football/?';
        $params = [
            'met' => 'Teams',
            'APIkey' => $this->apiKey,
            'teamId' => $teamId,
        ];

        $teamRosterGet = wp_remote_get($url . http_build_query($params));
        $teamRoster = wp_remote_retrieve_body($teamRosterGet);
        $team = json_decode($teamRoster);
        $teamPlayers = $team->result[0]->players;

        ob_start();

        include("templates/player.php");

        $output = ob_get_clean();

        wp_send_json_success(['output'=> $output]);
    }

    public function getBasketballOdds() {
        $bet = "Home/Away";
        $matchId = $_POST['matchId'];
        $url = $this->apiUrl . 'basketball/?';
        $params = [
            'met' => 'Odds',
            'APIkey' => $this->apiKey,
            'matchId' => $matchId,
        ];
        
        $matchOddsGet = wp_remote_get($url . http_build_query($params));
        $matchOddsBody = wp_remote_retrieve_body($matchOddsGet);
        $matchOddsJson = json_decode($matchOddsBody);
        $rawOdds = $matchOddsJson->result->$matchId->$bet;

        $homeOdds = (array)$rawOdds->Home;
        $awayOdds = (array)$rawOdds->Away;
        $odds = array_merge_recursive($homeOdds, $awayOdds);

        ob_start();

        include("templates/odds.php");

        $output = ob_get_clean();

        wp_send_json_success([
            'output'=> $output,
            'matchId' => $matchId,
            'matchOddsBody' => $odds,
            'result' => $result
        ]);
    }
}
new BCTicker();
