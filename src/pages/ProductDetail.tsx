import { Product } from "../types/product";
import { PageComponent } from "../types/product";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { fetchProductById } from "../api/products";

const ProductDetail: PageComponent = {
  async render(): Promise<string> {
    const path = window.location.pathname;
    const productId = parseInt(path.split("/").pop() || "0");
    const product = await fetchProductById(productId);

    if (!product) {
      return `
        ${Navbar.render()}
        <main class="container mx-auto px-4 py-8 text-center">
          <h1 class="text-3xl font-bold mb-4 dark:text-white">Product Not Found</h1>
          <a href="/products" class="text-blue-600 dark:text-blue-400 hover:underline">Back to Products</a>
        </main>
        ${Footer.render()}
      `;
    }

    return `
      ${Navbar.render()}
      <main class="container mx-auto px-4 py-8">
        <a href="/products" class="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block">← Back to Products</a>
        
        <div class="flex flex-col md:flex-row gap-8">
          <div class="md:w-1/2">
            <img src="${product.image}" alt="${
      product.title
    }" class="w-full h-auto rounded-lg">
          </div>
          <div class="md:w-1/2 dark:text-white">
            <h1 class="text-3xl font-bold mb-2">${product.title}</h1>
            <div class="flex items-center mb-4">
              <span class="bg-blue-100 text-blue-800 text-sm font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">${
                product.rating.rate
              } ★ (${product.rating.count})</span>
              <span class="ml-4 text-2xl font-bold">$${product.price}</span>
            </div>
            <p class="mb-6">${product.description}</p>
            <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition">
              Add to Cart
            </button>
          </div>
        </div>
      </main>
      ${Footer.render()}
    `;
  },

  async afterRender(): Promise<void> {
    await Navbar.afterRender();
  },
};

export default ProductDetail;
