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

  function addItem() {
    // setFishList((prevValue) => {
    //   return {
    //     ...prevValue,
    //     fishList,
    //   };
    // });
    console.log("clicked");
  }
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
        <Input onAdd={addItem} />
        {fishList}
        {/* <Row className="fish-data-row">{fishData.map(fishCardMap)}</Row> */}

        <Footer />
      </Container>
    </div>
  );
}

export default App;
