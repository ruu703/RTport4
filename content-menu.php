<header class="header js-header-menu-target">
    <!-- <h1 class="u-title"><a href="<?php echo home_url(); ?>"><?php bloginfo('name'); ?></a></h1> -->
        <div class="p-menu-trigger  js-toggle-sp-menu">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <nav class="p-nav-menu js-toggle-sp-menu-target">
           
            <?php wp_nav_menu( array(
            'theme_location'=>'mainmenu',
            // メニューを囲いたいタグがあれば指定する。
             //今回はベタ書きでnavタグがすでにあるので指定しない
            'container'     =>'',
            // 生成されるメニューのタグにクラス属性をつけることができる
            'menu_class'    =>'test-class',
            // お決まりの書き方
            'items_wrap'    =>'<ul>%3$s</ul>'));
            ?>

         </nav>
       </header>