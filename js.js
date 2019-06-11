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
// jQuery(function(){
//     jQuery(".gallery").jCarouselLite({
//         btnNext: ".next",
//         btnPrev: ".prev",
//         visible:6
//     });
// });


console.log($( window ).width());
if($( window ).width() <1000){
    console.log("hellow");

    $(document).ready(function(){
        $('.bla').slick({
            infinite: true,
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots:0,
            prevArrow: $('.prev'),
            nextArrow: $('.next'),
        });
        $('.next').click(function(e){
            e.preventDefault();
            $('.bla').slick('slickNext');
        });
        $('.prev').click(function(e){
            e.preventDefault();
            $('.bla').slick('slickPrev');
        });

    });

    $(document).ready(function(){
        $('.cards-tur').slick({
            infinite: true,
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots:0,
            arrows:0,
            draggable:true,
        });
        $('.cards-tur').css({"display": "block"});


    });


}else {
    $(document).ready(function(){
        $('.bla').slick({
            infinite: true,
            dots: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            dots:0,
            prevArrow: $('.prev'),
            nextArrow: $('.next'),
        });
        $('.next').click(function(e){
            e.preventDefault();
            $('.bla').slick('slickNext');
        });
        $('.prev').click(function(e){
            e.preventDefault();
            $('.bla').slick('slickPrev');
        });

    });
}
