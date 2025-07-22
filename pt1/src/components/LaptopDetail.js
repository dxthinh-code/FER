import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../api';
import { Card, Container, Button } from 'react-bootstrap';

function LaptopDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [laptop, setLaptop] = useState(null);

  useEffect(() => {
    api.get(`/Laptops/${id}`)
      .then(res => setLaptop(res.data))
      .catch(() => setLaptop(null));
  }, [id]);

  if (!laptop) return <h2 className="text-center mt-4">404 - Laptop Not Found</h2>;

  return (
    <Container className="p-4 d-flex justify-content-center">
      <Card className="p-3" style={{ maxWidth: '600px', width: '100%' }}>
        <div className="text-center">
          <img
            src={laptop.image}
            alt={`${laptop.brand} ${laptop.model}`}
            style={{
              maxWidth: '100%',
              width: '100%',
              height: 'auto',
              maxHeight: '200px',
              objectFit: 'contain',
              borderRadius: '8px'
            }}
          />
        </div>
        <Card.Body>
          <Card.Title>{laptop.brand} {laptop.model}</Card.Title>
          <Card.Text>
            <strong>Year:</strong> {laptop.year}<br />
            <strong>Price:</strong> {laptop.price}<br />
            <strong>Description:</strong> Powerful {laptop.brand} laptop.
          </Card.Text>
          <div className="text-center mt-4">
            <Button variant="secondary" onClick={() => navigate('/laptops')}>
              Back to Laptop List
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default LaptopDetail;
