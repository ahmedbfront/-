
var validations ={
  email: [/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/, 'Please enter a valid email address']
};

// Check all the input fields of type email 
$("input[type=email]").change( function(){
  // Set the regular expression to validate the email 
  validation = new RegExp(validations['email'][0]);
  // validate the email value against the regular expression
  if (!validation.test(this.value)){
    // If the validation fails then we show the custom error message
    this.setCustomValidity(validations['email'][1]);
    return false;
  } else {
    // If the validation is successful you need to reset the custom error message
    this.setCustomValidity('');
  }
});


// Show Message When Filed Is Empty 
$('[required]').on('blur keyup', function () {

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
