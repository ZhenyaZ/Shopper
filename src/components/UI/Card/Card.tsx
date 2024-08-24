import React from 'react';
import styles from './Card.module.css';
import useCartStore from '../../../store/CartStore';
import parser from 'html-react-parser';
interface CardProps {
  _id: string;
  image: string;
  title: string;
  price: number;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function Card(props: CardProps) {
  console.log(props);

  const { image, title, price } = props;

  const addProduct = useCartStore((state) => state.addProduct);
  const addToCart = (e: React.MouseEvent<HTMLButtonElement>, product: CardProps) => {
    e.preventDefault();
    addProduct({ ...product, quantity: 1 });
  };
  return (
    <div className={styles['card']}>
      <img src={image} alt="image" />
      <div className={styles['card__description']}>
        <h3>{parser(title)}</h3>
        <p>$ {price}</p>
      </div>
      <div className={`${styles['card__controller']} button-stylized`}>
        <button onClick={(e) => addToCart(e, props)}>Add to cart</button>
        <button onClick={props.onClick}>Details</button>
      </div>
    </div>
  );
}

export default Card;
