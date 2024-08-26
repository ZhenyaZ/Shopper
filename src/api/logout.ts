import axios from 'axios';

export const Logout = async () => {
  try {
    const response = await axios.get(import.meta.env.VITE_API_LOGOUT_URL, { withCredentials: true });
    return response;
  } catch (error) {
    return error;
  }
};
