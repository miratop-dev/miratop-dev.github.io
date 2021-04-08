// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files

$("div[data-js-handler='workflow__slider']").slick({
    dots: true,
    //appendDots: $('.workflow'),
    appendDots: $('.workflow__slider'),
    appendArrows: $('.workflow__container'),
    responsive: [{
      breakpoint: 480,
      settings: {
        appendDots: $('.workflow__slider'),
      }
    }]
});

$("div[data-js-handler='recommendations__slider']").slick({
  dots: false,
  appendArrows: $('.recommendations'),
  responsive: [{
    breakpoint: 480,
    settings: {
      dots: true,
      appendDots: $('.recommendations'),
    }
  }]  
});

$("[data-js-handler='menu__toggle']").on('click', function(e){
  e.preventDefault();
  if($('.main-menu').hasClass('show')){
    $('.main-menu').removeClass('show');
    //$('body').removeClass('hidden');
  } else {
    $('.main-menu').addClass('show');
    //$('body').addClass('hidden');
  }
});

$("[data-js-handler='header-user__handler']").on('click', function(e){
  e.preventDefault();
  if($('.header-user__dropdown').hasClass('show')){
    $('.header-user__dropdown').removeClass('show').addClass('hide');
    //$('body').removeClass('hidden');
  } else {
    $('.header-user__dropdown').removeClass('hide').addClass('show');
    //$('body').addClass('hidden');
  }
});

$("[data-js-handler='filter__toggle']").on('click', function(e){
  if($(this).hasClass('collapse')) {
    $(this).removeClass('collapse').addClass('expanded');
    $(this).parent().removeClass('collapse');
  } else {
    $(this).addClass('collapse').removeClass('expanded');
    $(this).parent().addClass('collapse');
  }
});

$("[data-js-handler='expand-list__handler']").on('click', function(e){
  e.preventDefault();
  let sibling_previous_class = $(this).prev().attr("class").split(' ')[0];
  let link_show_more = $(this);
  let link_show_more_text = $(this).text();
  if(!link_show_more.data('js-expand-title')) {
    link_show_more.attr('data-js-expand-title', link_show_more_text);
  }
  $(this).siblings('.' + sibling_previous_class).each(function(index, value){
    if($(value).hasClass('hide')) {
      $(value).removeClass('hide').addClass('show');
      link_show_more.text('Свернуть');
    } else if($(value).hasClass('show')) {
      $(value).removeClass('show').addClass('hide');
      link_show_more.text(link_show_more.data('js-expand-title'));
    }
  })
});

if($("[data-js-handler='range-slider__handler']").length !== 0) {
  $("[data-js-handler='range-slider__handler']").slider({
    range: true,
    min: 0,
    max: 10,
    step: 0.1,
    values: [4.5, 9.5],
    slide: function( event, ui ) {
      $('.range-slider__min').val(ui.values[ 0 ]);
      $('.range-slider__max').val(ui.values[ 1 ]);
    }
  });
  $('.range-slider__min').val(
    $("[data-js-handler='range-slider__handler']").slider( "values", 0 )
  );
  $('.range-slider__min').on('change', function(e){
    $("[data-js-handler='range-slider__handler']").slider(
      'values', 0, $(this).val()
    )
  });
  $('.range-slider__max').val(
    $("[data-js-handler='range-slider__handler']").slider( "values", 1 ) 
  );
  $('.range-slider__max').on('change', function(e){
    $("[data-js-handler='range-slider__handler']").slider(
      'values', 1, $(this).val()
    )
  })
}

$("[data-js-handler='mobile-filter__handler']").on('click', function(e){
  e.preventDefault();
  if($('.c-aside').hasClass('over')) {
    $('body').removeClass('hidden');
    $('.c-aside').removeClass('over');
  } else {
    $('body').addClass('hidden');
    $('.c-aside').addClass('over');
  }
});

$("[data-js-handler='accordion__handler']").on('click', function(e){
  e.preventDefault();
  if($(this).hasClass('details-expert-description__header--expanded')) {
    $(this).removeClass('details-expert-description__header--expanded').addClass('details-expert-description__header--collapse');
    $(this).parent().removeClass('details-expert-description__accordion--expanded').addClass('details-expert-description__accordion--collapse');
  } else {
    $(this).removeClass('details-expert-description__header--collapse').addClass('details-expert-description__header--expanded');
    $(this).parent().removeClass('details-expert-description__accordion--collapse').addClass('details-expert-description__accordion--expanded');
  }  
});

$("[data-js-handler='popup__handler']").on('click', function(e){
  e.preventDefault();
  let popup = $(this).attr('href');
  $('.popup').addClass('hide').removeClass('show');
  if($(popup).hasClass('hide')) {
    $('.overlay').addClass('show');
    $(popup).removeClass('hide').addClass('show');
  } else {
    $('.overlay').removeClass('show');
    $(popup).addClass('hide').removeClass('show');
  }  
});

$("[data-js-handler='popup__handler-close']").on('click', function(e){
  e.preventDefault();
  $('.popup').addClass('hide').removeClass('show');
  $('.overlay').removeClass('show');
});  

$("[data-js-handler='overlay__handler']").on('click', function(e){
  e.preventDefault();
  $('.overlay').removeClass('show');
  if($('.popup').hasClass('show')) {
    $('.popup').addClass('hide').removeClass('show');
  }
  if($('.main-menu').hasClass('show')) {
    $('.main-menu').addClass('hide').removeClass('show');
  }  
});

$("[data-js-handler='popup__account-type']").on('click', function(e){
  e.preventDefault();
  let account_type = $(this).attr('href');
  if(!$(this).hasClass('popup__account-type--active')) {
    $('.popup__account-type').removeClass('popup__account-type--active');
    $('.popup__data-wrap').removeClass('popup__data-wrap--current');
    $(this).addClass('popup__account-type--active');
    $(account_type).addClass('popup__data-wrap--current');
  }
});

$("[data-js-handler='account-type']").on('click', function(e){
  e.preventDefault();
  if($(this).hasClass('service-main__private--unactive')) {
    $(this).removeClass('service-main__private--unactive').addClass('service-main__private--active');
    $(this).siblings().removeClass('service-main__private--active').addClass('service-main__private--unactive');
  }
});