import axios from 'axios';

export const getPosts = async () => {
  try {
    const response = await axios.get(import.meta.env.VITE_API_GET_POSTS_URL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
