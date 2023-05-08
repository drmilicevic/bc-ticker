<?php

namespace BCBlocksAndPatterns;

use WP_Query;

include_once "SingletonTrait.php";


class QueryPostsByTaxonomies
{
    use SingletonTrait;

    public function getPosts(
        $postType = 'post',
        $postsPerPage = 10,
        $taxonomiesQueryArgs = []
    )
    {
        $args = [
            'post_type' => $postType,
            'post_status' => 'publish',
            'posts_per_page' => $postsPerPage,
            'tax_query' => []
        ];

        if (!empty(array_filter($taxonomiesQueryArgs))) {
            $taxQueryArr = [];

            $taxQueryArr['relation'] = 'AND';

            foreach ($taxonomiesQueryArgs as $taxonomyArg) {
                if ($taxonomyArg['term']) {
                    $taxQueryArr[] = [
                        'taxonomy' => $taxonomyArg['taxonomy'],
                        'field' => 'slug',
                        'terms' => $taxonomyArg['term'],
                    ];
                }
            }

            $args['tax_query'] = $taxQueryArr;
        }


        return new WP_Query($args);
    }
}
