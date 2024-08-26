import parser from 'html-react-parser';
import styles from './OrderDetails.module.css';
import useCartStore from '../../../../../store/CartStore';
function OrderDetails() {
  const cartItem = useCartStore((state) => state.products);
  return (
    <section className={`${styles['order-details']}`}>
      <div className={`${styles['order-details-content']} container`}>
        <h1 className={styles['order-details__title']}>Order Details</h1>
        <div className={styles['order-details__description']}>
          <p>image</p>
          <p>title</p>
          <p>quantity</p>
          <p>price</p>
          <p>total</p>
        </div>
        <div className={styles['order-details__items']}>
          {cartItem.map((item) => {
            return (
              <div className={styles['order-details__item']} key={item._id}>
                <img src={item.image} />
                <p>{parser(item.title)}</p>
                <p>{item.quantity} </p>
                <p>$ {item.price}</p>
                <p>$ {item.quantity * item.price}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default OrderDetails;
