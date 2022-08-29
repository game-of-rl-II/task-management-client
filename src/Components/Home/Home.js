import React from "react";
import About from "./About";
import FAQ from "./FAQ";
import Feature from "./Feature";
import GetInTouch from "./GetInTouch";
import Help from "./Help";
import HomeBanner from "./HomeBanner";
import Success from "./Success";

const Home = () => {
  return (
    <div className="">
      <HomeBanner />
      <Help/>
      <Success/>
      <Feature/>
      <GetInTouch/>
      {/* <About /> */}
      {/* <FAQ /> */}
    </div>
  );
};

export default Home;
