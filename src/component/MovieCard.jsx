import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="relative p-4 flex flex-col justify-center items-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <img src={movie.Poster} alt={movie.Title} className="w-full rounded-lg" />
      <div className="absolute top-0 left-0 bg-gray-800 text-white px-2 py-1 rounded-lg text-xs">
        {movie.imdbID}
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold">{movie.Title}</h3>
        <p className="text-gray-600">{movie.Year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
