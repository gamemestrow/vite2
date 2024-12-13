import React, { useEffect, useState } from "react";
import Landing from "./component/Landing";
import Eye from "./component/Eye";
import LocomotiveScroll from "locomotive-scroll";
import Navbar from "./component/Navbar";
import Places from "./component/Places";
import RotatingBg from "./component/RotatingBg";
import Game from "./component/Game";

const App = () => {

  const [elemGame, setelemGame] = useState(null)

  const takeAllTags = () => {
    setelemGame()
  }

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
    <Navbar />
      <Landing tagsOfGame={elemGame}/>
      <Places />
      <Eye />
      <RotatingBg />
      <Game setelemGame={takeAllTags}/>
    </>
  );
};

export default App;
