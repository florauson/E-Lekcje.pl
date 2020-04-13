$(document).ready(function(){
 var form2 = $('#contactForm'); // contact form
  var submit = $('.primary-btn.kontakt'); // submit button
  var alert = $('.alert-msg'); // alert div for show alert message
    (function($) {
        "use strict";

    
    // jQuery.validator.addMethod("answercheck", function (value, element) {
    //     return this.optional(element) || /^\bcat\b$/.test(value)
    // }, "type the correct answer -_-");

    // validate contactForm form
    form2.on('submit', function (e) {
        e.preventDefault(); // prevent default form subm
    })
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                number: {
                    required: true,
                    minlength: 5
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 5
                }
            },
            messages: {
                name: {
                    required: "Musisz podać imię",
                    minlength: "Imię musi składać się z co najmniej 2 znaków"
                },
                subject: {
                    required: "Podaj temat wiadomości",
                    minlength: "Temat musi zawierać co najmniej 4 znaki"
                },
                number: {
                    required: "come on, you have a number, don't you?",
                    minlength: "your Number must consist of at least 5 characters"
                },
                email: {
                    required: "Podaj swój adres e-mail",
                    email: "Podaj poprawny adres e-mail"
                },
                message: {
                    required: "Podaj treść wiadomości",
                    minlength: "Wiadomość musi zawierać co najmniej 5 znaków"
                }
            },
            highlight: function(element, errorClass) {
                $(element).addClass(errorClass);
                
              },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"contact_process2.php",
                    success: function() {
                        $('#contactForm :input').attr('disabled', 'disabled');
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn()
                            $('.modal').modal('hide');
                            $('#success').modal('show');
                            submit.attr('disabled', 'disabled'); // reset submit button text
                            submit.attr('style', 'background: rgba(61, 62, 63, 0.637);');
                        })
                    },
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $('#error').fadeIn()
                            $('.modal').modal('hide');
		                	$('#error').modal('show');
                        })
                    }
                })
            }
        })
    })
        
 })(jQuery)
})