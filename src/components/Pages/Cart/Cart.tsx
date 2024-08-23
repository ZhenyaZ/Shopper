import React from 'react';
import style from './Cart.module.css';
import CartItems from './CartItems/CartItems';
import useCartStore from '../../../store/CartStore';

interface CartProps {
  isAuth: boolean;
}

function Cart(props: CartProps) {
  const products = useCartStore((state) => state.products);
  const validation = products.length > 0 && props.isAuth;
  return (
    <div className={style.cart}>
      <div className={`${style['cart-content']} container`}>
        <div className={style['cart-title']}>
          <h1>Cart</h1>
        </div>
        <CartItems products={products} />
        <div className={`${style['cart-footer']} button-stylized`}>
          <p>Total: {products.reduce((total, product) => total + product.price * product.quantity, 0)}$</p>
          <button disabled={!validation}>Checkout</button>
          {!props.isAuth && <p>Please login to checkout</p>}
          {!validation && <p>Please add products to cart</p>}
        </div>
      </div>
    </div>
  );
}

export default Cart;
