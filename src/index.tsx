import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import { PageComponent } from "./types/product";

const routes: Record<string, PageComponent> = {
  "/": Home,
  "/products": Products,
  "/product/:id": ProductDetail,
};

const router = async (): Promise<void> => {
  const app = document.getElementById("app") as HTMLElement;
  const path = window.location.pathname;

  let page = routes["/"];

  if (path === "/products") {
    page = routes["/products"];
  } else if (path.startsWith("/product/")) {
    page = routes["/product/:id"];
  }

  app.innerHTML = await page.render();
  await page.afterRender();
};

window.addEventListener("popstate", router);
document.addEventListener("DOMContentLoaded", router);
