import styles from './Products.module.css';
import ProductList from './ProductList';
import { ProductsProps } from '../../../types/Props';

function Products(props: ProductsProps) {
  return (
    <section className={styles.products}>
      <div className={`${styles['products-content']} container`}>
        <div className={styles['products-products-list']}>
          <ProductList products={props.products} />
        </div>
      </div>
    </section>
  );
}

export default Products;
