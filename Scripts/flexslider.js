$(document).ready(function () {
    //alert();
    $wh = $(window).height();
    $ww = $(window).width();
    $winw = $(window).innerWidth();
    $('.slides li, .st-content .flexslider, .st-content .flexslider .slides li').css({ 'width': $winw, 'height': $wh });
});
$(window).load(function () {
    //alert();
    $('.flexslider').flexslider({
        namespace: '',
        animation: "slide",
        slideshow:false,
        pauseOnAction: true,
        controlNav: true,
        directionNav: false,
        slideshowSpeed: 3000,
        manualControls: ".flex-control-nav li"
        //controlsContainer:'dotstyle-flip'
        /*start: function (slider) {
            $('body').removeClass('loading');
        }*/
    });
});


[].slice.call(document.querySelectorAll('.dotstyle > ul')).forEach(function (nav) {
    new DotNav(nav, {
        callback: function (idx) {
            //console.log( idx )
        }
    });
});

