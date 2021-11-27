import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import './ReviewItem'

const ReviewItem = (props) => {
  const { name, price, quantity, img, key } = props.product;
  const { handleRemove } = props;
  return (
    <Card style={{ width: "18rem" }} lg={3} className="card">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Price: {price}</Card.Text>
        <Card.Text>Quantity: {quantity}</Card.Text>
        <br />
        <Button onClick={() => handleRemove(key)} className="btn-regular">
          Remove
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ReviewItem;
