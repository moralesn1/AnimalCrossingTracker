import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";

// COMPONENTS

import FishCard from "./FishCard";
import Footer from "./Footer";
// import UserInput from "./UserInput";
import UserInputv2 from "./UserInputv2";
import Header from "./Header";

//CSS

import "../app.css";

function App() {
  const [fishList, setFishList] = useState([]);
  const [lastId, setLastId] = useState(1);

  useEffect(() => {
    fishData();
  }, []);

  const fishData = async () => {
    const response = await fetch(`https://acnhapi.com/v1/fish/1`);
    const data = await response.json();
    console.log(data);
  };

  function addItem(item) {
    const newItem = { ...item, id: lastId };
    setLastId(lastId + 1);
    setFishList((prevValue) => {
      return [...prevValue, newItem];
    });
  }

  function removeItem(id) {
    setFishList((prevValue) => {
      return prevValue.filter((fishItem) => {
        return fishItem.id !== id;
      });
    });
  }

  function clearList() {
    setFishList([]);
  }
  const fishByValue = fishList.sort((a, b) => {
    return b.price - a.price;
  });

  function fishCardMap(item, index) {
    console.log(item.id);
    return (
      <FishCard
        key={item.id}
        id={item.id}
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
          <UserInputv2 onAdd={addItem} onClear={clearList} />
        </Container>
        <Row className="fish-data-row">{fishByValue.map(fishCardMap)}</Row>
      </div>
      <Footer />
    </div>
  );
}

export default App;
