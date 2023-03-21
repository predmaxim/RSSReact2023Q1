import React from 'react';
import style from './Search.module.css';

export class Search extends React.Component {
  val = '';

  submit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    e.preventDefault();
    localStorage.setItem('searchVal', this.val);
  }

  render() {
    return (
      <form className={style.search}>
        <input
          type="text"
          name="headerSearch"
          id="headerSearch"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => (this.val = e.target.value)}
          defaultValue={
            localStorage.getItem('searchVal') ? (localStorage.getItem('searchVal') as string) : ''
          }
        />
        <button
          type="submit"
          id="headerSearchSubmit"
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => this.submit(e)}
        >
          Search
        </button>
      </form>
    );
  }
}
