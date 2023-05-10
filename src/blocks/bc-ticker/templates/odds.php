<div class="roster">
    <?php
        $homeOdds = $odds->Home;
        $awayOdds = $odds->Away;

    $result = array_merge_recursive($homeOdds,$awayOdds);

    print_r($result);



    ?>
        <div class="col-6">


    <?php
        foreach ($homeOdds as $key => $value) {
           ?>
            <div class="">
                <?php echo $key . '    '. $value;?>
            </div>
           <?php
        }
        ?>

        </div>
        <div class="col-6">


        <?php
        foreach ($awayOdds as $value) {
            ?>
            <div class="">
                <?php echo $value;?>
            </div>
            <?php
        }
        ?>

        </div>

    </div>
