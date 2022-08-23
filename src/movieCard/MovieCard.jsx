import React from "react";
import "./movieCard.css";

const MovieCard = ({ movies }) => {
  return (
    <div className="card">
      <div className="year">{movies.Year}</div>

      <div className="img">
        <img
          src={
            movies.Poster !== "N/A"
              ? movies.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movies.Title}
        />
      </div>
      <div className="text">
        <div className="type">{movies.Type}</div>
        <div className="movie-name">{movies.Title}</div>
      </div>
    </div>
  );
};

export default MovieCard;
