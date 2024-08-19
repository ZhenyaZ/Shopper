import axios from 'axios';

export const Logout = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/logout', { withCredentials: true });
    return response;
  } catch (error) {
    return error;
  }
};
