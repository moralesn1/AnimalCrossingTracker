import React, { useState } from "react";
import fishData from "../data/fishData";

export default function Input() {
  const [display, setDisplay] = useState(false);
  const [search, setSearch] = useState("");

  function handleChange(event) {
    const inputValue = event.target.value;
    setSearch(inputValue);
  }

  function toggleDisplay() {}
  // const queryResult = fishData
  //   .filter(({ name }) => name.toLocaleLowerCase().indexOf(search) > -1)
  //   .map((item, index) => {
  //     return (
  //       <div className="option" key={index} id={item.name}>
  //         <span>{item.name}</span>
  //         <img src={item.image} alt={item.name}></img>
  //       </div>
  //     );
  //   });

  function addFish() {}

  return (
    <div className="form">
      <input
        onInput={handleChange}
        type="text"
        placeholder="Search for fish..."
        title="Enter a fish name"
        value={search}
      />
      <button type="submit" onClick={addFish}>
        Add Fish
      </button>
      <button>Clear List</button>

      <div className="container">
        {fishData
          .filter(({ name }) => name.toLocaleLowerCase().indexOf(search) > -1)
          .map((item, index) => {
            return (
              <div className="option" key={index} id={item.name}>
                <span>{item.name}</span>
                <img src={item.image} alt={item.name}></img>
              </div>
            );
          })}
      </div>
    </div>
  );
}
