$(function(){
    
    /* ハンバーガーメニュー */
    $('.js-toggle-sp-menu').on('click', function(){
        $(this).toggleClass('is-active');
        $('.js-toggle-sp-menu-target').toggleClass('is-active');
    })
    $('.js-toggle-sp-menu-target').on('click', function(){
        $(this).toggleClass('is-active');
        $('.js-toggle-sp-menu').toggleClass('is-active');
    })

    /* スクロールで要素がフワッと出現 */
    $(window).scroll(function (){
        $('.u-down-to-top').each(function(){
            let elemPos = $(this).offset().top;
            let scroll = $(window).scrollTop();
            let windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 500){
                $(this).addClass('scrollin');
            }
        });
    });

    /* ナビゲーションメニュー浮遊 */
    /*  
        offset()->要素の位置を座標で取得
        scrollTop()-> スクロール量
    */
    
    // ハンバーガーメニュー
     const navPosSp = $('.js-header-menu-target').offset().top;
     const _window = $(window);
    
    $(window).on('scroll', function(){
         if($(this).scrollTop() > navPosSp){
            $('.js-header-menu-target').addClass('float-active-sp');
        }else{
            $('.js-header-menu-target').removeClass('float-active-sp');
        }
    });
    _window.trigger('scroll');

     const navPos = $('.js-toggle-sp-menu-target').offset().top;
    //  const _window = $(window);
    
    // PC版ナビゲーションメニュー
    $(window).on('scroll', function(){
         if($(this).scrollTop() > navPos){
            $('.js-toggle-sp-menu-target').addClass('float-active');
        }else{
            $('.js-toggle-sp-menu-target').removeClass('float-active');
        }
    });
    _window.trigger('scroll');


    /* スキルメニューのプログレスバー */
    if($('.js-progressbar-target').length){ // topページのみで発火させる

     const skill = $('.js-progressbar-target').offset().top;
    //  const _window = $(window);
    
    $(window).on('scroll', function(){
            if($(this).scrollTop() > skill - 350){
            $('.js-progressbar-target').children('.container__wrap').removeClass('u-display'); 
        }
    });
    _window.trigger('scroll');
    }

});