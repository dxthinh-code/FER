import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProduct, getProduct, getProducts } from "../redux/productSlice";
import ProductForm from "../components/ProductForm";
import { useNavigate, useParams } from "react-router-dom";

function EditProductPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.current);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProduct(id));
  }, [id, dispatch]);

  const handleEdit = (updated) => {
    dispatch(editProduct({ id, product: updated })).then(() => {
      dispatch(getProducts());
      navigate("/products"); 
    });
  };

  if (!product) return <div className="container mt-3">Loading...</div>;

  return (
    <div className="container mt-3">
      {/*  NÚT BACK đưa về trang product list */}
      <div className="mb-3">
        <button className="btn btn-outline-secondary" onClick={() => navigate("/products")}>
          ← Back to Product List
        </button>
      </div>

      <h3>Edit Product</h3>
      <ProductForm initial={product} onSubmit={handleEdit} />
    </div>
  );
}

export default EditProductPage;
