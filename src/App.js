import { useEffect, useState } from "react";
import "./App.css";
import Header from "./component/Header";
import MovieList from "./component/MovieList";
import Search from "./component/Search";
import Pagination from "./component/Pagination";
import MovieDetails from "./component/MovieDetails";
import { ClipLoader } from "react-spinners";

function App() {
  const [input, setInput] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchMovies = async (page = 1) => {
    if (input.trim() === "") {
      alert("Please enter a movie title to search!");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${input}&page=${page}&apikey=${process.env.REACT_APP_API_KEY}`
      );
      const data = await response.json();
      if (data.Response === "True") {
        setMovies(data.Search);
        setTotalResults(parseInt(data.totalResults, 10));
      } else {
        setMovies([]);
        setTotalResults(0);
        setError(data.Error);
      }
    } catch (error) {
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  const fetchMovieDetails = async (imdbID) => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?i=${imdbID}&apikey=${process.env.REACT_APP_API_KEY}`
      );
      const data = await response.json();
      if (data.Response === "True") {
        setSelectedMovie(data);
        setIsModalOpen(true);
      } else {
        setError(data.Error);
      }
    } catch (error) {
      setError("Failed to fetch movie details");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (input.trim() !== "") {
      fetchMovies(currentPage);
    }
  }, [currentPage]);

  const handleCardClick = (movie) => {
    fetchMovieDetails(movie.imdbID);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };
  return (
    <>
      <Header />
      <Search
        input={input}
        setInput={setInput}
        fetchMovies={() => {
          setCurrentPage(1);
          fetchMovies(1);
        }}
      />
      {loading && (
        <div className="main-div justify-center">
          <ClipLoader color="#3498db" size={50} />
        </div>
      )}
      {error && <p className="text-red-500">{error}</p>}
      <MovieList movies={movies} handleCardClick={handleCardClick} />
      <Pagination
        currentPage={currentPage}
        totalResults={totalResults}
        resultsPerPage={10}
        onPageChange={setCurrentPage}
      />
      {isModalOpen && (
        <MovieDetails movie={selectedMovie} onClose={handleCloseModal} />
      )}
    </>
  );
}

export default App;
