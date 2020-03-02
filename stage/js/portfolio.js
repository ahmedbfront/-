
$(".nav-port li").on("click", function() {

  $(this).addClass("active").siblings().removeClass("active");

  $('.show-portfolio > section').hide();
  
  $($(this).data('section')).fadeIn(300);


});



