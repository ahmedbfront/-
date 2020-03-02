
var email = document.getElementById('formEmail');


// Show Message When Filed Is Empty 
$('[required]').on('blur', function () {

  if($(this).val() == '') {
    $(this).next('span').fadeIn();
  } else {
    $(this).next('span').fadeOut();
  }

});


$('.auto-direction').on('keyup', function () {

  if ($(this).val().charCodeAt(0) < 200) {
    $(this).css('direction', 'ltr');
  } else {
    $(this).css('direction', 'rtl');
  }

});

// function isEmail(email) {
//   return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
// }
