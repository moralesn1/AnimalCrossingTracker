import React from "react";
import stitchestIMG from "../assets/backgroundimages/stitchest.png";
import { Container } from "react-bootstrap";

export default function Header() {
  return (
    <Container className="header">
      <div className="container">
        <div className="hero-image-container">
          <img
            className="hero-image"
            alt="animalcrossing-logo"
            src={stitchestIMG}
          />
          <div className="header-title">
            <h5>Inventory Critter Price Checker</h5>
            <p>
              Add your current inventory creatures to the list for their value.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
