import React from "react";
import { Card, Button } from "react-bootstrap";

export default function FishCard(props) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>
            <h3>{props.name}</h3>
          </Card.Title>
          <Card.Text>
            <p>
              <b>Price:</b> {props.price}
            </p>
            <p>
              <b>Location:</b> {props.location}
            </p>
            <p>
              <b>Shadow Size:</b> {props.size}
            </p>
            <p>
              <b>Time: </b> {props.time}
            </p>
            <p>
              <b>Months:</b> {props.month}
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
