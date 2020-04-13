import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import FishCard from "./FishCard";

//DATA
import fishData from "../data/fishData";
//CSS
import "../app.css";

function App() {
  function fishCardMap(item) {
    return (
      <>
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
      </>
    );
  }

  return (
    <>
      <Container>
        <Row className="fish-data-row">{fishData.map(fishCardMap)}</Row>
      </Container>
    </>
  );
}

export default App;

{
  /* <h3>{item.name}</h3>
            <img src={item.image}></img>
            <p>Location: {item.location}</p>
            <p>Price: {item.price} bells</p>
            <p>Shadow Size: {item.size}</p>
            <p>Time: {item.time}</p>
            <p>Months: {item.month}</p> */
}
