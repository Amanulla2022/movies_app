import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import MovieList from "./component/MovieList";
import Search from "./component/Search";

function App() {
  const [input, setInput] = useState("");
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    if (input.trim() === "") {
      alert("Please enter a movie title to search!!!");
      return;
    }

    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${input}`
      );
      const data = await response.json();
      setMovies(data.Search || []);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <Search input={input} setInput={setInput} fetchMovies={fetchMovies} />
      <MovieList movies={movies} />
    </>
  );
}

export default App;
