import React, { useState } from "react";
import { Navbar, Nav, Container, Button, Carousel } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom"; 
import SignInModal from "../components/SignInModal";
import LoginModal from "../components/LoginModal";
import Footer from "../components/Footer";

function HomePage() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();

  //  Hàm xử lý khi login thành công
  const handleLoginSuccess = () => {
    setShowLogin(false);
    navigate("/products"); 
  };

  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/">MotorbikeApp</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link onClick={() => setShowLogin(true)}>Login</Nav.Link>
              <Nav.Link href="#">About Us</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
              
              {/* Cart */}
              <Nav.Link as={Link} to="/cart">🛒 Cart</Nav.Link>
            </Nav>

            <Button variant="outline-light" onClick={() => setShowSignIn(true)}>
              Sign In
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Carousel */}
      <Carousel fade className="mt-3">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/banner1.jpg"
            alt="First slide"
            style={{ height: "400px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Welcome to Motorbike App</h3>
            <p>Your trusted place for vehicle products.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/banner2.jpg"
            alt="Second slide"
            style={{ height: "400px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Explore Our New Arrivals</h3>
            <p>High quality - Best prices - Fast delivery</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <SignInModal show={showSignIn} onClose={() => setShowSignIn(false)} />
      <LoginModal
        show={showLogin}
        onClose={() => setShowLogin(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </>
  );
}

export default HomePage;
