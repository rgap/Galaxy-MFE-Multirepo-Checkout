import { useCart } from 'cart/useCart';
import { Button } from 'common-components-react';
import React from 'react';

const CartItem = ({ item }) => {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div style={{
      display: 'flex',
      padding: '1rem',
      backgroundColor: '#f8f9fa',
      borderRadius: '4px',
      marginBottom: '1rem'
    }}>
      <div style={{ flex: 1 }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          marginBottom: '0.5rem'
        }}>
          <h4 style={{ margin: 0 }}>{item.name}</h4>
          <Button
            variant="danger"
            size="small"
            onClick={() => removeItem(item.id)}
          >
            ✕
          </Button>
        </div>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ color: '#666' }}>${item.price}</div>
          
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <Button
              variant="outline"
              size="small"
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
            >
              -
            </Button>
            
            <span>{item.quantity}</span>
            
            <Button
              variant="outline"
              size="small"
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
            >
              +
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CartWidgetWrapper = () => {
  const { items } = useCart();

  return (
    <div style={{
      backgroundColor: '#fff',
      borderRadius: '4px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      padding: '1rem'
    }}>
      {items.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '2rem',
          backgroundColor: '#f8f9fa',
          borderRadius: '4px'
        }}>
          <p>Your cart is empty</p>
          <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            Add some items to your cart to proceed with checkout.
          </p>
        </div>
      ) : (
        <div>
          {items.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CartWidgetWrapper; 