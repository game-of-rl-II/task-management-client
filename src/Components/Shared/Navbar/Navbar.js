import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../../Firebase/firebase.init';
import './Navbar.css'

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
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/" className="text-3xl">TM Tool</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            {
              (!admin?.uid && !member) ? <><li><Link className="nav-button mr-3 btn btn-primary" to="/adminLogin">Admin Login</Link></li>

                <li><Link className="nav-button mr-3 btn btn-primary" to="/employeeLogin">Employee Login</Link></li></> : <><li><Link className="nav-button mr-3 btn btn-primary" to="/dashboard">Dashboard</Link></li><li><a onClick={handleLogOut} className="nav-button mr-3 btn btn-primary" to="/dashboard">Log Out</a></li></>
            }

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;