import React, { useEffect, useState } from "react";

const Eye = () => {
  const [rotate, setrotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setrotate(angle - 180);
    });
  }, []);
  return (
    <div  className="w-full h-[100vh] z-10 overflow-hidden">
    <div data-scroll data-scroll-section data-scroll-speed="-.7" className="w-full h-[100vh] flex justify-center items-center text-white bg-[url(/kitty.jpg)]">
      <div className="w-[70vh] h-[70vh] bg-transparent flex justify-center items-center gap-20 rounded-full">
        <div  className="flex items-center justify-center w-[10vw] h-[10vw] bg-zinc-100 rounded-full">
          <div className=" relative w-2/3 h-2/3 bg-zinc-900 rounded-full">
            <div
              style={{
                transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
              }}
              className="line absolute top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%] w-full h-10 bg-transparent"
            >
              <div className="w-8 h-8 bg-zinc-100 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-[10vw] h-[10vw] bg-zinc-100 rounded-full">
          <div className=" relative w-2/3 h-2/3 bg-zinc-900 rounded-full">
            <div
              style={{
                transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
              }}
              className="line absolute top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%] w-full h-10 bg-transparent"
            >
              <div className="w-8 h-8 bg-zinc-100 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Eye;
