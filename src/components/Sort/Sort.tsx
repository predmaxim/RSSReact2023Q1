import React from 'react';
import { sortTypeProps, sortProps } from '../../utils/api/api.props';
import { useDispatch, useSelector } from 'react-redux';
import { setSortType, setSort } from './sortSlice';
import style from './Sort.module.css';
import { RootState } from '../../store';

export function Sort() {
  const dispatch = useDispatch();
  const { sort, sortType } = useSelector((state: RootState) => state.sort);

  const sortTypeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortType(e.target.value as sortTypeProps));
  };

  const sortHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.checked && dispatch(setSort(e.target.value as sortProps));
  };

  return (
    <div className={style.sortContainer}>
      <label>
        Sort by:
        <select name="sort-type" onChange={sortTypeHandler} value={sortType}>
          <option value="rating">Rating</option>
          <option value="price">Price</option>
          <option value="title">Title</option>
        </select>
      </label>
      <div className={style.sortDirection}>
        <div className={style.radioItem}>
          <input
            type="radio"
            name="sort"
            id="asc"
            value="asc"
            onChange={sortHandler}
            defaultChecked={sort === 'asc'}
          />
          <label htmlFor="asc">Asc</label>
        </div>
        <div className={style.radioItem}>
          <input
            type="radio"
            name="sort"
            id="desc"
            value="desc"
            onChange={sortHandler}
            defaultChecked={sort === 'desc'}
          />
          <label htmlFor="desc">Desc</label>
        </div>
      </div>
    </div>
  );
}
