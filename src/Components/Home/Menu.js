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
  // const [team, setTeam] = useState({})

  // useEffect(() => {
  //   fetch(`http://localhost:5000/team-one/${teamName}`)
  //     .then(res => res.json())
  //     .then(data => setTeam(data))
  // }, [teamName])

  const {
    data: team,
    refetch,
    isLoading,
  } = useQuery(["team", teamName], () =>
    fetch(`http://localhost:5000/team-one/${teamName}`, {
      method: "GET",
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <></>
  }

  return (
    <div>
      <h2 className="text-center text-3xl text-green-700 uppercase">you are switched to <span>{teamName}</span></h2>
      <div class="navbar bg-lime-50">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link className='underline' to="addMember">Add Member</Link></li>

              <li><Link className='underline' to="manageEmployee">Manage Members</Link></li>
              <li><Link className='underline' to="reviewYourTeamMember">Review a member</Link></li>
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