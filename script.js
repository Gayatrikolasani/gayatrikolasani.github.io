/* -----------------------------------
   THEME TOGGLE (Light / Dark Mode)
----------------------------------- */

const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  themeToggle.textContent = "☀️";
} else {
  body.classList.remove("dark");
  themeToggle.textContent = "🌙";
}

// Toggle theme
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    themeToggle.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    themeToggle.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});


/* -----------------------------------
   FLOATING ROSE-GOLD SHAPES ANIMATION
----------------------------------- */

function createFloatingShape() {
  const shape = document.createElement("div");
  shape.classList.add("floating-shape");

  // random size + position
  const size = Math.random() * 80 + 40;
  const left = Math.random() * 90;

  shape.style.width = `${size}px`;
  shape.style.height = `${size}px`;
  shape.style.left = `${left}vw`;

  document.body.appendChild(shape);

  // Remove shape after animation ends
  setTimeout(() => {
    shape.remove();
  }, 9000);
}

// Create shapes every 1.4s
setInterval(createFloatingShape, 1400);


/* -----------------------------------
   SCROLL REVEAL ANIMATION
----------------------------------- */

const elements = document.queryS
