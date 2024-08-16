import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import RootLayout from './components/Layouts/RootLayout';
import Products from './components/Pages/Products/Products';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route element={<RootLayout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Products/>}/>
        </Route>
      </Routes>
    </Router>
    </>
    
  );
}

export default App;
