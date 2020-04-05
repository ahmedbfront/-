
$(".port-nav li").on("click", function() {

  $(this).addClass("active").siblings().removeClass("active");

  $('.show-portfolio > div').hide();
  console.log($($(this).data('section')));
  $($(this).data('section')).fadeIn(300);

});

if ($(window).width() <= 992) {
  $('.portfolio .port-nav').remove();
  $('.section-hover, .section-activity').remove();
}



