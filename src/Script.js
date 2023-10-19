

// JavaScript function to toggle the popup text when clicking the image
function togglePopupText(element) {
  var popupText = element.querySelector('.popup-text');
  popupText.classList.toggle('show');

  if (popupText.classList.contains('show')) {
      // If the popup is shown, set a timeout to hide it after 5 seconds
      setTimeout(function () {
          popupText.classList.remove('show');
      }, 3000); // 3000 milliseconds (5 seconds)
  }
}

// JavaScript to show the initial popup text for 5 seconds after the page loads
document.addEventListener('DOMContentLoaded', function () {
  var popupText = document.querySelector('.popup-text');
  popupText.classList.add('show');

  setTimeout(function () {
      // Hide the initial popup text after 5 seconds
      popupText.classList.remove('show');
  }, 3000); // 3000 milliseconds (5 seconds)
});

$(document).ready(function () {
  $("#contactForm").submit(function (e) {
      e.preventDefault();
      
      $.ajax({
          type: "POST",
          url: "send_email.php",
          data: $(this).serialize(),
          success: function (response) {
              // Display success message or handle errors
              $("#contactForm")[0].reset(); // Clear the form
          }
      });
  });
});
 

  