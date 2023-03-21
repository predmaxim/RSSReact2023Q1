import React from 'react';
import style from './HeaderNav.module.css';
import { NavLink } from 'react-router-dom';

export class HeaderNav extends React.Component {
  render() {
    return (
      <nav className={style.nav}>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? style.active : '')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? style.active : '')}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/form" className={({ isActive }) => (isActive ? style.active : '')}>
              Form
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
