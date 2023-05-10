<?php
$fixturesObject = json_decode($allFixtures);
$matches = !empty($fixturesObject->result) ? $fixturesObject->result : [];

if(!empty($matches)) {
?>
<div class="ticker-wrap" style="background-color: <?php echo $bgColor;?>">
    <div 
        class="ticker"
        style="   
        -moz-animation-duration: <?php echo $scrollamount; ?>s;
        -webkit-animation-duration: <?php echo $scrollamount; ?>s;
                animation-duration: <?php echo $scrollamount; ?>s;"
    >
        <?php foreach ($matches as $match) : ?>
        <?php
            $homeTeamKey = $match->home_team_key;
            $awayTeamKey = $match->away_team_key;
        ?>

            <div class="ticker__headline" >
                <div class="fixture-match" style="font-size: <?php echo $fontSize; ?>; color: <?php echo $textColor; ?>;">
                    <div class="home-team teams" data-bs-toggle="modal" data-bs-target="#teamModal" data-sport="<?php echo $sport; ?>" data-team="<?php echo $homeTeamKey;?>">
                        <img class="team-logo" src="<?php echo $match->home_team_logo; ?>" width="25">
                        <span><?php echo $match->event_home_team; ?></span>
                    </div>
                    &nbsp;vs&nbsp;
                    <div class="away-team teams" data-bs-toggle="modal" data-bs-target="#teamModal" data-team="<?php echo $awayTeamKey;?>">
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
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Launch static backdrop modal
    </button>


    <div class="modal fade" id="teamModal" data-bs-backdrop="static" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel"></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
<?php
} else {
    echo "<div>Sorry. There are no results.</div>";
}