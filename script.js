/* ===========================================
   THEME TOGGLE (Light / Dark Mode)
   =========================================== */

const toggle = document.getElementById("themeToggle");

if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    // Toggle icon 🌙 / ☀️
    if (document.body.classList.contains("dark-theme")) {
      toggle.textContent = "☀️";
    } else {
      toggle.textContent = "🌙";
    }
  });
}

/* ===========================================
   FADE-IN ANIMATION ON PAGE LOAD
   =========================================== */
const fadeElements = document.querySelectorAll(".fade-in");

fadeElements.forEach((el, index) => {
  setTimeout(() => el.classList.add("show"), 120 + index * 90);
});

/* ===========================================
   NAVBAR ACTIVE LINK HIGHLIGHT
   =========================================== */
const navLinks = document.querySelectorAll(".nav-links a");
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

/* ===========================================
   SMOOTH SCROLL FOR INTERNAL LINKS
   =========================================== */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

/* ===========================================
   MOBILE MENU TOGGLE
   =========================================== */
const mobileBtn = document.getElementById("mobileMenuBtn");
const mobileNav = document.getElementById("mobileNav");

if (mobileBtn && mobileNav) {
  mobileBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("open");
  });
}
