$(document).foundation()

// ===== Scroll to Top ==== 
$(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function () {      // When arrow is clicked
    $('body,html').animate({
        scrollTop: 0                       // Scroll to top of body
    }, 500);
});


// Define slideIndex globally
var slideIndex = {};

// Define image order for each modal


// Define slideIndex globally
var slideIndex = {};

// Function to open the modal and start the slideshow for a given modal ID
function openAndShowModal(modalId, modalData) {
    // Open the modal
    $('#' + modalId).foundation('open');

    // Start slideshow for the given modal ID
    slideIndex[modalId] = 1;
    showSlides(slideIndex[modalId], modalId, modalData);
}

// Next/previous controls for slideshow
function plusSlides(n, modalId, modalData) {
    showSlides(slideIndex[modalId] += n, modalId, modalData);
}

// Display the slides for a given modal ID
function showSlides(n, modalId, modalData) {
    var i;
    var slides = document.getElementById(modalId + "-slides");
    if (!slideIndex[modalId]) {
        slideIndex[modalId] = 1;
    }
    if (n > modalData[modalId].length) { slideIndex[modalId] = 1; }
    if (n < 1) { slideIndex[modalId] = modalData[modalId].length; }
    slides.innerHTML = ""; // Clear existing slides
    var currentData = modalData[modalId][slideIndex[modalId] - 1];
    var img = document.createElement("img");
    img.setAttribute("class", "lazyload");
    img.setAttribute("data-src", currentData.src);
    slides.appendChild(img);

    // Add description
    var description = document.createElement("p");
    description.innerHTML = currentData.description;
    slides.appendChild(description);

    // Add more info link if moreInfo exists
    if (currentData.moreInfo) {
		var moreInfoLink = document.createElement("p");
		moreInfoLink.innerHTML = '<p class="right"><small><a href="#" data-open="modalMessaggio" class="href-menu">' + currentData.moreInfo + '</a></small></p>';
		slides.appendChild(moreInfoLink.firstChild);
	}

}



