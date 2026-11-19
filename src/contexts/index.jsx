import React, { useState, useContext, createContext } from "react";

const ShowContext = createContext();
const FilterContext = createContext();

export const ShowProvider = ({ children }) => {
  const [showData, setShowData] = useState([]);

  return (
    <ShowContext.Provider value={{ showData, setShowData }}>
      {children}
    </ShowContext.Provider>
  );
};

export const FilterProvider = ({ children }) => {
  const [minRating, setMinRating] = useState(0);
  
  return (
    <FilterContext.Provider value={{ minRating, setMinRating }}>
      {children}
    </FilterContext.Provider>
  );
}

export const useShow = () => useContext(ShowContext)
export const useFilter = () => useContext(FilterContext)
