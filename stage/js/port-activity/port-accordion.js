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




