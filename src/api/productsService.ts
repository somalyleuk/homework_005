
import axios from 'axios';
import type {Product} from "../types";

const API_BASE_URL = 'https://fakestoreapi.com';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getProducts = async (): Promise<Product[]> => {
  const response = await apiClient.get('/products');
  return response.data;
};

export const getProductById = async (id: number): Promise<Product> => {
  const response = await apiClient.get(`/products/${id}`);
  return response.data;
};