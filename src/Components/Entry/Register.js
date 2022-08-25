import React, { useEffect, useState } from "react";
import { auth } from "../../Firebase/firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading/Loading";
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import './Register.css'
const Register = () => {
  const [passwordIcon, setPasswordIcon] = useState(false);
  const toggleButton = () => {
    setPasswordIcon(prevPasswordIcon => !prevPasswordIcon)
  }
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    document.getElementById("footer").style.display = "none";
  });
  const [createUserWithEmailAndPassword, admin, adminLoading, adminError] = useCreateUserWithEmailAndPassword(auth);
  const handleRegister = async () => {
    if (!/\S+@\S+\.\S+/.test(email)) {
      return toast.error("please enter a valid email address");
    }
    if (password <= 7) {
      return toast.error("password must be 8 characters or longer");
    }
    await createUserWithEmailAndPassword(email, password);
    fetch("https://warm-dawn-94442.herokuapp.com/new-admin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          navigate("/home");
        }
      });
  };
  if (adminError) {
    return toast.error(`${adminError.message}`);
  }
  if (adminLoading) {
    return <Loading />
  }
  if (admin) {
    navigate('/innerHome')
  }



  return (
    <div data-aos="zoom-in" 
    data-aos-easing="linear"
    data-aos-duration="2000"
    className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse  w-[80%] rounded-xl p-10">
        <div className="card flex-shrink-0 w-full max-w-lg   shadow-2xl bg-base-100 border-y-4 border-primary">
          <div className="card-body">
            <div className="form-control">
              <h1 className="text-4xl font-bold text-black">Register</h1>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="flex">
                <input onChange={(e) => setPassword(e.target.value)} type={passwordIcon ? 'text' : 'password'} placeholder="password" className="input input-bordered w-full" />
                <button className="btn-icon" onClick={toggleButton}>
                  {passwordIcon ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </button>
              </div>
              <label className="label">
                <p className="label-text-alt link link-hover">Forgot password?</p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button onClick={handleRegister} className="btn bg-primary text-white border-0 ">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;