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
                $matchId = $match->event_key;
                ?>

                <div class="ticker__headline" >
                    <div class="fixture-match" style="font-size: <?php echo $fontSize; ?>; color: <?php echo $textColor; ?>;">
                        <div class="home-team teams" data-bs-toggle="modal" data-bs-target="#teamModal" data-match="<?php echo $matchId;?>" data-sport="<?php echo $sport; ?>" data-team="<?php echo $homeTeamKey;?>">
                            <?php
                                if($sport == "football") {
                                    ?>
                                     <img class="team-logo" src="<?php echo $match->home_team_logo; ?>" width="25">

                                    <?php
                                }
                            ?>
                            <span><?php echo $match->event_home_team; ?></span>
                        </div>
                        &nbsp;vs&nbsp;
                        <div class="away-team teams" data-bs-toggle="modal" data-bs-target="#teamModal" data-match="<?php echo $matchId;?>" data-team="<?php echo $awayTeamKey;?>">
                            <span><?php echo $match->event_away_team; ?></span>
                            <?php
                                if($sport == "football") {
                                    ?>
                                    <img class="team-logo" src="<?php echo $match->away_team_logo; ?>" width="25">

                                    <?php
                                }

                            ?>
                        </div>
                    </div>
                    <div class="fixture-match fixture-match-time" style="color: <?php echo $textColor; ?>;">
                        <?php echo $match->event_date; ?>|<?php echo $match->event_time; ?>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>


    <div class="modal fade" id="teamModal" data-bs-backdrop="static" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel"></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body"></div>
            </div>
        </div>
    </div>
    <?php
} else {
    echo "<div>Sorry. There are no results.</div>";
}