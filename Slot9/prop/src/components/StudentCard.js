import React from "react";
import { Card, Button } from "react-bootstrap";

const StudentCard = ({ student }) => {
  return (
    <Card style={{ width: "18rem" }} className="mb-4">
      <Card.Img
        variant="top"
        src={student.avatar}
        alt={`${student.name}'s avatar`}
      />
    <Card.Body>
        <Card.Title>{student.name}</Card.Title>
        <Card.Text>Age: {student.age}</Card.Text>
    <div className="d-flex justify-content-start">
     <Button variant="primary">Edit</Button>
   </div>
    </Card.Body>

    </Card>
  );
};

export default StudentCard; 