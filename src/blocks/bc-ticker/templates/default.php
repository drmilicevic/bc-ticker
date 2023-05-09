<?php
if (!empty($allFixtures)) {

$fixturesObject = json_decode($allFixtures);
$matches = $fixturesObject->result;
?>
<div class="ticker-wrap" style="background-color: <?php echo $attributes['bgColor'];?>">
    <div 
        class="ticker"
        style="   
        -moz-animation-duration: <?php echo $attributes['scrollamount']; ?>s;
        -webkit-animation-duration: <?php echo $attributes['scrollamount']; ?>s;
                animation-duration: <?php echo $attributes['scrollamount']; ?>s;"
    >
        <?php foreach ($matches as $match) : ?>
            <div class="ticker__headline" >
                <div class="fixture-match" >
                    <div class="home-team">
                        <img class="team-logo" src="<?php echo $match->home_team_logo; ?>" width="25" height="25">
                        <span style="font-size: <?php echo $attributes['fontSize'];?>
                                    color: <?php echo $attributes['textColor']; ?>;
                                "><?php echo $match->event_home_team; ?></span>
                    </div>
                    vs
                    <div class="away-team">
                         <span style="font-size: <?php echo $attributes['fontSize'];?>
                                 color: <?php echo $attributes['textColor']; ?>;
                                 "><?php echo $match->event_away_team; ?></span>
                        <img class="team-logo" src="<?php echo $match->away_team_logo; ?>" width="25" height="25">
                    </div>
                </div>
                <div class="fixture-match fixture-match-time">
                    <?php echo $match->event_date; ?>|<?php echo $match->event_time; ?>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
</div>
<?php
}