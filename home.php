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
                  <!-- <span class="p-hero__shadow">WELCOME</span>
                  <span class="p-hero__shadow">TO</span> -->
                  <span class="p-hero__shadow p-hero__anime">
                    <?php
                      //ニックネーム出力
                      // echo $author->display_name;
                      // ヒーロヘッダーテキスト出力
                      echo get_post_meta($post->ID, 'hero_text', true);
                    ?>
                    <!-- <span class="p-hero__anime">!</span></span> -->
              </h2>
          </section>

          <section id="WELCOME" class="container container--top u-down-to-top u-down-to-top">
           <h2 class="container__title">WELCOME</h2>
            <div class="container-mg container__pg">
                 <p>
                   ポートフォリオサイトをご覧いただき有難うございます。
                 </p>
            </div>   
          </section>

          <section id="ABOUT" class="container u-bg u-down-to-top u-anchor">
            <h2 class="container__title  u-title-col">ABOUT</h2>
            <div class="container-mg">
             <div class="container__group u-prof-flex">
                <!-- <div class="container__prof p-prof__img"><img src="<?php echo get_template_directory_uri().'/img/3666229_s.jpg';?>" class="u-prof-img"></div> -->
                <div class="container__prof p-prof__img"><img src="<?php echo get_post_meta($post->ID,'prof_img',true);?>" class="u-prof-img"></div>
                <div class="p-prof__text">
                 <div>
                    <p><?php echo get_post_meta($post->ID,'prof_text',true);?></p>
                 </div>
                　<div class="p-prof__btn">
                　<button class="c-btn c-btn-twitter">
                　<i class="devicon-twitter-plain"></i>
                　<p>Twitter</p>
                　</button>
                　<button class="c-btn c-btn-facebook">
                　<i class="devicon-facebook-plain"></i>
                　<p>Facebook</p>
                　</button>
                　</div>
                </div>
             </div>
            </div> 
          </section>

          <section id="WORKS" class="container u-down-to-top u-anchor">
           <h2 class="container__title">WORKS</h2>
            <div class="container-mg works container__pg">
              <div class="p-slider">
                 <i class="fas fa-angle-left p-slider__nav js-slide-prev"></i>
                 <i class="fas fa-angle-right p-slider__nav js-slide-next"></i>
                 <ul class="p-slider__container">
                  <?php dynamic_sidebar( 'スライダーエリア' ); ?>
                 </ul>
              </div>

              
            </div>   
          </section>

          <section id="SKILL" class="container u-bg u-down-to-top u-anchor">
             <h2 class="container__title  u-title-col">SKILL</h2>
              <div class="container-mg u-devicon">
              <?php dynamic_sidebar( 'スキルエリア' ); ?>
              
               <!--
               <i class="u-devicon__container devicon-css3-plain-wordmark colored"></i>
               <i class="u-devicon__container devicon-html5-plain-wordmark colored"></i>
               <i class="u-devicon__container devicon-javascript-plain colored"></i>
               <i class="u-devicon__container devicon-bootstrap-plain-wordmark colored"></i>
               <i class="u-devicon__container devicon-nodejs-plain-wordmark colored"></i>
               <i class="u-devicon__container devicon-php-plain colored"></i>
               <i class="u-devicon__container devicon-sass-original colored"></i>
               -->
               
              </div>
          </section>
          <!-- <section id="BLOG" class="container u-bg u-down-to-top">
             <h2 class="container__title  u-title-col">BLOG</h2> 
             <div class="container-mg">
             </div>   
          </section> -->
          <section id="CONTACT" class="container u-down-to-top u-anchor">
             <h2 class="container__title">CONTACT</h2> 
             <div class="container-mg">
                 <form class="p-form">
                     <input class="c-input c-input--t" type="text" placeholder="氏名">
                     <input class="c-input c-input--m" type="email" placeholder="メールアドレス">
                     <textarea class="c-input c-input--tx js-form-validate" rows="5" placeholder="お問い合わせ内容">  
                     </textarea>
                     <button class="c-input c-input--sb c-btn c-btn-submit js-disabled-submit" disabled="disabled">送 信</button> 
                 </form>
            </div>
          </section>
       </main>

<?php get_footer(); ?>