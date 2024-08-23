import axios from 'axios';

export const getProducts = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/getAllProducts');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getProduct = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/getProduct');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
