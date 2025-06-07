import React from 'react';
import CartWidgetWrapper from '../components/CartWidgetWrapper';
import CheckoutWidget from '../components/CheckoutWidget';

const CheckoutPage = () => {
  return (
    <div style={{
      maxWidth: '1200px',
      margin: '2rem auto',
      padding: '0 1rem'
    }}>
      <h1 style={{ marginBottom: '2rem' }}>Checkout</h1>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2rem',
        alignItems: 'start'
      }}>
        <div>
          <h2 style={{ marginBottom: '1rem' }}>Shopping Cart</h2>
          <CartWidgetWrapper />
        </div>

        <div>
          <h2 style={{ marginBottom: '1rem' }}>Order Summary</h2>
          <CheckoutWidget />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage; 