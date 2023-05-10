<?php
$fixturesObject = json_decode($allFixtures);
$matches = !empty($fixturesObject->result) ? $fixturesObject->result : [];

if(!empty($matches)) {
?>
<div class="ticker-wrap" data-sport="<?php echo $sport; ?>" style="background-color: <?php echo $bgColor;?>">
    <div 
        class="ticker"
        style="   
        -moz-animation-duration: <?php echo $scrollamount; ?>s;
        -webkit-animation-duration: <?php echo $scrollamount; ?>s;
                animation-duration: <?php echo $scrollamount; ?>s;"
    >
        <?php foreach ($matches as $match) : ?>
            <div class="ticker__headline" >
                <div class="fixture-match" style="font-size: <?php echo $fontSize; ?>; color: <?php echo $textColor; ?>;">
                    <div class="home-team" data-team="<?php echo $match->home_team_key; ?>">
                        <img class="team-logo" src="<?php echo $match->home_team_logo; ?>" width="25">
                        <span><?php echo $match->event_home_team; ?></span>
                    </div>
                    &nbsp;vs&nbsp;
                    <div class="away-team" data-team="<?php echo $match->away_team_key; ?>">
                         <span><?php echo $match->event_away_team; ?></span>
                        <img class="team-logo" src="<?php echo $match->away_team_logo; ?>" width="25">
                    </div>
                </div>
                <div class="fixture-match fixture-match-time" style="color: <?php echo $textColor; ?>;">
                    <?php echo $match->event_date; ?>|<?php echo $match->event_time; ?>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
</div>
<?php
} else {
    echo "<div>Sorry. There are no results.</div>";
}