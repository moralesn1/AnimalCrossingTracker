import React, { useState } from "react";
import fishData from "../data/fishData";

export default function Input(props) {
  const [display, setDisplay] = useState(false);

  const [search, setSearch] = useState("");

  function handleChange(event) {
    const inputValue = event.target.value;
    inputValue === "" ? setDisplay(false) : setDisplay(true);

    setSearch(inputValue);
  }

  function addFish(name) {
    props.onAdd(name);
  }

  const fishList = fishData
    .filter(({ name }) => name.toLocaleLowerCase().indexOf(search) > -1)
    .map((item, index) => {
      return (
        <div
          className="animal-search-box-option"
          onClick={() => {
            addFish(item);
          }}
          value={item.name}
          key={item.name}
        >
          <span>{item.name}</span>
          <img src={item.image} alt={item.name}></img>
        </div>
      );
    });

  return (
    <div className="search-form">
      <div className="search-bar">
        <input
          onInput={handleChange}
          type="text"
          placeholder="Search for fish..."
          title="Enter a fish name"
        />
        <button type="submit">Add Fish</button>
        <button>Clear List</button>
      </div>

      <div
        className="animal-dropdown-search-box"
        style={{ display: display ? "block" : "none" }}
      >
        {display && fishList}
      </div>
    </div>
  );
}
