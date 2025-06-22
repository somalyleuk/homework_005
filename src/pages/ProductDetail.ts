import { fetchProduct } from '../utils/api';

export async function ProductDetail(container: HTMLElement, id: string) {
  container.innerHTML += `
    <div class="max-w-3xl mx-auto my-8 px-4" id="product-detail">
    </div>
  `;
  const el = document.getElementById("product-detail");
  if (!el) return;
  el.innerHTML = `<div class="animate-pulse h-80 bg-gray-200 dark:bg-gray-700 rounded"></div>`;

  try {
    const product = await fetchProduct(id);
    el.innerHTML = `
      <div class="flex flex-col md:flex-row gap-8 bg-white dark:bg-gray-800 rounded shadow-lg p-8">
        <img src="${product.image}" alt="${product.title}"
          class="h-64 w-64 object-contain mx-auto md:mx-0 bg-white dark:bg-gray-900 rounded shadow" />
        <div class="flex-1">
          <h2 class="font-bold text-2xl mb-3 text-gray-900 dark:text-gray-100">${product.title}</h2>
          <div class="text-lg text-gray-600 dark:text-gray-300 mb-2">${product.category}</div>
          <div class="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">$${product.price}</div>
          <div class="mb-4 text-gray-800 dark:text-gray-200">${product.description}</div>
          ${product.rating ? `<div class="text-yellow-400 font-semibold">⭐ ${product.rating.rate} (${product.rating.count} reviews)</div>` : ''}
          <a href="#/products"
            class="inline-block mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">← Back to Products</a>
        </div>
      </div>
    `;
  } catch (e) {
    el.innerHTML = `<div class="text-red-500 py-8">Product not found.</div>`;
  }
}