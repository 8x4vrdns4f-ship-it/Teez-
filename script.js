const modal = document.getElementById("authModal");
const modalTitle = document.getElementById("modalTitle");

document.querySelectorAll("[data-modal]").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    modalTitle.textContent =
      btn.dataset.modal === "signup" ? "Sign up" : "Login";
    modal.classList.add("active");
  });
});

document.querySelector(".modal-close").addEventListener("click", () => {
  modal.classList.remove("active");
});
