import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './ProductDetail.module.css';
import useCartStore from '../../../../store/CartStore';
import parser from 'html-react-parser';
function ProductDetail() {
  const location = useLocation();
  const addToCart = useCartStore((state) => state.addProduct);

  return (
    <div className={styles['product-detail']}>
      <div className={`${styles['product-detail-content']} container`}>
        <div className={styles['product-detail__image']}>
          <img src={location.state.product.image} alt="image" />
        </div>
        <div className={styles['product-detail__details']}>
          <div className={styles['product-detail__details-title']}>
            <h1>{parser(location.state.product.title)}</h1>
          </div>
          <div className={styles['product-detail__details-price']}>
            <h2>${location.state.product.price}</h2>
          </div>
          <div className={styles['product-detail__description']}>
            <p>{parser(location.state.product.description)}</p>
          </div>
          <div className={`${styles['product-detail__details-controller']} button-stylized`}>
            <button onClick={() => addToCart(location.state.product)}>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
