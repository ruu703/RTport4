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
                  <span class="p-hero__shadow">
                    <?php echo get_post_meta($post->ID, 'hero_text1', true); ?>
                  </span>
                  <span class="p-hero__shadow">
                    <?php  echo get_post_meta($post->ID, 'hero_text2', true); ?>
                  </span>
                  <span class="p-hero__shadow">
                    <?php
                      //ニックネーム出力
                      // echo $author->display_name;
                      // ヒーロヘッダーテキスト出力
                      echo get_post_meta($post->ID, 'hero_text3', true);
                    ?>
                  </span>
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
            </div> 
          </section>

          <section id="WORKS" class="container u-down-to-top u-anchor">
           <h2 class="container__title">WORKS</h2>
            <div class="container-mg works container__pg">
              <div style="display: flex; flex-wrap: wrap;margin-right: -5%;">
                 
                  <?php dynamic_sidebar( 'スライダーエリア' ); ?>
                 
              </div>
            </div>   
          </section>

          <section id="SKILL" class="container u-bg u-down-to-top u-anchor js-progressbar-target">
             <h2 class="container__title  u-title-col">SKILL</h2>
              <div class="container-mg container-mg--skill u-display">
              <?php dynamic_sidebar( 'スキルエリア' ); ?>

              <!-- <label>
              HTML
              <label>
              <progress value="30" max="100">30%</progress> -->
              <!-- <div id="container" class="c-progrresbar"></div> -->
              
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
                     <p>
                       <?php if(!empty($complete_msg)) echo $complete_msg; ?>
                     </p>
                 <form class="p-form" method="post" action="home.php" action="">
                     <input class="c-input c-input--t" type="text" name="name" placeholder="氏名">
                     <p>
                       <?php if(!empty($err_msg['name'])) echo sanitize($name); ?>
                     </p>
                     <input class="c-input c-input--m" type="email" name="email" placeholder="メールアドレス">
                     <p>
                       <?php if(!empty($err_msg['email'])) echo sanitize($email); ?>
                     </p>
                     <textarea class="c-input c-input--tx js-form-validate" rows="5" name="msg" placeholder="お問い合わせ内容"> 
                      <?php if(!empty($msg)) echo sanitize($msg); ?> 
                     </textarea>
                     <p>
                       <?php if(!empty($err_msg['msg'])) echo sanitize($msg); ?>
                     </p>
                     <button class="c-input c-input--sb c-btn c-btn-submit js-disabled-submit" disabled="disabled">送 信</button> 
                 </form>
            </div>
          </section>
       </main>

<?php get_footer(); ?>