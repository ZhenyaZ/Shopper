import React from 'react';
import Container from './Container';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { LayoutsProps } from '../../types/Props';

function RootLayout(props: LayoutsProps) {
  return (
    <Container>
      <Header
        user={props.user}
        isAuth={props.isAuth}
        setIsAuth={props.setIsAuth}
        setUser={props.setUser}
        products={props.products}
      />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </Container>
  );
}

export default RootLayout;
