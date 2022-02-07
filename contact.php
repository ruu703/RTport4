 <?php
/*
Template Name: Contact 〜コンタクトページ〜
*/
?>
<!-- ヘッダー -->
<?php get_header(); ?>
       
       <!-- メニュー -->
       <?php get_template_part('content', 'menu'); ?>
       
       <main>
        <section id="CONTACT" class="container container--top u-down-to-top">
            <div class="container-mg--fix">
             <h2 class="container__title--sub">CONTACT</h2> 
             <div class="container-mg">
                 <form class="p-form">
                     <input class="c-input c-input--t" type="text" placeholder="氏名">
                     <input class="c-input c-input--m" type="email" placeholder="メールアドレス">
                     <textarea class="c-input c-input--tx js-form-validate" rows="5" placeholder="お問い合わせ内容">  
                     </textarea>
                     <button class="c-input c-input--sb c-btn c-btn-submit js-disabled-submit" disabled="disabled">送 信</button> 
                 </form>
            </div>
           </div>
          </section>
          
         </main>

<?php get_footer(); ?>