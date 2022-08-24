import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import { auth } from '../../Firebase/firebase.init';

import { useQuery } from "react-query";
import './InnerHome.css'

const InnerHome = () => {
  const [admin, adminLoading, adminError] = useAuthState(auth);
  const [teams, setTeams] = useState([]);
  const email = admin?.email;

  useEffect(() => {
    fetch(`http://localhost:5000/teams/${email}`)
      .then(res => res.json())
      .then(data => setTeams(data))
  }, [email, teams])

  // const {
  //   data: teams,
  //   isLoading,

  // } = useQuery(["teamOwner", email], () =>
  //   fetch(`http://localhost:5000/teams/${email}`, {
  //     method: "GET",
  //   }).then((res) => res.json())
  // );




  return (
    <>
      <div className="drawer mt-5">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer" className="btn ml-5 btn-primary drawer-button sm:mb-5 text-white">

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
                  teams.map(team => <li key={team?._id}>
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