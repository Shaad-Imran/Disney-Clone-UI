import React from "react";

// Define a constant for the base URL of movie images
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const MovieCard = ({ movie }) => {
  return (
    <>
      <img
        src={`${IMAGE_BASE_URL}${movie.poster_path}`}
        className="w-[110px] md:w-[200px] rounded-lg
  hover:border-[3px] border-gray-400 cursor-pointer
  hover:scale-105 transition-all duration-150 ease-in"
        alt={movie.title}
      />
    </>
  );
};

export default MovieCard;
