import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/productSlice";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.current);

  useEffect(() => {
    dispatch(getProduct(id));
  }, [id, dispatch]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mt-4">
      <button className="btn btn-secondary mb-3" onClick={() => navigate("/products")}>
        ← Back to Product List
      </button>

      <h2>{product.name}</h2>
      <img
        src={`/images/${product.image}`}
        alt={product.name}
        className="img-fluid mb-3"
        style={{ maxHeight: "300px", objectFit: "contain" }}
      />
      <p>{product.description}</p>
      <p>Original Price: <del>{product.price} ₫</del></p>
      <p>Current Price: <strong>{product.currentPrice} ₫</strong></p>
    </div>
  );
}

export default ProductDetail;
