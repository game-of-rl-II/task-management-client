import React, { useEffect, useState } from "react";
import useMember from "../hooks/useMember";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import "./Register.css";
const EmployeeLogin = () => {
  const [passwordIcon, setPasswordIcon] = useState(false);
  const toggleButton = () => {
    setPasswordIcon((prevPasswordIcon) => !prevPasswordIcon);
  };
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    document.getElementById("footer").style.display = "none";
  });

  const handleLogin = () => {
    if (id) {
      fetch(`https://warm-dawn-94442.herokuapp.com/member-login/${id}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data._id) {
            if (data.password === password) {
              localStorage.setItem("member", JSON.stringify(data));
              navigate("/dashboard");
              toast.success('Member Successfully logged In')
            } else {
              toast.error("password did not match");
            }
          } else {
            toast.error("user not found");
          }
        });
    }
  };

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
                Member Login
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
              <div className="flex">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type={passwordIcon ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered w-full"
                />
                <button className="btn-icon" onClick={toggleButton}>
                  {passwordIcon ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </button>
              </div>
              <label className="label">
                <p className="label-text-alt link link-hover">
                  Forgot password?
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button
                onClick={handleLogin}
                className="btn btn-primary modal-button mb-5 text-white"
              >
                Login
              </button>
            </div>
          </div>
        </div>
        <div className="text-center lg:text-left card flex-shrink-0 w-full max-w-sm shadow-2xl border-y-4 border-primary p-7">
          <h1 className="text-3xl font-bold text-neutral text-center">
            Member Login
          </h1>
          <p className="py-6 text-center text-gray-500">
            Hello Member!, It is time to login and work with your team. Your
            team leader provided a member ID and Password. Use them for Login.
          </p>
          <hr className="pb-4" />
          <div>
            <p className="text-center p-5 text-gray-500 font-bold">
              Are you an admin?{" "}
              <span>
                <Link to="/adminLogin" className="text-primary">
                  Login here.
                </Link>
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
