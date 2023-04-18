import React from 'react';
import { Pagination, ProductList, Search, Sort } from '../../components';
import style from './home.module.css';

export function Home() {
  return (
    <main className="Home">
      <div className="container">
        <h1>Home page</h1>
        <section className={style.searchSection}>
          <Sort />
          <Search />
        </section>
        <section className={style.productsSection}>
          <ProductList />
          <Pagination />
        </section>
      </div>
    </main>
  );
}
