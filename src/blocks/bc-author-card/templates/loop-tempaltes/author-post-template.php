<?php

$defaultImg = get_template_directory_uri() . '/assets/src/img/no_featured_image.svg';
?>

<div class="col-12 col-lg-4">
    <article class="mx-2">
        <div class="row flex-column">
            <div class="col-cat-img mb-2 position-relative">
                <a href="<?php echo get_permalink($post->ID); ?>" rel="bookmark">
                    <?php
                    if (!empty(get_the_post_thumbnail($post->ID))) {
                        echo get_the_post_thumbnail($post->ID, 'large');
                    } else {
                        echo '<img src="' . $defaultImg . '" class="rounded attachment-large size-large wp-post-image"/>';
                    }
                    ?>
                </a>
            </div>

            <div class="col-cat-entry">

                <header class="entry-header">

                    <div class="entry-meta mb-2">
							<span class="posted-on">
							    <?php echo get_the_date('d/m/Y',$post->ID); ?>
							</span>
                    </div> <!-- .entry-meta -->

                    <?php
                    echo get_the_title($post->ID);
                    ?>


                </header><!-- .entry-header -->

            </div>

        </div>

    </article><!-- #post-## -->
</div><!-- col -->
