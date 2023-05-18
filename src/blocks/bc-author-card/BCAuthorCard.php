<?php
namespace BCBlocksAndPatterns;
use WP_Block_Type_Registry;
use WP_Query;
class BCAuthorCard
{
    private $blockName = 'bc-theme/bc-author-card';
    private $apiKey = 'c48d0beffaba746a01c72aa7802d8e3cedd005f4471e488e542bb810b21c02fd';
    private $apiUrl = 'https://apiv2.allsportsapi.com/';

    public function __construct()
    {
        add_action('init', [$this, 'registerBlock']);
        add_action('wp_ajax_bc_get_authors',[$this, 'getAuthors']);
        add_action('wp_ajax_bc_get_author_data',[$this, 'authorsData']);
        add_action('wp_ajax_bc_get_authors_posts',[$this, 'authorsPosts']);
        add_action('wp_ajax_nopriv_bc_get_authors_posts',[$this, 'authorsPosts']);
        add_action('wp_ajax_bc_get_more_authors_posts',[$this, 'getMoreAuthorPosts']);
        add_action('wp_ajax_nopriv_bc_get_more_authors_posts',[$this, 'getMoreAuthorPosts']);
//        add_action('wp_ajax_nopriv_bc_get_author_data',[$this, 'authorsData']);
    }



    public function registerBlock()
    {
        if (function_exists('register_block_type') && class_exists('WP_Block_Type_Registry')) {
            if (!WP_Block_Type_Registry::get_instance()->is_registered($this->blockName)) {
                register_block_type(
                    $this->blockName,
                    [
                        'attributes'      => [
                            'finalOutput',
                            'authorData',
                            'author',
                            'avatar',
                            'authorName',
                            'totalNumberOfPosts',
                            'authorDesc',
                            'showPosts',
                            'numberOfPosts',
                            'linkToAuthor',
                            'loadMore'
                        ],
                        'render_callback' => [$this, 'render'],
                    ]
                );
            }
        }
    }


    public function getAuthors(){

        $post = get_post();
        $authorId = $post->post_author;
        $author = get_user_by('ID',$authorId);
        $authorName = $author->display_name;
        $authors = [

        ];

        $authorsWithPosts = get_users([
            'has_published_posts' => ['post','page']
        ]);

        foreach($authorsWithPosts as $author) {
            $authorData = [
                'label' => $author->display_name,
                'value' => $author->ID,
            ];
            array_push($authors,$authorData);
        }

        wp_send_json_success( $authors );
    }

    public function authorsData(){

       $showName = $_POST['authorName'];
       $showDesc = $_POST['authorDesc'];
       $showAvatar = $_POST['avatar'];
       $showLinkToAuthor = $_POST['linkToAuthor'];
       $showTotalNumberOfPosts = $_POST['totalNumberOfPosts'];
       $author = $_POST['author'];

       ob_start();

       include("templates/author.php");

       $output = ob_get_clean();

       wp_send_json(['output' => $output]);
    }

    public function authorsPosts(){
        $initiallyShow = $_POST['initiallyShow'] ?? '';
        $authorId = $_POST['authorId'] ?? '';
        $totalNumberOfPosts = count_user_posts( $authorId ) ?? '';
        $authorId = $_POST['authorId'] ?? '';
        $loadPerClick = $_POST['loadPerClick'] ?? '';
        $args = array(
            'author' => $authorId,
            'posts_per_page'   => $initiallyShow,
            'post_type'        => 'post',
            'post_status' => 'publish',
            'lang'=>'',
        );

        $query = new WP_Query($args);

        $allPosts= $query->posts;

        ob_start();

        include("templates/author-posts.php");

        $output = ob_get_clean();

        wp_send_json(['output' => $output]);

        wp_reset_query();
    }

    public function getMoreAuthorPosts() {
        $loadPerClick = $_POST['loadPerClick'] ?? '';
        $offset = $_POST['offsetForPosts'] ?? 0;
        $authorId = $_POST['authorId'];

        $args = array(
            'author' => $authorId,
            'posts_per_page'   => $loadPerClick,
            'post_type'        => 'post',
            'post_status' => 'publish',
            'lang'=>'',
            'offset' => $offset,
        );

        $query = new WP_Query($args);

        $allPosts= $query->posts;

        ob_start();

        foreach($allPosts as $post) {

            include("templates/loop-tempaltes/author-post-template.php");

        }

        $output = ob_get_clean();

        wp_send_json(['output' => $output]);

        wp_reset_query();
    }

    public function render($attributes){
        $finalOutput = $attributes['finalOutput'] ?? "Nothing to share";

        $html = '<div>';
        $html .= '<div>' . $finalOutput . '</div>';
        $html .= '</div>';

        return $html;
    }

}
new BCAuthorCard();
