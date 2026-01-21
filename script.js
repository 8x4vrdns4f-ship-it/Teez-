document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  // Hamburger dropdown
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

  // Auth section toggle
  const authSection = document.getElementById("authSection");
  const authTitle = document.getElementById("authTitle");
  const loginBtn = document.getElementById("loginBtn");
  const signupBtn = document.getElementById("signupBtn");

  function openAuth(type){
    authTitle.textContent = type === "login" ? "Login" : "Sign up";
    authSection.style.display = "flex";
    window.scrollTo({ top: authSection.offsetTop, behavior: "smooth" });
  }

  loginBtn.addEventListener("click", () => openAuth("login"));
  signupBtn.addEventListener("click", () => openAuth("signup"));
});
