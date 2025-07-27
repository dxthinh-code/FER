import React, { useState } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import axios from "axios";

function SignInModal({ show, onClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registered, setRegistered] = useState(false);
  const [error, setError] = useState("");

  const handleSignIn = async () => {
    if (!username || !password) {
      setError("Vui lòng nhập đủ thông tin");
      return;
    }

    try {
      // Kiểm tra xem username đã tồn tại chưa
      const res = await axios.get(`http://localhost:3001/users?username=${username}`);
      if (res.data.length > 0) {
        setError("Tài khoản đã tồn tại");
        return;
      }

      // Gửi đăng ký vào db.json
      await axios.post("http://localhost:3001/users", { username, password });

      setRegistered(true);
      setError("");
      setUsername("");
      setPassword("");
    } catch (err) {
      console.error(err);
      setError("Lỗi khi đăng ký");
    }
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Đăng ký tài khoản</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {registered ? (
          <Alert variant="success">Đăng ký thành công! Hãy đăng nhập.</Alert>
        ) : (
          <>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form>
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mt-2">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
            </Form>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        {!registered && (
          <Button variant="primary" onClick={handleSignIn}>
            Đăng ký
          </Button>
        )}
        <Button variant="secondary" onClick={onClose}>
          Đóng
        </Button>
      </Modal.Footer>
    </Modal>
  );
}


export default SignInModal;
