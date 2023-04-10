import React from 'react';
import { Product } from '../../utils/api';
import { ProductCard, ProgressIndicator } from '../../components/';
import style from './ProductList.module.css';

export interface ProductListProps {
  products: Product[] | undefined;
}

export function ProductList({ products }: ProductListProps) {
  return (
    <div className={style.products}>
      {products?.length === 0 && <p className={style.notFoundMessage}>Not found</p>}
      {products ? (
        products.map((product: Product) => <ProductCard key={product.id} {...product} />)
      ) : (
        <ProgressIndicator />
      )}
    </div>
  );
}
