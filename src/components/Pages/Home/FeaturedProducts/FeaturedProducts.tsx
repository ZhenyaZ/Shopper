import airPodImg from '../../../../assets/airpod.png';
import styles from './FeaturedProducts.module.css';
function FeaturedProducts() {
  return (
    <section className={`${styles['featured-products']}`}>
      <div className={`${styles['featured-products-content']} container`}>
        <div className={styles['featured-products-product']}>
          <div className={styles['featured-products__title']}>Apple wireless Airpod</div>
          <div className={styles['featured-products__image']}>
            <img src={airPodImg} alt="featuresProduct" />
          </div>
          <div className={styles['featured-products__price']}>
            <span>$45.99</span>
          </div>
        </div>
        <div className={styles['featured-products-subtitle']}>
          <div className={styles['featured-products_subtitle-title']}>Our featured products</div>
          <div className={styles['featured-products_subtitle-subtitle']}>
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
              Soluta, vitae a. Enim impedit error provident.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
