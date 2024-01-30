$(document).ready(function () {
    $('.slider').slick({
        dots: true, // Add Dots to Bottom of Slide
        autoplay: false, // Makes Slide Auto-Slide
        autoplaySpeed: 5000, // Controls Speed of Autoplay Slides
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});