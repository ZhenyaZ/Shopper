import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { Logout } from '../../api/logout';
import SearchBar from './SearchBar/SearchBar';
import useCartStore from '../../store/CartStore';
import Nav from './NavBar/Nav';
import { useUserStore } from '../../store/UserStore';

function Header() {
  const navigate = useNavigate();
  const cartCount = useCartStore((state) => state.products.length);
  const isAuth = useUserStore((state) => state.isAuth);
  const user = useUserStore((state) => state.data);
  const setAuth = useUserStore((state) => state.setIsAuth);
  const setUser = useUserStore((state) => state.setUser);
  const onLogoutHandler = () => {
    if (isAuth) {
      setAuth!(false);
      setUser({ _id: '', login: '', name: '', email: '' });
      Logout();
      navigate('/');
    }
  };
  const link = isAuth ? `/profile/${user._id}` : '/auth';

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
        <SearchBar />
        <div className={styles['header-cart']}>
          <button onClick={() => navigate('/cart')}>{cartCount} items in cart</button>
        </div>
        <div className={styles['header-login']}>
          {isAuth ? (
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
