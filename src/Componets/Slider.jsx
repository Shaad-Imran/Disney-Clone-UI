import React, { useEffect, useRef, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { getTrendingVideos } from "../Services/GlobalApi";

// Define a constant for the base URL of movie images
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const SCREEN_WIDTH = window.innerWidth; // Store the screen width as a constant

function Slider() {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();

  useEffect(() => {
    getTrendingMovies();
  }, []);

  // Function to fetch trending movies from the API
  const getTrendingMovies = async () => {
    try {
      const response = await getTrendingVideos();
      setMovieList(response.results);
    } catch (error) {
      console.error("Error fetching trending movies:", error);
    }
  };

  // Function to slide the movie list to the right
  const sliderRight = () => {
    elementRef.current.scrollLeft += SCREEN_WIDTH - 110;
  };

  // Function to slide the movie list to the left
  const sliderLeft = () => {
    elementRef.current.scrollLeft -= SCREEN_WIDTH - 110;
  };

  return (
    <section>
      {/* Button to slide the movie list to the left */}
      <HiChevronLeft
        className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer "
        onClick={sliderLeft}
      />
      {/* Button to slide the movie list to the right */}
      <HiChevronRight
        className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0"
        onClick={sliderRight}
      />

      {/* Container for the movie list */}
      <div
        className="flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth"
        ref={elementRef}
      >
        {/* Render movie items */}
        {movieList.map((item) => (
          <img
            key={item.id}
            src={`${IMAGE_BASE_URL}${item.backdrop_path}`}
            alt={item.title}
            className="min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in"
          />
        ))}
      </div>
    </section>
  );
}

export default Slider;
