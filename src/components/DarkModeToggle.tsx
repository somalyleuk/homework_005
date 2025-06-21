const DarkModeToggle = {
  render: (): string => {
    return `
      <button id="darkModeToggle" class="p-2 rounded-full focus:outline-none">
        <svg id="darkIcon" class="w-6 h-6 text-gray-700 dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
        </svg>
        <svg id="lightIcon" class="w-6 h-6 text-yellow-300 hidden dark:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
        </svg>
      </button>
    `;
  },

  afterRender: async (): Promise<void> => {
    const darkModeToggle = document.getElementById(
      "darkModeToggle"
    ) as HTMLButtonElement;
    const darkIcon = document.getElementById(
      "darkIcon"
    ) as unknown as SVGElement;
    const lightIcon = document.getElementById(
      "lightIcon"
    ) as unknown as SVGElement;

    // Check for saved user preference or use OS preference
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const currentMode =
      localStorage.getItem("darkMode") || (prefersDark ? "dark" : "light");

    if (currentMode === "dark") {
      document.documentElement.classList.add("dark");
      darkIcon.classList.add("hidden");
      lightIcon.classList.remove("hidden");
    }

    darkModeToggle.addEventListener("click", () => {
      document.documentElement.classList.toggle("dark");

      if (document.documentElement.classList.contains("dark")) {
        localStorage.setItem("darkMode", "dark");
        darkIcon.classList.add("hidden");
        lightIcon.classList.remove("hidden");
      } else {
        localStorage.setItem("darkMode", "light");
        darkIcon.classList.remove("hidden");
        lightIcon.classList.add("hidden");
      }
    });
  },
};

export default DarkModeToggle;
