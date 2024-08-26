import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './components/Pages/Home/Home';
import RootLayout from './components/Layouts/RootLayout';
import Products from './components/Pages/Products/Products';
import Blog from './components/Pages/Blog/Blog';
import About from './components/Pages/About/About';
import Auth from './components/Pages/Auth/Auth';
import SignIn from './components/Pages/Auth/SignIn/SignIn';
import SignUp from './components/Pages/Auth/SignUp/SignUp';
import Profile from './components/Pages/Profile/Profile';
import { getProduct, getProducts } from './api/products';
import ProductDetail from './components/Pages/Products/ProductDetail/ProductDetail';
import DetailedPost from './components/Pages/Blog/DetailedPost/DetailedPost';
import Cart from './components/Pages/Cart/Cart';
import { useUserStore } from './store/UserStore';
import { useProductStore } from './store/ProductStore';
import CheckoutLayout from './components/Pages/Checkout/CheckoutLayout/CheckoutLayout';
import Checkout from './components/Pages/Checkout/Checkout';
import OrderSuccess from './components/Pages/Checkout/OrderSuccess/OrderSuccess';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const queryClient = new QueryClient();

function App() {
  const addProduct = useProductStore((state) => state.addProduct);
  const addTopProduct = useProductStore((state) => state.addTopProduct);
  const isAuth = useUserStore((state) => state.isAuth);
  useEffect(() => {
    getProducts().then((data) => addProduct(data));
    getProduct().then((data) => addTopProduct(data));
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/post/:id" element={<DetailedPost />} />
            <Route path="/about" element={<About />} />
            <Route path="/Cart" element={<Cart isAuth={isAuth} />} />
            {!isAuth ? (
              <>
                <Route path="/auth" element={<Auth />} />
                <Route path="/auth/signin" element={<SignIn />} />
                <Route path="/auth/signup" element={<SignUp />} />
              </>
            ) : (
              <Route path="/profile/:id" element={<Profile />} />
            )}
          </Route>
          <Route element={<CheckoutLayout />}>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/orderSuccess" element={<OrderSuccess />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
