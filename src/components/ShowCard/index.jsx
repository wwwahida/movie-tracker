import React from 'react'

export default function ShowCard({ show }) {
  return (
    <div className="show-card">
      <div>
        <img src={show.image.medium}></img>
      </div>
      <div>
        <div>{show.rating.average ?  <span>({show.rating.average}/10)</span> : <span>No rating</span>}</div>
        <h2>{show.name}</h2>
        <em>
          {show.language}, {show.premiered}
        </em>
        <div dangerouslySetInnerHTML={{ __html: show.summary }}></div>
      </div>
    </div>
  );
}