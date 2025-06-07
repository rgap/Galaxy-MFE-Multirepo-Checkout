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
      {isStandalone ? (
        <BrowserRouter>
          <App />
        </BrowserRouter>
      ) : (
        <App />
      )}
    </React.StrictMode>
  );
};

mount(); 