import { CardProps } from "../types/product";

const Card = {
  render: ({ product }: CardProps): string => {
    return `
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
        <a href="/product/${product.id}">
          <img src="${product.image}" alt="${product.title}" class="w-full h-48 object-contain p-4">
          <div class="p-4">
            <h3 class="text-lg font-semibold mb-2 dark:text-white">${product.title}</h3>
            <div class="flex justify-between items-center">
              <span class="text-blue-600 dark:text-blue-400 font-bold">$${product.price}</span>
              <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                ${product.rating.rate} ★
              </span>
            </div>
          </div>
        </a>
      </div>
    `;
  },
};

export default Card;
