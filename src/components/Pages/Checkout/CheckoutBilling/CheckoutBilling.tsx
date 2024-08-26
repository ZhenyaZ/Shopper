import React from 'react';
import styles from './CheckoutBilling.module.css';
import CheckoutBillingForm from './CheckoutBillingForm/CheckoutBillingForm';
import OrderDetails from './OrderDetails/OrderDetails';
import { useUserStore } from '../../../../store/UserStore';
import useCartStore from '../../../../store/CartStore';
import { sendOrder } from '../../../../api/sendOrder';
import Product from '../../../../types/Products';
import { useNavigate } from 'react-router-dom';

export interface Validate {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  zip: string;
  cartNonEmpty: boolean;
  e: React.MouseEvent;
}
const PhoneRegExp = /^\+?\d{1,4}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

function CheckoutBilling() {
  const [validation, setValidation] = React.useState(true);
  const [data, setData] = React.useState(
    {} as {
      userID: string;
      name: string;
      email: string;
      phone: string;
      address: string;
      city: string;
      country: string;
      zip: string;
      products: Product[];
      total: number;
    },
  );
  const cart = useCartStore((state) => state);
  const user = useUserStore((state) => state);
  const isAuth = useUserStore((state) => state.isAuth);
  const navigate = useNavigate();

  const getFormData = ({ name, email, phone, address, city, country, zip, cartNonEmpty, e }: Validate) => {
    e.preventDefault();
    if (
      name.length > 0 &&
      email.length > 0 &&
      phone.match(PhoneRegExp) &&
      address.length > 0 &&
      city.length > 0 &&
      country.length > 0 &&
      zip.length >= 4 &&
      cartNonEmpty === true
    ) {
      setValidation(false);
      setData({
        userID: user.data._id,
        name,
        email,
        phone,
        address,
        city,
        country,
        zip,
        products: cart.products,
        total: cart.total,
      });
    } else {
      setValidation(true);
    }
  };
  const onPlaceOrder = () => {
    sendOrder(data).then((res) => {
      cart.clearCart();
      navigate('/orderSuccess', { state: { message: res.data.message } });
    });
  };
  return (
    <section className={styles['checkout-billing']}>
      {isAuth ? (
        <>
          <CheckoutBillingForm onGetData={getFormData} />
          <hr />
          <OrderDetails />
          <div className={`${styles['checkout-billing__button']} button-stylized`}>
            <button disabled={validation} onClick={onPlaceOrder}>
              PLACE ORDER
            </button>
          </div>
        </>
      ) : (
        <section className={styles['checkout-billing__error']}>
          <h1>Please sign in</h1>
        </section>
      )}
    </section>
  );
}

export default CheckoutBilling;
