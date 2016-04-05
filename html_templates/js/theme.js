var $slider = $('.featured .slider ul');
var $slide = $('.featured .slider li');

var resetSlider = function () {
    var $sWidth =  $('.slider').width();
    var $wWidth = $(window).width();
    var $slider = $('.featured .slider ul');
    var $slide = $('.featured .slider li');
    $slider.stop().animate({
        marginLeft: '0'
    },0);
    scrolltimes = $slide.not('.clone').size();
    scrollcount = 0;

    if ($wWidth > 1000) {
        $slide.css('width', ($sWidth / 5)-18);
    } else if ($wWidth > 700 &&  $wWidth < 999 ) {
        $slide.css('width', ($sWidth / 4)-20);
    } else if ($wWidth > 550 &&  $wWidth < 699 ) {
        $slide.css('width', ($sWidth / 3)-23);
    } else {
        $slide.css('width', ($sWidth / 2)-27);
    }
    $slider.css('width',((scrolltimes*2)+1)*$slide.width());
};

$(window).resize(resetSlider);

$slider.append($slider.html().replace(/<li>/g,'<li class="clone">'));

resetSlider();

$('.arrow-left').on('click', function () {
    scrollwidth = $slide.width() + 10;
    scrolltimes = $slide.not('.clone').size();
    if (scrollcount == 0) {
        $slider.animate({
            marginLeft: (scrollwidth*scrolltimes)*-1 + 'px'
        },0);
        scrollcount = scrolltimes;
    }
    $slider.animate({
        marginLeft: '+=' + scrollwidth + 'px'
    },200);
    scrollcount--;
});

$('.arrow-right').on('click', function () {
    scrollwidth = $slide.width() + 10;
    scrolltimes = $slide.not('.clone').size();
    if (scrollcount == scrolltimes) {
        $slider.animate({
            marginLeft: '0px'
        },0);
        scrollcount = 0;
    }
    $slider.animate({
        marginLeft: '-=' + scrollwidth + 'px'
    },200);
    scrollcount++;
});