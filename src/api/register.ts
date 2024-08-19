import axios from 'axios';
import { RegisterUser } from '../types/User';

export const SignUp = async (data: RegisterUser) => {
  try {
    const response = await axios.post('http://localhost:3000/api/register', data, { withCredentials: true });
    return response;
  } catch (error) {
    return error;
  }
};
