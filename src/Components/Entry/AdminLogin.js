import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom'
import { auth } from '../../Firebase/firebase.init';
const AdminLogin = () => {
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
            return alert('please enter a valid email address')
        }
        if (password <= 7) {
            return alert('password must be 8 characters or longer')
        }
        signInWithEmailAndPassword(email, password)


    }
    if (adminError) {
        return alert(`${adminError.message}`)
    }
    if (adminLoading) {
        return <p>Loading...</p>
    }
    if (admin) {
        navigate('/dashboard')
    }

    return (

        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse bg-gradient-to-t from-pink-500 to-orange-400 w-full rounded-xl p-10">
                <div className="hero min-h-screen">
                    <div style={{ scrollBehavior: "smooth" }} className="hero-content flex-col lg:flex-row-reverse bg-gradient-to-t from-pink-500 to-orange-400 w-full rounded-xl p-10">
                        <div className="text-center lg:text-left card flex-shrink-0 w-full max-w-sm shadow-2xl border-y-4 border-white p-7">
                            <h1 className="text-4xl font-bold text-black text-center">Admin Login</h1>
                            <p className="py-6 text-center">Hello Admin, Login For Manage All Employee. If You Are An Admin We Give You An Login ID And Password. Enter Your Admin ID And Password For Login.</p>
                            <hr className='pb-4' />
                            <div>
                                <p className='text-center p-5'>
                                    Are you Employee? Login here.
                                    <h2 className='text-white'> Employee Login</h2>
                                </p>
                            </div>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-y-4 border-indigo-500">
                            <div className="card-body">
                                <div className="form-control">
                                    <h1 className="text-4xl font-bold text-black">Admin Login</h1>
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                    onChange={e=>setEmail(e.target.value)} type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input onChange={e=>setPassword(e.target.value)} type="text" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button onClick={handleRegister} className="btn bg-gradient-to-r from-pink-400 to-orange-500 border-0 ">Login</button>
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