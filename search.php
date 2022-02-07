<!-- ヘッダー -->
<?php get_header(); ?>
       
       <!-- メニュー -->
       <?php get_template_part('content', 'menu'); ?>
       
		<div id="main">

			<!-- blog_list -->
			<section id="blog_list" class="site-width">
				<h1 class="title">BLOG | search</h1>
				<div id="content" class="article">
				<!-- 記事のループ -->
				<?php get_template_part('loop'); ?>
					
					<?php if (function_exists("pagenation")) pagination($additional_loop->max_pages); ?>
				</div>
				<!-- サイドバー -->
				<?php get_sidebar(); ?>
					
            </section>

		</div>
		
		<?php get_footer(); ?>