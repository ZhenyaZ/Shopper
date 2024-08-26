import axios from 'axios';

export const getOrders = async (_id: string) => {
  return await axios
    .post(`http://localhost:3000/api/getOrders/`, { data: { _id } })

    .catch((error) => {
      console.log(error);
    });
};
