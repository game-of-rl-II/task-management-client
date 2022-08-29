import React from "react";
import alamin from "../../Images/Md Al Amin Hossain.PNG";
import faridul from "../../Images/faridul.jpg";
import shuvo from "../../Images/shuvo.jpg";
import arifulislam from "../../Images/arifulislam.jpg";
import alaminarif from "../../Images/alaminarif.jpg";
import nabin from "../../Images/nabin.jpg";
import "./AboutUs.css";
function AboutUs() {
  return (
    <div className="font-serif mb-6">
      <h1 className="text-primary about">About Our Team Members</h1>
      <div className="tmtabout">
        <div
          className=""
          data-aos="fade-down-right"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <div class="card lg:w-4/6 lg:ml-auto  card-side bg-base-100 shadow-xl">
            <figure>
              <img src={alamin} alt="Movie" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Name: Md Al Amin Hossain</h2>
              <h4>Email:hossainalamin1246@gmail.com</h4>
              <p class="text-slate-500 font-serif">
                Contact Number:01627948044
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-down-left"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          <div class="card lg:w-4/6 lg:ml-8 card-side bg-base-100 shadow-xl">
            <figure>
              <img src={faridul} alt="Movie" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Name: Md Faridul Haque Murshed</h2>
              <h4>Email:faridulhaquemurshed@gmail.com</h4>
              <p class="text-slate-500 font-serif">
                Contact Number:01996438234
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up-right"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          <div class="card lg:w-4/6 lg:ml-auto   card-side bg-base-100 shadow-xl">
            <figure>
              <img src={shuvo} alt="Movie" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Name: Md Ariful Islam Shuvo</h2>
              <h4>Email:arifulislams063@gmail.com</h4>
              <p class="text-slate-500 font-serif">
                Contact Number:01838404512
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up-right"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          <div class="card lg:w-4/6 lg:ml-auto   card-side bg-base-100 shadow-xl">
            <figure>
              <img src={arifulislam} alt="Movie" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Name: Md Ariful Islam</h2>
              <h4>Email:arifulislam64743@gmail.com</h4>
              <p class="text-slate-500 font-serif">
                Contact Number:01820082894
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up-right"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          <div class="card lg:w-4/6 lg:ml-auto   card-side bg-base-100 shadow-xl">
            <figure>
              <img src={alaminarif} alt="Movie" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Name: Md Arifur Rahman</h2>
              <h4>Email:arifurr231@gmail.com</h4>
              <p class="text-slate-500 font-serif">
                Contact Number:01793911158
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up-left"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          <div class="card lg:w-4/6 lg:ml-8 card-side bg-base-100 shadow-xl">
            <figure>
              <img src={nabin} alt="Movie" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Name: Mohammad Jewel</h2>
              <h4>Email:jewelnabin@gmail.com</h4>
              <p class="text-slate-600 font-serif">
                Contact Number:01608250777
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
