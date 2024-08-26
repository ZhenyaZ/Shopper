import axios from 'axios';
import Product from '../types/Products';

interface Order {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  zip: string;
  products: Product[];
  total: number;
}

export const sendOrder = (data: Order) => {
  return axios.post(import.meta.env.VITE_SEND_ORDER_URL, data);
};
