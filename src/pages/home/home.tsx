import React, { useEffect, useState } from 'react';
import { Pagination, ProductList, Search, Sort } from '../../components';
import { Product, sortProps, sortTypeProps } from '../../utils/api/api.props';
import { PRODUCT_LIMIT_DEFUALT, searchProducts } from '../../utils/api';
import style from './home.module.css';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

export function Home() {
  const search = useSelector((state: RootState) => state.search.value);

  const [productsLength, setProductsLength] = useState(0);
  const [page, setPage] = useState(1);
  const [sortType, setSortType] = useState<sortTypeProps>('rating');
  const [limit] = useState(PRODUCT_LIMIT_DEFUALT);
  const [sort, setSort] = useState<sortProps>('asc');
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    (async () => {
      const data = await searchProducts({ search, page, sortType, sort, limit: 0 });
      setProducts(
        data.slice(limit * page === PRODUCT_LIMIT_DEFUALT ? 0 : limit * page - limit, limit * page)
      );
      setProductsLength(data.length);
    })();
  }, [page, sortType, sort, limit, search]);

  return (
    <main className="Home">
      <div className="container">
        <h1>Home page</h1>
        <section className={style.searchSection}>
          <Sort setSortType={setSortType} setSort={setSort} />
          <Search />
        </section>
        <section className={style.productsSection}>
          <ProductList products={products} />
          <Pagination
            currentPage={page}
            setPage={setPage}
            limit={limit}
            productsLength={productsLength}
          />
        </section>
      </div>
    </main>
  );
}
