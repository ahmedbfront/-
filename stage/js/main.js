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




// document.addEventListener("DOMContentLoaded", function() {
//   var lazyloadImages = document.querySelectorAll("img.lazy");    
//   var lazyloadThrottleTimeout;
  
//   function lazyload () {
//     if(lazyloadThrottleTimeout) {
//       clearTimeout(lazyloadThrottleTimeout);
//     }    
    
//     lazyloadThrottleTimeout = setTimeout(function() {
//         var scrollTop = window.pageYOffset;
//         lazyloadImages.forEach(function(img) {
//             if(img.offsetTop < (window.innerHeight + scrollTop)) {
//               img.src = img.dataset.src;
//               img.classList.remove('lazy');
//             }
//         });
//         if(lazyloadImages.length == 0) { 
//           document.removeEventListener("scroll", lazyload);
//           window.removeEventListener("resize", lazyload);
//           window.removeEventListener("orientationChange", lazyload);
//         }
//     }, 20);
//   }
  
//   document.addEventListener("scroll", lazyload);
//   window.addEventListener("resize", lazyload);
//   window.addEventListener("orientationChange", lazyload);
// });


