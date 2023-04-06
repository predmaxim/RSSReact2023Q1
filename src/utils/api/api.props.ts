type sortProps = 'desc' | 'asc';
type sortTypeProps = 'price' | 'rating' | 'title';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage?: number;
  rating: number;
  stock?: number;
  brand?: string;
  category?: string;
  thumbnail?: string;
  images: string[];
}

interface ProductResponse {
  limit: number;
  skip: number;
  total: number;
  products: Product[];
}

interface QueryObj {
  search?: string;
  limit?: number;
  page?: number;
  sort?: sortProps;
  sortType?: sortTypeProps;
}

interface ProductSortProps {
  products: Product[];
  sortType: sortTypeProps;
  sort: sortProps;
}

export type { ProductSortProps, QueryObj, ProductResponse, Product, sortProps, sortTypeProps };
