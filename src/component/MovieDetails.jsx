import React from "react";

const MovieDetails = ({ movie, onClose }) => {
  if (!movie) return null;

  const { Title, Year, Type, Plot, Poster, Director, Actors, Genre, Ratings } =
    movie;

  return (
    <div className="fixed inset-0 main-div justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-5xl w-full relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
          onClick={onClose}
        >
          X
        </button>
        <div className="flex">
          <div className="w-1/3">
            <img src={Poster} alt={Title} className=" w-full rounded-lg" />
          </div>

          <div className="w-2/3 pl-6">
            <h2 className="text-2xl font-bold mb-2">{Title}</h2>
            <p className="movie-p">
              <span className="movie-span">Year:</span> {Year}
            </p>
            <p className="movie-p">
              <span className="movie-span">Type:</span> {Type}
            </p>
            <p className="movie-p">
              <span className="movie-span">Genre:</span> {Genre}
            </p>
            <p className="movie-p">
              <span className="movie-span">Director:</span> {Director}
            </p>
            <p className="movie-p">
              <span className="movie-span">Actors:</span> {Actors}
            </p>
            <p className="text-gray-700 mb-4">
              <span className="movie-span">Info:</span> {Plot}
            </p>
            <div>
              {Ratings &&
                Ratings.map((rating) => (
                  <div key={rating.Source} className=" text-gray-700 mb-1">
                    <strong className="underline">{rating.Source}:</strong>{" "}
                    {rating.Value}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
