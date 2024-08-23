import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { LayoutsProps } from '../../types/Props';
import { LoginUser } from '../../types/User';
import { Logout } from '../../api/logout';
import SearchBar from './SearchBar/SearchBar';
import useCartStore from '../../store/CartStore';
import Nav from './NavBar/Nav';
function Header(props: LayoutsProps) {
  const navigate = useNavigate();
  const cartCount = useCartStore((state) => state.products.length);
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
        <SearchBar products={props.products} />
        <div className={styles['header-cart']}>
          <button onClick={() => navigate('/cart')}>{cartCount} items in cart</button>
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
      <Nav />
    </header>
  );
}

export default Header;
