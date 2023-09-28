import React from "react";

// Define a constant for the base URL of movie images
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const HrMovieCard = ({ movie }) => {
  return (
    <div className="transition-transform duration-300 ease-in-out transform hover:scale-105">
      <img
        src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
        className="w-[110px] md:w-[260px] rounded-lg
  hover:border-[3px] border-gray-400 cursor-pointer
  "
        alt={movie.title}
      />
      <h2
        className="w-[110px] md:w-[260px] text-white
  mt-2"
      >
        {movie.title}
      </h2>
    </div>
  );
};

export default HrMovieCard;
