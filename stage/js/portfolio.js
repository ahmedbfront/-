
$(".port-nav li").on("click", function() {

  $(this).addClass("active").siblings().removeClass("active");

  $('.show-portfolio > section').hide();
  
  $($(this).data('section')).fadeIn(300);

});

if ($(window).width() <= 992) {
  $('.portfolio .port-nav').css('display', 'none');
}



