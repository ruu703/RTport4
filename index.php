<?php
/*
Template Name: Top 〜トップページ〜
*/
?>


<!-- ヘッダー -->
<?php get_header(); ?>
       
       <!-- メニュー -->
       <?php get_template_part('content', 'menu'); ?>
       
       <?php
      //現在の記事の投稿者情報取得
      $author = get_userdata($post->post_author);
      //投稿者のニックネーム取得
      $name = $author->display_name;
      ?>
      
       <main>
          <section class="p-hero"  style="background-image: url(<?php echo get_post_meta($post->ID,'img-top',true);?>);">
              <h2 class="p-hero__title">
                  <span class="p-hero__item p-hero__item--anime1">
                    <?php echo get_post_meta($post->ID, 'hero_text1', true); ?>
                  </span>
                  <span class="p-hero__item p-hero__item--anime2">
                    <?php  echo get_post_meta($post->ID, 'hero_text2', true); ?>
                  </span>
                  <span class="p-hero__item p-hero__item--anime3">
                    <?php
                      //ニックネーム出力
                      // echo $author->display_name;
                      // ヒーロヘッダーテキスト出力
                      echo get_post_meta($post->ID, 'hero_text3', true);
                    ?>
                  </span>
              </h2>
          </section>

          <section id="WELCOME" class="container container--top u-down-to-top u-down-to-top">
           <h2 class="container__title">WELCOME</h2>
            <div class="container__wrap">
                 <p>
                  <?php echo get_post_meta($post->ID, 'welcome_text', true); ?>
                 </p>
            </div>   
          </section>

          <section id="ABOUT" class="container container--color u-down-to-top u-anchor">
            <h2 class="container__title  container__title--color">ABOUT</h2>
            <div class="container__wrap">
             <div class="p-prof">
                <div class="p-prof__imgwrap">
                  <img src="<?php echo get_post_meta($post->ID,'prof_img',true);?>" class="p-prof__img">
                </div>
                <div class="p-prof__text">
                 <div>
                    <div>
                      <p><?php echo get_post_meta($post->ID,'prof_text',true);?></p>
                  　</div>
                    <div class="p-prof__sns">
                      <?php dynamic_sidebar( 'SNSボタンエリア' ); ?>
                  　</div>
                 </div>
                </div>
             </div>
            </div> 
          </section>

          <section id="WORKS" class="container u-down-to-top u-anchor">
           <h2 class="container__title">WORKS</h2>
            <div class="container__wrap">
              <div class="container__item">
                  <?php dynamic_sidebar( 'ワークエリア' ); ?>
              </div>
            </div>   
          </section>

          <section id="SKILL" class="container container--color u-down-to-top u-anchor js-progressbar-target">
             <h2 class="container__title  container__title--color">SKILL</h2>
              <div class="container__wrap container__wrap--skill u-display">
                <?php dynamic_sidebar( 'スキルエリア' ); ?>
              </div>
          </section>
          
          <section id="CONTACT" class="container u-down-to-top u-anchor">
             <h2 class="container__title">CONTACT</h2> 
             <div class="container__wrap container__wrap--contact">
              <?php dynamic_sidebar( 'コンタクトフォームエリア' ); ?>
             </div>
          </section>
       </main>

<?php get_footer(); ?>