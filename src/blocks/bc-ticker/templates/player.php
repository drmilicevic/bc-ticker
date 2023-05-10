<div class="roster">

<?php
foreach ($homeTeamPlayers as $player) {

$playerName = $player->player_name;
$playerType = $player->player_type;
$playerImage = $player->player_image;
$playerAge = $player->player_age;
$playerNumber = $player->player_number;
?>
    <div class="col-4 player-data">
        <div class="player-image"><img src="<?php echo $playerImage?>" alt="player-image"></div>
        <div class="player-info">
            <div class="player-name">Name: <?php echo $playerName?></div>
            <div class="player-age">Age: <?php echo $playerAge?></div>
            <div class="player-type">Position: <?php echo $playerType?></div>
            <div class="player-number">Number: <?php echo $playerNumber?></div>
        </div>
    </div>

<?php
}
?>
</div>


