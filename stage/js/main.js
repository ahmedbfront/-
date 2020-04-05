/*global $, alert, console */
$(function () {
  "use strict";

  var $wrap = $(".home-site"),
    scrolling = false;

  /* NAV CIRCLE DIRECT PAGE BTN */
  $(document).on("click", ".nav-btn", function () {
    if (!scrolling) {
      var target = $(this).attr("data-target");
      if (Modernizr.csstransforms) {
        $wrap.removeClass(function (index, css) {
          return (css.match(/(^|\s)active-page\S+/g) || []).join(" ");
        });
        $wrap.addClass("active-page" + target);
      } else {
        $wrap.animate({ top: "-" + (target - 1) * 100 + "%" }, 1000);
      }
    }
  });

});

// Start Loding Site
$(window).load(function () {
  $(".preloader").addClass("loaded");
});
// End Loding Site

