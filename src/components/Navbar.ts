export function Navbar(container: HTMLElement) {
  const nav = document.createElement("nav");
  nav.className = "flex items-center justify-between px-8 py-4 bg-gray-100 dark:bg-gray-800";
  nav.innerHTML = `
    <a href="#/" class="text-2xl font-bold text-blue-600 dark:text-blue-300">FakeStore</a>
    <div class="flex gap-4 items-center">
      <a href="#/products" class="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Products</a>
      <button id="dark-toggle" class="ml-4 rounded bg-gray-300 dark:bg-gray-700 px-3 py-1 text-xs">
        <span class="hidden dark:inline">🌞</span>
        <span class="inline dark:hidden">🌙</span>
      </button>
    </div>
  `;
  container.appendChild(nav);

  const toggleBtn = nav.querySelector("#dark-toggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.documentElement.classList.toggle("dark");
      localStorage.setItem("theme", document.documentElement.classList.contains("dark") ? "dark" : "light");
    });
  }
}