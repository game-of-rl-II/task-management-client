import React from 'react';
import { auth } from "../../Firebase/firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet, useParams } from 'react-router-dom';

const Menu = () => {
  const { teamName } = useParams()


  return (
    <div>
      <h2 className="text-center text-3xl">you are switched to {teamName}</h2>
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to="addMember">Add Member</Link></li>

              <li><Link to="manageEmployee">Manage Members</Link></li>
              <li><Link to="reviewYourTeamMember">Review a member</Link></li>
            </ul>
          </div>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li><Link to="addMember">Add Member</Link></li>

            <li><Link to="manageEmployee">Manage Members</Link></li>
            <li><Link to="reviewYourTeamMember">Review a member</Link></li>
            <li><Link to="employeeTask">Assigned tasks</Link></li>
            <li><Link to="todaysTask">Today's tasks</Link></li>
          </ul>
        </div>
        <div class="navbar-end">
        </div>
      </div>
      <div>
        <Outlet></Outlet>

      </div>
    </div>
  );
};

export default Menu;