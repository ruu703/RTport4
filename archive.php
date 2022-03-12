<?php
/*
Template Name: Archive 〜アーカイブ〜
*/
?>

<!-- ヘッダー -->
<?php get_header(); ?>
       
       <!-- メニュー -->
       <?php get_template_part('content', 'menu'); ?>
       
		<div id="main">

			<!-- blog_list -->
			<section id="blog_list" class="container u-down-to-top">
				<h2 class="container__title blog-center">BLOG | archive</h2>
				<div class="container__wrap container__wrap--blog">
					<div id="content" class="p-article">
					<!-- 記事のループ -->
					<?php get_template_part('loop'); ?>
					<?php
						if (function_exists("pagination")) {
						echo paginate_links(array(
						'base' => get_pagenum_link(1) . '%_%',
						'format' => 'page/%#%/',
						'current' => max(1, $paged),
						'total' => $wp_query->max_num_pages
						));
						}
						?>
					</div>
					<!-- サイドバー  -->
					<?php get_sidebar(); ?>
				</div>
            </section>
		</div>
		
	<?php get_footer(); ?>