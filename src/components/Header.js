import React from "react";
import aclogoIMG from "../assets/backgroundimages/aclogo.png";
import { Container } from "react-bootstrap";

export default function Header() {
  return (
    <Container className="header">
      <img className="hero-image" alt="animalcrossing-logo" src={aclogoIMG} />
    </Container>
  );
}
