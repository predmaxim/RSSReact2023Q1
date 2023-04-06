import React, { useEffect, useState } from 'react';
import style from './Pagination.module.css';

export interface PaginationProps {
  currentPage: number;
  limit: number;
  productsLength: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export function Pagination({ currentPage, setPage, limit, productsLength }: PaginationProps) {
  const [pages, setPages] = useState<number[]>([]);

  const loadPage = (e: React.MouseEvent<HTMLButtonElement>) => setPage(+e.currentTarget.value);

  useEffect(() => {
    (async () => {
      const lengthArr = [...Array(Math.ceil(productsLength / limit))].map(
        (num: number, i: number) => (num = ++i)
      );
      setPages(lengthArr);
    })();
  }, [limit, productsLength]);

  return (
    <div className={style.pagination}>
      {productsLength > 0 &&
        pages.map((pageNum: number) => (
          <button
            key={pageNum}
            className={pageNum === currentPage ? style.active : style.paginationBtn}
            onClick={loadPage}
            value={pageNum}
          >
            {pageNum}
          </button>
        ))}
    </div>
  );
}
