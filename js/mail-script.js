// -------   Mail Send ajax

$(document).ready(function () {
  var form = $('#myForm'); // contact form
  var submit = $('.primary-btn'); // submit button
  var alert = $('.alert-msg'); // alert div for show alert message

  // form submit event
  form.on('submit', function (e) {
    e.preventDefault(); // prevent default form submit

    $.ajax({
      url: 'contact_process.php', // form action url
      type: 'POST', // form submit method get/post
      dataType: 'html', // request type html/json/xml
      data: form.serialize(), // serialize form data
      beforeSend: function () {
        alert.fadeOut();
        submit.html('Wysyłam....'); // change submit button text
      },
      success: function (data) {
        alert.html(data).fadeIn(); // fade in response data
        form.trigger('reset'); // reset form
        submit.html('Wysłano');
        submit.attr('disabled', 'disabled'); // reset submit button text
        submit.attr('style', 'background: rgba(61, 62, 63, 0.637);');
      },
      error: function (e) {
        console.log(e);
      },
    });
  });
});
