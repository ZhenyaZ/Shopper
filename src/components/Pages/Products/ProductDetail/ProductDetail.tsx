import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './ProductDetail.module.css';
function ProductDetail() {
  const location = useLocation();
  return (
    <div className={styles['product-detail']}>
      <div className={`${styles['product-detail-content']} container`}>
        <div className={styles['product-detail__image']}>
          <img src={location.state.product.image} alt="image" />
        </div>
        <div className={styles['product-detail__details']}>
          <div className={styles['product-detail__details-title']}>
            <h1>{location.state.product.title}</h1>
          </div>
          <div className={styles['product-detail__details-price']}>
            <h2>${location.state.product.price}</h2>
          </div>
          <div className={styles['product-detail__description']}>
            <p>{location.state.product.description}</p>
          </div>
          <div className={`${styles['product-detail__details-controller']} button-stylized`}>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
