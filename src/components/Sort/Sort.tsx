import React from 'react';
import { sortTypeProps, sortProps } from '../../utils/api/api.props';
import style from './Sort.module.css';

export interface SortProps {
  setSortType: React.Dispatch<React.SetStateAction<sortTypeProps>>;
  setSort: React.Dispatch<React.SetStateAction<sortProps>>;
}

export function Sort({ setSortType, setSort }: SortProps) {
  const sortTypeOnChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortType(e.target.value as sortTypeProps);
  };

  const sortOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.checked && setSort(e.target.value as sortProps);
  };

  return (
    <div className={style.sortContainer}>
      <label>
        Sort by:
        <select name="sort-type" onChange={sortTypeOnChangeHandler}>
          <option value="rating">Rating</option>
          <option value="price">Price</option>
          <option value="title">Title</option>
        </select>
      </label>
      <div className={style.sortDirection}>
        <div className={style.radioItem}>
          <input type="radio" name="sort" id="asc" value="asc" onChange={sortOnChangeHandler} />
          <label htmlFor="asc">Asc</label>
        </div>
        <div className={style.radioItem}>
          <input type="radio" name="sort" id="desc" value="desc" onChange={sortOnChangeHandler} />
          <label htmlFor="desc">Desc</label>
        </div>
      </div>
    </div>
  );
}
