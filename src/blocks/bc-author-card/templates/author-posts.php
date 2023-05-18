<div class="d-flex flex-wrap author-articles">
<?php
foreach($allPosts as $post) {

    include("loop-tempaltes/author-post-template.php");


}

?>
</div>
<?php
    if ($totalNumberOfPosts > $initiallyShow) :
    ?>
    <div class="loading-animation text-center col-12">

    </div>
    <div class="d-flex text-decoration-none justify-content-center text-dark border border-1 border-secondary rounded-5 py-2 px-4">
        <a href="#" class="btn btn-primary load-more-posts" data-user-id="<?php echo $authorId;?>" data-load-per-click="<?php echo $loadPerClick;?>" data-offset="<?php echo $initiallyShow;?>">Show More</a>
    </div>
<?php
endif;

