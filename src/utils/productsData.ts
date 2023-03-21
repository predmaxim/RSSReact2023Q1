export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  brand?: string;
  category?: string;
  thumbnail?: string;
  images: string[];
}

export const productsData: Product[] = await fetch('https://dummyjson.com/products')
  .then((res) => res.json())
  .then((res) => res.products);
