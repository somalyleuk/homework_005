import DarkModeToggle from "./DarkModeToggle";

const Navbar = {
  render: (): string => {
    return `
      <nav class="bg-white dark:bg-gray-800 shadow-md">
        <div class="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" class="text-2xl font-bold text-blue-600 dark:text-white">E-Commerce</a>
          <div class="flex items-center space-x-6">
            <a href="/" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Home</a>
            <a href="/products" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Products</a>
            ${DarkModeToggle.render()}
          </div>
        </div>
      </nav>
    `;
  },

  afterRender: async (): Promise<void> => {
    await DarkModeToggle.afterRender();
  },
};

export default Navbar;
