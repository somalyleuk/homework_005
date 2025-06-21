const SkeletonLoader = {
  render: (count: number = 6): string => {
    return Array(count)
      .fill(
        `
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <div class="w-full h-48 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
        <div class="p-4">
          <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2 animate-pulse"></div>
          <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-4 animate-pulse"></div>
          <div class="flex justify-between">
            <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 animate-pulse"></div>
            <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 animate-pulse"></div>
          </div>
        </div>
      </div>
    `
      )
      .join("");
  },
};

export default SkeletonLoader;
