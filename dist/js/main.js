
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

// Start Loding Site
$(window).load(function () {
  $(".preloader").addClass("loaded");
});
// End Loding Site

var settings = {
  async: true,
  crossDomain: true,
  url:
    "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=Canada",
  method: "GET",
  headers: {
    "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
    "x-rapidapi-key": "d0f48ca335mshc0c76b427f810adp10e416jsn6e3a2045216a",
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

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




// Start Accordion-1 
$(document).on('click', '#accordion-1>li>a', function () {

  $(this).siblings('.box').addClass('active');
  $(this).closest('li').siblings('li').find('.box').removeClass('active');

});

$('#accordion-1').on('click', 'li>a', function (e) {
  e.preventDefault();


  $('#accordion-1 li a.active').removeClass('active');
  $(this).addClass('active');


});
// End Accordion-1 

// Start Accordion-2 
var showAccordion = document.getElementsByClassName('show-accordion');

for ( i = 0; i < showAccordion.length; i++ ) {
  
  showAccordion[i].addEventListener('click', function () {

    this.classList.toggle('active');

    var desc = this.nextElementSibling;

    if ( desc.style.maxHeight ) {
      
      desc.style.maxHeight = null;

    } else {

      desc.style.maxHeight = desc.scrollHeight + 'px';

    }

  });
}
// End Accordion-2 





// Get Slider Items
var slideImg = Array.from(document.querySelectorAll('.slider-container img')),
  // Get Number Of Slides
  slideCount = slideImg.length,
  // Set Current Slide
  currentSlide = 1,
  // Slide Number Element
  slideNumberElement = document.getElementById('slide-number'),
  // Previous and Next Buttons
  nextButton = document.getElementById('next'),
  prevButton = document.getElementById('prev');

// Handle Click On Previous and Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Create The Main UL Element
var paginationElement = document.createElement('ul');

// Set ID On Create UL Element
paginationElement.setAttribute('id', 'pagination-ul');
paginationElement.setAttribute('class', 'list-unstyled');

// Create List Items Based On Slides Count
for (var i=1; i<=slideCount; i++) {

  // Create The LI
  var paginationItem = document.createElement('li');

  // Set Custom Atrribute 
  paginationItem.setAttribute('data-index', i);
  
  // Ste Item Content
  paginationItem.appendChild(document.createTextNode(i));

  // Append Items To The Main UL List
  paginationElement.appendChild(paginationItem);

}

// Add The Created UL Element To The Page
document.getElementById('indicators').appendChild(paginationElement);


// Get The New Created UL
//var paginationUl = document.getElementById('pagination-ul');

// Get Slider Items
var paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

for (var i=0; i < paginationBullets.length ; i++ ) {

  paginationBullets[i].onclick = function () {


    currentSlide = parseInt(this.getAttribute('data-index'));
    theChecker();

  }

}

// Trigger The Checker Function 
theChecker();

// Next Slide Function
function nextSlide() {
  if (nextButton.classList.contains('disabled')) {
  } else {
    currentSlide++;
    theChecker();
  }
}

// Prev Slide Function
function prevSlide() {
  if (prevButton.classList.contains('disabled')) {
  } else {
    currentSlide--;
    theChecker();
  }
}

// Create The Checker Function 
function theChecker() {
  // Set The z Number
  slideNumberElement.textContent = 'Slide #' + (currentSlide) + ' of ' + (slideCount);
  // Remove All Active Classes
    removeAllActive();
  // Ste Active Class On Current Slide
  slideImg[currentSlide -1].classList.add('active');
  // Set Active Class on current Pagintion Item
  paginationElement.children[currentSlide -1].classList.add('active');
  // Check if Current Slide The First
  if (currentSlide == 1) {
    // Add Disabled Class on Previous Button
    prevButton.classList.add('disabled');
  } else {
    // Remove Disabled Class From Previous Button
    prevButton.classList.remove('disabled');
  }
  // Check if Current Slide The Last
  if (currentSlide == slideCount) {
    // Add Disabled Class on Next Button
    nextButton.classList.add('disabled');
  } else {
    // Remove Disabled Class From Next Button
    nextButton.classList.remove('disabled');
  }
}
// Remove All Active Classes From Images and Pagination Bullets
function removeAllActive() {
  // Loop Through Images
  slideImg.forEach(function (img) {
    img.classList.remove('active');
  });
  paginationBullets.forEach(function (bullet) {
    bullet.classList.remove('active');

  });
}

