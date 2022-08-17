import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="">
      <div className="navbar relative z-50 top-5">
        <div className="flex-1">
          <Link to="/" className="text-3xl text-primary">
            TM Tool
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link className="nav-button mr-3 btn btn-primary" to="/adminLogin">
                Admin Login
              </Link>
            </li>

            <li>
              <Link className="nav-button mr-3 btn btn-primary" to="/employeeLogin">
                Employee Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
