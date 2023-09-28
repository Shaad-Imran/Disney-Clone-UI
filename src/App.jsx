import React from "react";
import { GenreMovieList, Header, ProductionHouse, Slider } from "./Componets";

const App = () => {
  return (
    <div>
      {/* Header Component */}
      <Header />

      {/* Slider Component */}
      <Slider />

      {/* Production House Component */}
      <ProductionHouse />

      {/* Genre Movie List Component */}
      <GenreMovieList />
    </div>
  );
};

export default App;
