import React, { useState, useRef, useEffect } from "react";
import { getMovieByGenreId } from "../Services/GlobalApi";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import HrMovieCard from "./HrMovieCard";

const MovieList = ({ genreId, index_ }) => {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null);

  useEffect(() => {
    getMoviesByGenre();
  }, []);

  const getMoviesByGenre = async () => {
    try {
      const response = await getMovieByGenreId(genreId);
      setMovieList(response.results);
    } catch (error) {
      console.error("Error fetching Movies:", error);
    }
  };

  const slideRight = (element) => {
    element.scrollLeft += 500;
  };
  const slideLeft = (element) => {
    element.scrollLeft -= 500;
  };

  return (
    <div className="relative">
      {/* Button to slide the movie list to the left */}
      <IoChevronBackOutline
        onClick={() => slideLeft(elementRef.current)}
        className={`text-[50px] text-white
      p-2 z-10 cursor-pointer 
       hidden md:block absolute
       ${index_ % 3 === 0 ? "mt-[80px]" : "mt-[150px]"} `}
      />

      <div
        ref={elementRef}
        className="flex overflow-x-auto gap-8
scrollbar-none scroll-smooth pt-4 px-3 pb-4"
      >
        {movieList.map((item) => (
          <React.Fragment key={item.id}>
            {index_ % 3 === 0 ? (
              // Render horizontal movie cards for specific indices
              <HrMovieCard movie={item} />
            ) : (
              // Render regular movie cards for other indices
              <MovieCard movie={item} />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Button to slide the movie list to the right */}
      <IoChevronForwardOutline
        onClick={() => slideRight(elementRef.current)}
        className={`text-[50px] text-white hidden md:block
      p-2 cursor-pointer z-10 top-0
       absolute right-0 
       ${index_ % 3 === 0 ? "mt-[80px]" : "mt-[150px]"}`}
      />
    </div>
  );
};

export default MovieList;
