document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  const menuToggle = document.getElementById("menuToggle");
  const authMenu = document.getElementById("authMenu");
  const buttons = authMenu.querySelectorAll("button");

  let loggedIn = localStorage.getItem("loggedIn") === "true";

  function updateMenu(){
    authMenu.querySelector('[data-action="signup"]').classList.toggle("hidden", loggedIn);
    authMenu.querySelector('[data-action="login"]').classList.toggle("hidden", loggedIn);
    authMenu.querySelector('[data-action="active"]').classList.toggle("hidden", !loggedIn);
    authMenu.querySelector('[data-action="logout"]').classList.toggle("hidden", !loggedIn);
  }

  updateMenu();

  menuToggle.addEventListener("click", e => {
    e.stopPropagation();
    authMenu.style.display = authMenu.style.display === "flex" ? "none" : "flex";
  });

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const action = btn.dataset.action;

      if(action === "login" || action === "signup"){
        loggedIn = true;
        localStorage.setItem("loggedIn", "true");
      }

      if(action === "logout"){
        loggedIn = false;
        localStorage.setItem("loggedIn", "false");
      }

      updateMenu();
      authMenu.style.display = "none";
    });
  });

  document.addEventListener("click", () => {
    authMenu.style.display = "none";
  });
});
