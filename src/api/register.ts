import axios from 'axios';
import { RegisterUser } from '../types/User';

export const SignUp = async (data: RegisterUser) => {
  try {
    const response = await axios.post(import.meta.env.VITE_API_REGISTER_URL, data, { withCredentials: true });
    return response;
  } catch (error) {
    return error;
  }
};
