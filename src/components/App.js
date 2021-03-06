import React, { useState, useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";

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
    const seaCreatures = await fetch("https://acnhapi.com/v1/sea/");
    const fishData = await fish.json();
    const bugData = await bugs.json();
    const seaCreaturesData = await seaCreatures.json();
    const creatures = { ...fishData, ...bugData, ...seaCreaturesData };
    const normalisedCreatures = Object.entries(creatures).map(([name, obj]) => {
      return {
        ...obj,
        name: obj.name["name-USen"],
        location: obj.availability.location,
        priceCJ: obj["price-cj"],
        priceFlick: obj["price-flick"],
        image: obj.icon_uri,
        size: obj.shadow,
        rarity: obj.availability.rarity,
      };
    });

    setCreatureList(normalisedCreatures);
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
    const capitalise = (str1) => {
      return str1.charAt(0).toUpperCase() + str1.slice(1);
    };

    const improvedPrice = (price) => {
      return price * 1.5;
    };

    return (
      <FishCard
        key={item.id}
        id={item.id}
        name={capitalise(item.name)}
        image={item.image}
        price={item.price}
        priceCJ={item.priceCJ}
        priceFlick={item.priceFlick}
        impPrice={improvedPrice(item.price)}
        location={item.location}
        size={item.size}
        time={item.time}
        month={item.month}
        rarity={item.rarity}
        onDelete={removeItem}
      />
    );
  }

  return (
    <div className="wrapper">
      <div className="content">
        <Container>
          <Header />
          <UserInputv2
            onAdd={addItem}
            onClear={clearList}
            fishData={creatureList}
          />

          <Row className="fish-data-row">{fishByValue.map(fishCardMap)}</Row>
          {fishList.length > 0 ? (
            <div className="button-options">
              <Button variant="danger" onClick={clearList}>
                Clear List
              </Button>
            </div>
          ) : null}
        </Container>
      </div>

      <Footer />
    </div>
  );
}

export default App;
