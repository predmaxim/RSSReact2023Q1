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
    localStorage.setItem('searchQuery', searchQuery);
  }, [searchQuery]);

  return (
    <form className={style.search}>
      <input
        type="text"
        name="headerSearch"
        id="headerSearch"
        onChange={onChangeHandler}
        value={searchQuery}
      />
      <button type="submit">Search</button>
    </form>
  );
}
