import { useEffect, useState } from 'react';
import api from '../api';
import LaptopCard from './LaptopCard';
import SearchBar from './SearchBar';
import { Container, Row, Col, Navbar, Nav, Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function LaptopList() {
  const [laptops, setLaptops] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get('/Laptops').then(res => {
      setLaptops(res.data);
      setFiltered(res.data);
    });
  }, []);

  const handleSearch = (keyword) => {
    const lower = keyword.toLowerCase().trim();
    if (lower === '') {
      setFiltered(laptops);
      return;
    }

    const result = laptops.filter(l => {
      const fullName = `${l.brand} ${l.model}`.toLowerCase();
      return (
        l.brand.toLowerCase().includes(lower) ||
        l.model.toLowerCase().includes(lower) ||
        fullName.includes(lower)
      );
    });

    setFiltered(result);
  };

  return (
    <>
      {/* ✅ NAVIGATION BAR */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/laptops">Laptop Manager</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/laptops">Home</Nav.Link>
            <Nav.Link onClick={() => document.getElementById("search-box")?.focus()}>Search</Nav.Link>
            <Nav.Link onClick={() => navigate('/')}>Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* ✅ CAROUSEL */}
      <Carousel interval={3000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/slide1.jpg"
            alt="Slide 1"
            style={{ height: '400px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>Welcome to Laptop Manager</h3>
            <p>Explore top laptops of 2024</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/slide2.jpg"
            alt="Slide 2"
            style={{ height: '400px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>High Performance Machines</h3>
            <p>Work smart, work fast</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/slide3.jpg"
            alt="Slide 3"
            style={{ height: '400px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>Lightweight and Stylish</h3>
            <p>Perfect for both work and travel</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* ✅ NỘI DUNG CHÍNH */}
      <Container className="mt-4">
        <h2 className="text-center mb-4">Laptop List</h2>
        <SearchBar onSearch={handleSearch} />
        <Row className="g-4">
          {filtered.map(laptop => (
            <Col key={laptop.id} md={3} sm={6}>
              <LaptopCard laptop={laptop} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default LaptopList;
