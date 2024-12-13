import React, { useEffect, useRef, useState } from "react";

import data from "./About-places.json"; // Import the JSON data

const PlacesSections = () => {

  return (
    <div id="places">
      {[
        "mount-fuji",
        "colosseum-amphitheatre",
        "london-bridge",
        "eiffel-tower",
      ].map(function (items, index) {
        return (
          <div
            key={index}
            className={` w-full h-1/3 flex justify-center ${
              index % 2 == 0 ? "flex-row" : "flex-row-reverse"
            } gap-36 m-20`}
          >
            <img
              className="largeAnim rounded-3xl"
              src={`../${items}.jpg`}
              width={660}
              height={440}
            />
            <div className="text-4xl text-gray-600 mt-4 flex justify-center items-start flex-col text-wrap w-2/5">
              <h2 className="bebas-neue-regular font-extrabold mb-4">
                {data[index].name}
              </h2>
              <h3 className="bebas-neue-regular font-semibold mb-2">
                {data[index].location}
              </h3>
              <p className="bebas-neue-regular font-normal mb-1">
                {data[index].about}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlacesSections;
