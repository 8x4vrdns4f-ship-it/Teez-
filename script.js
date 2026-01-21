document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  const toggle = document.getElementById("menuToggle");
  const dropdown = document.getElementById("menuDropdown");

  toggle.addEventListener("click", e => {
    e.stopPropagation();
    dropdown.style.display =
      dropdown.style.display === "flex" ? "none" : "flex";
  });

  document.addEventListener("click", () => {
    dropdown.style.display = "none";
  });
});
