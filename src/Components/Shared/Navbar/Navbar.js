import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../Firebase/firebase.init";
import Notification from "../../Dashboard/Notification/Notification";
import "./Navbar.css";
import Loading from "../Loading/Loading";
// import Loading from "../Loading/Loading";

import "./Navbar.css";
import MemberNotification from "../../Dashboard/Notification/MemberNotification";

const Navbar = () => {
  const navigate = useNavigate();
  const [admin, adminLoading, adminError] = useAuthState(auth);
  const member = localStorage.getItem("member");
  const handleLogOut = () => {
    if (admin) {
      signOut(auth)
        .then(() => {
          // Sign-out successful.

          navigate("/home");
        })
        .catch((error) => {
          // An error happened.
        });
    } else {
      localStorage.removeItem("member");
      navigate("/home");
    }
  };

  if (adminLoading) {
    return <></>;
  }

  return (
    <div className="mx-auto">
      <div className="navbar relative p-5 flex flex-col md:flex-row gap-y-4 bg-lime-100">
        <div className="flex-1">
          <Link to="/" className="text-black">

            <span className="p-2 rounded text-2xl font-bold text-white bg-primary">TMT</span>{" "}
            <span className='logo text-slate-700 font-serif font-bold'>Task Management Tool</span>

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
                    Member Login
                  </Link>
                </li>
              </>
            ) : (
              <>
                {
                  admin?.uid ? <Notification /> : <MemberNotification></MemberNotification>
                }

                <li>
                  <Link

                    className="nav-button text-white mr-3 btn btn-primary"
                    to={`${admin?.uid ? '/myProfile' : '/dashboard'}`}

                  >
                    {admin?.uid ? "Profile" : "Dashboard"}
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="nav-button text-white font-bold mr-3 bg-primary"
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
