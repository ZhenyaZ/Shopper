import style from './Cart.module.css';
import CartItems from './CartItems/CartItems';
import useCartStore from '../../../store/CartStore';
import { useNavigate } from 'react-router-dom';

interface CartProps {
  isAuth: boolean;
}

function Cart(props: CartProps) {
  const navigate = useNavigate();
  const products = useCartStore((state) => state.products);
  const validation = products.length > 0 && props.isAuth;
  const total = useCartStore((state) => state.total);
  const setTotal = useCartStore((state) => state.setTotal);
  setTotal(products.reduce((total, product) => total + product.price * product.quantity, 0));
  return (
    <div className={style.cart}>
      <div className={`${style['cart-content']} container`}>
        <div className={style['cart-title']}>
          <h1>Cart</h1>
        </div>
        <CartItems products={products} />
        <div className={`${style['cart-footer']} button-stylized`}>
          <p>Total: {total}$</p>
          <button disabled={!validation} onClick={() => navigate('/checkout')}>
            Checkout
          </button>
          {!validation && <p>Please login to checkout or add items to cart</p>}
        </div>
      </div>
    </div>
  );
}

export default Cart;
