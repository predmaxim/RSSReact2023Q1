import React, { useRef } from 'react';
import style from './Search.module.css';

export interface SearchProps {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

export function Search({ setQuery }: SearchProps) {
  const searchRef = useRef<HTMLInputElement>(null);
  const onKeyUpHandler = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      localStorage.setItem('searchQuery', e.currentTarget.value);
      setQuery(e.currentTarget.value);
    }
  };

  const onClickHandler = (): void => {
    (searchRef.current as HTMLInputElement).value = '';
    localStorage.setItem('searchQuery', '');
    setQuery('');
  };

  return (
    <div className={style.searchContainer}>
      <input
        type="text"
        name="search"
        onKeyUp={onKeyUpHandler}
        placeholder="Search"
        className={style.search}
        ref={searchRef}
        defaultValue={localStorage.getItem('searchQuery') as string}
      />
      <button type="submit" className={style.clear} onClick={onClickHandler}>
        x
      </button>
    </div>
  );
}
