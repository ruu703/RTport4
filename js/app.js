$(function(){
    $('.js-form-validate').on('keyup',function(){

        if($(this).val()){
            $('.js-disabled-submit').prop('disabled', false);
        }else{
            $('.js-disabled-submit').prop('disabled', true);
        }
    });
    
    /* スライダー */
    // var slider = (function(){
    //     var currentItemNum = 3;
    //     var $sliderContainer = $('.p-slider__container');
    //     var slideItemNum = $('.p-slider__item').length;
    //     var slideItemWidth =  $('.p-slider__item').innerWidth();
    //     var slideContainerWidth = slideItemWidth * slideItemNum;
    //     var DURATION = 500;

    //     return{
    //         slidePrev: function(){
    //             if(currentItemNum > 3){
    //                 $sliderContainer.animate({left: '+=' +slideItemWidth+ 'px'}, DURATION);
    //                 currentItemNum--;
    //                 $('.js-slide-next').attr('style', 'opacity: 1');
    //             }
    //             if(currentItemNum <= 3){
    //                 $('.js-slide-prev').attr('style', 'opacity: 0');
    //             }
    //         },
    //         slideNext: function(){
    //             if(currentItemNum < slideItemNum){
    //                 $sliderContainer.animate({left: '-=' +slideItemWidth+ 'px'}, DURATION);
    //                 currentItemNum++;
    //                 $('.js-slide-prev').attr('style', 'opacity: 1');
    //             }
    //             if(currentItemNum = slideItemNum){
    //                 $('.js-slide-next').attr('style', 'opacity: 0');
    //             }
    //         },
    //         init: function(){
    //             $sliderContainer.attr('style', 'width:' +slideContainerWidth+ 'px');
    //             // スライダーアイテムが４つ以上ある場合に右側の矢印を表示
    //             if(slideItemNum > 3){
    //                 $('.js-slide-next').attr('style', 'opacity: 1');
    //             }
    //             var that = this;
    //             $('.js-slide-prev').on('click', function(){
    //                 that.slidePrev();
    //             });
    //             $('.js-slide-next').on('click', function(){
    //                 that.slideNext();
    //             });
    //         }
    //     }
    
    // })();
   
    
    // slider.init();
    
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
            if (scroll > elemPos - windowHeight + 500){
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

    //　プログレスバートリガー
    //  var navPosSp = $('.js-progressbar-target').offset().top;
    //  var _window = $(window);
    
    // $(window).on('scroll', function(){
    //      if($(this).scrollTop() + 150 > navPosSp){
    //         $('.js-progressbar-target').addClass('c-progrresbar');
    //     }
    // });
    // _window.trigger('scroll');

    // プログレスバー
    // progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

// var bar = new ProgressBar.Circle(container, {
//     color: '#106A88',
//     // This has to be the same size as the maximum width to
//     // prevent clipping
//     strokeWidth: 6,
//     trailWidth: 1,
//     easing: 'easeInOut',
//     duration: 1400,
//     text: {
//       autoStyleContainer: false
//     },
//     from: { color: '#FEFDEB', width: 1 },
//     to: { color: '#106A88', width: 6 },
//     // Set default step function for all animate calls
//     step: function(state, circle) {
//       circle.path.setAttribute('stroke', state.color);
//       circle.path.setAttribute('stroke-width', state.width);
  
//       var value = Math.round(circle.value() * 100);
//       if (value === 0) {
//         circle.setText('');
//       } else {
//         circle.setText(value);
//       }
  
//     }
//   });
//   bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
//   bar.text.style.fontSize = '2rem';

//      var navPosSp = $('.js-progressbar-target').offset().top;
//      var _window = $(window);
    
//     $(window).one('scroll', function(){
//          if($(this).scrollTop() > navPosSp - 350){
//             // $('.js-progressbar-target').addClass('c-progrresbar');
//             bar.animate(1.0);  
//         }
//     });
  
//   bar.animate(1.0);  // Number from 0.0 to 1.0

     var skill = $('.js-progressbar-target').offset().top;
     var _window = $(window);
    
    $(window).on('scroll', function(){
         if($(this).scrollTop() > skill - 350){
            $('.js-progressbar-target').children('.container-mg').removeClass('u-display'); 
        }
    });
    _window.trigger('scroll');

});