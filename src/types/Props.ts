import Product from './Products';
import { LoginUser } from './User';
interface AuthProps {
  isAuth?: boolean;
  setIsAuth?: (isAuth: boolean) => void;
  setUser?: React.Dispatch<React.SetStateAction<LoginUser>>;
  user?: LoginUser;
}
interface LayoutsProps extends Required<AuthProps> {
  products: Product[];
}
interface ProductsProps {
  products: Product[];
}

export type { AuthProps, ProductsProps, LayoutsProps };
