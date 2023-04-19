import React from 'react';
import { useSelector } from 'react-redux';
import { PRODUCT_LIMIT_DEFUALT, Product, useSearchProductsQuery } from '../../utils/api';
import { ProductCard, ProgressIndicator } from '../../components/';
import { RootState } from '../../utils/store/store';
import style from './ProductList.module.css';

export function ProductList() {
  const search = useSelector((state: RootState) => state.search.value);
  const { currentPage: page, limit } = useSelector((state: RootState) => state.pagination);
  const { sort, sortType } = useSelector((state: RootState) => state.sort);
  const { data, isFetching } = useSearchProductsQuery({
    search,
    limit,
    page,
    sort,
    sortType,
  });

  const products = data?.products.slice(
    limit * page === PRODUCT_LIMIT_DEFUALT ? 0 : limit * page - limit,
    limit * page
  );

  return (
    <>
      {isFetching && <ProgressIndicator />}
      <div className={`${style.products} ${isFetching && style.inactive}`}>
        {products?.length === 0 && search && <p className={style.notFoundMessage}>Not found</p>}
        {products ? (
          products.map((product: Product) => <ProductCard key={product.id} {...product} />)
        ) : (
          <ProgressIndicator />
        )}
      </div>
    </>
  );
}
