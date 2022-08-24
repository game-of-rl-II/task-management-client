import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast } from "react-toastify";
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../Firebase/firebase.init';
import Loading from '../Shared/Loading/Loading';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import './Register.css'
const AdminLogin = () => {
  const [passwordIcon , setPasswordIcon] = useState(false);
  const toggleButton = () => {
    setPasswordIcon(prevPasswordIcon => !prevPasswordIcon)
  }
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    useEffect(() => {
        document.getElementById("footer").style.display = "none"
    })
    const [
        signInWithEmailAndPassword,
        admin,
        adminLoading,
        adminError,
    ] = useSignInWithEmailAndPassword(auth);
    const handleRegister = () => {
        if (!(/\S+@\S+\.\S+/.test(email))) {
            return toast.error('please enter a valid email address')
        }
        if (password <= 7) {
            return toast.error('password must be 8 characters or longer')
        }
        signInWithEmailAndPassword(email, password)


    }
    if (adminError) {
        return toast.error(`${adminError.message}`)
    }
    if (adminLoading) {
        return <Loading/>
    }
    if (admin) {
        navigate('/innerHome')
    }

    return (
      <div className="hero min-h-screen bg-lime-50">
        <div>
          <div className="hero min-h-screen">
            <div
              style={{ scrollBehavior: "smooth" }}
              className="hero-content flex-col lg:flex-row-reverse w-full rounded-xl p-10"
            >
              <div className="text-center lg:text-left card flex-shrink-0 w-full max-w-sm shadow-2xl border-y-4 border-primary p-7">
                <h1 className="text-3xl font-bold text-neutral text-center">
                  Admin Login
                </h1>
                <p className="py-6 text-center text-gray-500">
                  Hello Admin, Login For Manage All Employee. If You Are An
                  Admin We Give You An Login ID And Password. Enter Your Admin
                  ID And Password For Login.
                </p>
                <hr className="pb-4" />
                <div>
                  <p className="text-center p-5 text-gray-500 font-bold">
                    Are you Employee?{" "}
                    <span>
                      <Link to="/employeeLogin" className="text-primary">
                        Login here.
                      </Link>
                    </span>
                    <h2 className="text-white"> Employee Login</h2>
                  </p>
                </div>
              </div>
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-y-4 border-primary">
                <div className="card-body">
                  <div className="form-control">
                    <h1 className="text-3xl font-bold text-neutral">
                      Admin Login
                    </h1>
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="email"
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
                        {passwordIcon ? (
                          <AiOutlineEyeInvisible />
                        ) : (
                          <AiOutlineEye />
                        )}
                      </button>
                    </div>
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button
                      onClick={handleRegister}
                      className="btn btn-primary modal-button mb-5 text-white"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AdminLogin;