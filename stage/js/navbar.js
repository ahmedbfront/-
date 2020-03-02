
// Toogle Show Navbar 
$('.navbar-collapse .collapse-toggle').on('click', function () {

  if ($(window).width() < 992) {
  $('.navbar-collapse').collapse('toggle');
  }

});


$(".navbar .nav-item").on("click", function(e) {
  e.preventDefault();
  
  $(this).addClass("active").siblings().removeClass("active");
  
});
