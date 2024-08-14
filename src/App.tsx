import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Pages/Home/Home';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
