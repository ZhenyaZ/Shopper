import styles from './Checkout.module.css';
import CheckoutBilling from './CheckoutBilling/CheckoutBilling';

function Checkout() {
  return (
    <main className={`${styles['checkout']}}`}>
      <div className={`${styles['checkout-content']} container`}>
        <CheckoutBilling />
      </div>
    </main>
  );
}

export default Checkout;
