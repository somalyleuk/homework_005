export function initTheme() {
  const theme = localStorage.getItem("theme");
  const isDark = theme ? theme === "dark" : window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (isDark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}