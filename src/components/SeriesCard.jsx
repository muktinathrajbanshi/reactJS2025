
import React from 'react';

const SeriesCard = () => {
    const { img_url, name, rating, description, cast, genre, watch_url } = curElem;
  return (
    <li className="card">
        <div>
            <img src={img_url} alt={name} width="40%" height="40%" />
        </div>
        <div className="card-content">
        <h2>Name: {name} </h2>
        <h3>Rating: {rating} </h3>
        <p>Summary: {description} </p>
        <p>Genre: {genre.join(", ")}</p>
        <p>Cast: {Cast.join(", ")}</p>
        <a href={watch_url} target="_blank">
            <button>Watch Now</button>
        </a>
        </div>
    </li>
  );
};

export default SeriesCard;

