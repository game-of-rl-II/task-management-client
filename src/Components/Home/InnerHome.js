import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import { auth } from '../../Firebase/firebase.init';

import { useQuery } from "react-query";


import './InnerHome.css'

const InnerHome = () => {
  const [admin, adminLoading, adminError] = useAuthState(auth);
  const email = admin?.email;

  const {
    data: teams,
    isLoading,

  } = useQuery(["teamOwner", email], () =>
    fetch(`http://localhost:5000/teams/${email}`, {
      method: "GET",
    }).then((res) => res.json())
  );


  if (adminLoading || isLoading) {
    return <p>loading....</p>
  }

  return (
    <>
      <div className="drawer mt-5">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer" className="btn ml-2 btn-primary drawer-button text-white">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg> */}
            My Teams
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">


            {admin?.uid && (
              <>
                {
                  teams.map(team => <li key={team._id}>
                    <Link to={team?.teamName}>{team?.teamName}</Link>
                  </li>)
                }



              </>
            )}


          </ul>
        </div>
      </div>
    </>
  );
};

export default InnerHome;