import React, { useState } from "react";
import { Button } from "react-bootstrap";
import fishData from "../data/fishData";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function UserInput(props) {
  const [inputValue, setInputValue] = useState("");

  function addFish(name) {
    props.onAdd(name);
  }

  function addItem(name) {
    props.onAdd(name);
  }

  function handleClear() {
    props.onClear();
  }

  function handleSort() {
    props.onSort();
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      console.log("kek");
      console.log(inputValue);
      console.log(event);
      addItem(inputValue);
      setInputValue("");
    }
  }

  return (
    <div className="search-form">
      <Autocomplete
        clearOnBlur
        clearOnEscape
        id="autocomplete-search-box"
        options={fishData}
        onKeyDown={handleKeyDown}
        getOptionLabel={(option) => option.name}
        renderOption={(option) => (
          <div
            onClick={() => {
              addItem(option);
              console.log(option);
            }}
          >
            <img src={option.image} alt={option.name}></img>
            {option.name}
          </div>
        )}
        style={{ width: 500 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search for a creature..."
            variant="outlined"
          />
        )}
      />

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
