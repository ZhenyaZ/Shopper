import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
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

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState<LoginUser>({} as LoginUser);
  return (
    <>
      <Router>
        <Routes>
          <Route element={<RootLayout isAuth={isAuth} setIsAuth={setIsAuth} setUser={setUser}/>}>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Products />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
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
