import styles from './TopSellers.module.css';
import Card from '../../../UI/Card/Card';
import { useProductStore } from '../../../../store/ProductStore';
import { useNavigate } from 'react-router-dom';

function TopSellers() {
  const navigate = useNavigate();
  const product = useProductStore((state) => state.topProduct);

  return (
    <section className={`${styles['top-sellers']}`}>
      <div className={`${styles['top-sellers-content']} container`}>
        <div className={styles['top-sellers__title']}>
          <h1>Top Sellers</h1>
        </div>
        <div className={styles['top-sellers__products']}>
          {product.length !== 0 ? (
            product
              .slice(0, 1)
              .map((product) => (
                <Card
                  key={product._id}
                  _id={product._id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  onClick={() => navigate(`/product/${product._id}`, { state: { product: product } })}
                />
              ))
          ) : (
            <span>Loading...</span>
          )}
        </div>
      </div>
    </section>
  );
}

export default TopSellers;
