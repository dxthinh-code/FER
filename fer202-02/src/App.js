import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddProductPage from "./pages/AddProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import EditProductPage from "./pages/EditProductPage";
import ProductListPage from "./pages/ProductListPage"; 
import AddToCartPage from "./pages/AddToCartPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListPage />} /> 
        <Route path="/add" element={<AddProductPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/edit/:id" element={<EditProductPage />} />
        {/* ✅ Route cho trang giỏ hàng */}
        <Route path="/cart" element={<AddToCartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;