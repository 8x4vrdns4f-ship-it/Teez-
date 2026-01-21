document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  // Hamburger
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

  // Auth section
  const authSection = document.getElementById("authSection");
  const authTitle = document.getElementById("authTitle");

  document.getElementById("loginBtn").onclick = e => {
    e.preventDefault();
    authTitle.textContent = "Login";
    authSection.style.display = "flex";
    window.scrollTo({ top: authSection.offsetTop, behavior: "smooth" });
  };

  document.getElementById("signupBtn").onclick = e => {
    e.preventDefault();
    authTitle.textContent = "Sign up";
    authSection.style.display = "flex";
    window.scrollTo({ top: authSection.offsetTop, behavior: "smooth" });
  };
});
