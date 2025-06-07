import { useCart } from 'cart/useCart';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutWidget = () => {
  const navigate = useNavigate();
  const { items, getTotal, clearCart } = useCart();

  const handleCheckout = () => {
    // Here you would typically handle the checkout process
    alert('Thank you for your purchase!');
    clearCart();
    navigate('/');
  };

  const subtotal = getTotal ? getTotal() : items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  return (
    <div style={{
      padding: '1rem',
      backgroundColor: '#fff',
      borderRadius: '4px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2>Checkout Summary</h2>
      {items.length > 0 ? (
        <>
          <div style={{ marginBottom: '1rem' }}>
            <h3>Items to purchase:</h3>
            {items.map((item, index) => (
              <div key={item.id || index} style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '0.5rem'
              }}>
                <span>{item.name} (x{item.quantity})</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div style={{
            borderTop: '1px solid #eee',
            paddingTop: '1rem',
            marginTop: '1rem'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span>Tax (10%):</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              fontWeight: 'bold',
              marginTop: '0.5rem',
              paddingTop: '0.5rem',
              borderTop: '1px solid #eee'
            }}>
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <button
            onClick={handleCheckout}
            style={{
              backgroundColor: '#28a745',
              color: 'white',
              padding: '0.5rem 1rem',
              border: 'none',
              borderRadius: '4px',
              marginTop: '1rem',
              cursor: 'pointer',
              width: '100%',
              fontSize: '1.1rem'
            }}
          >
            Complete Purchase
          </button>
        </>
      ) : (
        <p>No items in cart</p>
      )}
    </div>
  );
};

export default CheckoutWidget; 