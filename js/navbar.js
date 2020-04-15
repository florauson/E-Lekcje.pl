

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

