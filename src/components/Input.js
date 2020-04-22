import React, { useState } from "react";
import fishData from "../data/fishData";

export default function Input() {
  const [display, setDisplay] = useState(false);
  const [search, setSearch] = useState("");

  const fishList = (fish) => {
    setDisplay(false);
    console.log(fish);
  };

  function handleChange(event) {
    const inputValue = event.target.value;
    setSearch(inputValue);
  }

  function handleClick() {
    setDisplay(!display);
    setSearch("");
  }

  return (
    <div className="form">
      <input
        onClick={handleClick}
        onChange={handleChange}
        type="text"
        placeholder="Search for fish..."
        title="Enter a fish name"
        value={search}
      />
      {display && (
        <div className="container">
          {fishData
            .filter(({ name }) => name.toLocaleLowerCase().indexOf(search) > -1)
            .map((item, index) => {
              return (
                <div onClick={fishList} className="option" key={index}>
                  <span>{item.name}</span>
                  <img src={item.image} alt={item.name}></img>
                </div>
              );
            })}
        </div>
      )}
      <button type="submit">Add Fish</button>

      <button>Clear List</button>
      {/* {items.map((item) => (item === "" ? null : <li>{item}</li>))} */}
    </div>
  );
}
