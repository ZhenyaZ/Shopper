import React from 'react';
import styles from './CheckoutBillingForm.module.css';
import { Validate } from '../CheckoutBilling';
import useCartStore from '../../../../../store/CartStore';
import { useUserStore } from '../../../../../store/UserStore';

interface CheckoutBillingFormProps {
  onGetData: (data: Validate) => void;
}

function CheckoutBillingForm({ onGetData }: CheckoutBillingFormProps) {
  const userData = useUserStore((state) => state.data);
  const cartIsEmpty = useCartStore((state) => state.products.length > 0);

  const [name, setName] = React.useState(userData.name);
  const [email, setEmail] = React.useState(userData.email);
  const [phone, setPhone] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [city, setCity] = React.useState('');
  const [country, setCountry] = React.useState('');
  const [zip, setZip] = React.useState('');

  return (
    <form action="" className={styles['checkout-billing__form']}>
      <fieldset className={styles['checkout-billing__form__fieldset']}>
        <legend>Billing Details</legend>

        <div className={styles['checkout-billing__form__name']}>
          <label htmlFor="name" className="formattedLabel">
            Name <span id={styles['required']}>*</span>
          </label>
          <input
            type="text"
            id="name"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Enter your name and surname"
          />
        </div>
        <div className={styles['checkout-billing__form__email']}>
          <label htmlFor="email" className="formattedLabel">
            Email <span id={styles['required']}>*</span>
          </label>
          <input
            type="email"
            id="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter your email address"
          />
        </div>
        <div className={styles['checkout-billing__form__phone']}>
          <label htmlFor="phone" className="formattedLabel">
            Phone <span id={styles['required']}>*</span>
          </label>
          <input
            type="text"
            id="phone"
            required
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            pattern="\+?\d{1,4}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            placeholder="000-000-000 or +000-000-000-000"
          />
        </div>
        <div className={styles['checkout-billing__form__address']}>
          <label htmlFor="address" className="formattedLabel">
            Address <span id={styles['required']}>*</span>
          </label>
          <input
            type="text"
            id="address"
            required
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            placeholder="Enter your address"
          />
        </div>
        <div className={styles['checkout-billing__form__city']}>
          <label htmlFor="city" className="formattedLabel">
            City <span id={styles['required']}>*</span>
          </label>
          <input
            type="text"
            id="city"
            required
            onChange={(e) => setCity(e.target.value)}
            value={city}
            placeholder="Enter your city"
          />
        </div>
        <div className={styles['checkout-billing__form__country']}>
          <label htmlFor="country" className="formattedLabel">
            Country <span id={styles['required']}>*</span>
          </label>
          <input
            type="text"
            id="country"
            required
            onChange={(e) => setCountry(e.target.value)}
            value={country}
            placeholder="Enter your country"
          />
        </div>
        <div className={styles['checkout-billing__form__zip']}>
          <label htmlFor="zip" className="formattedLabel">
            Zip <span id={styles['required']}>*</span>
          </label>
          <input
            type="text"
            id="zip"
            required
            onChange={(e) => setZip(e.target.value)}
            value={zip}
            placeholder="Enter your zip code (4 digits)"
          />
        </div>
        <div className={`${styles['checkout-billing__form__validation']} button-stylized`}>
          <button
            type="submit"
            onClick={(e) =>
              onGetData({ name, email, phone, address, city, country, zip, cartNonEmpty: cartIsEmpty, e })
            }>
            Validate data
          </button>
        </div>
      </fieldset>
    </form>
  );
}

export default CheckoutBillingForm;
