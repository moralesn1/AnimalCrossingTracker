import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";

// COMPONENTS

import FishCard from "./FishCard";
import Header from "./Header";
import Footer from "./Footer";

//DATA

import fishData from "../data/fishData";

//CSS

import "../app.css";

function App() {
  const [fishList, setFishList] = useState(["testing"]);

  function handleChange() {
    return setFishList(["test"]);
  }

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
    <div>
      <Container>
        <Header />
        <h4 onClick={handleChange}>{fishList}</h4>

        <Row className="fish-data-row">{fishData.map(fishCardMap)}</Row>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
