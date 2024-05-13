
// navbar active 

document.addEventListener("DOMContentLoaded", function() {
    var path = window.location.pathname; // Get the current URL path
    var navLinks = document.querySelectorAll("#navbar ul li a"); // Get the navigation links

    navLinks.forEach(function(link) {
      var href = link.getAttribute("href"); // Get the href attribute of the link

      if (path === href) {
        link.classList.add("active"); // Add the active class to the link
      }
    });
  });






// order now button

$(document).ready(function(){
    // When the "Order Now" button is clicked
    $(".orderbtn").click(function(){
        // Show the order form
        $(".main-form-container").toggle();
    });
});

// Go back button


$(document).ready(function(){
    $(".arrow").click(function(){
        $(".main-form-container").hide(); // This line makes the button act as a "go back" button
    });

    // Add line underneath the button
    $("<hr>").insertAfter("#goback");
}); 


// Sign-up.sig-in form

const container= document.getElementById('main-form-container');
const registerBtn = document.getElementById('register');
const loginBtn= document.getElementById('login');


registerBtn.addEventListener('click', ()=>{
    container.classList.add("active");
});

loginBtn.addEventListener('click', ()=>{
    container.classList.remove("active");
});


// Vision Mision numbers

const min = 0;

// Define maximum values for each number
const maxNumbers = [10, 20, 15];

// Get the number display elements
const numberDisplays = document.querySelectorAll('.number-display');

// Function to gradually increase the number
function increaseNumber(display, max) {
    let currentNumber = parseInt(display.textContent);
    if (currentNumber < max) {
        currentNumber++;
        display.textContent = currentNumber;
        setTimeout(() => increaseNumber(display, max), 100); // Increase every 100 milliseconds
    }
}

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Start increasing the numbers when the section comes into view
window.addEventListener('scroll', () => {
    numberDisplays.forEach((display, index) => {
        const section = document.getElementById(`section${index + 1}`);
        if (isInViewport(section) && !section.dataset.increased) {
            section.dataset.increased = true;
            increaseNumber(display.querySelector('span'), maxNumbers[index]);
        }
    });
});




