import React from 'react';
import styles from './Home.module.css';
import productImg from '../../../assets/product.png';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.  Dignissimos aut in nulla corrupti ipsa magni
                voluptatem ipsum, nisi amet delectus?
              </div>
              <div className={styles['home-latest__products-controller']}>
                <button>Buy now</button>
              </div>
            </div>
            <div className={styles['home-latest__products-image']}>
              <img src={productImg} alt="image" />
            </div>
          </div>
        </div>
      </main>
      <FeaturedProducts />
    </>
  );
}

export default Home;
