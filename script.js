const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
    });
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;

    const data = new FormData(contactForm);
    const subject = encodeURIComponent(data.get("subject"));
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`
    );
    const status = document.querySelector("#form-status");
    if (status) status.textContent = "Opening your email application...";
    window.location.href = `mailto:biwott.tech@gmail.com?subject=${subject}&body=${body}`;
  });
}
// Inline CV Preview Dropdown

const cvToggle = document.getElementById("cv-dropdown-toggle");
const cvPreview = document.getElementById("cv-preview");
const cvClose = document.getElementById("cv-close");
const cvArrow = document.getElementById("cv-arrow");

if (cvToggle && cvPreview && cvClose) {

  // Open and toggle CV preview
  cvToggle.addEventListener("click", function () {

    const isOpen = !cvPreview.hidden;

    cvPreview.hidden = isOpen;

    cvToggle.setAttribute("aria-expanded", !isOpen);

    if (cvArrow) {
      cvArrow.textContent = isOpen ? "⌄" : "⌃";
    }

  });

  // Close CV preview
  cvClose.addEventListener("click", function () {

    cvPreview.hidden = true;

    cvToggle.setAttribute("aria-expanded", "false");

    if (cvArrow) {
      cvArrow.textContent = "⌄";
    }

  });

  // Close when clicking outside
  document.addEventListener("click", function (event) {

    if (!cvPreview.contains(event.target) &&
        !cvToggle.contains(event.target)) {

      cvPreview.hidden = true;

      cvToggle.setAttribute("aria-expanded", "false");

      if (cvArrow) {
        cvArrow.textContent = "⌄";
      }

    }

  });

  // Close using Escape key
  document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

      cvPreview.hidden = true;

      cvToggle.setAttribute("aria-expanded", "false");

      if (cvArrow) {
        cvArrow.textContent = "⌄";
      }

    }

  });

}
