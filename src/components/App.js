import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import FishCard from "./FishCard";
import Header from "./Header";
import Footer from "./Footer";

//DATA
import fishData from "../data/fishData";
//CSS
import "../app.css";

function App() {
  function fishCardMap(item) {
    return (
      <FishCard
        key={item.name}
        name={item.name}
        image={item.image}
        price={item.price}
        location={item.location}
        size={item.size}
        time={item.time}
        month={item.month}
      />
    );
  }

  return (
    <>
      <Container>
        <Header />
        <Row className="fish-data-row">{fishData.map(fishCardMap)}</Row>
        <Footer />
      </Container>
    </>
  );
}

export default App;
