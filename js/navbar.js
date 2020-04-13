// $('body').scrollspy({
//   target: '#navbarSupportedContent',
//   offset: 100,
// });

$(window).scroll(function () {
  var position = $(this).scrollTop();

  $('.section').each(function () {
    var target = $(this).offset().top;
    var id = $(this).attr('id');

    if (position >= target) {
      $('.nav> ul > li > a').removeClass('active');
      $('.nav> ul > li > a[href=#' + id + ']').addClass('active');
    }
  });
});
// $('a[href*="#"]:not([href="#"])').click(function () {
//   if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//     var target = $(this.hash);
//     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//     if (target.length) {
//       $('html,body').animate(
//         {
//           scrollTop: target.offset().top - 50,
//         },
//         1000
//       );
//       return false;
//     }
//   }
// });
