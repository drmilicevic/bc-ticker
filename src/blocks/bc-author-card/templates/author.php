<?php
$description = $showDesc != "false" ? get_the_author_meta( 'description', $author ) : "";
$authorName = $showName != "false" ? get_the_author_meta( 'display_name', $author ) : "";
$avatar = $showAvatar != "false" ? get_avatar( $author, 32) : "";
$linkToAuthor = $showLinkToAuthor !="false" ? get_author_posts_url($author) : "#";
$totalNumberOfPosts = $showTotalNumberOfPosts != "false" ? count_user_posts( $author ) : "";
$author = $_POST['author'];

?>
<div class="author-wrapper col-12 col-sm-9 border border-1 rounded mx-auto my-3 d-flex flex-column">
    <div class="author-section-one d-flex justify-content-between align-items-center p-3">
        <a href="<?php echo $linkToAuthor;?>">
            <div class="author-head align-items-center d-flex gap-2">
                <div class="author-head__avatar">
                    <?php echo $avatar;?>
                </div>
                <div class="author-head__name text-dark">
                    <?php echo $authorName;?>

                </div>
            </div>
        </a>

        <div class="author-post-number">
            <?php echo $totalNumberOfPosts;?>

        </div>
    </div>

    <div class="author-desc px-3">
        <?php echo $description;?>
    </div>
</div>

