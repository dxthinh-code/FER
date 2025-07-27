import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

function Header({ keyword, setKeyword }) {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  const getTotalCartItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="container-fluid bg-light py-3 mb-4">
      <div className="container">
        <div className="row align-items-center">
          {/* Title */}
          <div className="col-md-4">
            <h2 className="text-primary mb-0 fw-bold">
              🛍️ Hãy tận hưởng kỳ mua sắm của bạn
            </h2>
          </div>

          {/* Search Bar */}
          <div className="col-md-4">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Tìm sản phẩm..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
              <button className="btn btn-outline-primary" type="button">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="col-md-4">
            <div className="d-flex justify-content-end gap-2 align-items-center">
              {/* Add Product Button */}
              <Link to="/add" className="btn btn-primary">
                <i className="fas fa-plus me-2"></i>
                Add Product
              </Link>

              {/* Cart Icon với Badge */}
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
              
              {/* Check Out Button */}
              <button 
                className="btn btn-success fw-bold px-4"
                style={{ borderRadius: "25px" }}
                onClick={() => navigate("/checkout")}
              >
                <i className="fas fa-credit-card me-2"></i>
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;