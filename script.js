// THEME TOGGLE + PERSIST
(function () {
  const body = document.body;
  const toggleBtn = document.getElementById("themeToggle");

  if (!toggleBtn) return;

  // Load saved theme
  const saved = localStorage.getItem("gk-theme");
  if (saved === "dark") {
    body.classList.add("dark-theme");
    toggleBtn.textContent = "☀️";
  }

  toggleBtn.addEventListener("click", () => {
    const isDark = body.classList.toggle("dark-theme");
    toggleBtn.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("gk-theme", isDark ? "dark" : "light");
  });
})();

// MOBILE NAV TOGGLE
(function () {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");

  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
  });

  // close menu when clicking a link (on mobile)
  links.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() === "a") {
      document.body.classList.remove("nav-open");
    }
  });
})();

// SIMPLE FADE-IN ON LOAD
window.addEventListener("load", () => {
  document.querySelectorAll(".fade-in").forEach((el) => {
    requestAnimationFrame(() => {
      el.classList.add("show");
    });
  });
});
