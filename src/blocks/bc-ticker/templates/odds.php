<div class="roster">
    <?php
        foreach ($odds as $key => $value) {
            ?>
            <div class="col-12 col-sm-6">
                <div class="p-1 odds d-flex">
                    <?php echo $key; ?>
                    <?php
                    if (is_array($value)) {
                        foreach ($value as $val) :
                          ?>
                            <div class="odd">
                            <?php
                                echo $val . '<span> | </span>';
                            ?>
                           </div>
                        <?php
                        endforeach;
                    }
                    ?>
                </div>
            </div>
            <?php
        }

        if(empty($odds)){
            echo 'There are no odds to display';
        }
    ?>
</div>
