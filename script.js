// Basic interactions: year injection and theme toggle.
// You can expand this with modal logic, routing, or animations.

document.addEventListener('DOMContentLoaded', () => {
  // Year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Theme toggle (keeps very small state in localStorage)
  const toggle = document.getElementById('themeToggle');
  const root = document.documentElement;
  const body = document.body;
  const KEY = 'site-theme';

  function applyTheme(t) {
    body.classList.toggle('theme-dark', t === 'dark');
    body.classList.toggle('theme-light', t === 'light');
  }

  function getStored() {
    try {
      return localStorage.getItem(KEY);
    } catch (e) {
      return null;
    }
  }

  function setStored(v) {
    try {
      localStorage.setItem(KEY, v);
    } catch (e) {}
  }

  let theme = getStored() || 'dark';
  applyTheme(theme);

  if (toggle) {
    toggle.addEventListener('click', () => {
      theme = theme === 'dark' ? 'light' : 'dark';
      applyTheme(theme);
      setStored(theme);
    });
  }
});