const Footer = {
  render: (): string => {
    return `
      <footer class="bg-gray-800 text-white py-8 mt-12">
        <div class="container mx-auto px-4">
          <div class="flex flex-col md:flex-row justify-between">
            <div class="mb-6 md:mb-0">
              <h3 class="text-xl font-bold mb-4">E-Commerce</h3>
              <p class="text-gray-400">The best fake store for your demo needs</p>
            </div>
            <div class="grid grid-cols-2 gap-8">
              <div>
                <h4 class="text-lg font-semibold mb-4">Links</h4>
                <ul class="space-y-2">
                  <li><a href="/" class="text-gray-400 hover:text-white">Home</a></li>
                  <li><a href="/products" class="text-gray-400 hover:text-white">Products</a></li>
                </ul>
              </div>
              <div>
                <h4 class="text-lg font-semibold mb-4">Contact</h4>
                <ul class="space-y-2">
                  <li class="text-gray-400">Email: info@example.com</li>
                  <li class="text-gray-400">Phone: (123) 456-7890</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2023 E-Commerce App. All rights reserved.</p>
          </div>
        </div>
      </footer>
    `;
  },
};

export default Footer;
