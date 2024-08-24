import styles from './CartItems.module.css';
import Item from '../../../UI/Item/Item';
import { ProductState } from '../../../../store/CartStore';

interface CartItemsProps {
  products: ProductState[];
}

function CartItems({ products }: CartItemsProps) {
  return (
    <div className={styles['cart-items']}>
      {products.length !== 0 ? (
        products.map((product) => {
          return <Item key={product._id} product={product} />;
        })
      ) : (
        <span>No items</span>
      )}
    </div>
  );
}

export default CartItems;
