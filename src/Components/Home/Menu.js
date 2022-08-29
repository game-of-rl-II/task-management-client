import React, { useEffect, useState } from 'react';
import { auth } from "../../Firebase/firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet, useParams } from 'react-router-dom';
import "./Menu.css";
import useTeams from '../hooks/useTeams';
import Loading from '../Shared/Loading/Loading';
import { useQuery } from 'react-query'

const Menu = () => {

  const { teamName } = useParams()
  
  return (
    <div>
      <h2 className="text-center font-bold text-xl mb-2 text-white uppercase">you are switched to <span>{teamName}</span></h2>
      <div class="navbar ">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-teal-500 lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2  shadow bg-teal-300 rounded-box w-52">
            <li><Link className='hover:bg-teal-700'to="addMember">Add Member</Link></li>
            <li><Link className='hover:bg-teal-700' to="manageEmployee">Manage Members</Link></li>
            <li><Link className='hover:bg-teal-700' to="reviewYourTeamMember">Review a member</Link></li>
            <li><Link className='hover:bg-teal-700' to="employeeTask">Assigned tasks</Link></li>
            <li><Link className='hover:bg-teal-700' to="todaysTask">Today's tasks</Link></li>
            <li><Link className='hover:bg-teal-700' to="forwardedTask">Forwarded tasks</Link></li>
            <li><Link className='hover:bg-teal-700' to="settings">Settings</Link></li>
</ul>
          </div>
        </div>
        <div class="navbar-center hidden lg:flex max-w-5xl">
          <ul class="menu menu-horizontal bg-teal-500 font-bold rounded text-white p-0">
            <li><Link className='hover:bg-teal-700'to="addMember">Add Member</Link></li>
            <li><Link className='hover:bg-teal-700' to="manageEmployee">Manage Members</Link></li>
            <li><Link className='hover:bg-teal-700' to="reviewYourTeamMember">Review a member</Link></li>
            <li><Link className='hover:bg-teal-700' to="employeeTask">Assigned tasks</Link></li>
            <li><Link className='hover:bg-teal-700' to="todaysTask">Today's tasks</Link></li>
            <li><Link className='hover:bg-teal-700' to="forwardedTask">Forwarded tasks</Link></li>
            <li><Link className='hover:bg-teal-700' to="settings">Settings</Link></li>

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