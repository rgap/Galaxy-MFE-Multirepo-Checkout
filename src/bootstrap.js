import { CartProvider } from 'cart/CartContext';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const mount = () => {
  const container = document.getElementById('root');
  const root = createRoot(container);

  // Wrap in BrowserRouter only if running standalone
  const isStandalone = window.location.port === '3003';
  
  root.render(
    <React.StrictMode>
      <CartProvider>
        {isStandalone ? (
          <BrowserRouter>
            <App />
          </BrowserRouter>
        ) : (
          <App />
        )}
      </CartProvider>
    </React.StrictMode>
  );
};

mount(); 