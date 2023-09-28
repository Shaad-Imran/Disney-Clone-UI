import React from "react";
import { genreList } from "../Constant";
import MovieList from "./MovieList";

const GenreMovieList = () => {
  return (
    <section>
      {/* Map through the genreList array to display each genre */}
      {genreList.map((item, index) => (
        <article key={item.id} className="p-8 px-8 md:px-16">
          <h2
            className="text-[20px] text-white 
          font-bold "
          >
            {item.name}
          </h2>
          <MovieList genreId={item.id} index_={index} />
        </article>
      ))}
    </section>
  );
};

export default GenreMovieList;
