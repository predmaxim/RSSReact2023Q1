import React from 'react';
import { Nav } from '../Nav/Nav';
import style from './Header.module.css';

export function Header() {
  return (
    <header>
      <div className={`${style.header} container`}>
        <Nav />
      </div>
    </header>
  );
}
