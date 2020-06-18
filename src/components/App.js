import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";

// COMPONENTS

import FishCard from "./FishCard";
import Footer from "./Footer";
import Input from "./Input";
import Header from "./Header";

//DATA

// import fishData from "../data/fishData";

//CSS

import "../app.css";

function App() {
  const [fishList, setFishList] = useState([]);

  function addItem(item) {
    setFishList((prevValue) => {
      return [...prevValue, item];
    });
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
    <div className="wrapper">
      <Container>
        <Header />
        <Input onAdd={addItem} />
        <Row className="fish-data-row">{fishList.map(fishCardMap)} </Row>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
