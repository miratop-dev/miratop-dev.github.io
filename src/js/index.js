// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files

$("div[data-js-handler='workflow__slider']").slick({
    dots: true,
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
  } else {
    $('.main-menu').addClass('show');
  }
});

$("[data-js-handler='header-user__handler']").on('click', function(e){
  e.preventDefault();
  if($('.header-user__dropdown').hasClass('show')){
    $('.header-user__dropdown').removeClass('show').addClass('hide');
  } else {
    $('.header-user__dropdown').removeClass('hide').addClass('show');
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

$("[data-js-handler='account-type']").on('click', function(e){
  e.preventDefault();
  if($(this).hasClass('service-main__private--unactive')) {
    $(this).removeClass('service-main__private--unactive').addClass('service-main__private--active');
    $(this).siblings().removeClass('service-main__private--active').addClass('service-main__private--unactive');
  }
});

$("[data-js-handler='options-tabs'] a").on('click', function(e){
  e.preventDefault();
  if(!$(this).parent().hasClass('active')) {
    let href = $(this).attr('href');
    $("[data-js-handler='options-tab']").removeClass('active');
    $(href).addClass('active');
    $("[data-js-handler='options-tabs'] li").removeClass('active');
    $(this).parent().addClass('active');
  }
});

$("[data-js-handler='data-options-additionals']").on('click', "[data-js-handler='data-options-profile-remove']", function(e){
  e.preventDefault();
  $(this).parent().remove();
});

$("[data-js-handler='data-options-control-domain']").on('change', function() {
  var active_type = $(this).val();
  var parent = $(this).closest('.options-profile__controls');
  parent.find("[data-js-handler='data-options-control-type']").removeClass('active');
  parent.find(active_type + "[data-js-handler='data-options-control-type']").addClass('active');
});  

$("[data-js-handler='data-options-profile-add-option']").on('click', function(e){
  e.preventDefault();
  var domain = $(this).siblings("select[data-js-handler='data-options-control-domain']").children("option").filter(":selected").text();
  var type = $(this).siblings("select.active[data-js-handler='data-options-control-type']").children("option").filter(":selected").text();
  var additional = '<div class="options-profile__additional"><div class="c-title c-title__title5 options-profile__domain">' + domain + '</div><div class="options-profile__type">' + type + '</div><a class="options-profile__remove" href="#" data-js-handler="data-options-profile-remove"></a></div>';
  $(this).parent().siblings("[data-js-handler='data-options-additionals']").append(additional);
});

$("[data-js-handler='data-options-profile-add-input']").on('click', function(e){
  e.preventDefault();
  var year_start = $("[data-js-handler='data-options-profile-start']").val();
  var year_end = $("[data-js-handler='data-options-profile-end']").val();
  var company = $("[data-js-handler='data-options-profile-company']").val();
  var position = $("[data-js-handler='data-options-profile-position']").val();
  if(year_start.length > 0 && year_end.length > 0 && (company.length > 0 || position.length > 0)) {
    var additional = '<div class="options-profile__additional"><div class="c-title c-title__title5 options-profile__domain"><span class="options-profile__start">' + year_start + '  </span><span>– </span><span class="options-profile__end">' + year_end + '</span></div><div class="options-profile__type"> <span class="options-profile__position">' + position + ' </span><span class="options-profile__company">' + company + '</span></div><a class="options-profile__remove" href="#" data-js-handler="data-options-profile-remove"></a></div>';
    $(this).parent().siblings("[data-js-handler='data-options-additionals']").append(additional);
  }
});  

$("[data-js-handler='data-options-profile-add-tag']").on('click', function(e){
  e.preventDefault();
  var tag = $("[data-js-handler='data-options-profile-tag']").val();
  if(tag.length > 0) {
    var additional = '<div class="options-profile__tag"><span>' + tag + '</span><a href="#" data-js-handler="data-options-profile-remove"> </a></div>';
    $(this).parent().siblings("[data-js-handler='data-options-additionals']").append(additional);
  }
});    

$("[data-js-handler='portfolio-toggle-editor']").on('click', function(e){
  e.preventDefault();
  togglePortfolioContainers();
});    

$("[data-js-handler='portfolio-add']").on('click', function(e){
  e.preventDefault();
  var project = $("[data-js-handler='portfolio-add-project']").val();
  var company = $("[data-js-handler='portfolio-add-company']").val();
  var year = $("[data-js-handler='portfolio-add-year']").val();
  var type = $("select.active[data-js-handler='portfolio-add-type']").children("option").filter(":selected").text();
  var duration = $("[data-js-handler='portfolio-add-duration']").val();
  var problem = $("[data-js-handler='portfolio-add-problem']").val();
  var results = $("[data-js-handler='portfolio-add-results']").val();

  if(project.length > 0 && company.length > 0 && year.length > 0 && duration.length > 0 && problem.length > 0 && results.length > 0) {
    var additional = '<div class="portfolio-block">';
    additional += '<div class="portfolio-block__head"> <div class="c-title c-title__title4">' + project +'</div><div class="portfolio-block__management"> <a class="portfolio-block__edit" href="#" data-js-handler="portfolio-edit">Редагувати</a><a class="portfolio-block__remove" href="#" data-js-handler="portfolio-remove"> </a></div></div>';
    additional += '<div class="portfolio-block__content">';
    additional += '<div class="c-info">';
    additional += '<div class="c-info__client"> ' + company + '</div><div class="c-info__deadline">' + duration + '</div><div class="c-info__date">рік: ' + year + '</div>';
    additional += '</div>';
    additional += '<div class="c-title c-title__title5 portfolio-block__subtitle">' + type + '</div>';
    additional += '<div class="portfolio-block__section"><div class="c-title c-title c-title__title5 c-title--alert">Проблематика</div><p> ' + problem + '</p></div>';
    additional += '<div class="portfolio-block__section"><div class="c-title c-title c-title__title5 c-title--goal">Отримані результати</div><p>' + results + '</p></div>';
    additional += '</div></div>';
  
    $('[data-js-handler="options-expert-portfolio-blocks"]').append(additional);
    $("[data-js-handler='portfolio-buttons']").removeClass('hide');
    $("[data-js-handler='options-expert-portfolio-none']").removeClass('active');
    togglePortfolioContainers();
  }
});  

function togglePortfolioContainers() {
  $("[data-js-handler='options-expert-portfolio-container']").each(function(value, index) {
    if($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).addClass('active');
    }
  });
}

$("[data-js-handler='options-expert-portfolio-blocks']").on('click', "[data-js-handler='portfolio-remove']", function(e){
  e.preventDefault();
  $(this).closest('.portfolio-block').remove();
  var block_length = $(".active[data-js-handler='options-expert-portfolio-container'] .portfolio-block").length;
  if (block_length === 0) {
    $("[data-js-handler='portfolio-buttons']").addClass('hide');
    $("[data-js-handler='options-expert-portfolio-none']").addClass('active');
  }
});

$("[data-js-handler='portfolio-type']").on('click', function(e){
  e.preventDefault();
  if(!$(this).hasClass('active')) {
    var id = $(this).attr('href');
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('.options-tabs__block').removeClass('active');
    $(id).addClass('active');
  }
});

$("[data-js-handler='password-validation']").on('input', function(e){
  var pass = $('#password').val();
  if(pass !== $(this).val()) {
    $(this).addClass('error');
    $('#password').addClass('error');
    $("[data-js-handler='error-message']").removeClass('hide').find('p').text('Паролі не співпадають');
    $("[data-js-handler='success-message']").addClass('hide')
  } else {
    $(this).removeClass('error');
    $('#password').removeClass('error');
    if($(this).length > 0) {
      $("[data-js-handler='success-message']").removeClass('hide').find('p').text('Паролі співпадають');
      $("[data-js-handler='error-message']").addClass('hide')    
    }
  }
});

$("[data-js-handler='account-switch-editor']").on('click', function(e){
  e.preventDefault();
  if($('#proposals').hasClass('hide')) {
    $('#proposals').removeClass('hide');
    $('#new-proposal').addClass('hide');
  } else {
    $('#proposals').addClass('hide');
    $('#new-proposal').removeClass('hide');
  }
});

$("[data-js-handler='account-add-project']").on('click', function(e){
  e.preventDefault();
  var title = '<div class="c-title c-title__title4 account-prop__title">' + $('#new-proposal #title').val() + '</div>';
  var description = '<div class="account-prop__description"><p>' + $('#new-proposal #description').val() + '</p></div>';
  var problematic = $('#new-proposal #problematic').val();
  var expectations = $('#new-proposal #expectations').val();
  var expertise = $('#new-proposal #expertise').children("option").filter(":selected").text();
  var category = $($('#new-proposal #expertise').val()).children("option").filter(":selected").text();
  var country = $('#new-proposal #country').children("option").filter(":selected").text();
  var city = $($('#new-proposal #country').val()).children("option").filter(":selected").text();
  var due_date = $('#new-proposal #due_date').children("option").filter(":selected").text();
  var budget = $($('#new-proposal #due_date').val()).children("option").filter(":selected").text();

  var container = $('#open .account-prop__wrap');
  var block = '<div class="account-prop__block"><div class="account-prop__content"><div class="account-prop__head">';
  block += title + '<div class="c-title c-title__title5 c-title--warning">Очікує підтвердження адміністратора</div></div>';
  block += '<div class="account-prop__info"><div class="c-info"><div class="c-info__location">' + city + ',' +  country + '</div><div class="c-info__date">Термін подачі: ' + due_date + '</div></div></div>';
  block += description + '</div>';
  block += '<div class="account-prop__info"> <div class="account-prop__controls"><a class="account-prop__edit" href="#">Редагувати</a><a class="account-prop__cancel" href="#">Відмінити публікацію</a></div><a class="account-prop__offers" href="#">0 пропозицій</a></div>';
  block += '</div>';
  container.append(block);

  $('#proposals').removeClass('hide');
  $('#new-proposal').addClass('hide');
});