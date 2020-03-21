
// Toogle Show Navbar 
$('.navbar-collapse .collapse-toggle').on('click', function () {

  if ($(window).width() < 992) {
  $('.navbar-collapse').collapse('toggle');
  }

});

// Add Class Active On Navbar Home 
$(".navbar .nav-item").on("click", function(e) {
  e.preventDefault();
  $(this).addClass("active").siblings().removeClass("active");
});

$('.nav-phone .navicon').on('click', function () {

  $(this).toggleClass('hav-icon');

  $('.nav-phone').toggleClass('clip');

});


$('.nav-phone a').on('click', function (e) {
  e.preventDefault();

  $('.nav-phone').removeClass('clip');

  $('.nav-phone .navicon').removeClass('hav-icon');

});