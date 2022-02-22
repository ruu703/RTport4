<!-- ヘッダー -->
<?php get_header(); ?>
       
       <!-- メニュー -->
       <?php get_template_part('content', 'menu'); ?>
		<div id="main">

			<!-- blog_list -->
			<section id="blog_list" class="container u-down-to-top">
				<h1 class="container__title blog-center">BLOG</h1>
				<div class="container-mg container-mg--blog">
				<div id="content" class="article">
				
				<?php if (have_posts()) : ?>
					<?php while (have_posts()) : the_post(); ?>
                        
                        <article class="article-item">
							<h2 class="article-title">
								<?php the_title(); ?>
							</h2>
							<h3 style="font-size:80%;"><?php the_author_nickname(); ?>　<?php the_time("Y/m/j"); ?>　
							<?php $category = get_the_category(); $cat_name = $category[0]->cat_name; echo 'カテゴリー : '.$cat_name;?>
							</h3>
							<p>
								<?php the_content(); ?>
							</p>
							
					   </article>

						<?php endwhile; ?>
				
						<div class="article-item">
					   <!-- Comments -->
					   <?php comments_template(); ?>
					   </div>
				
				<?php else : ?>
				
					<h2 class="ontainer__title">記事が見つかりませんでした。</h2>
					<p>検索で見つかるかもしれません。</p><br />
					<?php get_search_form(); ?>
				
				<?php endif; ?>

				<!-- ページネーション  -->
				<div class="article-pagenation">
						<a class="prev"><?php previous_post_link('%link', '<< 前へ'); ?></li>
						<a class="next u-mg-left-10"><?php next_post_link('%link', '次へ >>'); ?></li>
				</div>
				  

				</div>
				<!-- サイドバー  -->
				<?php get_sidebar(); ?>
				</div>
				
			</section>
		</div>
		
		<?php get_footer(); ?>