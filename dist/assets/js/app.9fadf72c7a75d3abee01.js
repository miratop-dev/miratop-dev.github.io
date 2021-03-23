/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_select_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _js_select_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_select_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_2__);
// JS

 // SCSS

 // CSS (example)
// import './assets/css/main.css'

/***/ }),
/* 1 */
/***/ (function(module, exports) {

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
      appendDots: $('.workflow__slider')
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
      appendDots: $('.recommendations')
    }
  }]
});
$("[data-js-handler='menu__toggle']").on('click', function (e) {
  e.preventDefault();

  if ($('.main-menu').hasClass('show')) {
    $('.main-menu').removeClass('show');
    $('body').removeClass('hidden');
  } else {
    $('.main-menu').addClass('show');
    $('body').addClass('hidden');
  }
});
$("[data-js-handler='filter__toggle']").on('click', function (e) {
  if ($(this).hasClass('collapse')) {
    $(this).removeClass('collapse').addClass('expanded');
    $(this).parent().removeClass('collapse');
  } else {
    $(this).addClass('collapse').removeClass('expanded');
    $(this).parent().addClass('collapse');
  }
});
$("[data-js-handler='expand-list__handler']").on('click', function (e) {
  e.preventDefault();
  var sibling_previous_class = $(this).prev().attr("class").split(' ')[0];
  var link_show_more = $(this);
  var link_show_more_text = $(this).text();

  if (!link_show_more.data('js-expand-title')) {
    link_show_more.attr('data-js-expand-title', link_show_more_text);
  }

  $(this).siblings('.' + sibling_previous_class).each(function (index, value) {
    if ($(value).hasClass('hide')) {
      $(value).removeClass('hide').addClass('show');
      link_show_more.text('Свернуть');
    } else if ($(value).hasClass('show')) {
      $(value).removeClass('show').addClass('hide');
      link_show_more.text(link_show_more.data('js-expand-title'));
    }
  });
});

if ($("[data-js-handler='range-slider__handler']").length !== 0) {
  $("[data-js-handler='range-slider__handler']").slider({
    range: true,
    min: 0,
    max: 10,
    step: 0.1,
    values: [4.5, 9.5],
    slide: function slide(event, ui) {
      $('.range-slider__min').val(ui.values[0]);
      $('.range-slider__max').val(ui.values[1]);
    }
  });
  $('.range-slider__min').val($("[data-js-handler='range-slider__handler']").slider("values", 0));
  $('.range-slider__min').on('change', function (e) {
    $("[data-js-handler='range-slider__handler']").slider('values', 0, $(this).val());
  });
  $('.range-slider__max').val($("[data-js-handler='range-slider__handler']").slider("values", 1));
  $('.range-slider__max').on('change', function (e) {
    $("[data-js-handler='range-slider__handler']").slider('values', 1, $(this).val());
  });
}

$("[data-js-handler='mobile-filter__handler']").on('click', function (e) {
  e.preventDefault();

  if ($('.c-aside').hasClass('over')) {
    $('body').removeClass('hidden');
    $('.c-aside').removeClass('over');
  } else {
    $('body').addClass('hidden');
    $('.c-aside').addClass('over');
  }
});
$("[data-js-handler='accordion__handler']").on('click', function (e) {
  e.preventDefault();

  if ($(this).hasClass('details-expert-description__header--expanded')) {
    $(this).removeClass('details-expert-description__header--expanded').addClass('details-expert-description__header--collapse');
    $(this).parent().removeClass('details-expert-description__accordion--expanded').addClass('details-expert-description__accordion--collapse');
  } else {
    $(this).removeClass('details-expert-description__header--collapse').addClass('details-expert-description__header--expanded');
    $(this).parent().removeClass('details-expert-description__accordion--collapse').addClass('details-expert-description__accordion--expanded');
  }
});
$("[data-js-handler='popup__handler']").on('click', function (e) {
  e.preventDefault();
  var popup = $(this).attr('href');
  $('.popup').addClass('hide').removeClass('show');

  if ($(popup).hasClass('hide')) {
    $('.overlay').addClass('show');
    $(popup).removeClass('hide').addClass('show');
  } else {
    $('.overlay').removeClass('show');
    $(popup).addClass('hide').removeClass('show');
  }
});
$("[data-js-handler='popup__handler-close']").on('click', function (e) {
  e.preventDefault();
  $('.popup').addClass('hide').removeClass('show');
  $('.overlay').removeClass('show');
});
$("[data-js-handler='overlay__handler']").on('click', function (e) {
  e.preventDefault();
  $('.overlay').removeClass('show');

  if ($('.popup').hasClass('show')) {
    $('.popup').addClass('hide').removeClass('show');
  }

  if ($('.main-menu').hasClass('show')) {
    $('.main-menu').addClass('hide').removeClass('show');
  }
});
$("[data-js-handler='popup__account-type']").on('click', function (e) {
  e.preventDefault();
  var account_type = $(this).attr('href');

  if (!$(this).hasClass('popup__account-type--active')) {
    $('.popup__account-type').removeClass('popup__account-type--active');
    $('.popup__data-wrap').removeClass('popup__data-wrap--current');
    $(this).addClass('popup__account-type--active');
    $(account_type).addClass('popup__data-wrap--current');
  }
});
var rellax = new Rellax('.rellax');

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "sort__select": */

x = document.getElementsByClassName("sort__select ");
l = x.length;

for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */

  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */

  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");

  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      /* When an item is clicked, update the original select box,
      and the selected item: */
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;

      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;

          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }

          this.setAttribute("class", "same-as-selected");
          break;
        }
      }

      h.click();
    });
    b.appendChild(c);
  }

  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x,
      y,
      i,
      xl,
      yl,
      arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;

  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }

  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/* If the user clicks anywhere outside the select box,
then close all select boxes: */


document.addEventListener("click", closeAllSelect);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(4);
            var content = __webpack_require__(5);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
/******/ ]);