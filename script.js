function openLogin() {
  document.getElementById("loginModal").style.display = "flex";
}

function closeLogin() {
  document.getElementById("loginModal").style.display = "none";
}

function openTry() {
  alert("Try Now page will open here (mock)");
}

function mockLogin() {
  alert("Mock login successful. Dashboard will load.");
  closeLogin();
}
