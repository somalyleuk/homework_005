import {getProductById} from "../../api/productsService.ts";
import {useEffect, useState} from "react";
import type {Product} from "../../types";
import { useParams } from "react-router-dom";


export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const data = await getProductById(Number(id));
        setProduct(data);
      } catch (err) {
        setError('Failed to fetch product details.');
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>; // You can create a more detailed skeleton loader here
  if (error) return <p className="text-red-500">{error}</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2">
        <img src={product.image} alt={product.title} className="w-full h-auto object-contain rounded-lg bg-white p-4" />
      </div>
      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-4 capitalize">{product.category}</p>
        <p className="text-2xl font-semibold mb-4">${product.price.toFixed(2)}</p>
        <p className="text-base leading-relaxed">{product.description}</p>
        <button className="mt-6 bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
};