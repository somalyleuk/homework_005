export interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface CardProps {
  product: Product;
}

export interface PageComponent {
  render: () => Promise<string>;
  afterRender: () => Promise<void>;
}