import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/firebase.init";
import "./HomeBanner.css";
// import Banner from "../../Images/task-tool.png";
import login2 from "../../Images/login2.png";

const HomeBanner = () => {
  const navigate = useNavigate();
  const [admin, adminLoading, adminError] = useAuthState(auth);
  const member = localStorage.getItem("member");

  if (adminLoading) {
    return <p>loading...</p>;
  }
  if(admin || member){
    return navigate('/dashboard')
  }
  return (
    <div className="home-banner-parent">
      <div className="banner-left-side">
        <h2 className="text-4xl">
          The one place for all your projects and team collaboration
        </h2>
        <ul className="mt-10">
          <li className="mt-3 list-banner">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="rgb(2,151,67)"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>{" "}
            <p className="ml-3">
              All the tools your team needs put under one roof
            </p>
          </li>
          <li className="mt-3 list-banner">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="rgb(2,151,67)"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>{" "}
            <p className="ml-3">
              Ultimate control over teams and projects easier than ever
            </p>
          </li>
          <li className="mt-3 list-banner">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="rgb(2,151,67)"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>{" "}
            <p className="ml-3">
              On time project delivery & on point team accountability
            </p>
          </li>
          <li className="mt-3 list-banner">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="rgb(2,151,67)"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>{" "}
            <p className="ml-3">
              Easy-to-understand with little to no learning curve
            </p>
          </li>
          <li className="mt-3 list-banner">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="rgb(2,151,67)"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>{" "}
            <p className="ml-3">Free and always will be</p>
          </li>
        </ul>
      </div>
      <div className="banner-right-side">
        {!admin?.uid && !member && (
          <div className="w-full">
            <div>
              <div className="banner-image">
                <img src={login2} alt="" />
              </div>
              <button
                onClick={() => navigate("/register")}
                className=" btn btn-primary btn-block"
              >
                Register with email
              </button>
            </div>
            <div>
              <p className="text-center">or</p>
            </div>
            <div>
              <button className=" btn btn-neutral btn-block btn-outline">
                Continue with google
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeBanner;
