export function SkeletonCards(amount: number = 8): HTMLElement {
  const container = document.createElement("div");
  container.className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6";
  for(let i=0; i<amount; i++) {
    const card = document.createElement("div");
    card.className = "animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700 h-64";
    card.innerHTML = `
      <div class="h-40 bg-gray-300 dark:bg-gray-600 rounded-t-lg"></div>
      <div class="p-4">
        <div class="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-2"></div>
        <div class="h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
      </div>
    `;
    container.appendChild(card);
  }
  return container;
}