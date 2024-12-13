import React, { useState } from "react";

const GamePuzz = () => {
  const [bgImg, setBgImg] = useState("/scene.jpg"); // Store the background image path as a state

  return (
    <div
      className="relative w-[100vw] h-[100vh] bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${bgImg})`, transition: "background-image 1s ease", }} // Dynamically set the background image
    >
      <div className="absolute w-64 h-64 t-[40%] bg-transparent ratateAnimation">
        {[, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((number, idx) => {
          return (
            <div
              className="absolute inset-[0 0 0 0]"
              style={{
                transform: `rotateY(calc((${number} - 1) * (360 / 9) * 1deg)) translateZ(550px)`,
              }}
              key={idx}
            >
              <img
                className="largeAnim w-[100%] h-[100%] object-cover cursor-pointer"
                src={`/wall${number}.jpg`}
                alt={`wall ${number}`}
                onClick={() => {
                  setBgImg(`/wall${number}.jpg`); // Update the background image
                  console.log(typeof bgImg, bgImg); // Log the background image state
                }}
              />
            </div>
          );
        })}
      </div>
      <div className="textInCircle bg-transparent">
        <h1 className="bg-transparent before:text-stone-800 headOne">
          React.js
        </h1>
        <div className="bg-transparent font-['Poppins'] font-black text-right  max-w-[200px]">
          <h2 className="bg-transparent text-[3em] largeAnim" onClick={()=>{setBgImg("/scene.jpg")}}>GameMestrow</h2>
          <p className="bg-transparent text-[2em]">Web Design</p>
        </div>
        <div className="model"></div>
      </div>
    </div>
  );
};

export default GamePuzz;
