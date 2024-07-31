import React from "react";
import movieLogo from "../assets/logo-movie.jpg";

const Header = () => {
  return (
    <header className="main-div">
      <img src={movieLogo} alt="Movie Logo" className="h-28 w-28" />
      <h1 className="text-3xl font-bold text-gray-700">Amanulla Movie's</h1>
    </header>
  );
};

export default Header;
