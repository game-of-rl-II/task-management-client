import React from "react";
import Banner from "../../Images/banner-2.2.jpg";

const HomeBanner = () => {
  return (
    <div className="w-full absolute top-0">
      <div
        class="hero w-ful min-h-screen bg-no-repeat
      bg-right-bottom"
        style={{ background: `url(${Banner}` }}
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md mt-28">
            <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
            <p class="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
              a id nisi.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;

// <div className="h-full bg-black-rgba">
//   <div className="flex flex-col items-center justify-center h-full  ">
//     <h1 className="lg:leading-10  text-sm md:text-xl font-bold w-3/6 text-white text-center">
//       Project management is the process of leading the work of a team to achieve all project goals within the given constraints.
//     </h1>
//     <button className="btn btn-primary btn-lg mt-8">Get start</button>
//   </div>
// </div>;
