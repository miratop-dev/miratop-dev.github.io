// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files

$("div[data-js-handler='workflow__slider']").slick({
    dots: true,
    appendDots: $('.workflow'),
    appendArrows: $('.workflow__container')
});

$("div[data-js-handler='recommendations__slider']").slick({
  dots: false,
  appendArrows: $('.recommendations__slider')
});