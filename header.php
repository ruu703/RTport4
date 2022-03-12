<!DOCTYPE html>
    <html lang="ja">
        <head>
        <meta charset="<?php bloginfo('charset'); ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
            <title><?php bloginfo('name'); ?> - <?php wp_title(); ?></title>
            <link href="https://fonts.googleapis.com/css2?family=Poiret+One&display=swap" rel="stylesheet">
            <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100&display=swap" rel="stylesheet">
            <link type="text/css" rel="stylesheet" href="<?php echo get_stylesheet_uri(); ?>">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/konpa/devicon@master/devicon.min.css">
            <?php
            wp_deregister_script('jquery');
            wp_enqueue_script('jquery', 'https://code.jquery.com/jquery-3.3.1.min.js', array(), '3.3.1');
            ?>
            <?php wp_enqueue_script('progressbar.js', '/wp-content/themes/portfolio/js/progressbar.js'); ?>
            <?php wp_enqueue_script('app.js', '/wp-content/themes/portfolio/js/app.js'); ?>
            <!-- wordPress管理画面などから設定した内容が反映される -->
            <?php wp_head(); ?>
        </head>
        <body <?php body_class(); ?>>
    