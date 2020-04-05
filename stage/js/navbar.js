// Show - Hide the Requested Page
$('.nav-btn').on('click' , function () {
  $('.home-site > section.active').removeClass('active');
  var attrSec = $(this).attr('href');
  $('.home-site').children(attrSec).addClass('active');
});

// Add Class Active On Navbar Home 
$(".navbar .nav-item").on("click", function(e) {
  e.preventDefault();
  $(this).addClass("active").siblings().removeClass("active");
});

// Add Class Active On Navbar Phone 
$('.nav-phone a').on('click', function (e) {
  e.preventDefault();
  $('.nav-phone').removeClass('clip');
  $('.nav-phone .navicon').removeClass('hav-icon');
});
$('.nav-phone .navicon').on('click', function () {
  $(this).toggleClass('hav-icon');
  $('.nav-phone').toggleClass('clip');
});