import React, { useState } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import axios from "axios";

function LoginModal({ show, onClose, onLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleLogin = async () => {
    if (!username || !password) {
      setError("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    try {
      const res = await axios.get("http://localhost:3001/users", {
        params: { username, password },
      });

      if (res.data.length > 0) {
        setSuccess(true);
        setError("");
      } else {
        setError("Tên đăng nhập hoặc mật khẩu không đúng");
        setSuccess(false);
      }
    } catch (err) {
      console.error(err);
      setError("Lỗi kết nối đến server");
    }
  };

  const handleGoToProductList = () => {
    onClose();            // Đóng modal
    onLoginSuccess();     // Điều hướng sang /products
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Đăng nhập</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {success ? (
          <Alert variant="success">
             Đăng nhập thành công!
          </Alert>
        ) : (
          <>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form>
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoComplete="off"
                />
              </Form.Group>

              <Form.Group className="mt-2">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="new-password"
                />
              </Form.Group>
            </Form>
          </>
        )}
      </Modal.Body>

      <Modal.Footer>
        {success ? (
          <Button variant="success" onClick={handleGoToProductList}>
            Go to Product List
          </Button>
        ) : (
          <Button variant="primary" onClick={handleLogin}>
            Đăng nhập
          </Button>
        )}
        <Button variant="secondary" onClick={onClose}>
          Đóng
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default LoginModal;
