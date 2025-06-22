import { fetchProducts } from "../utils/api";
import { SkeletonCards } from "../components/Skeleton";
import { Card } from "../components/Card";
export function Home(container) {
    const section = document.createElement("section");
    section.innerHTML = `
    <div class="max-w-5xl mx-auto py-12 px-4 text-center">
      <h1 class="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">Welcome to FakeStore Demo</h1>
      <p class="mb-8 text-gray-700 dark:text-gray-300">Modern fake e-commerce built with HTML, TypeScript & Tailwind CSS.</p>
      <a href="#/products" class="rounded bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 text-lg font-semibold transition">Browse Products</a>
    </div>
    <div class="mt-12">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">Top Picks</h2>
      <div id="home-products" class="mb-8"></div>
    </div>
  `;
    container.appendChild(section);
    const list = section.querySelector("#home-products");
    if (list) {
        list.appendChild(SkeletonCards(4));
        fetchProducts().then(products => {
            // Show just first 4 as top picks
            list.innerHTML = "";
            products.slice(0, 4).forEach(product => {
                list.appendChild(Card(product));
            });
        });
    }
}
