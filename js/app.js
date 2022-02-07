$(function(){
    $('.js-form-validate').on('keyup',function(){

        if($(this).val()){
            $('.js-disabled-submit').prop('disabled', false);
        }else{
            $('.js-disabled-submit').prop('disabled', true);
        }
    });
    
    /* スライダー */
    var slider = (function(){
        var currentItemNum = 3;
        var $sliderContainer = $('.p-slider__container');
        var slideItemNum = $('.p-slider__item').length;
        var slideItemWidth =  $('.p-slider__item').innerWidth();
        var slideContainerWidth = slideItemWidth * slideItemNum;
        var DURATION = 500;

        return{
            slidePrev: function(){
                if(currentItemNum > 3){
                    $sliderContainer.animate({left: '+=' +slideItemWidth+ 'px'}, DURATION);
                    currentItemNum--;
                    $('.js-slide-next').attr('style', 'opacity: 1');
                }
                if(currentItemNum <= 3){
                    $('.js-slide-prev').attr('style', 'opacity: 0');
                }
            },
            slideNext: function(){
                if(currentItemNum < slideItemNum){
                    $sliderContainer.animate({left: '-=' +slideItemWidth+ 'px'}, DURATION);
                    currentItemNum++;
                    $('.js-slide-prev').attr('style', 'opacity: 1');
                }
                if(currentItemNum = slideItemNum){
                    $('.js-slide-next').attr('style', 'opacity: 0');
                }
            },
            init: function(){
                $sliderContainer.attr('style', 'width:' +slideContainerWidth+ 'px');
                // スライダーアイテムが４つ以上ある場合に右側の矢印を表示
                if(slideItemNum > 3){
                    $('.js-slide-next').attr('style', 'opacity: 1');
                }
                var that = this;
                $('.js-slide-prev').on('click', function(){
                    that.slidePrev();
                });
                $('.js-slide-next').on('click', function(){
                    that.slideNext();
                });
            }
        }
    
    })();
   
    
    slider.init();
    
    $('.js-toggle-sp-menu').on('click', function(){
        $(this).toggleClass('is-active');
        $('.js-toggle-sp-menu-target').toggleClass('is-active');
    })
    $('.js-toggle-sp-menu-target').on('click', function(){
        $(this).toggleClass('is-active');
        $('.js-toggle-sp-menu').toggleClass('is-active');
    })
    /* 要素がフワッと */
    $(window).scroll(function (){
        $('.u-down-to-top').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 350){
                $(this).addClass('scrollin');
            }
        });
    });
    /* メニュー浮遊 */
    /*  
        offset()->要素の位置を座標で取得
        outerHeight()-> 要素の高さ（ボーダー外側）を取得
        scrollTop()-> スクロール量
    */

    
     var navPosSp = $('.js-header-menu-target').offset().top;
     var _window = $(window);
    
    $(window).on('scroll', function(){
         if($(this).scrollTop() > navPosSp){
            
            $('.js-header-menu-target').addClass('float-active-mp');
        }else{
            
            $('.js-header-menu-target').removeClass('float-active-mp');
        }
    });
    _window.trigger('scroll');
    
     var navPos = $('.js-toggle-sp-menu-target').offset().top;
     var _window = $(window);
    
    $(window).on('scroll', function(){
         if($(this).scrollTop() > navPos){
            $('.js-toggle-sp-menu-target').addClass('float-active');
        }else{
            $('.js-toggle-sp-menu-target').removeClass('float-active');
        }
    });
    _window.trigger('scroll');
});