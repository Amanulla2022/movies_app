import React from "react";

const MovieList = () => {
  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=movie`
      );
      console.log(process.env.REACT_APP_API_KEY);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchMovies();
  return <div></div>;
};

export default MovieList;
