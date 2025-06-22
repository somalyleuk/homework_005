
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../api/productsService";
import { ProductCard } from "../components/products/ProductCard";
import { SkeletonCard } from "../components/products/SkeletonCard";
import type {Product} from "../types";

export const Home = () => {
  const [topProducts, setTopProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopProducts = async () => {
      try {
        setLoading(true);
        // Fetch all products and take the first 4 as "top products"
        const allProducts = await getProducts();
        setTopProducts(allProducts.slice(0, 4));
      } catch (error) {
        console.error("Failed to fetch top products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopProducts();
  }, []);

  return (
    <div className="space-y-16">
      {/* 1. Hero Section */}
      <section className="text-center bg-gray-100 dark:bg-gray-800 p-10 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
          Welcome to FakeStore
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Discover the best products, curated just for you. Quality and style in one place.
        </p>
        <Link
          to="/products"
          className="mt-8 inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-transform transform hover:scale-105"
        >
          Shop Now
        </Link>
      </section>

      {/* 2. Top Products Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Top Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {loading
            ? Array.from({ length: 4 }).map((_, index) => <SkeletonCard key={index} />)
            : topProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
        </div>
      </section>

      {/* 3. Call to Action (CTA) */}
      <section className="text-center">
        <h2 className="text-3xl font-bold">Ready to Explore?</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Browse our full collection and find your next favorite item.
        </p>
        <Link
          to="/products"
          className="mt-6 inline-block border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-bold py-3 px-8 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-colors"
        >
          View All Products
        </Link>
      </section>
    </div>
  );
};