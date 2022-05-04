<header class="header js-header-menu-target">
    <div class="p-menu-trigger  js-toggle-sp-menu">
        <span></span>
        <span></span>
        <span></span>
    </div>
    <nav class="p-nav-menu js-toggle-sp-menu-target">
           
        <?php wp_nav_menu( array(
        'theme_location'=>'mainmenu',
        // メニューを囲いたいタグがあれば指定する。
        'container'     =>'',
        // 生成されるメニューのタグにクラス属性をつけることができる
        'menu_class'    =>'test-class',
        'items_wrap'    =>'<ul>%3$s</ul>'));
        ?>

    </nav>
</header>