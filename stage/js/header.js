if ($(".main-text").length) {
  $(".main-text").animatedHeadline({
    animationType: "clip"
  });
}



$('.header .call-to-actions-home .section-about').on("click", function(e) {
  e.preventDefault();

  $('.navbar .section-about').addClass("active").siblings().removeClass("active");
  
});

$('.header .call-to-actions-home .section-port').on("click", function(e) {
  e.preventDefault();

  $('.navbar .section-port').addClass("active").siblings().removeClass("active");



});
