(function ($) {
  'use strict';

  // var nav_offset_top = $('.header-top').height();
  var nav_offset_top = 26;
  // zrobione na sztywno, bo nie chciał sie pasek dobrze układać
  /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

  //* Navbar Fixed

  function navbarFixed() {
    if ($('.header_area').length) {
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $('.header_area').addClass('navbar_fixed');
        } else {
          $('.header_area').removeClass('navbar_fixed');
        }
      });
    }
  }

  navbarFixed();

  function active_testimonial() {
    if ($('.active_testimonial').length) {
      $('.active_testimonial').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        nav: false,
        autoplay: false,
        smartSpeed: 1500,
        dots: false,
        responsiveClass: true,
        thumbs: true,
        thumbsPrerendered: true,
      });
    }
  }
  active_testimonial();


})(jQuery);