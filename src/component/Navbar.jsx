import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Hide navbar when scrolling down, show when scrolling up
    if (currentScrollY > lastScrollY) {
      setIsVisible(false); // Scrolling down
    } else {
      setIsVisible(true); // Scrolling up
    }

    setLastScrollY(currentScrollY); // Update last scroll position
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`navbar ${
        isVisible ? "show" : "hide"
      } w-[100vw] lg:min-h-32 md:min-h-24  bg-primary flex  items-center gap-8 bebas-neue-regular font-normal justify-center fixed translate-y-11`}
    >
      <div className="w-[80%] h-full flex justify-between items-center bg-transparent">
        <div className="flex gap-5 items-center bg-transparent">
          <div className="text-white text-[4vh] font-bold bg-transparent">
            <img
              src="vite.svg"
              className="bg-transparent"
            />
          </div>
        </div>
        <div className="flex gap-10 items-center bg-transparent justify-center">
          {["Home", "About", "Explore", "Contact", "You"].map(function (
            items,
            index
          ) {
            return (
              <div
                className="largeAnim h-[6vh] text-red-100 rounded-r-sm text-[4vh] hover:text-red-200"
                key={index}
              >
                {`${items}`}
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
