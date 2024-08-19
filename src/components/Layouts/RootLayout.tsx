import React from 'react';
import Container from './Container';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import AuthProps from '../../types/Props';

function RootLayout(props: AuthProps) {
  return (
    <Container>
      <Header isAuth={props.isAuth} setIsAuth={props.setIsAuth} setUser={props.setUser} />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </Container>
  );
}

export default RootLayout;
