// BookSuite Theme System — include on every portal page
(function() {
  var themes = {
    dark: {
      bg: "#000000", bgGrad: "#000000",
      surface: "rgba(255,255,255,0.04)", surfaceSolid: "#0a0a0a",
      border: "rgba(255,255,255,0.1)", text: "#eaf2ff", textSecondary: "#b9c7da",
      muted: "#6b7f96", accent: "#5ec2ff", accentHover: "#3da8e8",
      accentGlow: "rgba(94,194,255,0.12)", cardHover: "rgba(255,255,255,0.08)",
      inputBg: "rgba(255,255,255,0.05)", inputBorder: "rgba(255,255,255,0.15)",
      modalBg: "#111111", scrollTrack: "#0a0a0a", scrollThumb: "#222222"
    },
    light: {
      bg: "#f5f7fb", bgGrad: "linear-gradient(180deg, #ffffff, #f0f2f8)",
      surface: "#ffffff", surfaceSolid: "#ffffff",
      border: "#e2e6ee", text: "#1a1d2e", textSecondary: "#555e70",
      muted: "#8891a4", accent: "#2b7fd4", accentHover: "#1e6ab8",
      accentGlow: "rgba(43,127,212,0.1)", cardHover: "#f0f4ff",
      inputBg: "#f8f9fc", inputBorder: "#d1d5e0",
      modalBg: "#ffffff", scrollTrack: "#ebedf2", scrollThumb: "#c0c5d0"
    },
    midnight: {
      bg: "#0f0f2d", bgGrad: "radial-gradient(circle at top left, #1a1a4a, #0f0f2d 70%)",
      surface: "rgba(100,100,220,0.08)", surfaceSolid: "#16163d",
      border: "rgba(120,120,220,0.15)", text: "#e0e0ff", textSecondary: "#a0a0d0",
      muted: "#7070a0", accent: "#8b7cf7", accentHover: "#7366e0",
      accentGlow: "rgba(139,124,247,0.12)", cardHover: "rgba(139,124,247,0.08)",
      inputBg: "rgba(100,100,220,0.06)", inputBorder: "rgba(120,120,220,0.2)",
      modalBg: "#1a1a42", scrollTrack: "#12123a", scrollThumb: "#3a3a6e"
    },
    emerald: {
      bg: "#041210", bgGrad: "radial-gradient(circle at top left, #0a2a22, #041210 70%)",
      surface: "rgba(52,211,153,0.05)", surfaceSolid: "#0a1f1a",
      border: "rgba(52,211,153,0.12)", text: "#e8f5f0", textSecondary: "#8cbfab",
      muted: "#5a8a78", accent: "#34d399", accentHover: "#2ab882",
      accentGlow: "rgba(52,211,153,0.12)", cardHover: "rgba(52,211,153,0.08)",
      inputBg: "rgba(52,211,153,0.04)", inputBorder: "rgba(52,211,153,0.15)",
      modalBg: "#0a201a", scrollTrack: "#071a14", scrollThumb: "#1a4a3a"
    },
    sunset: {
      bg: "#140a08", bgGrad: "radial-gradient(circle at top left, #2e1510, #140a08 70%)",
      surface: "rgba(255,120,60,0.05)", surfaceSolid: "#1e100c",
      border: "rgba(255,120,60,0.12)", text: "#fef0e8", textSecondary: "#c4a090",
      muted: "#8a6858", accent: "#ff7a45", accentHover: "#e56830",
      accentGlow: "rgba(255,122,69,0.12)", cardHover: "rgba(255,122,69,0.08)",
      inputBg: "rgba(255,120,60,0.04)", inputBorder: "rgba(255,120,60,0.15)",
      modalBg: "#1e120e", scrollTrack: "#160d0a", scrollThumb: "#4a2a1e"
    },
    rose: {
      bg: "#faf5f7", bgGrad: "linear-gradient(180deg, #fff8fa, #f5edf0)",
      surface: "#ffffff", surfaceSolid: "#ffffff",
      border: "#eed5de", text: "#2d1f28", textSecondary: "#6d5565",
      muted: "#9a8590", accent: "#d44a7a", accentHover: "#b93d68",
      accentGlow: "rgba(212,74,122,0.1)", cardHover: "#fff0f5",
      inputBg: "#fdf6f8", inputBorder: "#e0c8d2",
      modalBg: "#ffffff", scrollTrack: "#f0e5ea", scrollThumb: "#d4b0c0"
    }
  };
  var name = localStorage.getItem("bs-theme") || "dark";
  var t = themes[name] || themes.dark;
  var s = document.documentElement.style;
  s.setProperty("--bs-bg", t.bg);
  s.setProperty("--bs-bg-grad", t.bgGrad);
  s.setProperty("--bs-surface", t.surface);
  s.setProperty("--bs-surface-solid", t.surfaceSolid);
  s.setProperty("--bs-border", t.border);
  s.setProperty("--bs-text", t.text);
  s.setProperty("--bs-text-secondary", t.textSecondary);
  s.setProperty("--bs-muted", t.muted);
  s.setProperty("--bs-accent", t.accent);
  s.setProperty("--bs-accent-hover", t.accentHover);
  s.setProperty("--bs-accent-glow", t.accentGlow);
  s.setProperty("--bs-card-hover", t.cardHover);
  s.setProperty("--bs-input-bg", t.inputBg);
  s.setProperty("--bs-input-border", t.inputBorder);
  s.setProperty("--bs-modal-bg", t.modalBg);
  s.setProperty("--bs-scroll-track", t.scrollTrack);
  s.setProperty("--bs-scroll-thumb", t.scrollThumb);
  document.body.style.background = t.bgGrad;
  document.body.style.color = t.text;
  // Expose for settings page
  window.__bsThemes = themes;
  window.__bsApplyTheme = function(n) {
    var t2 = themes[n] || themes.dark;
    var s2 = document.documentElement.style;
    Object.keys(t2).forEach(function(k) {
      var varName = "--bs-" + k.replace(/([A-Z])/g, "-$1").toLowerCase();
      s2.setProperty(varName, t2[k]);
    });
    // Set the main ones explicitly
    s2.setProperty("--bs-bg", t2.bg);
    s2.setProperty("--bs-bg-grad", t2.bgGrad);
    s2.setProperty("--bs-surface", t2.surface);
    s2.setProperty("--bs-surface-solid", t2.surfaceSolid);
    s2.setProperty("--bs-border", t2.border);
    s2.setProperty("--bs-text", t2.text);
    s2.setProperty("--bs-text-secondary", t2.textSecondary);
    s2.setProperty("--bs-muted", t2.muted);
    s2.setProperty("--bs-accent", t2.accent);
    s2.setProperty("--bs-accent-hover", t2.accentHover);
    s2.setProperty("--bs-accent-glow", t2.accentGlow);
    s2.setProperty("--bs-card-hover", t2.cardHover);
    s2.setProperty("--bs-input-bg", t2.inputBg);
    s2.setProperty("--bs-input-border", t2.inputBorder);
    s2.setProperty("--bs-modal-bg", t2.modalBg);
    s2.setProperty("--bs-scroll-track", t2.scrollTrack);
    s2.setProperty("--bs-scroll-thumb", t2.scrollThumb);
    document.body.style.background = t2.bgGrad;
    document.body.style.color = t2.text;
  };
})();
