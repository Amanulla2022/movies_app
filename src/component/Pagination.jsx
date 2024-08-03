import React from "react";

const Pagination = ({
  currentPage,
  totalResults,
  resultsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalResults / resultsPerPage);

  if (totalResults === 0) {
    return null;
  }

  return (
    <div className="flex justify-center items-center mt-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        className={`p-2 mx-1 rounded text-white text-xl${
          currentPage === 1 ? " bg-gray-200 cursor-not-allowed" : " bg-red-500"
        }`}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <p className="mx-2 text-xl">
        Page <span className="underline">{currentPage}</span> of
        <span className="underline">{totalPages}</span>
      </p>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        className={`p-2 mx-1 rounded text-white text-xl${
          currentPage === totalPages
            ? " bg-gray-200 cursor-not-allowed"
            : " bg-green-500"
        }`}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
