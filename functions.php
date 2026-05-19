<?php
// Exit if accessed directly
if ( !defined( 'ABSPATH' ) ) exit;

// BEGIN ENQUEUE PARENT ACTION
// AUTO GENERATED - Do not modify or remove comment markers above or below:
if ( !function_exists( 'chld_thm_cfg_locale_css' ) ):
    function chld_thm_cfg_locale_css( $uri ){
        if ( empty( $uri ) && is_rtl() && file_exists( get_template_directory() . '/rtl.css' ) )
            $uri = get_template_directory_uri() . '/rtl.css';
        return $uri;
    }
endif;
add_filter( 'locale_stylesheet_uri', 'chld_thm_cfg_locale_css' );

if ( !function_exists( 'child_theme_enqueue_assets' ) ):
    function child_theme_enqueue_assets() {
        wp_enqueue_style( 'chabad-theme', trailingslashit( get_stylesheet_directory_uri() ) . 'chabad-theme.css', array( 'hello-elementor','hello-elementor-theme-style','hello-elementor-header-footer' ) );
        wp_enqueue_style( 'homepage-event-list', get_stylesheet_directory_uri() . '/homepage-event-list.css', array( 'hello-elementor','hello-elementor-theme-style' ) );
        wp_enqueue_style( 'calendar-and-mec', get_stylesheet_directory_uri() . '/calendar-and-mec.css', array( 'hello-elementor','hello-elementor-theme-style' ) );
        wp_enqueue_script( 'mec-events-js', get_stylesheet_directory_uri() . '/mec-events.js', array( 'jquery' ), '1.0', true );
    }
endif;
add_action( 'wp_enqueue_scripts', 'child_theme_enqueue_assets', 10 );
// END ENQUEUE PARENT ACTION