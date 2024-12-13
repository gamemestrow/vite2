import React, { useEffect } from "react";

const Landing = () => {
  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden">
      <div
        data-scroll
        className="textstructure mask-custom flex justify-center items-center h-[100vh] relative before:content-[''] before:absolute before:inset-0 before:bg-[url('/cele2.jpg')] before:bg-cover before:bg-center overflow-hidden"
        data-scroll-section
        data-scroll-speed="-.3"
      >
        <div className=" text-white  bg-transparent overflow-hidden flex justify-center items-center">
          <p className="animate-slide-up text-[20vh] bg-transparent">Welcome</p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
