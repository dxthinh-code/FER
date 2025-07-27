import React from "react";
import { useDispatch } from "react-redux";
import { createProduct, getProducts } from "../redux/productSlice";
import ProductForm from "../components/ProductForm";
import { useNavigate } from "react-router-dom";

function AddProductPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAdd = (product) => {
    dispatch(createProduct(product)).then(() => {
      dispatch(getProducts());
      navigate("/products");
    });
  };

  return (
    <div className="container mt-3">
      <h3>Add Product</h3>
      <ProductForm initial={{ name: "", description: "", price: "", currentPrice: "", image: "" }} onSubmit={handleAdd} />
    </div>
  );
}
export default AddProductPage;
