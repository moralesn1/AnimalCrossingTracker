import React from "react";
import { Card, Button } from "react-bootstrap";

export default function FishCard(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  function priceCurrencyTitle() {
    if (props.priceCJ) {
      return (
        <>
          <b>CJ's Price: </b>
          {props.priceCJ} bells <br />
        </>
      );
    } else if (props.priceFlick) {
      return (
        <>
          <b>Flick's Price:</b> {props.priceFlick} bells <br />
        </>
      );
    } else {
      return null;
    }
  }

  function sizeCheck() {
    if (props.size) {
      return (
        <>
          <b>Shadow Size: </b> {props.size} <br />
        </>
      );
    } else {
      return null;
    }
  }

  function rarityCheck() {
    if (props.rarity) {
      return (
        <>
          <b>Rarity: </b> {props.rarity}
        </>
      );
    } else {
      return null;
    }
  }

  return (
    <>
      <Card>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>
            <h3>{props.name}</h3>
          </Card.Title>
          <Card.Text>
            <b>Price:</b> {props.price} bells
            <br />
            {priceCurrencyTitle(props.priceCJ || props.priceFlick)}
            <b>Location:</b> {props.location || "Diving"}
            <br />
            {sizeCheck(props.size)}
            {rarityCheck(props.rarity)}
          </Card.Text>
          <Button
            variant="danger"
            className="remove-critter"
            onClick={handleClick}
          >
            Remove
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
