<?php
/*
Template Name: Custom 〜カスタム固定ページ〜
*/
?>

<!-- ヘッダー -->
<?php get_header(); ?>
       
       <!-- メニュー -->
       <?php get_template_part('content', 'menu'); ?>
       
       <main>
        　<section id="WORKS" class="container container--top u-down-to-top ">
           <h2 class="container__title"><?php echo get_the_title(); ?></h2>
            <div class="container__wrap">
              <?php if (have_posts()) : // WordPress ループ
                    while (have_posts()) : the_post(); // くり返し処理開始　?>
                    <!-- 固定ページのIDを出力 -->　　<!-- 固定ページごとにclass属性を設定できる -->
                    <div id="portfolio-<?php the_ID(); ?>" <?php post_class(); ?>>
                        <!-- 投稿した固定ページ本文 -->
                        <?php the_content(); ?>
                    </div>
                    <?php endwhile; //繰り返し処理終了
                    else : // ここから記事が見つからなかった場合の処理 ?>
                    <div class="post">
                        <h2>記事はありません</h2>
                        <p>お探しのページは見つかりませんでした。</p>
                    </div>
                    <?php endif; // Wordpress ループ終了 ?>
            </div>   
          </section>
       </main>

<?php get_footer(); ?>