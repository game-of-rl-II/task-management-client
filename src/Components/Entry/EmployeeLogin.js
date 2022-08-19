import React, { useState } from "react";
import useMember from "../hooks/useMember";
import {Link, useNavigate} from "react-router-dom"

const EmployeeLogin = () => {
  const navigate = useNavigate()
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = () => {
    
    
    if (id) {

      fetch(`http://localhost:5000/member-login/${id}`, {
        method: 'GET',
      })
        .then(res => res.json())
        .then(data => {
          if(data._id){
            if(data.password===password) {
              localStorage.setItem('member', JSON.stringify(data))
              navigate('/dashboard')
            }
            else{
              alert('password did not match')
            }
          }
          else{
            alert('user not found')
          }
        })
    }
  }


  return (
    <div className="hero min-h-screen">
      <div
        style={{ scrollBehavior: "smooth" }}
        className="hero-content flex-col lg:flex-row-reverse "
      >
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-y-4 border-primary">
          <div className="card-body">
            <div className="form-control">
              <h1 className="text-3xl font-bold text-neutral text-center">
                Employee Login
              </h1>
              <label className="label">
                <span className="label-text">ID</span>
              </label>
              <input
                onChange={(e) => setId(e.target.value)}
                type="text"
                placeholder="ID"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button
                onClick={handleLogin}
                className="p-3 rounded-md bg-primary text-white font-bold"
              >
                Login
              </button>
            </div>
          </div>
        </div>
        <div className="text-center lg:text-left card flex-shrink-0 w-full max-w-sm shadow-2xl border-y-4 border-white p-7">
          <h1 className="text-3xl font-bold text-neutral text-center">
            Employee Login
          </h1>
          <p className="py-6 text-center text-gray-500">
            Hello Employee, You Have To Login First. We Give All Of Our Employee
            An Employee ID Addreess And Password. Enter Your Employee ID And
            Password For Login.
          </p>
          <hr className="pb-4" />
          <div>
            <p className="text-center p-5 text-gray-500 font-bold">
              Are you Admin?{" "}
              <span>
                <Link to="/adminLogin" className="text-primary">Login here.</Link>
              </span>
              {/* <h2 className='text-white'> Admin Login</h2> */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeLogin;
