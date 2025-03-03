$(document).ready(function() {
    var $slider = $('.variable-width');

    $slider.slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
    });

    $slider.on('wheel', function(event) {
        if (event.originalEvent.deltaY > 0) {
            $slider.slick('slickNext');
        } else {
            $slider.slick('slickPrev');
        }
    });

    setInterval(function() {
        $slider.slick('slickNext');
    }, 7000);
});