import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import AuthProps from '../../types/Props';
import { LoginUser } from '../../types/User';
import { Logout } from '../../api/logout';
function Header(props: AuthProps) {
  const navigate = useNavigate();
  const onLogoutHandler = () => {
    if (props.isAuth) {
      props.setIsAuth!(false);
      props.setUser!({} as LoginUser);
      Logout();
      navigate('/');
    }
  };
  const link = props.isAuth ? '/profile' : '/auth';
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
          {props.isAuth ? (
            <>
              <button>
                <Link to={link}>Profile</Link>
              </button>
              <button onClick={onLogoutHandler}>
                <Link to={link}>Logout</Link>
              </button>
            </>
          ) : (
            <button>
              <Link to="/auth">Sign In / Sign Up</Link>
            </button>
          )}
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
