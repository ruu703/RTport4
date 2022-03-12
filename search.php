<!-- ヘッダー -->
<?php get_header(); ?>
       
       <!-- メニュー -->
       <?php get_template_part('content', 'menu'); ?>
		<div id="main">
			<!-- blog_list -->
			<section id="blog_list" class="container u-down-to-top">
				<h1 class="container__title blog-center">BLOG | search</h1>
				<div class="container__wrap container__wrap--blog">
					<div id="content" class="p-article">
						<!-- 記事のループ -->
						<?php get_template_part('loop'); ?>
						<?php if (function_exists("pagenation")) pagination($additional_loop->max_pages); ?>
					</div>
					<!-- サイドバー -->
					<?php get_sidebar(); ?>
				</div>	
            </section>
		</div>
		<?php get_footer(); ?>