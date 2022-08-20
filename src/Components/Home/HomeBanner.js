import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/firebase.init";
import Banner from "../../Images/banner-2.2.jpg";

const HomeBanner = () => {
  const navigate = useNavigate()
  const [admin, adminLoading, adminError] = useAuthState(auth);
  const member = localStorage.getItem('member')

  if(adminLoading){
    return <p>loading...</p>
  }
  return (
    <div className="w-full absolute top-0">
      <div
        className="hero w-ful min-h-screen bg-no-repeat
      bg-right-bottom"
        style={{ background: `url(${Banner}` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md mt-28">
            <h1 className="mb-5 text-4xl font-bold">Welcome to TM Tool</h1>
            <p className="mb-5 text-2xl">
              Manage your team from anywhere!
            </p>
            {
              (!admin?.uid && !member) &&
              <button onClick={() => navigate('/register')} className="btn btn-primary">Get Started</button>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
