import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header className={`${styles['header']}  `}>
      <div className={`${styles['header-content']} container`}>
        <div className={styles['header-name']}>
          <span>
            <Link to="/">
              <span className={styles['header-name__green']}>Shop</span>per
            </Link>
          </span>
        </div>
        <div className={styles['header-search']}>
          <input type="search" placeholder="Search items" />
          <button>Search</button>
        </div>
        <div className={styles['header-cart']}>
          <button>0 items added</button>
        </div>
        <div className={styles['header-login']}>
          <button>Login or Sign Up</button>
        </div>
      </div>
      <nav className={styles.nav}>
        <div className={`${styles['nav-item']} container`}>
          <ul>
            <li>
              <Link to="/features">Features</Link>
            </li>
            <li>
              <Link to="/product">Products</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
