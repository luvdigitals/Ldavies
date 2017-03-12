$(function () {
   
  $('ul.tabs li:first').addClass('active');
  $('.block article').hide();
  $('.block article:first').show();
  $('ul.tabs li').on('click',function(){
    $('ul.tabs li').removeClass('active');
    $(this).addClass('active')
    $('.block article').hide();
    var activeTab = $(this).find('a').attr('href');
    $(activeTab).show();
    
    //alert();

    //$('body').animate({ scrollTop: '0' }, 1000);
    return false;
   // $(location).attr('href', '#homePage');

    });

    //downloadPdf
    $("#download").click(function (e) {
        e.preventDefault();
        var selectedPdfs = "";
        var pdfname = "";
        $(".pdflist:checked").each(function () {
            selectedPdfs = selectedPdfs + $(this).parent().attr('class') + ",";
            if (pdfname == "") {
                pdfname = $.trim($(this).parent().find(".pdfname").text());
            }
        });
        var href = "/umbraco/Surface/common/GeneratePdf?name=" + pdfname + "&pdfs=" + selectedPdfs;
        window.location = href;
    });
})
