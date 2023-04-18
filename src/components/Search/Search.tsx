import React, { useRef } from 'react';
import style from './Search.module.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addQuery, clearQuery } from './searchSlice';
import { RootState } from 'store';

export function Search() {
  const dispatch = useDispatch();
  const savedQuery = useSelector((state: RootState) => state.search.value);
  const searchRef = useRef<HTMLInputElement>(null);

  const addQueryToState = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch(addQuery(e.currentTarget.value));
    }
  };

  const clearQueryFromState = () => {
    if ((searchRef.current as HTMLInputElement).value) {
      (searchRef.current as HTMLInputElement).value = '';
      dispatch(clearQuery());
    }
  };

  return (
    <div className={style.searchContainer}>
      <input
        type="text"
        name="search"
        onKeyUp={addQueryToState}
        placeholder="Search"
        className={style.search}
        ref={searchRef}
        defaultValue={savedQuery}
      />
      <button type="submit" className={style.clear} onClick={clearQueryFromState}>
        x
      </button>
    </div>
  );
}
