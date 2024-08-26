import axios from 'axios';

export const getProducts = async () => {
  try {
    const response = await axios.get(import.meta.env.VITE_API_GET_PRODUCTS_URL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getProduct = async () => {
  try {
    const response = await axios.get(import.meta.env.VITE_API_GET_PRODUCT_URL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
