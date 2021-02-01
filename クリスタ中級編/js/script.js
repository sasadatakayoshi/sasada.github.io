//スティッキーヘッダー//
$(function(){
    var $win = $(window),
        $fv = $('.fv'),
        $header = $('.header'),
        fvHeight = $fv.outerHeight();
        fixedClass = 'fixed';

    $win.on('load scroll',function(){
        var value = $(this).scrollTop();
        if($win.width() > 768){
            if( value > fvHeight ){
                $header.addClass(fixedClass);
            }else{
                $header.removeClass(fixedClass);
            }
        }
    });
});

//スライダー//
$('.slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    speed:1000,
    cssEase:'linear'
});

//ハンバーガーメニュー//
$('.burger-btn').on('click',function(){
    $('.header-nav').fadeToggle(300);
    $(this).toggleClass('cross');
    $('body').toggleClass('noscroll');
})