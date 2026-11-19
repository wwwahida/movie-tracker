import { React, useState, useEffect } from "react";
import ShowList from "../ShowList";
import { useShow } from "../../contexts";
import SearchForm from "../SearchForm";
import FilterSearch from "../FilterSearch";

export default function SearchWidget() {
  const [searchString, setSearchString] = useState("24");
  const { setShowData } = useShow();

  useEffect(() => {
    async function searchAPI() {
      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${searchString}`,
      );
      const rawData = await response.json();
      const data = rawData.map((s) => s.show);
      setShowData(data);
    }

    searchAPI();
  }, [searchString, setShowData]);

  return (
    <>
      <SearchForm setSearchString={setSearchString} />
      <FilterSearch />
      <ShowList />
    </>
  );
}
