import Banner2 from "../../Images/banner-2.jpg";
import Banner3 from "../../Images/banner-3.jpg";
import Banner4 from "../../Images/Banner-5.jpg";
import React from "react";

const HomeBanner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div className="carousel w-full h-screen max-h-[80vh]">
          <div id="item1" className="carousel-item w-full">
            <img src={Banner3} className="w-full" />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img src={Banner2} className="w-full" />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img src={Banner4} className="w-full " alt="" />
          </div>
          <div id="item4" className="carousel-item w-full">
            <img src="https://placeimg.com/800/200/arch" className="w-full" />
            <a href="#item4" className="btn btn-xs btn-primary ">
              4
            </a>
          </div>
        </div>
        {/* <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="badge badge-xs"></a>

          <a href="#item2" className="badge badge-xs"></a>

          <a href="#item3" className="badge badge-xs"></a>
        </div> */}
      </div>
    </div>

  );
};

export default HomeBanner;
