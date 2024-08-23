import React from 'react';
import styles from '../Header.module.css';
import { Link } from 'react-router-dom';
function Nav() {
  return (
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
  );
}

export default Nav;
