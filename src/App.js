import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import CheckoutPage from "./pages/CheckoutPage";

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<CheckoutPage />} />
    </Routes>
  );
};

export default App;
