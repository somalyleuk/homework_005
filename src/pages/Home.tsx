import { Product } from "../types/product";
import { PageComponent } from "../types/product";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { fetchProducts } from "../api/products";

const Home: PageComponent = {
  async render(): Promise<string> {
    const products = await fetchProducts();
    const topProducts = products.slice(0, 4);

    return `
      ${Navbar.render()}
      <main>
        <!-- Hero Section -->
        <section class="hero bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
          <div class="container mx-auto px-4 text-center">
            <h1 class="text-4xl font-bold mb-4">Welcome to Our Store</h1>
            <p class="text-xl mb-8">Discover amazing products at great prices</p>
            <a href="/products" class="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Shop Now</a>
          </div>
        </section>
        
        <!-- Top Products -->
        <section class="py-12 container mx-auto px-4">
          <h2 class="text-3xl font-bold mb-8 text-center dark:text-white">Featured Products</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            ${topProducts.map((product) => Card.render({ product })).join("")}
          </div>
        </section>
        
        <!-- Call to Action -->
        <section class="bg-gray-100 dark:bg-gray-800 py-12">
          <div class="container mx-auto px-4 text-center">
            <h2 class="text-3xl font-bold mb-4 dark:text-white">Ready to find your perfect product?</h2>
            <a href="/products" class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">Browse All Products</a>
          </div>
        </section>
      </main>
      ${Footer.render()}
    `;
  },

  async afterRender(): Promise<void> {
    await Navbar.afterRender();
  },
};

export default Home;
