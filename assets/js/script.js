document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const submitBtn = document.getElementById("submitBtn");
  const btnText = submitBtn.querySelector(".btn-text");
  const spinner = submitBtn.querySelector(".spinner-border");
  const formStatus = document.getElementById("formStatus");
  const formContainer = form.closest(".col-lg-10");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Show loading state
    spinner.classList.remove("d-none");
    btnText.textContent = "Sending...";
    submitBtn.disabled = true;

    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData
    })
      .then(response => response.text())
      .then(responseText => {
        // Hide the form
        form.style.display = "none";

        // Create big success message
        const successMessage = document.createElement("div");
        successMessage.className = "text-center p-5 bg-light rounded shadow";
        successMessage.innerHTML = `
          <h2 class="text-success fw-bold mb-3">🎉 Thank You!</h2>
          <p class="fs-5">Your message has been successfully sent.</p>
          <p class="text-muted">We're thrilled to hear from you and will get back to you shortly.</p>
        `;

        formContainer.appendChild(successMessage);
      })
      .catch(error => {
        formStatus.style.display = "block";
        formStatus.className = "alert alert-danger mt-3";
        formStatus.textContent = "Oops! Something went wrong. Please try again.";
        console.error("Error:", error);
      })
      .finally(() => {
        spinner.classList.add("d-none");
        btnText.textContent = "Submit";
        submitBtn.disabled = false;
      });
  });
});
let lastScrollTop = 0;
  const header = document.querySelector('.main-header');

  window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Scrolling down
      header.style.top = "-100px";
    } else {
      // Scrolling up
      header.style.top = "0";
    }

    lastScrollTop = scrollTop;
  });
  // Add / remove the .scrolled class based on scroll position
const navbar = document.querySelector('.navbar');   // adjust selector if needed
const SCROLL_TRIGGER = 50;                          // px from top when swap happens

window.addEventListener('scroll', () => {
  if (window.scrollY > SCROLL_TRIGGER) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

const modal = document.getElementById('fullscreenModal');
  const modalImg = document.getElementById('fullscreenImg');

  document.querySelectorAll('.fullscreen-trigger').forEach(img => {
    img.addEventListener('click', function () {
      modalImg.src = this.src;
      modal.classList.add('show');
    });
  });

  function closeFullscreen() {
    modal.classList.remove('show');
    setTimeout(() => {
      modalImg.src = '';
    }, 200);
  }
