<div class="roster">

    <?php
    foreach ($teamPlayers as $player) {

        $playerName = $player->player_name;
        $playerType = $player->player_type;
        $playerAge = $player->player_age;
        $playerNumber = $player->player_number;
        ?>
        <div class="col-12 col-sm-4 player-data">
            <div class="player-info">
                <div class="player-name">Name: <?php echo $playerName?></div>
                <div class="player-age">Age: <?php echo $playerAge?></div>
                <div class="player-type">Position: <?php echo $playerType?></div>
                <div class="player-number">Number: <?php echo $playerNumber?></div>
            </div>
        </div>

        <?php
    }

    if(empty($teamPlayers)){
        echo 'There is no data for this team';
    }
    ?>
</div>

