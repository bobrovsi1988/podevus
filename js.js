$(function() {

    $(window).scroll(function() {

        if($(this).scrollTop() != 0) {

            $('#toTop').fadeIn();

        } else {

            $('#toTop').fadeOut();

        }

    });

    $('#toTop').click(function() {

        $('body,html').animate({scrollTop:0},800);

    });

});
// window.onload().
jQuery(function(){
    jQuery(".gallery").jCarouselLite({
        btnNext: ".next",
        btnPrev: ".prev",
        visible:5
    });
})