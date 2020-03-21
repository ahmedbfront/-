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

