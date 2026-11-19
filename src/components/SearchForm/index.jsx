import { React, useState } from "react";

export default function SearchForm({ setSearchString }) {
  const [inputValue, setInputValue] = useState("");

  function handleInput(e) {
    const newInput = e.target.value;
    setInputValue(newInput);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSearchString(inputValue);
    setInputValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleInput} value={inputValue} required />
      <input type="submit" value="Search" />
    </form>
  );
}
