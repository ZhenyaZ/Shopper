import React from 'react';
import styles from './Card.module.css';
interface CardProps {
  image: string;
  title: string;
  price: number;
}
function Card(props: CardProps) {
  const { image, title, price } = props;
  return (
    <div className={styles['card']}>
      <img src={image} alt="image" />
      <div className={styles['card__description']}>
        <h3>{title}</h3>
        <p>$ {price}</p>
      </div>
      <div className={`${styles['card__controller']} button-stylized`}>
        <button>Add to cart</button>
      </div>
    </div>
  );
}

export default Card;
