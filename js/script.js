/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * copyright © 2020\n */\n//  import hogehoge from './hogehoge'; // ファイルを分割する場合の読み込み記述\n(function () {\n  'use strict'; // 定数定義\n  // var BREAK_POINT_XS = 0;\n  // var BREAK_POINT_SM = 768;\n  // var BREAK_POINT_MD = 768;\n  // var BREAK_POINT_LG = 992;\n  // var BREAK_POINT_XL = 1260; // PCのコンテンツ幅 - 値は適宜変更してください\n\n  /**\n   * タブレットではPCのViewportで表示する\n   *\n   */\n  // var breakPoint = BREAK_POINT_SM;\n  // var pcViewWidth = BREAK_POINT_XL;\n  // var vp = document.querySelector('[name=\"viewport\"]');\n  // if (vp) {\n  // \tvar media = matchMedia('(min-width: ' + (breakPoint - 1) + 'px)');\n  // \tif (media.matches) {\n  // \t\tvp.content = 'width=' + pcViewWidth;\n  // \t}\n  // }\n  // UA判定 不要な場合は削除\n  // var ua = navigator.userAgent\n  // if(ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0)){\n  // \t// スマホの処理\n  // } else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {\n  // \t// ipadの処理\n  // } else if (ua.indexOf('Safari') > 0 && ua.indexOf('Chrome') == -1 && typeof document.ontouchstart !== 'undefined') {\n  // \t// ipad iOS13以降のiPad用の処理\n  // }\n\n  /**\n   * DOM読み込み後実行\n   */\n\n  $(function () {\n    // CSS `object-fit` ポリフィル for IE11 & Edge\n\n    /* global objectFitImages */\n    // objectFitImages();\n    // スムーズスクロールの実装 headerをfixedしていない場合\n    $('a[href^=\"#\"]').on('click', function () {\n      var speed = 500;\n      var href = $(this).attr(\"href\");\n      var target = $(href == \"#\" || href == \"\" ? 'html' : href);\n      var position = target.offset().top;\n      $(\"html, body\").animate({\n        scrollTop: position\n      }, speed, \"swing\");\n      return false;\n    }); // スムーズスクロールの実装 headerをfixedしている場合\n    // var headerHeight = $('.c-header').innerHeight();\n    // $('a[href^=\"#\"]').on('click', function () {\n    //     var speed = 500;\n    //     var href = $(this).attr(\"href\");\n    //     var target = $(href == \"#\" || href == \"\" ? 'html' : href);\n    //     var position = target.offset().top - headerHeight;\n    //     $(\"html, body\").animate({ scrollTop: position }, speed, \"swing\");\n    //     return false;\n    // });\n\n    /**\n     * 分割したimportファイルの実行\n     * ※名称やコメントアウトの内容は実行ファイルの内容に合わせて適宜変更してください。\n     */\n    // hogehoge();\n  });\n  $('.c-nav-slider a').click(function (e) {\n    e.preventDefault();\n  }); // slider\n\n  var slider = $('.c-slick-slider');\n  var sliderItem = $('.c-slick-slider__item');\n\n  if (sliderItem.length > 1) {\n    slider.slick({\n      //infinite: true,\n      speed: 600,\n      slidesToShow: 1,\n      autoplay: false,\n      autoplaySpeed: 5000,\n      fade: true,\n      arrows: true,\n      appendArrows: $('.news__arrows'),\n      dots: true,\n      asNavFor: '.c-nav-slider',\n      dotsClass: 'c-dot-slider',\n      responsive: [{\n        breakpoint: 1024,\n        settings: {\n          slidesToShow: 1\n        }\n      }, {\n        breakpoint: 600,\n        settings: {\n          slidesToShow: 1\n        }\n      }, {\n        breakpoint: 300,\n        settings: {\n          slidesToShow: 1\n        }\n      }]\n    });\n  }\n\n  $('.c-nav-slider').slick({\n    autoplay: false,\n    slidesToShow: 3,\n    slidesToScroll: 1,\n    asNavFor: '.c-slick-slider',\n    dots: false,\n    focusOnSelect: true,\n    variableWidth: true,\n    arrows: true,\n    prevArrow: '<div class=\"arrow-left arrow-cic list-right--icon\"></div>',\n    nextArrow: '<div class=\"arrow-right arrow-cic list-right--icon\"></div>',\n    centerMode: true,\n    centerPadding: '50px'\n  }); // h3 not found\n\n  $('.c-footer__top-item').each(function () {\n    var findH3elem = $(this).find('h3');\n\n    if (findH3elem.length == 0) {\n      $(this).css('margin-top', '56px');\n    }\n  });\n  console.log(1);\n})();\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ })

/******/ });