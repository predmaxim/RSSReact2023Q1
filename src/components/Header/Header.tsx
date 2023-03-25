import React from 'react';
import { Search } from '../';
import { Nav } from '../Nav/Nav';
import style from './Header.module.css';

export class Header extends React.Component {
  render() {
    return (
      <header>
        <div className={`${style.header} container`}>
          <Nav />
          <Search />
        </div>
      </header>
    );
  }
}
