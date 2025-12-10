// THEME TOGGLE + SIMPLE FADE-IN

(function () {
  const body = document.body;
  const toggleBtn = document.getElementById("themeToggle");

  // --------- THEME ----------
  const savedTheme = localStorage.getItem("gk-theme");

  if (savedTheme === "dark") {
    body.classList.add("dark-theme");
    if (toggleBtn) toggleBtn.textContent = "☀️";
  } else {
    if (toggleBtn) toggleBtn.textContent = "🌙";
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const isDark = body.classList.toggle("dark-theme");
      toggleBtn.textContent = isDark ? "☀️" : "🌙";
      localStorage.setItem("gk-theme", isDark ? "dark" : "light");
    });
  }

  // --------- FADE IN ON LOAD ----------
  window.addEventListener("load", () => {
    document
      .querySelectorAll(".fade-in")
      .forEach((el) => el.classList.add("show"));
  });
})();
