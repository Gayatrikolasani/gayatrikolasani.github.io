// THEME TOGGLE (light / dark with localStorage)
(function () {
  const body = document.body;
  const toggleBtn = document.getElementById("themeToggle");

  if (!toggleBtn) return;

  const savedTheme = localStorage.getItem("gk-theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-theme");
    toggleBtn.textContent = "☀️";
  } else {
    toggleBtn.textContent = "🌙";
  }

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
    const isDark = body.classList.contains("dark-theme");
    toggleBtn.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("gk-theme", isDark ? "dark" : "light");
  });
})();

// SIMPLE FADE-IN ON SCROLL
const fadeEls = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
fadeEls.forEach((el)=>
   observer.observe(el));
