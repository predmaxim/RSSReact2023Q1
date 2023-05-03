import React from 'react';
import style from './Nav.module.css';
import { NavLink } from 'react-router-dom';

export function Nav() {
  const setActiveClass = ({ isActive }: { isActive: boolean }) => (isActive ? style.active : '');

  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <NavLink to="/" className={setActiveClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="about" className={setActiveClass}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="form" className={setActiveClass}>
            Form
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
