<?php
if (!empty($allFixtures)) {

$fixturesObject = json_decode($allFixtures);
$matches = $fixturesObject->result;
?>
<div class="ticker-wrap">
    <div 
        class="ticker"
        style="   
        -moz-animation-duration: <?php echo $attribues['scrollamount']; ?>;
        -webkit-animation-duration: <?php echo $attribues['scrollamount']; ?>;
                animation-duration: <?php echo $attribues['scrollamount']; ?>;"
    >
        <?php foreach ($matches as $match) : ?>
            <div class="ticker__headline">
             <span class="fixture-match">
                <img class="team-logo" src="<?php echo $match->home_team_logo; ?>" width="25" height="25"><?php echo $match->event_home_team; ?>
                vs 
                <img class="team-logo" src="<?php echo $match->away_team_logo; ?>" width="25" height="25"><?php echo $match->event_away_team; ?> 
            </span>
            </div>
        <?php endforeach; ?>
    </div>
</div>
<?php
}