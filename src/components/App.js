import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";

// COMPONENTS

import FishCard from "./FishCard";
import Footer from "./Footer";
import UserInput from "./UserInput";
import Header from "./Header";

//CSS

import "../app.css";

function App() {
  const [fishList, setFishList] = useState([]);
  const [names, setNames] = useState([100, 10, 0, 5, 20]);

  function addItem(item) {
    setFishList((prevValue) => {
      return [...prevValue, item];
    });
  }

  function removeItem(id) {
    setFishList((prevValue) => {
      return prevValue.filter((fishItem, index) => {
        return index !== id;
      });
    });
  }

  function clearList() {
    setFishList([]);
  }

  function sortFromLeastToMostExpensive() {
    setFishList((prevValue) => {
      return [...prevValue].sort((a, b) => {
        return b.price - a.price;
      });
    });
  }

  function fishCardMap(item, index) {
    return (
      <FishCard
        key={item.name}
        id={index}
        name={item.name}
        image={item.image}
        price={item.price}
        location={item.location}
        size={item.size}
        time={item.time}
        month={item.month}
        onDelete={removeItem}
      />
    );
  }

  return (
    <div className="wrapper">
      <div className="content">
        <Container>
          <Header />
          <UserInput
            onAdd={addItem}
            onClear={clearList}
            onSort={sortFromLeastToMostExpensive}
          />
        </Container>
        <Row className="fish-data-row">{fishList.map(fishCardMap)}</Row>
      </div>
      <Footer />
    </div>
  );
}

export default App;
