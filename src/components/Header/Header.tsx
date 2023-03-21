import React from 'react';
import { Search } from '../';
import { HeaderNav } from './HeaderNav/HeaderNav';
import style from './Header.module.css';

export class Header extends React.Component {
  render() {
    return (
      <header>
        <div className={`${style.header} container`}>
          <HeaderNav />
          <Search />
        </div>
      </header>
    );
  }
}
