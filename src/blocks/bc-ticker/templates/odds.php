<div class="roster">
    <?php
        foreach ($odds as $key => $value) {
            ?>
            <p class="">
                <?php echo $key; ?>
                <?php 
                    if (is_array($value)) : 
                        foreach ($value as $val) : 
                            echo $val . ' | '; 
                        endforeach; 
                    endif; 
                ?>
            </p>
            <?php
        }
    ?>
</div>
