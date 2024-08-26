import styles from './CheckoutHeader.module.css';
import { Link } from 'react-router-dom';
function CheckoutHeader() {
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
      </div>
    </header>
  );
}

export default CheckoutHeader;
