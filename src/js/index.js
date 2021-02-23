// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files

$("div[data-js-handler='workflow__slider']").slick({
    dots: true,
    appendDots: $('.workflow'),
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
    $('body').removeClass('hidden');
  } else {
    $('.main-menu').addClass('show');
    $('body').addClass('hidden');
  }
})

$("[data-js-handler='filter__toggle']").on('click', function(e){
  if($(this).hasClass('collapse')) {
    $(this).removeClass('collapse').addClass('expanded');
    $(this).parent().removeClass('collapse');
  } else {
    $(this).addClass('collapse').removeClass('expanded');
    $(this).parent().addClass('collapse');
  }
})

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
})

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
})

$("[data-js-handler='accordion__handler']").on('click', function(e){
  e.preventDefault();
  console.log('sdfsdf')
  if($(this).hasClass('details-expert-description__header--expanded')) {
    $(this).removeClass('details-expert-description__header--expanded').addClass('details-expert-description__header--collapse');
    $(this).parent().removeClass('details-expert-description__accordion--expanded').addClass('details-expert-description__accordion--collapse');
  } else {
    $(this).removeClass('details-expert-description__header--collapse').addClass('details-expert-description__header--expanded');
    $(this).parent().removeClass('details-expert-description__accordion--collapse').addClass('details-expert-description__accordion--expanded');
  }  
})