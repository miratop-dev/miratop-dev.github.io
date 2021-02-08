// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files
$(".workflow__slider").data( "js-handler", "slider" ).slick({
    dots: true,
    appendDots: $('.workflow'),
    appendArrows: $('.workflow__container')
});

$(".recommendations__slider").data( "js-handler", "slider" ).slick({
  dots: false,
  appendArrows: $('.recommendations__slider')
});