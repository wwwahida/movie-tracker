import React from "react";
import ShowCard from "../ShowCard";
import { useShow, useFilter } from "../../contexts";

export default function ShowList() {
  const { showData } = useShow();
  const { minRating } = useFilter();
  
  const visibleShows = showData.filter((show) => (show.rating?.average ?? 0) >= minRating)
  return (
    <>
      {visibleShows.map((s) => (s.image ? <ShowCard key={s.id} show={s} /> : ""))}
    </>
  );
}
