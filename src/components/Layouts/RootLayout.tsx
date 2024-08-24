import Container from './Container';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

function RootLayout() {
  return (
    <Container>
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </Container>
  );
}

export default RootLayout;
