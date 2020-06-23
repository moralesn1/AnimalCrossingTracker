import React, { useState } from "react";
import { Button } from "react-bootstrap";
import fishData from "../data/fishData";

export default function UserInput(props) {
  const [display, setDisplay] = useState(false);
  const [search, setSearch] = useState("");

  function handleChange(event) {
    const inputValue = event.target.value;
    inputValue === "" ? setDisplay(false) : setDisplay(true);

    setSearch(inputValue);
  }

  function addFish(name) {
    props.onAdd(name);
    setDisplay(false);
    setSearch("");
  }

  function handleClear() {
    props.onClear();
  }

  function handleSort() {
    props.onSort();
  }

  function handleKeyPress(event) {
    const keyPress = event.key;
    if (keyPress === "Enter") {
      console.log("enter");
    } else if (keyPress === "ArrowDown") {
      console.log("down");
    } else if (keyPress === "ArrowUp") {
      console.log("up");
    }
  }

  const fishList = fishData
    .filter(({ name }) => name.toLocaleLowerCase().indexOf(search) > -1)
    .map((item, index) => {
      return (
        <ul
          className="animal-search-box-option"
          onClick={() => {
            addFish(item);
          }}
          value={item.name}
          key={item.name}
          index={index}
          onKeyPress={(e) => {
            const keyPress = e.key;
            if (keyPress === "Enter") {
              addFish(item);
            }
            console.log(keyPress);
          }}
          tabIndex="0"
        >
          <span>{item.name}</span>
          <img src={item.image} alt={item.name}></img>
        </ul>
      );
    });

  return (
    <div className="search-form">
      <div className="search-bar">
        <input
          onChange={handleChange}
          type="text"
          placeholder="Search for fish..."
          title="Enter a fish name"
          value={search}
          onKeyDown={handleKeyPress}
        />
      </div>

      <div
        className="animal-dropdown-search-box"
        style={{ display: display ? "block" : "none" }}
      >
        {display && fishList}
      </div>
      <div className="button-options">
        <Button variant="danger" onClick={handleClear}>
          Clear List
        </Button>
        <Button variant="primary" onClick={handleSort}>
          SORT
        </Button>
      </div>
    </div>
  );
}
