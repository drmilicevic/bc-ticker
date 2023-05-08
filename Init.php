<?php

namespace BCBlocksAndPatterns;

if (!defined('ABSPATH')) {
    exit;
}

class Init
{
    public const SLUG = 'bc-theme';
    public const FOLDER = 'bc-ticker';
    /**
     * @var false|array
     */
    public static $settings = [];

    /**
     * @var $instance Init
     */
    private static $instance;

    /**
     * @return $this
     */
    public static function getInstance()
    {
        if (!(self::$instance instanceof self)) {
            self::$instance = new self();
        }

        return self::$instance;
    }

    /**
     * @return void
     */
    private function __construct()
    {
        self::$settings = $this->getSettings();
        if (!self::$settings) {
            return;
        }

        // Blocks
        $this->initBlocks();

        // Patterns
        $this->initPatterns();
    }

    /**
     * @return false|mixed
     */
    public function getSettings()
    {
        if (!file_exists(__DIR__ . '/settings.json')) {
            return false;
        }
        $jsonString = file_get_contents(__DIR__ . '/settings.json');

        $jsonArr= json_decode($jsonString, true);

        return is_array($jsonArr) ? $jsonArr : [];
    }

    /**
     * @return void
     */
    public function initBlocks()
    {
        add_filter('block_categories_all', [$this, 'createBlockCategory']);
        add_action('enqueue_block_editor_assets', [$this, 'blockEditorAssets']);
        add_action('enqueue_block_assets', [$this, 'blockAssets']);
        include_once(__DIR__ . '/src/BlocksLoader.php');
        new BlocksLoader();
    }

    /**
     * @param $categories array
     *
     * @return array
     */
    public function createBlockCategory($categories)
    {
        $categories = array_merge(
            $categories,
            [
                [
                    'title' => 'BC Theme',
                    'slug'  => self::SLUG,
                    'icon'  => 'editor-code',
                ],
            ]
        );

        return $categories;
    }

    /**
     * @return void
     */
    public function blockEditorAssets()
    {
        $asset_file = include(__DIR__ . '/build/index.asset.php');

        wp_enqueue_script(
            self::SLUG,
            WP_PLUGIN_URL . '/' . self::FOLDER . '/build/index.js',
            $asset_file['dependencies'],
            $asset_file['version']
        );

        wp_localize_script(
			self::SLUG,
		'BCAvailablePostTypes',
		[
			'post' => ['category', 'post_tag'],
		]);

        wp_enqueue_style(
            self::SLUG,
            WP_PLUGIN_URL . '/' . self::FOLDER . '/build/index.css'
        );
    }

    /**
     * @return void
     */
    public function blockAssets()
    {
        wp_enqueue_style(
            self::SLUG . '-style',
            WP_PLUGIN_URL . '/' . self::FOLDER . '/build/style-index.css'
        );
    }

    /**
     * @return void
     */
    public function initPatterns()
    {
        add_action('init', [$this, 'createPatternCategory']);
        add_action('init', [$this, 'loadPatterns']);
    }

    /**
     * @return void
     */
    public function createPatternCategory()
    {
        register_block_pattern_category(
            self::SLUG,
            ['label' => 'BC Theme']
        );
    }

    /**
     * @return void
     */
    public function loadPatterns()
    {
        if(empty(self::$settings['patterns'])){
            return;
        }
        foreach (self::$settings['patterns'] as $pattern) {
            $args               = include(__DIR__ . "/patterns/$pattern.php");
            $args['categories'] = [self::SLUG];
            register_block_pattern(self::SLUG . '/' . $pattern, $args);
        }
    }
}
