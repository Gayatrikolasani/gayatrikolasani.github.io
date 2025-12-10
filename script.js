// script.js
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const themeToggle = document.getElementById("themeToggle");
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  /* ---------------------------
     THEME: load saved preference
  ---------------------------- */
  const savedTheme = localStorage.getItem("gk-theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-theme");
  }

  // set correct icon
  function setThemeIcon() {
    if (!themeToggle) return;
    const isDark = body.classList.contains("dark-theme");
    themeToggle.textContent = isDark ? "☀️" : "🌙";
  }
  setThemeIcon();

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      body.classList.toggle("dark-theme");
      const isDark = body.classList.contains("dark-theme");
      localStorage.setItem("gk-theme", isDark ? "dark" : "light");
      setThemeIcon();
    });
  }

  /* ---------------------------
     MOBILE NAV TOGGLE
  ---------------------------- */
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    // Close menu when a link is clicked (on small screens)
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
          navLinks.classList.remove("active");
        }
      });
    });
  }
});
