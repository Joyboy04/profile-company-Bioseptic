document.addEventListener("DOMContentLoaded", function() {
    const nameInput = document.getElementById("name");
    const phoneInput = document.getElementById("phone");
    const emailInput = document.getElementById("email");
    const submitBtn = document.getElementById("submitBtn");
  
    function validateForm() {
      if (nameInput.value && phoneInput.value && emailInput.value) {
        submitBtn.disabled = false;
      } else {
        submitBtn.disabled = true;
      }
    }
  
    nameInput.addEventListener("input", validateForm);
    phoneInput.addEventListener("input", validateForm);
    emailInput.addEventListener("input", validateForm);
  
    emailjs.init("4LSxohasLD-9JQmeE");
  
    document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault();
  
      emailjs.sendForm('service_x0fl0qk', 'template_t9othpb', this)
        .then(function() {
          alert('Your message has been sent successfully!');
        }, function(error) {
          alert('Failed to send your message. Please try again later.');
        });
    });
  });
  