import React from "react";
import { productionHouseList } from "../Constant";

const ProductionHouse = () => {
  return (
    <section className="flex gap-2 md:gap-5 p-2 px-5 md:px-16  ">
      {productionHouseList.map((item) => (
        <article
          key={item.id}
          className="border-[2px] border-gray-600
          rounded-lg hover:scale-110 transition-all duration-300
          ease-in-out cursor-pointer relative shadow-xl 
          shadow-gray-800
          "
        >
          <video
            src={item.video}
            autoPlay
            loop
            playsInline
            muted
            className="absolute z-0 top-0 rounded-md opacity-0 hover:opacity-50"
          />
          <img
            src={item.image}
            alt={item.image}
            className="w-full z-[1] opacity-100"
          />
        </article>
      ))}
    </section>
  );
};

export default ProductionHouse;
