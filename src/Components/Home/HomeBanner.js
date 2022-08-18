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
