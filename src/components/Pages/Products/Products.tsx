import styles from './Products.module.css';
import ProductList from './ProductList';
import { useProductStore } from '../../../store/ProductStore';

function Products() {
  const products = useProductStore((state) => state.products);
  return (
    <section className={styles.products}>
      <div className={`${styles['products-content']} container`}>
        <div className={styles['products-products-list']}>
          <ProductList productsProp={products} />
        </div>
      </div>
    </section>
  );
}

export default Products;
