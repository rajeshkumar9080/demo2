(function ($) {
	'use strict';

	//===== Prealoder

	jQuery(window).on('load', function (event) {
		jQuery('#preloader').delay(500).fadeOut(500);
	});

	jQuery(document).on('ready', function () {
		/*---canvas menu activation---*/
		jQuery('.news-canvas_open').on('click', function () {
			jQuery('.news-offcanvas_menu_wrapper,.news-off_canvars_overlay').addClass(
				'news-active'
			);
		});

		jQuery('.news-canvas_close,.news-off_canvars_overlay').on(
			'click',
			function () {
				jQuery(
					'.news-offcanvas_menu_wrapper,.news-off_canvars_overlay'
				).removeClass('news-active');
			}
		);

		/*---Off Canvas Menu---*/
		var $offcanvasNav = jQuery('.news-offcanvas_main_menu'),
			$offcanvasNavSubMenu = $offcanvasNav.find('.news-sub-menu');
		$offcanvasNavSubMenu
			.parent()
			.prepend(
				'<span class="menu-expand"><i class="far fa-angle-down"></i></span>'
			);

		$offcanvasNavSubMenu.slideUp();

		$offcanvasNav.on('click', 'li a, li .menu-expand', function (e) {
			var $this = jQuery(this);
			if (
				$this
					.parent()
					.attr('class')
					.match(
						/\b(news-menu-item-has-children|has-children|has-sub-menu)\b/
					) &&
				($this.attr('href') === '#' || $this.hasClass('menu-expand'))
			) {
				e.preventDefault();
				if ($this.siblings('ul:visible').length) {
					$this.siblings('ul').slideUp('news-slow');
				} else {
					$this
						.closest('li')
						.siblings('li')
						.find('ul:visible')
						.slideUp('news-slow');
					$this.siblings('ul').slideDown('news-slow');
				}
			}
			if (
				$this.is('a') ||
				$this.is('span') ||
				$this.attr('clas').match(/\b(news-menu-expand)\b/)
			) {
				$this.parent().toggleClass('news-menu-open');
			} else if (
				$this.is('li') &&
				$this.attr('class').match(/\b('news-menu-item-has-children')\b/)
			) {
				$this.toggleClass('news-menu-open');
			}
		});

		//===== Service Active slick slider
		var topbar_headline1 = jQuery('.topbar-headline');
		topbar_headline1.slick({
			dots: false,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 3000,
			arrows: true,
			prevArrow: '<span class="prev"><i class="fas fa-angle-left"></i></span>',
			nextArrow: '<span class="next"><i class="fas fa-angle-right"></i></span>',
			speed: 0,
			slidesToShow: 1,
			slidesToScroll: 1,
			vertical: true,
			verticalSwiping: true,
		});

		//===== Service Active slick slider
		var topbar_headline2 = jQuery('.topbar-headline-2');
		topbar_headline2.slick({
			dots: false,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 3000,
			arrows: false,
			speed: 1300,
			slidesToShow: 1,
			slidesToScroll: 1,
			vertical: true,
			verticalSwiping: true,
		});

		//===== Service Active slick slider
		var featured_slider = jQuery('.featured-slider-item');
		featured_slider.slick({
			dots: false,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 3000,
			arrows: true,
			prevArrow: '<span class="prev"><i class="far fa-angle-left"></i></span>',
			nextArrow: '<span class="next"><i class="far fa-angle-right"></i></span>',
			speed: 1500,
			slidesToShow: 1,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1201,
					settings: {
						slidesToShow: 1,
					},
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 1,
					},
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
					},
				},
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 1,
					},
				},
			],
		});

		//===== Testimonial Content Slide slick slider
		var news_slider1 = jQuery('.news-slider-item');
		news_slider1.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 3000,
			arrows: true,
			prevArrow:
				'<span class="prev"><i class="fal fa-long-arrow-left"></i></span>',
			nextArrow:
				'<span class="next"><i class="fal fa-long-arrow-right"></i></span>',
			fade: true,
			asNavFor: '.news-slider-content-slider',
		});
		var news_slider2 = jQuery('.news-slider-content-slider');
		news_slider2.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 3000,
			asNavFor: '.news-slider-item',
			dots: false,
			centerMode: true,
			arrows: false,
			prevArrow:
				'<span class="prev"><i class="fal fa-arrow-left"></i> Prev</span>',
			nextArrow:
				'<span class="next">Next <i class="fal fa-arrow-right"></i></span>',
			centerPadding: '0',
			focusOnSelect: true,
		});

		//===== Service Active slick slider
		var topbar_headline = jQuery('.news-viewed-most-slide');
		topbar_headline.slick({
			dots: false,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 3000,
			arrows: true,
			prevArrow:
				'<span class="prev"><i class="fal fa-long-arrow-left"></i></span>',
			nextArrow:
				'<span class="next"><i class="fal fa-long-arrow-right"></i></span>',
			speed: 1500,
			slidesToShow: 1,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1201,
					settings: {
						slidesToShow: 1,
						arrows: false,
					},
				},
			],
		});

		//===== Service Active slick slider
		var topbar_headline = jQuery('.news-slider-2-item');
		topbar_headline.slick({
			dots: false,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 3000,
			arrows: false,
			prevArrow:
				'<span class="prev"><i class="fal fa-long-arrow-left"></i></span>',
			nextArrow:
				'<span class="next"><i class="fal fa-long-arrow-right"></i></span>',
			speed: 1500,
			slidesToShow: 3,
			slidesToScroll: 1,
			centerMode: true,
			centerPadding: '50px',
			responsive: [
				{
					breakpoint: 1201,
					settings: {
						arrows: false,
						slidesToShow: 2,
					},
				},
				{
					breakpoint: 992,
					settings: {
						arrows: false,
						slidesToShow: 2,
					},
				},
				{
					breakpoint: 768,
					settings: {
						arrows: false,
						slidesToShow: 1,
						centerPadding: '30px',
					},
				},
				{
					breakpoint: 576,
					settings: {
						arrows: false,
						slidesToShow: 1,
						centerPadding: '0px',
					},
				},
			],
		});

		//===== Service Active slick slider
		var topbar_headline = jQuery('.featured-slider-2');
		topbar_headline.slick({
			dots: false,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 3000,
			arrows: true,
			prevArrow: '<span class="prev"><i class="fal fa-angle-left"></i></span>',
			nextArrow: '<span class="next"><i class="fal fa-angle-right"></i></span>',
			speed: 1500,
			slidesToShow: 1,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1201,
					settings: {
						arrows: false,
					},
				},
			],
		});

		//===== Service Active slick slider
		var topbar_headline = jQuery('.top-news-2-slider');
		topbar_headline.slick({
			dots: false,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 3000,
			arrows: true,
			prevArrow: '<span class="prev"><i class="fal fa-angle-left"></i></span>',
			nextArrow: '<span class="next"><i class="fal fa-angle-right"></i></span>',
			speed: 1500,
			slidesToShow: 1,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1201,
					settings: {
						arrows: false,
					},
				},
			],
		});

		//===== Service Active slick slider
		var topbar_headline = jQuery('.social-news-slide');
		topbar_headline.slick({
			dots: false,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 3000,
			arrows: true,
			prevArrow: '<span class="prev"><i class="fal fa-angle-left"></i></span>',
			nextArrow: '<span class="next"><i class="fal fa-angle-right"></i></span>',
			speed: 1500,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1201,
					settings: {
						arrows: false,
					},
				},
				{
					breakpoint: 992,
					settings: {
						arrows: false,
						slidesToShow: 2,
					},
				},
				{
					breakpoint: 768,
					settings: {
						arrows: false,
						slidesToShow: 1,
					},
				},
			],
		});

		//===== Service Active slick slider
		var topbar_headline = jQuery('.blog-related-post-slide');
		topbar_headline.slick({
			dots: false,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 3000,
			arrows: false,
			speed: 1500,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1201,
					settings: {
						arrows: false,
						slidesToShow: 2,
					},
				},
				{
					breakpoint: 992,
					settings: {
						arrows: false,
						slidesToShow: 2,
					},
				},
				{
					breakpoint: 768,
					settings: {
						arrows: false,
						slidesToShow: 1,
					},
				},
			],
		});

		//===== shop details slide slick slider
		var topbar_headline1 = jQuery('.hero-slide-active');
		topbar_headline1.slick({
			slidesToShow: 1,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 3000,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.hero-portal-active',
		});
		var topbar_headline2 = jQuery('.hero-portal-active');
		topbar_headline2.slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 3000,
			asNavFor: '.hero-slide-active',
			dots: false,
			centerMode: false,
			arrows: false,
			centerPadding: '0',
			focusOnSelect: true,
			responsive: [
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 1,
					},
				},
			],
		});

		$('.newsr-popup-audio').magnificPopup({
			type: 'inline',
			midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
		});

		//===== Isotope Project 1

		jQuery('.container').imagesLoaded(function () {
			var $grid = jQuery('.grid').isotope({
				// options
				transitionDuration: '1s',
			});

			// filter items on button click
			jQuery('.project-menu ul').on('click', 'li', function () {
				var filterValue = jQuery(this).attr('data-filter');
				$grid.isotope({
					filter: filterValue,
				});
			});

			//for menu active class
			jQuery('.project-menu ul li').on('click', function (event) {
				jQuery(this).siblings('.active').removeClass('active');
				jQuery(this).addClass('active');
				event.preventDefault();
			});
		});

		//====== Magnific Popup

		jQuery('.video-popup').magnificPopup({
			type: 'iframe',
			// other options
		});

		//===== Magnific Popup

		jQuery('.image-popup').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true,
			},
		});

		//===== Search

		$('.news-search-open').on('click', function () {
			$('.news-search-box').addClass('open');
		});

		$('.news-search-close-btn').on('click', function () {
			$('.news-search-box').removeClass('open');
		});

		//===== NICE SELECT
		$('.select-item select').niceSelect();

		//===== Back to top

		// Show or hide the sticky footer button
		jQuery(window).on('scroll', function (event) {
			if (jQuery(this).scrollTop() > 600) {
				jQuery('.back-to-top').fadeIn(200);
			} else {
				jQuery('.back-to-top').fadeOut(200);
			}
		});

		//Animate the scroll to yop
		jQuery('.back-to-top').on('click', function (event) {
			event.preventDefault();

			jQuery('html, body').animate(
				{
					scrollTop: 0,
				},
				1500
			);
		});
	});
})(jQuery);
