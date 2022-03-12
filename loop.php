<?php 
if (have_posts()) : 
    while (have_posts()) : the_post(); // くり返し処理開始　?>
    <article class="p-article__item">
        <h2 class="p-article__title">
            <a href="<?php the_permalink(); ?>">
                <?php the_title(); ?>
            </a>
        </h2>
        <h3 class="p-article__date">
            <?php the_author_nickname(); ?>　
            <?php the_time("Y/m/j"); ?>　
            <?php single_cat_title('カテゴリー： '); ?>
        </h3>
        <p class="article-body">
            <?php the_content(); ?>
        </p>
    </article>
<?php endwhile; //繰り返し処理終了
      endif; // Wordpress ループ終了 ?>