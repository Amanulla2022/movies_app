import React from "react";

const Search = () => {
  return (
    <div className="main-div">
      <input
        type="text"
        placeholder="Search for movie..."
        className="p-2 m-1 w-4/5 text-gray-800 font-semibold text-xl border-2 border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="bg-blue-400 hover:bg-blue-700 text-white text-xl p-2 rounded-2xl lg:w-1/12 w-1/6">
        Search
      </button>
    </div>
  );
};

export default Search;
