// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files

$("div[data-js-handler='workflow__slider']").slick({
    dots: true,
    appendDots: $('.workflow'),
    appendArrows: $('.workflow__container')
});

$("div[data-js-handler='recommendations__slider']").slick({
  dots: false,
  appendArrows: $('.recommendations')
});

$("[data-js-handler='menu__toggle']").on('click', function(e){
  e.preventDefault();
  if($('.main-menu').hasClass('show')){
    $('.main-menu').removeClass('show');
    $('body').removeClass('hidden');
  } else {
    $('.main-menu').addClass('show');
    $('body').addClass('hidden');
  }
})