/**
 * copyright © 2020
 */
//  import hogehoge from './hogehoge'; // ファイルを分割する場合の読み込み記述

(function() {
	'use strict';

	// 定数定義
	// var BREAK_POINT_XS = 0;
	// var BREAK_POINT_SM = 768;
	// var BREAK_POINT_MD = 768;
	// var BREAK_POINT_LG = 992;
	// var BREAK_POINT_XL = 1260; // PCのコンテンツ幅 - 値は適宜変更してください

	/**
	 * タブレットではPCのViewportで表示する
	 *
	 */
	// var breakPoint = BREAK_POINT_SM;
	// var pcViewWidth = BREAK_POINT_XL;
	// var vp = document.querySelector('[name="viewport"]');
	// if (vp) {
	// 	var media = matchMedia('(min-width: ' + (breakPoint - 1) + 'px)');
	// 	if (media.matches) {
	// 		vp.content = 'width=' + pcViewWidth;
	// 	}
    // }

    // UA判定 不要な場合は削除
	// var ua = navigator.userAgent
	// if(ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0)){
	// 	// スマホの処理
	// } else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
	// 	// ipadの処理
	// } else if (ua.indexOf('Safari') > 0 && ua.indexOf('Chrome') == -1 && typeof document.ontouchstart !== 'undefined') {
	// 	// ipad iOS13以降のiPad用の処理
	// }

	/**
	 * DOM読み込み後実行
	 */
	$(function() {
		// CSS `object-fit` ポリフィル for IE11 & Edge
		/* global objectFitImages */
		// objectFitImages();

		// スムーズスクロールの実装 headerをfixedしていない場合
		$('a[href^="#"]').on('click', function () {
			var speed = 500;
			var href = $(this).attr("href");
			var target = $(href == "#" || href == "" ? 'html' : href);
			var position = target.offset().top;
			$("html, body").animate({ scrollTop: position }, speed, "swing");
			return false;
		});

		// スムーズスクロールの実装 headerをfixedしている場合
		// var headerHeight = $('.c-header').innerHeight();
		// $('a[href^="#"]').on('click', function () {
		//     var speed = 500;
		//     var href = $(this).attr("href");
		//     var target = $(href == "#" || href == "" ? 'html' : href);
		//     var position = target.offset().top - headerHeight;
		//     $("html, body").animate({ scrollTop: position }, speed, "swing");
		//     return false;
		// });


		/**
		 * 分割したimportファイルの実行
		 * ※名称やコメントアウトの内容は実行ファイルの内容に合わせて適宜変更してください。
		 */
		// hogehoge();

	});

	$('.c-nav-slider a').click(function(e){
		e.preventDefault()
	})

	// slider
	let slider = $('.c-slick-slider');
	let sliderItem = $('.c-slick-slider__item');
	if(sliderItem.length > 1){
		slider.slick({
			//infinite: true,
			speed: 600,
			slidesToShow: 1,
			autoplay: false,
			autoplaySpeed:5000,
			fade: true,
			arrows: true,
			appendArrows: $('.news__arrows'),
			dots: true,
			asNavFor: '.c-nav-slider',
			dotsClass: 'c-dot-slider',
			responsive: [{

				breakpoint: 1024,
				settings: {
				  slidesToShow: 1
				}

			  }, {

				breakpoint: 600,
				settings: {
				  slidesToShow: 1
				}

			  }, {

				breakpoint: 300,
				settings: {
					slidesToShow: 1
				  }

			  }]
		});
	}


	$('.c-nav-slider').slick({
        autoplay: false,
		slidesToShow: 3,
  		slidesToScroll: 1,
        asNavFor: '.c-slick-slider',
        dots: false,
        focusOnSelect: true,
        variableWidth: true,
        arrows: true,
        prevArrow: '<div class="arrow-left arrow-cic list-right--icon"></div>',
        nextArrow: '<div class="arrow-right arrow-cic list-right--icon"></div>',
		centerMode: true,
		centerPadding: '50px',
    });


	// h3 not found
	$('.c-footer__top-item').each(function(){
		let findH3elem = $(this).find('h3')
		if(findH3elem.length == 0){
			$(this).css('margin-top', '56px')
		}
	})

  // Trigger Accordion

	$('.plus-icon').click(function () {
		console.log(122)
		//$(this).toggleClass('active').siblings($accorCnt).toggleClass('active').slideToggle();
	});


	console.log(1)
})();
