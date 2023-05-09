<?php
if (!empty($allFixtures)) {

$fixturesObject = json_decode($allFixtures);
$matches = $fixturesObject->result;
?>
<div class="ticker-wrap">
    <div 
        class="ticker"
        style="   
        -moz-animation-duration: <?php echo $attributes['scrollamount']; ?>s;
        -webkit-animation-duration: <?php echo $attributes['scrollamount']; ?>s;
                animation-duration: <?php echo $attributes['scrollamount']; ?>s;"
    >
        <?php foreach ($matches as $match) : ?>
            <div class="ticker__headline">
                <span class="fixture-match">
                    <img class="team-logo" src="<?php echo $match->home_team_logo; ?>" width="25" height="25"><?php echo $match->event_home_team; ?>
                    vs 
                    <img class="team-logo" src="<?php echo $match->away_team_logo; ?>" width="25" height="25"><?php echo $match->event_away_team; ?> 
                </span>
                <span class="fixture-match">
                    (<?php echo $match->event_date; ?>|<?php echo $match->event_time; ?>)
                </span>
            </div>
        <?php endforeach; ?>
    </div>
</div>
<?php
}