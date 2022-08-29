import React from 'react';

import { NavLink, Link } from 'react-router-dom';

import cartSvg from '../../assets/img/cart.svg';
import logoSvg from '../../assets/img/Lalasia-logo.svg';
import userSvg from '../../assets/img/user.svg';
import styles from './Header.module.scss';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      <NavLink to="/">
        <div className={styles.logo}>
          <img src={logoSvg} alt="Lalasia logo" />
          <h1>Lalasia</h1>
        </div>
      </NavLink>

      <div className={styles.menu}>
        <ul>
          <li>
            <NavLink to="/">Product</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/article">Article</NavLink>
          </li>
          <li>
            <NavLink to="/about-us">About us</NavLink>
          </li>
        </ul>
      </div>

      <div className={styles.cart}>
        <ul>
          <li>
            <img src={cartSvg} alt="cart" />
          </li>
          <li>
            <img src={userSvg} alt="user" />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
