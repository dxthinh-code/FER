import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, removeProduct } from "../redux/productSlice";
import { addToCart } from "../redux/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import Toast from "./Toast"; // Import Toast component

function ProductList({ keyword, setKeyword }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.list);
  const cartItems = useSelector((state) => state.cart.items);
  
  // Toast state
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success"
  });

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(removeProduct(id)).then(() => dispatch(getProducts()));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setToast({
      show: true,
      message: `Đã thêm "${product.name}" vào giỏ hàng!`,
      type: "success"
    });
  };

  const closeToast = () => {
    setToast({ ...toast, show: false });
  };

  const formatPrice = (priceStr) => {
    try {
      const number = parseInt(priceStr.replace(/\./g, ""));
      return number.toLocaleString("vi-VN") + " ₫";
    } catch {
      return priceStr + " ₫";
    }
  };

  const getTotalCartItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div>
      {/* Toast Notification */}
      <Toast 
        show={toast.show}
        message={toast.message}
        type={toast.type}
        onClose={closeToast}
      />

      {/* Header với Cart Icon */}
      <div className="mb-4">
        {/* Cart Icon - đặt dưới search bar có sẵn */}
        <div className="d-flex justify-content-center">
          <div className="position-relative">
            <button
              className="btn btn-outline-success position-relative"
              onClick={() => navigate("/cart")}
              style={{ 
                borderRadius: "25px", 
                padding: "10px 20px",
                border: "2px solid #28a745"
              }}
            >
              <i className="fas fa-shopping-cart me-2"></i>
              <span className="fw-bold">Cart</span>
              {getTotalCartItems() > 0 && (
                <span 
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ 
                    fontSize: "0.7rem",
                    minWidth: "20px",
                    height: "20px"
                  }}
                >
                  {getTotalCartItems()}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="text-center">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {filtered.map((p) => (
            <div className="col d-flex" key={p.id}>
              {/* Card với thiết kế mới */}
              <div 
                className="card mb-3 shadow-sm w-100 d-flex flex-column h-100"
                style={{ height: "520px" }}
              >
                <img
                  src={`/images/${p.image}`}
                  className="card-img-top"
                  alt={p.name}
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <div className="card-body text-start d-flex flex-column">
                  <h5 className="card-title fw-bold">{p.name}</h5>

                  {/* Mô tả sản phẩm */}
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
                    {p.description}
                  </p>

                  {/* Giá và nút */}
                  <div className="mt-auto">
                    <p className="card-text mb-3">
                      <span className="text-decoration-line-through text-secondary me-2">
                        {formatPrice(p.price)}
                      </span>
                      <span className="fw-bold text-danger">
                        {formatPrice(p.currentPrice)}
                      </span>
                    </p>

                    {/* Add to Cart button - full width */}
                    <div className="mb-2">
                      <button 
                        className="btn btn-success w-100 fw-bold"
                        style={{ fontSize: "0.9rem" }}
                        onClick={() => handleAddToCart(p)}
                      >
                        <i className="fas fa-cart-plus me-2"></i>
                        Add to Cart
                      </button>
                    </div>

                    {/* Action buttons - compact layout */}
                    <div className="btn-group w-100" role="group">
                      <Link 
                        to={`/products/${p.id}`} 
                        className="btn btn-outline-info btn-sm flex-fill"
                        style={{ fontSize: "0.8rem" }}
                      >
                        Detail
                      </Link>
                      <Link 
                        to={`/edit/${p.id}`} 
                        className="btn btn-outline-warning btn-sm flex-fill"
                        style={{ fontSize: "0.8rem" }}
                      >
                        Edit
                      </Link>
                      <button
                        className="btn btn-outline-danger btn-sm flex-fill"
                        style={{ fontSize: "0.8rem" }}
                        onClick={() => handleDelete(p.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <p className="text-muted mt-4">Không tìm thấy sản phẩm phù hợp.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductList;