import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import RootLayout from './components/Layouts/RootLayout';
import Products from './components/Pages/Products/Products';
import Blog from './components/Pages/Blog/Blog';
import About from './components/Pages/About/About';
import Auth from './components/Pages/Auth/Auth';
import SignIn from './components/Pages/Auth/SignIn/SignIn';
import SignUp from './components/Pages/Auth/SignUp/SignUp';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Products />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path='/auth' element={<Auth/>} />
            <Route path='/auth/signin' element={<SignIn/>} />
            <Route path='/auth/signup' element={<SignUp/>} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
