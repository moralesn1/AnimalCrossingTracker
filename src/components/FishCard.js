import React from "react";
import { Card, Button } from "react-bootstrap";

export default function FishCard(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>
            <h3>{props.name}</h3>
          </Card.Title>
          <Card.Text>
            <b>Price:</b> {props.price} Bells
            <br />
            <b>Location:</b> {props.location}
            <br />
            <b>Shadow Size:</b> {props.size}
            <br />
            <b>Time: </b> {props.time}
            <br />
            <b>Months:</b> {props.month}
            <br />
          </Card.Text>
          <Button variant="danger" onClick={handleClick}>
            Remove
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
