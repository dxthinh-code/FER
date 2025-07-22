import { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Form, Container, Alert, Card } from 'react-bootstrap';
import api from '../api';

function LoginForm({ setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showError, setShowError] = useState(false);
  const [emptyFields, setEmptyFields] = useState(false);

  const handleLogin = async () => {
    // Kiểm tra nếu username hoặc password rỗng
    if (!username.trim() || !password.trim()) {
      setEmptyFields(true);
      setShowError(false);
      return;
    }

    try {
      const res = await api.get(`/UserAccounts?username=${username}&password=${password}`);
      if (res.data.length > 0) {
        setUser(res.data[0]);
        setShowModal(true);
        setShowError(false);
        setEmptyFields(false);
      } else {
        setShowError(true);
        setEmptyFields(false);
      }
    } catch (err) {
      console.error(err);
      setShowError(true);
      setEmptyFields(false);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Card style={{ width: '400px' }} className="p-4 shadow-sm">
        <h3 className="text-center mb-4">Login</h3>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <div className="d-grid">
            <Button variant="primary" onClick={handleLogin}>
              Login
            </Button>
          </div>

          {emptyFields && (
            <Alert variant="warning" className="mt-3 text-center">
              Please enter both username and password!
            </Alert>
          )}

          {showError && (
            <Alert variant="danger" className="mt-3 text-center">
              Invalid username or password!
            </Alert>
          )}
        </Form>
      </Card>

      {/* Modal welcome */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Body className="text-center">
          Welcome, <strong>{username}</strong> login Successful!
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button variant="success" href="/laptops">
            Go to Laptop List
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

LoginForm.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default LoginForm;
