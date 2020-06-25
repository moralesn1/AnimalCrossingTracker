import React, { useState } from "react";
import { Button } from "react-bootstrap";
import fishData from "../data/fishData";

export default function UserInput(props) {
  const [inputValue, setInputValue] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [display, setDisplay] = useState(true);

  function addItem(name) {
    props.onAdd(name);
  }

  function handleChange(event) {
    const newInput = event.target.value;

    setDisplay(true);
    setInputValue(newInput.toLocaleLowerCase());

    if (newInput === "") {
      setSelectedIndex(0);
    }
  }

  function handleClear() {
    props.onClear();
  }

  const filteredFish = fishData
    .filter((item) => item.name.toLocaleLowerCase().includes(inputValue))
    .splice(0, 4);

  function handleKeyDown(event) {
    if (event.key === "ArrowUp") {
      if (selectedIndex - 1 < 0) {
        return;
      }
      setSelectedIndex(selectedIndex - 1);
    }
    if (event.key === "ArrowDown") {
      if (selectedIndex + 1 > 3) {
        return;
      }
      setSelectedIndex(selectedIndex + 1);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const fish = filteredFish[selectedIndex];
    if (inputValue === "") {
      return null;
    }
    if (fish) {
      addItem(filteredFish[selectedIndex]);
      setSelectedIndex(0);
      setDisplay(false);
      setInputValue("");
    } else {
      return null;
    }
  }

  function handleMouseEnter(i) {
    setSelectedIndex(i);
  }

  function handleBlur(i) {
    setSelectedIndex(0);
    setDisplay(false);
  }

  function handleFocus() {
    setDisplay(true);
  }

  return (
    <div className="search-form">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search for a creature.."
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          type="text"
          onBlur={handleBlur}
          onFocus={handleFocus}
        />

        <div className="autoSuggestionBox-container">
          {display && inputValue.length >= 1 && filteredFish.length === 0 ? (
            <div className="autoSuggestionBox">
              <p>
                <i>No results found...</i>
              </p>
            </div>
          ) : null}
          {display && inputValue.length >= 1 && filteredFish.length > 0
            ? filteredFish.map((item, index) => {
                if (index === selectedIndex) {
                  return (
                    <div
                      className="autoSuggestionBox"
                      onMouseDown={() => {
                        addItem(item);
                        setDisplay(false);
                        setInputValue("");
                      }}
                      tabIndex={selectedIndex}
                      key={item.name}
                      style={{ backgroundColor: "grey" }}
                    >
                      {item.name}
                      <img src={item.image} alt={item.name} />
                    </div>
                  );
                }
                return (
                  <div
                    className="autoSuggestionBox"
                    onMouseDown={() => {
                      addItem(item);
                      setDisplay(false);
                      setInputValue("");
                    }}
                    tabIndex={selectedIndex}
                    key={item.name}
                    onMouseEnter={() => {
                      handleMouseEnter(index);
                    }}
                  >
                    {item.name}

                    <img src={item.image} alt={item.name} />
                  </div>
                );
              })
            : null}
        </div>
      </form>
      <div className="button-options">
        <Button variant="danger" onClick={handleClear}>
          Clear List
        </Button>
      </div>
    </div>
  );
}
