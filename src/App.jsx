import React from "react";
import { GenreMovieList, Header, ProductionHouse, Slider } from "./Componets";

const App = () => {
  return (
    <div>
      <Header />
      <Slider />
      <ProductionHouse />
      <GenreMovieList />
    </div>
  );
};

export default App;
