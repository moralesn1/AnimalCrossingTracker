import React from "react";
import { Card } from "react-bootstrap";

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
            <b>Price:</b> {props.price}
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
        </Card.Body>
      </Card>
    </>
  );
}
