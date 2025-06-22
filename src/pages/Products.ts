import { fetchProducts } from "../utils/api";;
import { SkeletonCards } from "../components/Skeleton";
import { Product } from "../types/product";
import {Card} from "../components/Card";

export function renderProducts(container: HTMLElement) {
  const section = document.createElement("section");
  section.innerHTML = `
    <div class="max-w-6xl mx-auto px-4 py-10">
      <h1 class="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">All Products</h1>
      <div class="mb-6 flex flex-col sm:flex-row gap-3 justify-between items-center">
        <input
          type="text"
          id="search"
          class="w-full sm:w-96 rounded border-gray-200 dark:border-gray-600 px-4 py-2 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
          placeholder="Search products..."
        >
        <span id="filter-count" class="ml-2 text-gray-600 dark:text-gray-400"></span>
      </div>
      <div id="products-list"></div>
    </div>
  `;
  container.appendChild(section);

  const list = section.querySelector("#products-list") as HTMLElement;
  list.appendChild(SkeletonCards());

  let allProducts: Product[] = [];
  fetchProducts().then((products) => {
    allProducts = products;
    renderList(products);
  });

  const search = section.querySelector<HTMLInputElement>("#search");
  if (search) {
    search.addEventListener("input", () => {
      const q = search.value.trim().toLowerCase();
      const filtered = allProducts.filter((prod) =>
        prod.title.toLowerCase().includes(q) ||
        prod.description.toLowerCase().includes(q) ||
        prod.category.toLowerCase().includes(q)
      );
      renderList(filtered);
    });
  }

  function renderList(products: Product[]) {
    list.innerHTML = "";
    if (products.length === 0) {
      list.innerHTML = `<div class="p-8 text-center text-gray-600 dark:text-gray-400">No products found.</div>`;
      return;
    }
    const grid = document.createElement("div");
    grid.className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6";
    products.forEach((product) => {
      grid.appendChild(Card(product));
    });
    list.appendChild(grid);

    const filterCount = section.querySelector("#filter-count");
    if (filterCount) {
      filterCount.textContent = products.length !== allProducts.length ? `${products.length} found` : "";
    }
  }
}