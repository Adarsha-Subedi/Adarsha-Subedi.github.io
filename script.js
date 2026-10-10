(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector(".theme-toggle");
  const menuButton = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const savedTheme = localStorage.getItem("as-theme");
  if (savedTheme === "dark") root.dataset.theme = "dark";
  const updateThemeLabel = () => {
    const dark = root.dataset.theme === "dark";
    themeButton.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
    themeButton.title = dark ? "Switch to light theme" : "Switch to dark theme";
  };
  updateThemeLabel();
  themeButton.addEventListener("click", () => {
    const dark = root.dataset.theme !== "dark";
    if (dark) root.dataset.theme = "dark";
    else delete root.dataset.theme;
    localStorage.setItem("as-theme", dark ? "dark" : "light");
    updateThemeLabel();
  });
  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") !== "true";
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    navLinks.classList.toggle("open", open);
  });
  navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
  }));
  document.getElementById("year").textContent = new Date().getFullYear();
})();