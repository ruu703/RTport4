<?php

// JS・CSSファイルを読み込む
function add_files() {
	wp_deregister_script('jquery');
	// jQueryの読み込み
    wp_enqueue_script( 'jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js', "", "20160608", false );
	// サイト共通JS
    wp_enqueue_script( 'app.js', get_template_directory_uri(). '/js/app.js', array( 'jquery' ), '20160608', false );
	// サイト共通のCSSの読み込み
    wp_enqueue_style( 'style', get_template_directory_uri() . '/css/style.css', "", '20160608' );
    // プラグインJS(プログレスバー)読み込み
    wp_enqueue_script('progressbar.js', '/wp-content/themes/portfolio/js/progressbar.js');
     
}
add_action('wp_enqueue_scripts', 'add_files');

// カスタムメニュー使用
register_nav_menu('mainmenu', 'メインメニュー');

function pagination($page = '', $range = 2)
{
    $showitems = ($range * 2)+1; // 表示するページ数(5ページを表示)
    
    global $paged; //現在のページ値 worepress側で用意されている変数
    if(empty($paged)) $paged = 1; //デフォルトのページ
    
    if($pages == '')
    {
        global $wp_query; //worepress側で用意されている変数
        $pages = $wp_query->max_num_pages; //全ページ数を取得
        if(!$pages) //全ページ数が空の場合は、１とする
        {
            $pages = 1;
        }
    }
    
    if(1 !=$pages)//全ページが1でない場合はページネーションを表示する
    {
        echo "<div class=\"pagenation\">\n"; // \n -> 改行
        echo "<ul>\n";
        //Prev 現在のページ値が１より大きい場合は表示
        if($paged > 1)echo "<li class=\"prev\"><a href='".get_pagenum_link($paged-1)."'><<</a></li>\n";
        
        for($i=1; $i <= $pages; $i ++)
        {
            if(1 != $pages &&(! ($i >= $paged+$range+1 || $i <= $paged-$range-1) || $pages <= $showitems))
            {
                //三項演算子での条件分岐
                echo ($paged == $i)? "<li class=\"active\">".$i."</i>\n":"<li><a href='".get_pagenum_link($i)."'>".$i."</a></li>\n";
            }
        }
        // Next : 総ページ数より現在のページ値が小さい場合は表示
        if ($paged < $pages) echo "<li class=\"next\"><a href=\"".get_pagenum_link($paged + 1)."\">>></a></li>\n";
        echo "</ul>\n";
        echo "</div>\n";
    }
}

/*==============================
  カスタムフィールド
  ==============================*/

// これから使う関数を登録、第一引数には必ずadmin_menuを指定、第二引数にこれから作る適当な関数名を指定
add_action('admin_menu','add_custom_inputbox');
// データベースへ保存するための関数　第一引数は必ずsave_postを指定、第二引数にこれから作る適当な関数名を指定
add_action('save_post','save_custom_postdata');

//フォームをどこに表示するか設定する関数
function add_custom_inputbox(){

    add_meta_box('top_img_id','トップ画像URL入力欄','custom_area','page','normal');
    add_meta_box('hero_text1','ヒーローヘッダー内テキスト入力欄1','custom_area2','page','normal');
    add_meta_box('hero_text2','ヒーローヘッダー内テキスト入力欄2','custom_area3','page','normal');
    add_meta_box('hero_text3','ヒーローヘッダー内テキスト入力欄3','custom_area4','page','normal');
    add_meta_box('prof_img','プロフィール画像URL入力欄','custom_area5','page','normal');
    add_meta_box('prof_text','プロフィール説明文入力欄','custom_area6','page','normal');
    add_meta_box('welcome_text','welcomeテキスト入力欄','custom_area7','page','normal');
}
  
//管理画面にフォームを表示する関数
function custom_area(){
    global $post;
    // get_post_meta 第一引数には、必ず$post->ID、第二引数にはDBに保存するときのキーを指定、第三引数にはtrueを指定
    
    echo 'トップ画像URL :<input type="text" name="img-top" value="'.get_post_meta($post->ID, 'img-top', true).'">';
}

function custom_area2(){
    global $post;
    // get_post_meta 第一引数には、必ず$post->ID、第二引数にはDBに保存するときのキーを指定、第三引数にはtrueを指定
    echo '<input type="text" name="hero_text1" value="'.get_post_meta($post->ID, 'hero_text1', true).'">';
}

function custom_area3(){
    global $post;
    echo '<input type="text" name="hero_text2" value="'.get_post_meta($post->ID, 'hero_text2', true).'">';
}

function custom_area4(){
    global $post;
    echo '<input type="text" name="hero_text3" value="'.get_post_meta($post->ID, 'hero_text3', true).'">';
}

function custom_area5(){
    global $post;
    // get_post_meta 第一引数には、必ず$post->ID、第二引数にはDBに保存するときのキーを指定、第三引数にはtrueを指定
    
    echo 'プロフィール画像URL :<input type="text" name="prof_img" value="'.get_post_meta($post->ID, 'prof_img', true).'">';
}

function custom_area6(){
    global $post;
    // get_post_meta 第一引数には、必ず$post->ID、第二引数にはDBに保存するときのキーを指定、第三引数にはtrueを指定
    
    echo 'プロフィール説明文 :<textarea cols="100" rows="6" name="prof_text">'.get_post_meta($post->ID, 'prof_text', true).'</textarea>';
}

function custom_area7(){
    global $post;
    // get_post_meta 第一引数には、必ず$post->ID、第二引数にはDBに保存するときのキーを指定、第三引数にはtrueを指定
    
    echo 'welcomeテキスト :<textarea cols="100" rows="6" name="welcome_text">'.get_post_meta($post->ID, 'welcome_text', true).'</textarea>';
}

//フォームに入力された情報をDBへ保存する関数
function save_custom_postdata($post_id){
    
    $img_top = '';
    $hero_text1 = '';
    $hero_text2 = '';
    $hero_text3 = '';
    $prof_img = '';
    $prof_text = '';
    $welcome_text = '';

    // ヒーローヘッダー画像（背景）
    if(isset($_POST['img-top'])){
        $img_top = $_POST['img-top'];
    }
    if($img_top != get_post_meta($post_id, 'img-top',true)){
        update_post_meta($post_id,'img-top',$img_top);
    }elseif($img_top == ''){
        delete_post_meta($post_id,'img-top',get_post_meta($post_id,'img-top',true));
    }

    // ヒーローヘッダー内テキスト1
    if(isset($_POST['hero_text1'])){
        $hero_text1 = $_POST['hero_text1'];
    }
    if($hero_text1 != get_post_meta($post_id, 'hero_text1',true)){
        update_post_meta($post_id,'hero_text1',$hero_text1);
    }elseif($hero_text1 == ''){
        delete_post_meta($post_id,'hero_text1',get_post_meta($post_id,'hero_text1',true));
    }

    // ヒーローヘッダー内テキスト2
    if(isset($_POST['hero_text2'])){
        $hero_text2 = $_POST['hero_text2'];
    }
    if($hero_text2 != get_post_meta($post_id, 'hero_text2',true)){
        update_post_meta($post_id,'hero_text2',$hero_text2);
    }elseif($hero_text2 == ''){
        delete_post_meta($post_id,'hero_text2',get_post_meta($post_id,'hero_text2',true));
    }

    // ヒーローヘッダー内テキスト3
    if(isset($_POST['hero_text3'])){
        $hero_text3 = $_POST['hero_text3'];
    }
    if($hero_text3 != get_post_meta($post_id, 'hero_text3',true)){
        update_post_meta($post_id,'hero_text3',$hero_text3);
    }elseif($hero_text3 == ''){
        delete_post_meta($post_id,'hero_text3',get_post_meta($post_id,'hero_text3',true));
    }

    // プロフィール画像URL入力欄
    if(isset($_POST['prof_img'])){
        $prof_img = $_POST['prof_img'];
    }
    if($prof_img != get_post_meta($post_id, 'prof_img',true)){
        update_post_meta($post_id,'prof_img',$prof_img);
    }elseif($prof_img == ''){
        delete_post_meta($post_id,'prof_img',get_post_meta($post_id,'prof_img',true));
    }

    // プロフィール説明文入力欄
    if(isset($_POST['prof_text'])){
        $prof_text = $_POST['prof_text'];
    }
    if($prof_text != get_post_meta($post_id, 'prof_text',true)){
        update_post_meta($post_id,'prof_text',$prof_text);
    }elseif($prof_text == ''){
        delete_post_meta($post_id,'prof_text',get_post_meta($post_id,'prof_text',true));
    }

    // welcomeテキスト入力欄
    if(isset($_POST['welcome_text'])){
        $welcome_text = $_POST['welcome_text'];
    }
    if($welcome_text != get_post_meta($post_id, 'welcome_text',true)){
        update_post_meta($post_id,'welcome_text',$welcome_text);
    }elseif($welcome_text == ''){
        delete_post_meta($post_id,'welcome_text',get_post_meta($post_id,'welcome_text',true));
    }
    
}

/*==============================
  カスタムウィジェット
  ==============================*/
// ウィジェットエリアを作成する関数がどれなのか登録　第二引数にこれから作る関数名を渡す
add_action('widgets_init', 'my_widgets_area');
// ウィジェットを作成するクラスを登録　create_functionの第二引数の引数にこれから作るクラス名を渡す
add_action('widgets_init', function(){register_widget('my_widgets_item1');});
add_action('widgets_init', function(){register_widget('my_widgets_item2');});

function my_widgets_area(){
    //ウィジェットエリアの作成
    register_sidebar( array(
    'name' => 'SNSボタンエリア', // 管理画面での表示名
    'id' => 'widget_botton',// 管理画面フォームのID名
    'before_widget' => '',
    'after_widget' => ''
    ));
    //スキルウィジェット
    register_sidebar( array(
    'name' => 'スキルエリア', // 管理画面での表示名
    'id' => 'widget_skill',// 管理画面フォームのID名
    'before_widget' => '',
    'after_widget' => ''
    ));
    register_sidebar( array(
    'name' => 'right sidebar',
    'id' => 'my_sidebar',
    'before_widget' => '<div class="sidebar__item">',
    'after_widget' => '</div>',
    'before_title' => '<h2>',
    'after_title' => '</h2>',
    ));
    register_sidebar( array(
    'name' => 'ワークエリア', // 管理画面での表示名
    'id' => 'widget_slider',// 管理画面フォームのID名
    'before_widget' => '<div>',
    'after_widget' => '</div>'
    ));
    register_sidebar( array(
    'name' => 'コンタクトフォームエリア', // 管理画面での表示名
    'id' => 'widget_contact',// 管理画面フォームのID名
    'before_widget' => '',
    'after_widget' => ''
    ));
}

// ウィジェット自体の作成
class my_widgets_item1 extends WP_Widget{
    
    // 初期化
    // function __construct(){
    //     parent::__construct(false, $name = 'スキルウィジェット');
    //     $this->name = $name;
    // }
    function my_widgets_item1(){
        parent::WP_Widget(false, $name = 'SNSボタンウィジェット');
    }
    
    // ウィジェットの入力項目を作成する処理
    function form($instance){
        $name = esc_attr($instance['name']);
        $icon = esc_attr($instance['icon']); // esc_attr -> サニタイズ
        $size = esc_attr($instance['size']);
        $background = esc_attr($instance['background']);
        $url = esc_attr($instance['url']);
    ?>
    
    <!-- 管理画面に表示される入力フォーム -->
    <p>
        <label for="<?php echo $this->get_field_id('name'); ?>">
             <?php echo 'ボタンテキスト'; ?>
        </label>
        <input class="widefat" id="<?php echo $this->get_field_id('name'); ?>" name="<?php echo $this->get_field_name('name'); ?>" type="text" value="<?php echo $name; ?>" />
    </p>
    <p>
        <label for="<?php echo $this->get_field_id('icon'); ?>">
             <?php echo 'アイコン'; ?></br>
             サイトから選んで　<a href="https://devicon.dev/" target="_blank" rel="noopener noreferrer">https://devicon.dev/</a></br>
             devicon-○○○○○○-plain　丸の部分に入る文字列を指定する
        </label>
        <input class="widefat" id="<?php echo $this->get_field_id('icon'); ?>" name="<?php echo $this->get_field_name('icon'); ?>" type="text" value="<?php echo $icon; ?>" />
    </p>
    <p>
        <label for="<?php echo $this->get_field_id('size'); ?>">
             <?php echo 'アイコンサイズ ex: 16px'; ?>
        </label>
        <input class="widefat" id="<?php echo $this->get_field_id('size'); ?>" name="<?php echo $this->get_field_name('size'); ?>" type="text" value="<?php echo $size; ?>" />
    </p>
    <p>
        <label for="<?php echo $this->get_field_id('background'); ?>">
             <?php echo 'ボタン背景色 ex: #454545'; ?>
        </label>
        <input class="widefat" id="<?php echo $this->get_field_id('background'); ?>" name="<?php echo $this->get_field_name('background'); ?>" type="text" value="<?php echo $background; ?>" />
    </p>
    <p>
        <label for="<?php echo $this->get_field_id('url'); ?>">
             <?php echo 'リンク先URL  ex: http://example.com/'; ?>
        </label>
        <input class="widefat" id="<?php echo $this->get_field_id('url'); ?>" name="<?php echo $this->get_field_name('url'); ?>" type="text" value="<?php echo $url; ?>" />
    </p>
    
    <?php
    }
    
    // ウィジェットに入力された情報を保存する処理
    function update($new_instance, $old_instance){
        $instance = $old_instance;
        $instance['name'] = $new_instance['name'];
        $instance['icon'] = $new_instance['icon'];
        $instance['size'] = $new_instance['size']; 
        $instance['background'] = $new_instance['background']; //php,htmlタグを取り除く
        $instance['url'] = $new_instance['url'];
        
        return $instance;
        
    }
    
    // 管理画面から入力されたウィジェットを画面に表示する処理
    // メソッド名は必ずwidgetにする　第一引数にはウィジェットエリア自体の情報が配列の形式で入る（my_widgets_area)
    // の中身 第二引数にはデータベースへ渡ってきた情報が入る
    function widget($args, $instance){
        
        // 配列を変数に展開　配列のキー名がそのまま変数名として使える
        extract($args);
        
        
        //ウィジェットから入力された情報を取得
        // apply_filters -> 単純に変数に格納するだけでなく、間に処理を挟むことができる
        $name = apply_filters('widget_skill', $instance['name']);
        $icon = apply_filters('widget_icon', $instance['icon']);
        $size = apply_filters('widget_size', $instance['size']);
        $background = apply_filters('widget_background', $instance['background']);
        $url = apply_filters('widget_url', $instance['url']);
        
        //ウィジェットから入力された情報がある場合、htmlを表示する
        if($name && $background && $url){
    ?>
     
     <a href="<?php echo $url; ?>" target="_blank" rel="noopener noreferrer">
        <button class="p-prof__btn c-btn" style="background:<?php echo $background; ?>;font-size: <?php echo $size? $size : '14px' ; ?>;">
        <?php if(!empty($icon)){ ?>
        <i class="devicon-<?php echo $icon; ?>-plain"></i>
        <?php } ?>
            <p class="p-prof__btntext"><?php echo $name; ?></p>
        </button>
    </a>
    
    <?php  
        }

    }
  }


  // ウィジェット自体の作成
class my_widgets_item2 extends WP_Widget{
    
    // 初期化
    // function __construct(){
    //     parent::__construct(false, $name = 'スキルウィジェット');
    //     $this->name = $name;
    // }
    function my_widgets_item2(){
        parent::WP_Widget(false, $name = 'パネルウィジェット');
    }
    
    // ウィジェットの入力項目を作成する処理
    function form($instance){
        $url = esc_attr($instance['url']);
        $img = esc_attr($instance['img']);
        $skill = esc_attr($instance['skill']); // esc_attr -> サニタイズ
        
    ?>
    
    <p>
        <label for="<?php echo $this->get_field_id('url'); ?>">
             <?php echo 'URL'; ?>
        </label>
        <input class="widefat" id="<?php echo $this->get_field_id('url'); ?>" name="<?php echo $this->get_field_name('url'); ?>" type="text" value="<?php echo $url; ?>" />
    </p>
    <p>
        <label for="<?php echo $this->get_field_id('img'); ?>">
             <?php echo 'サムネイル画像'; ?>
        </label>
        <input class="widefat" id="<?php echo $this->get_field_id('img'); ?>" name="<?php echo $this->get_field_name('img'); ?>" type="text" value="<?php echo $img; ?>" />
    </p>
    <p>
        <label for="<?php echo $this->get_field_id('skill'); ?>">
             <?php echo 'スキル'; ?>
        </label>
        <input class="widefat" id="<?php echo $this->get_field_id('skill'); ?>" name="<?php echo $this->get_field_name('skill'); ?>" type="text" value="<?php echo $skill; ?>" />
    </p>
    
    <?php
    }
    
    // ウィジェットに入力された情報を保存する処理
    function update($new_instance, $old_instance){
        $instance = $old_instance;
        $instance['url'] = $new_instance['url'];
        $instance['img'] = $new_instance['img']; //php,htmlタグを取り除く
        $instance['skill'] = $new_instance['skill'];

        return $instance;
        
    }
    
    // 管理画面から入力されたウィジェットを画面に表示する処理
    // メソッド名は必ずwidgetにする　第一引数にはウィジェットエリア自体の情報が配列の形式で入る（my_widgets_area)
    // の中身 第二引数にはデータベースへ渡ってきた情報が入る
    function widget($args, $instance){
        
        // 配列を変数に展開　配列のキー名がそのまま変数名として使える
        extract($args);
        
        
        //ウィジェットから入力された情報を取得
        // apply_filters -> 単純に変数に格納するだけでなく、間に処理を挟むことができる
        $url = apply_filters('widget_slider', $instance['url']);
        $img = apply_filters('widget_slider', $instance['img']);
        $skill = apply_filters('widget_slider', $instance['skill']);
        
        //ウィジェットから入力された情報がある場合、htmlを表示する
        if($url && $img && $skill){
    ?>
        <div class="p-panel">
            <a href="<?php echo $url; ?>">
                <div class="p-panel__tr">
                    <img src="<?php echo $img; ?>" class="p-panel__img">
                </div>
            </a>
            <p class="p-panel__name"><?php echo $skill; ?></p>
        </div>
   
    <?php

      }
    }
  }
