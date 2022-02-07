<!-- ヘッダー -->
<?php get_header(); ?>
       
       <!-- メニュー -->
       <?php get_template_part('content', 'menu'); ?>
       
       <main>
         <!-- トップバナー -->
         <img src="<?php echo get_post_meta($post->ID, 'img-top',true); ?> id="top-banner">
          <section class="p-hero">
              <h2 class="p-hero__title">
                  <span class="p-hero__shadow">WELCOME</span>
                  <span class="p-hero__shadow">TO</span>
                  <span class="p-hero__shadow">NAME'S SITE<span class="p-hero__anime">!</span></span>
              </h2>
          </section>
          <section id="WORKS" class="container container--top u-down-to-top ">
           <h2 class="container__title">WORKS</h2>
            <div class="container-mg works container__pg">
              <div class="p-slider">
                 <i class="fas fa-angle-left p-slider__nav js-slide-prev"></i>
                 <i class="fas fa-angle-right p-slider__nav js-slide-next"></i>
                 <ul class="p-slider__container">
                     <li class="p-slider__item">
                     <div class="p-slider__tr"><img src="img/2004885_s.jpg" class="p-slider__img">
                     </div>
                     <span class="p-slider__name">作品名</span></li>
                     <li class="p-slider__item"><div class="p-slider__tr"><img src="/wp-content/themes/portfolio/img/2004885_s.jpg" class="img/p-slider__img">

                     </div>
                     <h3 class="p-slider__name">作品名</h3></li>
                     <li class="p-slider__item"><div class="p-slider__tr"><img src="img/2004885_s.jpg" class="p-slider__img">
                     </div>
                     <h3 class="p-slider__name">作品名</h3></li>
                     <li class="p-slider__item"><div class="p-slider__tr"><img src="img/2004885_s.jpg" class="p-slider__img">
                     </div>
                     <h3 class="p-slider__name">作品名</h3></li>
                     <li class="p-slider__item"><div class="p-slider__tr"><img src="img/2004885_s.jpg" class="p-slider__img">
                     </div>
                     <h3 class="p-slider__name">作品名</h3></li>
                     <li class="p-slider__item"><div class="p-slider__tr"><img src="img/2004885_s.jpg" class="p-slider__img">
                     </div>
                     <h3 class="p-slider__name">作品名</h3></li>
                     <li class="p-slider__item"><div class="p-slider__tr"><img src="img/2004885_s.jpg" class="p-slider__img">
                     </div>
                     <h3 class="p-slider__name">作品名</h3></li>
                 </ul>
              </div>
            </div>   
          </section>
          <section id="ABOUT" class="container u-bg u-down-to-top">
            <h2 class="container__title  u-title-col">ABOUT</h2>
            <div class="container-mg">
             <div class="container__group u-prof-flex">
                <div class="container__prof"><img src="img/3666229_s.jpg" class="u-prof-img"></div>
                <div class="u-mg">
                 <div>
                     <p>
                　text text text text text text text text text text text text text text text
                　text text text text text text text text text text text text text text text
                　アイウエオ　かきくけこ
                　    </p>
                 </div>
                　<div class="p-prof-btn">
                　<button class="c-input c-btn c-btn-twitter">
                　<i class="devicon-twitter-plain"></i>
                　<p>Twitter</p>
                　</button>
                　<button class="c-input c-btn c-btn-facebook">
                　<i class="devicon-facebook-plain"></i>
                　<p>Facebook</p>
                　</button>
                　</div>
                </div>
             </div>
            </div> 
          </section>
          <section id="SKILL" class="container u-down-to-top">
             <h2 class="container__title">SKILL</h2>
              <div class="container-mg u-devicon">
               <i class="u-devicon__container devicon-css3-plain-wordmark colored"></i>
               <i class="u-devicon__container devicon-html5-plain-wordmark colored"></i>
               <i class="u-devicon__container devicon-javascript-plain colored"></i>
               <i class="u-devicon__container devicon-bootstrap-plain-wordmark colored"></i>
               <i class="u-devicon__container devicon-nodejs-plain-wordmark colored"></i>
               <i class="u-devicon__container devicon-php-plain colored"></i>
               <i class="u-devicon__container devicon-sass-original colored"></i>
               
              </div>
          </section>
          <section id="BLOG" class="container u-bg u-down-to-top">
             <h2 class="container__title  u-title-col">BLOG</h2> 
             <div class="container-mg">
             </div>   
          </section>
          <section id="CONTACT" class="container u-down-to-top">
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