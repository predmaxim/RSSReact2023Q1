import React, { useEffect, useState } from 'react';
import style from './Search.module.css';

export function Search() {
  const [searchQuery, setSearchQuery] = useState(
    localStorage.getItem('searchQuery') ? (localStorage.getItem('searchQuery') as string) : ''
  );

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    searchQuery && localStorage.setItem('searchQuery', searchQuery);
    return () => {
      searchQuery && localStorage.setItem('searchQuery', searchQuery);
    };
  }, [searchQuery]);

  return (
    <div className={style.search}>
      <input
        type="text"
        name="headerSearch"
        onChange={onChangeHandler}
        defaultValue={searchQuery}
      />
      <button type="submit" disabled={!searchQuery}>
        Search
      </button>
    </div>
  );
}
