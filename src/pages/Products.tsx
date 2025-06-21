import { Product } from "../types/product";
import { PageComponent } from "../types/product";
import { fetchProducts } from "../api/products";
import Navbar from "../components/Navbar";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import SkeletonLoader from "@/components/SkeletonLoader";

const Products: PageComponent = {
  async render(): Promise<string> {
    return `
      ${Navbar.render()}
      <main class="container mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold mb-8 dark:text-white">All Products</h1>
        
        <div class="mb-8">
          <input 
            type="text" 
            id="searchInput" 
            placeholder="Search products..." 
            class="w-full md:w-1/2 px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          >
        </div>
        
        <div id="productsContainer" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${SkeletonLoader.render(6)}
        </div>
      </main>
      ${Footer.render()}
    `;
  },

  async afterRender(): Promise<void> {
    Navbar.afterRender();

    const productsContainer = document.getElementById(
      "productsContainer"
    ) as HTMLElement;
    const searchInput = document.getElementById(
      "searchInput"
    ) as HTMLInputElement;

    const products = await fetchProducts();

    productsContainer.innerHTML = products
      .map((product) => Card.render({ product }))
      .join("");

    searchInput.addEventListener("input", (e: Event) => {
      const searchTerm = (e.target as HTMLInputElement).value.toLowerCase();
      const filteredProducts = products.filter(
        (product) =>
          product.title.toLowerCase().includes(searchTerm) ||
          product.description.toLowerCase().includes(searchTerm)
      );

      productsContainer.innerHTML = filteredProducts
        .map((product) => Card.render({ product }))
        .join("");
    });
  },
};

export default Products;
