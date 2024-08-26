import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './OrderSuccess.module.css';

function OrderSuccess() {
  const location = useLocation();
  return (
    <div className={styles.orderSuccess}>
      <div className={styles['orderSuccess__title']}>Thank you for your order</div>
      <div className={styles['orderSuccess__content']}>{location.state.message}</div>
      <div className={styles['orderSuccess__content']}>Our manager will contact you soon</div>
      <div className={styles['orderSuccess__content']}>*click to logo to go home*</div>
    </div>
  );
}

export default OrderSuccess;
