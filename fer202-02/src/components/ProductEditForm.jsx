import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProduct, editProduct, getProducts } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductForm from "./ProductForm";

function ProductEditForm() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = useSelector((state) => state.products.current);

  useEffect(() => {
    dispatch(getProduct(id));
  }, [id, dispatch]);

  const handleUpdate = (updatedData) => {
    dispatch(editProduct({ id, product: updatedData })).then(() => {
      dispatch(getProducts());
      navigate("/");
    });
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mt-4">
      <button className="btn btn-secondary mb-3" onClick={() => navigate("/")}>
        ← Back to Product List
      </button>

      <h3>Edit Product</h3>
      <ProductForm initial={product} onSubmit={handleUpdate} />
    </div>
  );
}

export default ProductEditForm;
