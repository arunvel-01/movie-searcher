import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <div className="para">
        <p>{movie.Year}</p>
      </div>
      <div className="img">
        <img
          src={
            movie.Poster !== "NA"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
        />
      </div>
      <div className="img-footer">
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
