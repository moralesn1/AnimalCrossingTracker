import React, { useState } from "react";
import fishData from "../data/fishData";

export default function Input() {
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState(fishData);
  const [search, setSearch] = useState("");

  function fishList(fish) {
    setSearch(fish);
    setDisplay(false);
  }

  function handleChange() {}

  function handleClick() {
    setDisplay(!display);
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
          {options.map((item, index) => {
            return (
              <div onClick={fishList} className="option" key={index}>
                <span>{item.name}</span>
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
