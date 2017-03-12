function initSlider() {
    //alert();
    $('#desktopSlider').flexslider({
        animation: "slide",
        pauseOnAction: false,
        controlNav: false,
        slideshow: true,
        directionNav: true,
        slideshowSpeed: 3000,
        
        start: function (slider) {
            //$('body').removeClass('loading');
            $nwh = $(window).height();
            $nww = $(window).width() - 80;
            $www = $(window).width();
            $bgheight = $(window).height()-160;
            $('#desktopSlider .flex-viewport, #desktopSlider .slides li').css({ 'max-width': '100%', 'width': '100%', 'height': $nwh - 160, 'position': 'relative', 'border': '0', 'background-size': 'cover', 'background-position': 'center center', 'background-repeat': 'no-repeat', 'overflow': 'hidden' });
            $('#desktopSlider .slides li').css({ 'max-width': $nww });
           //$('.flex-direction-nav li').css({ 'background-color': 'transparent', 'position': 'absolute', 'padding': 0, 'line-height': 'normal', 'font-size': '5px','display':'block' });
            //$('.flex-direction-nav li a').css({ 'background-color': 'transparent', 'position': 'absolute', 'padding': 0, 'line-height': 'normal', 'font-size': '5px','width':'30px','height':'50px' });
            
        }
    });
    $('#mobileSlider').flexslider({
        animation: "slide",
        pauseOnAction: false,
        controlNav: false,
        slideshow: true,
        directionNav: true,
        slideshowSpeed: 3000,

        
    });
};


$(function () {

    /*$('#st-accordion').accordion({
      oneOpenedItem: true
    });*/

});

$(document).ready(function () {
	//$('#trigger,#logo').css({'display':'none'});
    //$('#trigger,#logo').css({'position':'fixed'});
	
	
	
	$('#st-accordion > ul > li').addClass( 'st-open' );
$('#st-accordion > ul > li div.st-content').show();
initSlider();
	$("#imageGallery").click(function () {
        
       //initSlider();
		
		
    });
    //$video_url = $('#video').attr('src') + "?autoplay=1";
    //$('#video').attr('src', '');
   /* $('#st-accordion ul li a').click(function () {
        $('#video').attr('src', '');
    })
    $('#videoAccor a').click(function () {
        $('#video').attr('src', $video_url);
    })*/

     $('.st-accordion ul li').css({'height':'auto'});
	$('body,html').css({'height':'auto'});
                //$('.st-accordion ul li ul li, .st-accordion ul li ul li > a').css({ 'background-color:none !important})
                

});
//initSlider();
/*
$(function(){
$('#st-accordion ul li a').click(function(){

if($('#imageGallery').parent().hasClass('st-open')){
			initSlider();
		}
});
		
		
});*/