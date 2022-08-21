import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../Firebase/firebase.init";
import Notification from "../../Notification/Notification";

import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate('')
  const [admin, adminLoading, adminError] = useAuthState(auth);
  const member = localStorage.getItem('member')
  const handleLogOut = () => {
    if (admin) {
      signOut(auth)
      navigate('/')
    }
    else {
      localStorage.removeItem('member')
      navigate('/')
    }
  }

  if (adminLoading) {
    return <p>loading...</p>;
  }
  return (
    <div className="max-w-7xl mx-auto">
      <div className="navbar relative z-50 top-5">
        <div className="flex-1">
          <Link to="/" className="text-black">
            <span className="p-2 rounded text-2xl font-bold text-white bg-primary">
              TMT
            </span>{" "}
            Task Management Tool
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            {!admin?.uid && !member ? (
              <>
                <li>
                  <Link
                    className="nav-button text-white font-bold mr-3 bg-primary"
                    to="/adminLogin"
                  >
                    Admin Login
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-button text-white font-bold mr-3 bg-primary"
                    to="/employeeLogin"
                  >
                    Employee Login
                  </Link>
                </li>
              </>
            ) : (
              <>
              <Notification/>
                <li>
                  <Link
                    className="nav-button mr-3 btn btn-primary text-white"
                    to="/dashboard"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="nav-button mr-3 btn btn-primary text-white"
                  >
                    Log out
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
