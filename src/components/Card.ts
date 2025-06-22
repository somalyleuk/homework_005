import { Product } from '../types/product';

export function Card(product: Product): HTMLElement {
  const card = document.createElement("div");
  card.className = "bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col";
  card.innerHTML = `
    <img src="${product.image}" alt="${product.title}" class="object-contain h-40 w-full p-4 bg-white dark:bg-gray-900">
    <div class="p-4 flex-1 flex flex-col">
      <h2 class="font-semibold text-base mb-1 text-gray-900 dark:text-gray-100 line-clamp-2">${product.title}</h2>
      <div class="text-blue-600 dark:text-blue-400 font-bold text-lg mb-2">$${product.price}</div>
      <a href="#/products/${product.id}" class="mt-auto px-3 py-1 rounded bg-blue-500 text-white text-xs text-center hover:bg-blue-600">View</a>
    </div>
  `;
  return card;
}