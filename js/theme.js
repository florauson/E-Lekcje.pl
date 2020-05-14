(function ($) {
  'use strict';

  var nav_offset_top = $('.header-top').height();
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
  $('.counter').countUp();
  navbarFixed();

  //   // Search Toggle
  //   $('#search_input_box').hide();
  //   $('#search').on('click', function () {
  //     $('#search_input_box').slideToggle('slow');
  //     $('#search_input').focus();
  //   });
  //   $('#close_search').on('click', function () {
  //     $('#search_input_box').slideUp('slow');
  //   });

  /*----------------------------------------------------*/
  /*  Clients Slider
    /*----------------------------------------------------*/
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


  /*----------------------------------------------------*/
  /*  Google map js
    /*----------------------------------------------------*/


  /*----------------------------------------------------*/
  /*  Google map js
    /*----------------------------------------------------*/


})(jQuery);