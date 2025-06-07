import React from 'react';
import CheckoutWidget from '../components/CheckoutWidget';

const CheckoutPage = () => {
  return (
    <div style={{
      maxWidth: '800px',
      margin: '2rem auto',
      padding: '0 1rem'
    }}>
      <h1 style={{ marginBottom: '2rem' }}>Checkout</h1>
      <CheckoutWidget />
    </div>
  );
};

export default CheckoutPage; 