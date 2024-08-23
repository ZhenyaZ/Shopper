import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './components/Pages/Home/Home';
import RootLayout from './components/Layouts/RootLayout';
import Products from './components/Pages/Products/Products';
import Blog from './components/Pages/Blog/Blog';
import About from './components/Pages/About/About';
import Auth from './components/Pages/Auth/Auth';
import SignIn from './components/Pages/Auth/SignIn/SignIn';
import SignUp from './components/Pages/Auth/SignUp/SignUp';
import Profile from './components/Pages/Profile/Profile';
import { LoginUser } from './types/User';
import { getProducts } from './api/products';
import Product from './types/Products';
import ProductDetail from './components/Pages/Products/ProductDetail/ProductDetail';
import DetailedPost from './components/Pages/Blog/DetailedPost/DetailedPost';
import Cart from './components/Pages/Cart/Cart';
import { useUserStore } from './store/UserStore';

function App() {
  const [user, setUser] = useState<LoginUser>({} as LoginUser);
  const [products, setProducts] = useState([] as Product[]);
  const isAuth = useUserStore((state) => state.isAuth);
  const setIsAuth = useUserStore((state) => state.setIsAuth);
  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route
            element={
              <RootLayout user={user} isAuth={isAuth} setIsAuth={setIsAuth} setUser={setUser} products={products} />
            }>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Products products={products} />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/post/:id" element={<DetailedPost />} />
            <Route path="/about" element={<About />} />
            <Route path="/Cart" element={<Cart isAuth={isAuth} />} />
            {!isAuth ? (
              <>
                <Route path="/auth" element={<Auth />} />
                <Route path="/auth/signin" element={<SignIn setIsAuth={setIsAuth} setUser={setUser} />} />
                <Route path="/auth/signup" element={<SignUp />} />
              </>
            ) : (
              <Route path="/profile" element={<Profile />} />
            )}
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
