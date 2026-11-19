import { React, useState } from "react";

export default function FilterSearch({ minRating, setMinRating }) {
  function handleRating(e) {
    const selectedRating = Number(e.target.value);
    setMinRating(selectedRating);
  }

  return (
    <div className="filter-search">
      <label htmlFor="rating">Filter by minimum rating:</label>
      <select id="rating" value={minRating} onChange={handleRating}>
        <option value={0}>All ratings</option>
        <option value={1}>1+</option>
        <option value={2}>2+</option>
        <option value={3}>3+</option>
        <option value={4}>4+</option>
        <option value={5}>5+</option>
        <option value={6}>6+</option>
        <option value={7}>7+</option>
        <option value={8}>8+</option>
        <option value={9}>9+</option>
      </select>
    </div>
  );
}
