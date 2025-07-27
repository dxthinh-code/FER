import React, { useState } from "react";
import ProductList from "../components/ProductList";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

function ProductListPage() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const handleCheckout = () => navigate("/");
  const handleAddProduct = () => navigate("/add");
  const handleSearch = () => setKeyword(searchInput);
  const handleReset = () => {
    setSearchInput("");
    setKeyword("");
  };

  return (
    <div className="container mt-4">
      {/*  Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-primary fw-bold m-0">Hãy tận hưởng kỳ mua sắm của bạn</h2>
        <button className="btn btn-success ms-2" onClick={handleCheckout}>
          Check Out
        </button>
      </div>

      {/*  Add Product + Search Bar */}
      <div className="d-flex align-items-center mb-4">
        {/* Button Add Product */}
        <Button variant="primary" className="me-3" onClick={handleAddProduct}>
          + Add Product
        </Button>

        {/* Form Search */}
        <Form className="d-flex flex-grow-1 align-items-center">
          <Form.Control
            type="text"
            placeholder="Tìm sản phẩm..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            style={{ flexGrow: 1 }}
          />
          <Button variant="primary" className="ms-2" onClick={handleSearch}>
            🔍
          </Button>
          <Button variant="secondary" className="ms-2" onClick={handleReset}>
            ⟳
          </Button>
        </Form>
      </div>

      {/*  Danh sách sản phẩm */}
      <ProductList keyword={keyword} />
    </div>
  );
}

export default ProductListPage;
