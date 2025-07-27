import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ProductItem({ product, onDelete }) {
  const formatPrice = (priceStr) => {
    try {
      const number = parseInt(priceStr.replace(/\./g, ""));
      return number.toLocaleString("vi-VN") + " ₫";
    } catch {
      return priceStr + " ₫";
    }
  };

  return (
    <div
      className="card mb-4 shadow-sm h-100 d-flex flex-column"
      style={{ height: "460px" }} 
    >
      {/* Hình ảnh */}
      <img
        src={`/images/${product.image}`}
        className="card-img-top"
        alt={product.name}
        style={{ height: "180px", objectFit: "cover" }}
      />

      <div className="card-body d-flex flex-column">
        {/* Tên sản phẩm */}
        <h5 className="card-title fw-bold">{product.name}</h5>

        {/* Mô tả */}
        <p
          className="card-text text-muted"
          style={{
            fontSize: "0.9rem",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            minHeight: "60px",
          }}
        >
          {product.description}
        </p>

        {/* Giá và nút */}
        <div className="mt-auto">
          <p className="card-text mb-3">
            <span className="text-decoration-line-through text-secondary me-2">
              {formatPrice(product.price)}
            </span>
            <span className="fw-bold text-danger">
              {formatPrice(product.currentPrice)}
            </span>
          </p>

          {/* Add to Cart button - full width */}
          <div className="mb-2">
            <Link 
              to="/products" 
              className="btn btn-success w-100 fw-bold"
              style={{ fontSize: "0.9rem" }}
            >
              Add to Cart
            </Link>
          </div>

          {/* Action buttons - compact layout */}
          <div className="btn-group w-100" role="group">
            <Link 
              to={`/products/${product.id}`} 
              className="btn btn-outline-info btn-sm flex-fill"
              style={{ fontSize: "0.8rem" }}
            >
              Detail
            </Link>
            <Link 
              to={`/edit/${product.id}`} 
              className="btn btn-outline-warning btn-sm flex-fill"
              style={{ fontSize: "0.8rem" }}
            >
              Edit
            </Link>
            <button
              className="btn btn-outline-danger btn-sm flex-fill"
              style={{ fontSize: "0.8rem" }}
              onClick={() => onDelete(product.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ProductItem;