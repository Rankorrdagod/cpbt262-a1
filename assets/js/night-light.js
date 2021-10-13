
 //Doc Load
 document.addEventListener("DOMContentLoaded", function(event) {
    document.documentElement.setAttribute("data-theme", "light");

    // button switcher

    const themeSwitcher = document.getElementById("theme-switcher");

    // When our button gets clicked
    themeSwitcher.onclick = function() {
     // default light theme first
      const currentTheme = document.documentElement.getAttribute("data-theme");

      // Switch between dark/light
      const switchToTheme = currentTheme === "dark" ? "light" : "dark"

      // Set our currenet theme to the new one
      document.documentElement.setAttribute("data-theme", switchToTheme);
    }
  });