import React, { useState } from "react";
import Banner2 from "../../Images/banner-2.jpg";
import Banner3 from "../../Images/banner-3.jpg";
import Banner4 from "../../Images/Banner-5.jpg";

const HomeBanner = () => {
  return (
    <div>
      <div class="carousel w-full h-screen max-h-[80vh]">
        <div id="item1" class="carousel-item w-full">
          <div
            style={{
              background: `url(${Banner3})`,
            }}
            className="w-full bg-no-repeat bg-cover"
          >
            {" "}
            <div className="flex flex-col items-center justify-center h-full  ">
              <h1 className="lg:leading-10  text-sm md:text-xl font-bold w-3/6  text-center">
                Project management is the process of leading the work of a team to achieve all project goals within the given constraints.
              </h1>
              <button className="btn btn-primary">Get start</button>
            </div>
          </div>
          {/* <img src={Banner3} class="w-full" alt="" /> */}
        </div>
        <div id="item2" class="carousel-item w-full">
          <img src={Banner2} class="w-full" alt="" />
        </div>
        <div id="item3" class="carousel-item w-full">
          <img src={Banner4} class="w-full " alt="" />
        </div>
        <div id="item4" class="carousel-item w-full">
          <img src="https://placeimg.com/800/200/arch" class="w-full" alt="" />
          <a href="#item4" class="btn btn-xs btn-primary ">
            4
          </a>
        </div>
      </div>
      <div class="flex justify-center w-full py-2 gap-2">
        <a href="#item1" class="badge badge-xs"></a>

        <a href="#item2" class="badge badge-xs"></a>

        <a href="#item3" class="badge badge-xs"></a>
      </div>
    </div>
  );
};

export default HomeBanner;
