import axios from 'axios';

export const getOrders = async (_id: string) => {
  return await axios
    .post(import.meta.env.VITE_API_GET_ORDERS_URL, { data: { _id } })

    .catch((error) => {
      console.log(error);
    });
};
