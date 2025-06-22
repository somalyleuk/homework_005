import { Link } from "react-router-dom";
import type {Product} from "../../types";


interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`} className="group">
      <div className="border rounded-lg p-4 flex flex-col h-full bg-white dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <img
            src={product.image}
            alt={product.title}
            className="h-48 w-full object-contain object-center group-hover:opacity-75"
          />
        </div>
        <div className="mt-4 flex flex-col flex-grow">
          <h3 className="text-sm text-gray-700 dark:text-gray-300 flex-grow">{product.title}</h3>
          <p className="mt-1 text-lg font-medium text-gray-900 dark:text-white">${product.price.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  );
};