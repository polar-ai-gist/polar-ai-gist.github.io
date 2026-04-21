!function (window, document) {
  // Check if a theme is already chosen by the user
  var theme = window.localStorage.getItem('_theme');
  
  // If not, explicitly force dark mode as the default
  if (!theme) {
    window.localStorage.setItem('_theme', 'dark-mode');
    theme = 'dark-mode';
  }

  // Apply immediately to prevent Flash of Unstyled Content (FOUC)
  if (theme === 'dark-mode') {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
  } else {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
  }
}(window, document);
