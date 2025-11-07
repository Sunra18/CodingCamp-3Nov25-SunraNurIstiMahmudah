welcomeMessage();

function welcomeMessage() {
    let name = prompt("Please enter your name:");

    if (name != null)   {
        document.getElementById("welcome-speech").innerHTML = "Hello " + name +"👋";
    } 
}

function valiadteForm() {
    let name = document.forms["contact-form"]["name"].value;
    let email = document.forms["contact-form"]["email"].value;
    let message = document.forms["contact-form"]["message"].value;
}

// ============ FORM VALIDATION ============
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".message-section form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop form dari langsung submit

    // Ambil input
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    // Ambil nilai
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Flag untuk validasi
    let isValid = true;

    // Hapus pesan error lama
    document.querySelectorAll(".error-msg").forEach(el => el.remove());

    // === 1. Validasi Nama ===
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      showError(nameInput, "Tidak boleh mengandung angka");
      isValid = false;
    }

    // === 2. Validasi Email ===
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showError(emailInput, "Gunakan alamat email anda. Contoh: test@mail.com");
      isValid = false;
    }

    // === 3. Validasi Pesan ===
    if (message === "") {
      showError(messageInput, "Isian tidak boleh kosong");
      isValid = false;
    }

    // === 4. Submit Jika Semua Valid ===
    if (isValid) {
      alert("Pesan kamu berhasil dikirim! 💌");
      form.reset();
    }
  });

  // Fungsi untuk menampilkan pesan error
  function showError(input, message) {
    const error = document.createElement("p");
    error.className = "error-msg";
    error.style.color = "red";
    error.style.fontSize = "14px";
    error.style.marginTop = "5px";
    error.textContent = message;
    input.insertAdjacentElement("afterend", error);
  }
});
