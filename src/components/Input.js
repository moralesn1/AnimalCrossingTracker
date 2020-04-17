import React, { useState } from "react";

export default function Input() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const value = event.target.value;
    setInput(value);
  }

  function handleClick(event) {
    event.preventDefault();
    if (setInput === "") {
      items.filter();
    } else {
      setItems((prev) => {
        setInput("");
        return [...prev, input];
      });

      console.log(items);
    }
  }

  function clearList() {
    setItems([]);
  }
  return (
    <div className="form">
      <input
        onChange={handleChange}
        type="text"
        placeholder="Search for fish"
        title="Enter a fish name"
        value={input}
      />
      <button type="submit" onClick={handleClick}>
        Add Fish
      </button>

      <button onClick={clearList}>Clear List</button>
      {items.map((item) => (item === "" ? null : <li>{item}</li>))}
    </div>
  );
}
