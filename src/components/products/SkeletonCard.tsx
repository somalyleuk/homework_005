// src/components/products/SkeletonCard.tsx
export const SkeletonCard = () => {
  return (
    <div className="border rounded-lg p-4 bg-white dark:bg-gray-800 dark:border-gray-700 animate-pulse">
      <div className="bg-gray-300 dark:bg-gray-700 h-48 w-full rounded-lg"></div>
      <div className="mt-4 space-y-2">
        <div className="bg-gray-300 dark:bg-gray-700 h-4 w-3/4 rounded"></div>
        <div className="bg-gray-300 dark:bg-gray-700 h-6 w-1/4 rounded"></div>
      </div>
    </div>
  );
};