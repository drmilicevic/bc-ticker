<div class="roster">
    <?php
        foreach ($odds as $key => $value) {
            ?>
            <div class="col-6">
                <div class="p-1 odds d-flex">
                    <?php echo $key; ?>
                    <?php
                    if (is_array($value)) :
                        foreach ($value as $val) :
                          ?>
                            <div class="odd">
                            <?php
                                echo $val . '<span> | </span>';
                            ?>
                           </div>
                        <?php
                        endforeach;
                    endif;
                    ?>
                </div>
            </div>
            <?php
        }
    ?>
</div>
