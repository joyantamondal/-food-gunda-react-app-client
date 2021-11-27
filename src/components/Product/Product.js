import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
import Rating from "react-rating";
import { Card, Col, Container, Row } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";

const Product = (props) => {
  // console.log(props);
  const { name, img, seller, price, stock, star } = props.product;

  return (
    <div className="col-lg-4">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{seller}</Card.Text>
          <Card.Text>Price: {price}</Card.Text>
          <Rating className="m-2"
            initialRating={star}
            emptySymbol="far fa-star icon-color"
            fullSymbol="fas fa-star icon-color"
            readonly
          ></Rating> <br />
        
              <Button
              onClick={() => props.handleAddToCart(props.product)}
              className="btn-regular"
            >
              <FontAwesomeIcon icon={faShoppingCart} /> Order Now
            </Button> 
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
