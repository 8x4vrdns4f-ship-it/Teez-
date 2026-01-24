function mockLogin(e) {
  e.preventDefault();

  // MOCK RULE:
  // Always log in as staff for now
  window.location.href = "dashboard-staff.html";
}

function mockActivate(e) {
  e.preventDefault();

  // MOCK RULE:
  // Activation always succeeds
  window.location.href = "dashboard-owner.html";
}
