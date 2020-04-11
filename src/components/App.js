import React from "react";
import fishData from "../data/fishData";

function App() {
  return (
    <>
      <h1>YA BOY</h1>
      {fishData.map((item, index) => {
        return (
          <div>
            <h3>{item.name}</h3>
            <img src={item.image}></img>
            <p>Location: {item.location}</p>
            <p>Price: {item.price} bells</p>
            <p>Shadow Size: {item.size}</p>
            <p>Time: {item.time}</p>
            <p>Months: {item.month}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
