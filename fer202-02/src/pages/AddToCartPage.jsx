import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

function AddToCartPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.list);
  const cartItems = useSelector((state) => state.cart.items);

  // ✅ Hàm định dạng giá
  const format = (str) =>
    parseInt(str.replace(/\./g, "")).toLocaleString("vi-VN");

  // ✅ Tính tổng tiền
  const getTotal = () => {
    return cartItems.reduce((sum, item) => {
      const price = parseInt(item.currentPrice.replace(/\./g, ""));
      return sum + price * item.quantity;
    }, 0);
  };

  // ✅ Hàm xác nhận xóa sản phẩm
  const confirmDelete = (id) => {
    const ok = window.confirm("Bạn có chắc chắn muốn xoá sản phẩm này?");
    if (ok) {
      dispatch(removeFromCart(id));
    }
  };

  return (
    <div className="container mt-4">
      {/* Nút back */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">Danh sách sản phẩm</h2>
        <button
          className="btn btn-outline-secondary"
          onClick={() => navigate("/products")}
        >
          ← Back to Product List
        </button>
      </div>

      {/* Danh sách sản phẩm */}
      <div className="row">
        {products.map((p) => (
          <div className="col-md-4" key={p.id}>
            <div className="card mb-3 h-100">
              <img
                src={`/images/${p.image}`}
                className="card-img-top"
                alt={p.name}
                style={{ height: "180px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text text-danger">
                  {format(p.currentPrice)} ₫
                </p>
                <button
                  className="btn btn-primary mt-auto"
                  onClick={() => dispatch(addToCart(p))}
                >
                  Add to Cart 🛒
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Giỏ hàng */}
      <h3 className="mt-5">🛒 Giỏ hàng</h3>
      {cartItems.length === 0 ? (
        <p>Chưa có sản phẩm nào trong giỏ.</p>
      ) : (
        <>
          <div className="table-responsive">
            <table className="table table-bordered mt-3">
              <thead className="table-light text-center">
                <tr>
                  <th>Tên</th>
                  <th>Giá</th>
                  <th>Số lượng</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{format(item.currentPrice)} ₫</td>
                    <td className="text-center">
                      <button
                        onClick={() => dispatch(decreaseQty(item.id))}
                        className="btn btn-sm btn-outline-secondary me-1"
                      >
                        -
                      </button>
                      {item.quantity}
                      <button
                        onClick={() => dispatch(increaseQty(item.id))}
                        className="btn btn-sm btn-outline-secondary ms-1"
                      >
                        +
                      </button>
                    </td>
                    <td className="text-center">
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => confirmDelete(item.id)}
                      >
                        Xoá
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Tổng tiền */}
          <div className="text-end mt-3">
            <h5>
              Tổng tiền:{" "}
              <span className="text-danger fw-bold">
                {getTotal().toLocaleString("vi-VN")} ₫
              </span>
            </h5>
          </div>
        </>
      )}
    </div>
  );
}

export default AddToCartPage;
