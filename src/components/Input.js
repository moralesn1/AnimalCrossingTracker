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

  function addFish() {
    props.onAdd();
  }

  return (
    <div className="search-form">
      <div className="search-bar">
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
      </div>

      <div
        className="animal-dropdown-search-box"
        style={{ display: display ? "block" : "none" }}
      >
        {display &&
          fishData
            .filter(({ name }) => name.toLocaleLowerCase().indexOf(search) > -1)
            .map((item, index) => {
              return (
                <div
                  className="animal-search-box-option"
                  key={index}
                  id={item.name}
                  onClick={addFish}
                >
                  <span>{item.name}</span>
                  <img src={item.image} alt={item.name}></img>
                </div>
              );
            })}
      </div>
    </div>
  );
}
