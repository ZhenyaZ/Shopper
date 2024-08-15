import React from 'react';
import styles from './TopSellers.module.css';
import headphonesImg from '../../../../assets/headphones.png';
import Card from '../../../UI/Card/Card';

function TopSellers() {
  return (
    <section className={`${styles['top-sellers']}`}>
      <div className={`${styles['top-sellers-content']} container`}>
        <div className={styles['top-sellers__title']}>
          <h1>Top Sellers</h1>
        </div>
        <div className={styles['top-sellers__products']}>
          <Card image={headphonesImg} title="Boat Rockerz 333" price={20} />
        </div>
      </div>
    </section>
  );
}

export default TopSellers;
