<?php

namespace BCCTG;

use \WP_Block_Type_Registry;

class ListOfPosts
{
    private $blockName = 'bc-theme/test-block';

    public function __construct()
    {
        add_action('init', [$this, 'registerBlock']);
        add_action('wp_ajax_get-posts-by-tag-g', [$this, 'renderShortcode']);
    }

    /**
     * Register block if not exist
     */
    public function registerBlock()
    {
        if (function_exists('register_block_type') && class_exists('WP_Block_Type_Registry')) {
            if (!WP_Block_Type_Registry::get_instance()->is_registered($this->blockName)) {
                // Register block
                register_block_type($this->blockName, [
                    'attributes' => [
                        'limit',
                        'tag'
                    ],
                    'render_callback' => [$this, 'testBlock'],
                ]);
            }
        }
    }

    /**
     * Callback function
     * @param $attributes
     * @return string
     */
    public function testBlock($attributes)
    {
        $limit = !empty($attributes['limit']) ? (int)$attributes['limit'] : 5;
        $tag = !empty($attributes['tag']) ? $attributes['tag'] : '';
        return $this->render($tag, $limit);
    }

    public function renderShortcode()
    {
		$limit = (!empty($_GET['limit'])) ? (int)$_GET['limit'] : 5;
		$tag = (!empty($_GET['tag'])) ? $_GET['tag'] : '';

        $shortcode = $this->render($tag, $limit);
        wp_send_json_success($shortcode);
    }

    public function render($tag, $limit)
	{

		$args = [
			'post_type' => 'post',
			'post_status' => 'publish',
			'posts_per_page' => $limit,
			'no_found_rows' => true,
			'tag' => $tag
		];

		$customQuery = new \WP_Query($args);
		if(!count($customQuery->posts)){
			return "Nothing to display";
		}
		ob_start(); ?>
    	<ul class="preview-container__other-posts">
		<?php
        foreach ($customQuery->posts as $singlePost) {

			$featuredImgSmallThumb = get_the_post_thumbnail($singlePost->ID, 'thumbnail');

			$postExcerpt = wp_trim_excerpt($singlePost->post_excerpt, $singlePost);

        	?>

			<li class="preview-item">
				<a href="<?php echo esc_url(get_permalink($singlePost)); ?>" rel="bookmark">
						<header class="preview-item__header">
							<div class="preview-item__info">
								<div class="preview-item__date">
									<?php
									printf(
										_x('%1$s siden', 'human readable time difference', THEME_CHILD_TEXT_DOMAIN ),
										human_time_diff(
											get_the_time( 'U', $singlePost->ID),
											current_time( 'U' )
										)
									);
									?>
								</div>
								<?php echo $featuredImgSmallThumb;?>
							</div>

							<div class="preview-item__body">
								<h2 class="preview-item__title">
									<?php echo get_the_title($singlePost); ?>
								</h2>
								<span class="preview-item__excerpt">
									<?php echo $postExcerpt; ?>
								</span>
							</div>
						</header>
				</a>
			</li>
		<?php
		}
		return ob_get_clean();
	}
}
