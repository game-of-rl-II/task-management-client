import React, { useState } from "react";

const HomeBanner = () => {
  return (
    <div>
      <div class="carousel w-full">
        <div id="item1" class="carousel-item w-full">
          <img src="https://placeimg.com/800/200/arch" class="w-full" />
        </div>
        <div id="item2" class="carousel-item w-full">
          <img src="https://placeimg.com/800/200/arch" class="w-full" />
        </div>
        <div id="item3" class="carousel-item w-full">
          <img src="https://placeimg.com/800/200/arch" class="w-full" alt="" />
        </div>
        <div id="item4" class="carousel-item w-full">
          <img src="https://placeimg.com/800/200/arch" class="w-full" />
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
