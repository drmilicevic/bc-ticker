<?php

namespace BCBlocksAndPatterns;

trait SingletonTrait
{
    /**
     * @var SingletonTrait
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
}
