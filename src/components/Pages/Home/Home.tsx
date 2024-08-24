import React from 'react';
import styles from './Home.module.css';
import productImg from '../../../assets/product.png';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import TopSellers from './TopSellers/TopSellers';
function Home() {
  return (
    <>
      <main className={`${styles['home']} container`}>
        <div className={`${styles['home-content']} `}>
          <div className={`${styles['home-latest__products']} `}>
            <div className={`${styles['home-latest__products-content']}`}>
              <div className={styles['home-latest__products-title']}>
                Discover Our <br />
                Latest Products
              </div>
              <div className={styles['home-latest__products-subTitle']}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aut in nulla corrupti ipsa magni
                voluptatem ipsum, nisi amet delectus?
              </div>
            </div>
            <div className={styles['home-latest__products-image']}>
              <img src={productImg} alt="image" />
            </div>
          </div>
        </div>
      </main>
      <FeaturedProducts />
      <TopSellers />
    </>
  );
}

export default Home;
