import { LoginUser } from './User';
interface AuthProps {
  isAuth?: boolean;
  setIsAuth?: React.Dispatch<React.SetStateAction<boolean>>;
  setUser?: React.Dispatch<React.SetStateAction<LoginUser>>;
  user?: LoginUser;
}

export default AuthProps;
