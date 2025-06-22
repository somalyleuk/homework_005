// /Users/somaly/Desktop/istad/frontend/TypeScript/homework_005/src/main.ts

// REMOVE THIS LINE:
// import './css/style.css';

import { renderProducts } from './pages/Products';
import { initTheme } from './utils/theme';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import {ProductDetail} from "./pages/ProductDetail";
import {Home} from "./pages/Home";

function router() {
  const app = document.getElementById('app');
  if (!app) return;
  app.innerHTML = '';
  Navbar(app);
  const hash = window.location.hash;
  if (hash.startsWith('#/products/')) {
    const id = hash.split('/')[2];
    ProductDetail(app, id);
  } else if (hash.startsWith('#/products')) {
    renderProducts(app);
  } else {
    Home(app);
  }
  Footer(app);
}

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', () => {
  initTheme();
  router();
});