import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../utils/store/store';
import { setCurrentPage } from './paginationSlice';
import style from './Pagination.module.css';
import { useSearchProductsQuery } from '../../utils/api';

export function Pagination() {
  const dispatch = useDispatch();
  const search = useSelector((state: RootState) => state.search.value);
  const { currentPage: page, limit } = useSelector((state: RootState) => state.pagination);
  const { sort, sortType } = useSelector((state: RootState) => state.sort);

  const { data } = useSearchProductsQuery({
    search,
    limit,
    page,
    sort,
    sortType,
  });

  const total = data?.total;

  const setPage = (e: React.MouseEvent<HTMLButtonElement>) =>
    dispatch(setCurrentPage(Number(e.currentTarget.value)));

  const lengthArr = [...Array(Math.ceil(total ? total / limit : 0))].map(
    (num: number, i: number) => (num = ++i)
  );

  return (
    <div className={style.pagination} data-cy="pagination-container">
      {total &&
        lengthArr.map((pageNum: number) => (
          <button
            key={pageNum}
            className={pageNum === page ? style.active : style.paginationBtn}
            onClick={setPage}
            value={pageNum}
          >
            {pageNum}
          </button>
        ))}
    </div>
  );
}
