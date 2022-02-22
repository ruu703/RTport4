<?php
/*
Template Name: All Archive 〜記事一覧〜
*/
?>

<!-- ヘッダー -->
<?php get_header(); ?>
       
       <!-- メニュー -->
       <?php get_template_part('content', 'menu'); ?>
       
		<div id="main">

			<!-- blog_list -->
			<section id="" class="container u-down-to-top">
				<h2 class="container__title blog-center">BLOG</h2>
					<div class="container-mg container-mg--blog">
					<div id="content" class="article">
						<div class="article-wrap">
							<!-- 記事のループ -->
							<?php
							$paged = (int) get_query_var('paged');
							$args = array(
							'posts_per_page' => 6,
							'paged' => $paged,
							'orderby' => 'post_date',
							'order' => 'DESC',
							'post_type' => 'post',
							'post_status' => 'publish'
							);
							$the_query = new WP_Query($args);
							if ( $the_query->have_posts() ) :
							while ( $the_query->have_posts() ) : $the_query->the_post();
							?>
							<article class="article-item">
								<h2 class="article-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
								<h3 style="font-size:80%;"><?php the_author_nickname(); ?>　<?php the_time("Y/m/j"); ?>　<?php $category = get_the_category(); $cat_name = $category[0]->cat_name; echo 'カテゴリー : '.$cat_name; ?></h3>
								<p class="article-body">
								<?php the_content(); ?>
								</p>
							</article>
							<?php endwhile; endif; ?>
						
							<!--ページネーション -->
							<div class="article-pagenation">
								<?php
								if ($the_query->max_num_pages > 1) {
								echo paginate_links(array(
								'base' => get_pagenum_link(1) . '%_%',
								'format' => 'page/%#%/',
								'current' => max(1, $paged),
								'total' => $the_query->max_num_pages
								));
								}
								?>
							</div>
						<?php wp_reset_postdata(); ?>
						</div>
					</div>
					<!-- サイドバー  -->
					<!-- <div class="sidebar-wrap"> -->
					<?php get_sidebar(); ?>
					<!-- </div> -->
					</div>
            </section>
		</div>
		
		<?php get_footer(); ?>