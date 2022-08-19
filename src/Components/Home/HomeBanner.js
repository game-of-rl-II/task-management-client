import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/firebase.init";
// import Banner from "../../Images/task-tool.png";

const HomeBanner = () => {
  const navigate = useNavigate()
  const [admin, adminLoading, adminError] = useAuthState(auth);
  const member = localStorage.getItem('member')

  if(adminLoading){
    return <p>loading...</p>
  }
  return (
    <div className="w-full absolute top-0">
      <div>
        {/* <div>left</div>
        <div>rigt</div> */}
      </div>
    </div>
  );
};

export default HomeBanner;
