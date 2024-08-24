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
          {!validation && <p>Please login to checkout or add items to cart</p>}
        </div>
      </div>
    </div>
  );
}

export default Cart;
