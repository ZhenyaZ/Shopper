import React from 'react';
import styles from './Item.module.css';
import useCartStore, { ProductState } from '../../../store/CartStore';

interface ItemProps {
  product: ProductState;
}

function Item(props: ItemProps) {
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeProduct = useCartStore((state) => state.removeProduct);
  const onRemoveHandler = () => {
    removeProduct(props.product._id);
  };
  const onIncreaseHandler = () => {
    increaseQuantity(props.product._id);
  };
  const onDecreaseHandler = () => {
    decreaseQuantity(props.product._id);
  };
  return (
    <div className={styles.item}>
      <div className={styles['item-details']}>
        <div className={styles['item-image']}>
          <img src={props.product.image} alt="image" />
        </div>
        <div className={styles['item-description']}>
          <h3>{props.product.title}</h3>
          <p>${props.product.price}</p>
        </div>
        <div className={styles['item-quantity']}>
          <p>{props.product.quantity}</p>
        </div>
        <div className={styles['item-total']}>
          <p>Total</p>
          <p>${props.product.price * props.product.quantity}</p>
        </div>
        <div className={`${styles['item-controller']} button-stylized`}>
          <button className="" onClick={onRemoveHandler}>
            Remove
          </button>
          <button className={styles['increaseQuantity']} onClick={onIncreaseHandler}>
            +
          </button>
          <button className={styles['decreaseQuantity']} onClick={onDecreaseHandler}>
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
