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
			<section id="" class="container u-down-to-top">
				<h2 class="container__title blog-center">BLOG</h2>
				<div id="content" class="article">
				<!-- 記事のループ -->
				<?php get_template_part('loop'); ?>
				<?php if(function_exists("pagination")) pagination($wp_query->max_num_pages); ?>
				</div>
                <!-- サイドバー  -->
				<?php get_sidebar(); ?>
				
            </section>
		</div>
		
		<?php get_footer(); ?>