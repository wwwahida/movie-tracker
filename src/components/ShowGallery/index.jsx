import { React, useEffect, useState } from "react";
import GalleryImage from "../GalleryImage";
import { Link } from "react-router-dom";

export default function ShowGallery() {
  const [shows, setShows] = useState([]);
  useEffect(() => {
    async function displayShows() {
      const response = await fetch(`https://api.tvmaze.com/shows`);
      const data = await response.json();
      setShows(data);
    }
    displayShows();
  }, []);
  return shows.map((show) => (
    <Link to={`${show.id}`}>
      <GalleryImage key={show.id} show={show} />
    </Link>
  ));
}
