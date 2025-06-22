// Simple API wrapper using fetch & TypeScript types
import { Product } from '../types/product';

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch('https://fakestoreapi.com/products');
  return await res.json();
}
export async function fetchProduct(id: string): Promise<Product> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return await res.json();
}