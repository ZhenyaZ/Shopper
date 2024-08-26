import axios from 'axios';
import { LoginUser } from '../types/User';

export const SignIn = async (data: Pick<LoginUser, 'login' | 'password'>) => {
  try {
    const response = await axios.post(import.meta.env.VITE_API_LOGIN_URL, data, { withCredentials: true });
    return response;
  } catch (error) {
    return error;
  }
};
