import React from "react";
import ShowCard from "../ShowCard";
import { useShow } from "../../contexts";

export default function ShowList({minRating}) {
  const { showData } = useShow();
  const visibleShows = showData.filter((show) => (show.rating?.average ?? 0) >= minRating)
  return (
    <>
      {visibleShows.map((s) => (s.image ? <ShowCard key={s.id} show={s} /> : ""))}
    </>
  );
}
