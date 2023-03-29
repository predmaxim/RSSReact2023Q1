import React from 'react';
import { productsData, Product } from '../../utils/productsData';
import { ProductCard } from '../../components';
import style from './home.module.css';

export function Home() {
  return (
    <main className="Home">
      <div className="container">
        <h1>Home page</h1>
        <section className={style.products}>
          {productsData.map((product: Product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </section>
      </div>
    </main>
  );
}
