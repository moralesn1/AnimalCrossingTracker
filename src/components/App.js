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
  const [creatureList, setCreatureList] = useState([]);

  useEffect(() => {
    creatureData();
  }, []);

  const creatureData = async () => {
    const fish = await fetch("https://acnhapi.com/v1/fish/");
    const bugs = await fetch("https://acnhapi.com/v1/bugs/");
    const creatures = await (fish, bugs).json();
    const creaturesArray = Object.keys(creatures).map((i) => creatures[i]);
    console.log(creaturesArray);
    setCreatureList(creaturesArray);
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
      {creatureList.map((value) => {
        return (
          <div>
            <div>{value.name["name-USen"]}</div>
            <img src={value["icon_uri"]} />
          </div>
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
