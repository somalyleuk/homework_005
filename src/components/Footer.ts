export function Footer(container: HTMLElement) {
  const footer = document.createElement("footer");
  footer.className = "px-8 py-5 bg-gray-100 dark:bg-gray-800 text-center text-gray-600 dark:text-gray-400 text-sm mt-8";
  footer.textContent = "© 2025 - FakeStore Web App - Powered by Tailwind CSS";
  container.appendChild(footer);
}