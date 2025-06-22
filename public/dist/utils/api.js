export async function fetchProducts() {
    const res = await fetch('https://fakestoreapi.com/products');
    return await res.json();
}
export async function fetchProduct(id) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    return await res.json();
}
