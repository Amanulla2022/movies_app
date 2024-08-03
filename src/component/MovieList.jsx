import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, handleCardClick }) => {
  return (
    <div className="m-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          handleCardClick={handleCardClick}
        />
      ))}
    </div>
  );
};

export default MovieList;
