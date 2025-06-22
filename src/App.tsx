import './App.css'
import {Navbar} from "./components/layout/Navbar.tsx";
import {Route, Routes} from "react-router-dom";
import {Products} from "./components/products/Products.tsx";
import {ProductDetail} from "./components/products/ProductDetail.tsx";
import {Footer} from "./components/layout/Footer.tsx";
import {Home} from "./pages/Home.tsx";

function App() {


    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
            <Navbar/>
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/products" element={<Products/>}/>
                    <Route path="/products/:id" element={<ProductDetail/>}/>
                </Routes>
            </main>
            <Footer/>
        </div>
    );
}

export default App
