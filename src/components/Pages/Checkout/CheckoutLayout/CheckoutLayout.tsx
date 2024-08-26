import React from 'react';
import Container from '../../../Layouts/Container';
import CheckoutHeader from './CheckoutHeader/CheckoutHeader';
import { Outlet } from 'react-router-dom';

function CheckoutLayout() {
  return (
    <Container>
      <CheckoutHeader />
      <main className="content">
        <Outlet />
      </main>
    </Container>
  );
}

export default CheckoutLayout;
