document.addEventListener("DOMContentLoaded", function() {
  const nameInput = document.getElementById("name");
  const phoneInput = document.getElementById("phone");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const submitBtn = document.getElementById("submitBtn");

  function validateForm() {
    if (nameInput.value && phoneInput.value && emailInput.value) {
      submitBtn.disabled = false;
    } else {
      submitBtn.disabled = true;
    }
  }

  function allowOnlyNumbers(event) {
    this.value = this.value.replace(/\D/g, '');
  }

  nameInput.addEventListener("input", validateForm);
  phoneInput.addEventListener("input", validateForm);
  emailInput.addEventListener("input", validateForm);
  messageInput.addEventListener("input", validateForm);

  phoneInput.addEventListener("input", allowOnlyNumbers);

  emailjs.init("g1lF84BiV4e5vy1gt");

  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_rfi5ixu', 'template_idrj5b5', this)
      .then(function() {
        alert('Pesan Berhasil Masuk Dalam Antrean, Mohon Tunggu Beberapa Waktu Team Kami Akan Menghubungi Kembali!');
        // Reset the form fields
        document.getElementById('contactForm').reset();
        // Disable the submit button
        submitBtn.disabled = true;
      }, function(error) {
        alert('Pengiriman Pesan Gagal. Tolong Coba Beberapa Saat Lagi.');
      });
  });
});
