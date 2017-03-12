// JavaScript Document
//window.addEventListener("scroll", scrollingFun);
$(document).ready(function () {
    
    $(window).scroll(function () {
        didScroll = true;

        //alert();
        $windowWidth = $(window).width();

        var y = $(window).scrollTop();

        if (y > 200) {
            //alert();
            $('#arrowDown').css({ 'display': 'none' });
            $('#newHeader').css({ 'top': '0' });
            $('#newHeader').addClass('hbg');
            //

        } else {
            $('#newHeader').css({ 'top': '0px' });
            $('#newHeader').removeClass('hbg');
        }
    });
    $wh = $(window).height();
    $ww = $(window).width();
    $winw = $(window).innerWidth();
    $('.openSlide').css({ 'display': 'block', 'width': '100%' });
   //$('#arrowTarget').addClass('plsOpen');
	/*$('.st-accordion ul li > a').click(function(){
	$('#arrowTarget').removeClass('plsOpen');
	
	});*/
    
    $('#trigger').click(function(){
		
		//window.setTimeout(function () {
			//jQuery('html, body').animate({scrollTop: 0}, 2000);
        //window.location.href = "/home/";
    //}, 1000)
	
	//$('#trigger,#logo').css({'position':'fixed'});
	});
    $('.openSlide').css({ 'display': 'block', 'width': '100%' });
    if ($ww > 800){
    $('.openSlide .st-content, .openSlide, .st-open').css({ 'width': $ww, 'background-size': 'cover' });
    $('#firstSlide').css({ 'width': $ww, 'height': $wh - 40, 'max-height': $wh - 40, 'background-size': 'cover' });
    } else {
        $('#firstSlide').css({ 'width': $ww, 'height': $wh - 40, 'max-height': $wh - 40, 'background-size': 'cover' });
    }
	//alert($wh-40)
	
	$('#logo').css('cursor','pointer');
	
   $('#logo, #logonew').click(function () {
        window.location.href = "/";
    });
   
	
    $('#ldCloud').addClass('ldnohover');
    $("#arrowDown").click(function () {
        var target = $('#arrowTarget');
        $('html,body').animate({ scrollTop: target.offset().top }, 1000);
		//$('#arrowTarget').addClass('st-open');
		
    });
    $ldcloudHeight = $('#ldCloud').height();
    setTimeout(function () {
       
        $('#ldCloud').css({ 'bottom': '-156px' });
       
    }, 2000);

   
	
    $cloudHeaderHeight = $('#ldCloud h3').height();
    $ldcloudafterLeavepos = $ldcloudHeight-$cloudHeaderHeight
    $('#ldCloud').mouseover(function () {

        $('#ldCloud').css({ 'bottom': 0 });
        
        $(this).addClass('ldhover');
    });
    $('#ldCloud').mouseleave(function () {

        setTimeout(function () {

            if ($('#ldCloud').hasClass('ldhover')) {
                $('#ldCloud').css({ 'bottom': -$ldcloudafterLeavepos });
            }

        }, 2000);
        
    });
    
    
    $("#submitBtn").click(function (e) {
        if($("#username").val() == "")
        {
            $("#diverror").text("Enter username");
            e.preventDefault();
        }
        else if ($("#password").val() == "") {
            $("#diverror").text("Enter password");
            e.preventDefault();
        }
    });

    $("#cancelBtn").click(function (e) {
        $("#diverror").text("");
    });

    $('#cLogin_btn').click(function () {
        $('#cLogin').show();
    });
    $('#cancelBtn').click(function () {
        $('#cLogin').hide();
    });

    $('#cLogin strong').text('Client login')
    $('.fixed-width-container').css({ 'width': $ww - 100 });

   

    

    if ($ww > 800) {
        $('.project-thumb-list').css({ 'width': ($winw - 20) / 4 });
        $pim = $('.project-thumb-list img').height();
        $('.project-thumb-list').css({ 'height': '230px' });
        $('#hs1').css({'background-image':'url(images/homepage_sketch.png)'})

    }  else {
        $('.project-thumb-list').css({ 'width': ($winw - 10) / 2 });
        $pim = $('.project-thumb-list img').height();
        $('.project-thumb-list').css({ 'height': $pim });
        $('#hs1').css({ 'background-image': 'url(images/homepage_sketch_mobile.png)' })
    }

   
	
    

});

