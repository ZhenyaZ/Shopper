import axios from 'axios';
import { LoginUser } from '../types/User';

export const SignIn = async (data: Pick<LoginUser, 'login' | 'password'>) => {
  try {
    const response = await axios.post('http://localhost:3000/api/login', data, { withCredentials: true });
    return response;
  } catch (error) {
    return error;
  }
};
