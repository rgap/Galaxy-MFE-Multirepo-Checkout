import React, { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// Lazy load the CartProvider from the remote module
const CartProviderComponent = lazy(() =>
  import("cart/CartContext").then(module => ({
    default: ({ children }) => React.createElement(module.CartProvider, {}, children),
  }))
);

const mount = () => {
  const container = document.getElementById("root");
  if (!container) {
    throw new Error("Root container not found");
  }

  const root = createRoot(container);

  // Wrap in BrowserRouter only if running standalone
  const isStandalone = window.location.port === "3003";

  root.render(
    <React.StrictMode>
      <Suspense fallback={<div>Loading cart provider...</div>}>
        <CartProviderComponent>
          {isStandalone ? (
            <BrowserRouter>
              <App />
            </BrowserRouter>
          ) : (
            <App />
          )}
        </CartProviderComponent>
      </Suspense>
    </React.StrictMode>
  );
};

mount();
