import React from "react";
import { CartWidgetWrapper, CheckoutWidget } from "../components";
import "../index.css";

const CheckoutPage = () => {
  return (
    <div className="container">
      <div className="checkout-header">
        <h1 className="checkout-title">Checkout</h1>
        <p className="checkout-subtitle">Review your cart and complete your purchase</p>
      </div>

      <div className="checkout-layout">
        <div className="checkout-card">
          <h2 className="checkout-widget-title">Shopping Cart</h2>
          <CartWidgetWrapper />
        </div>

        <div>
          <CheckoutWidget />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
