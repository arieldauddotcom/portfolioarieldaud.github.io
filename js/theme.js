/* Theme Switching Logic - Ariel Daud Portfolio */
(function() {
  const THEME_KEY = 'arieldaud_theme';
  
  function getInitialTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved) {
      return saved;
    }
    // Default to light theme per user request ("temanya colornya terang aja")
    return 'light';
  }
  
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
    
    // Update theme toggle icons if loaded
    const toggleIcon = document.getElementById('theme-icon');
    if (toggleIcon) {
      if (theme === 'dark') {
        toggleIcon.className = 'fa-solid fa-sun';
      } else {
        toggleIcon.className = 'fa-solid fa-moon';
      }
    }
  }
  
  // Apply initial theme immediately to prevent flash
  const currentTheme = getInitialTheme();
  applyTheme(currentTheme);
  
  window.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const activeTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const nextTheme = activeTheme === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme);
      });
    }
  });
})();
