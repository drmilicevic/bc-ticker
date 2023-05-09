<?php
if (!empty($allFixtures)) {

$fixturesObject = json_decode($allFixtures);
$matches = $fixturesObject->result;
?>
<marquee width="100%" direction="left" height="30px" bgcolor="#F6546A">
    <?php
        foreach ($matches as $match) {
            echo '<span class="fixture-match"><img class="team-logo" src="' . $match->home_team_logo . '" width="16" height="16">' . $match->event_home_team . ' vs ' . '<img class="team-logo" src="' . $match->away_team_logo . '" width="16" height="16">' .$match->event_away_team . '</span>';
        }
    ?>
</marquee>
<?php
}