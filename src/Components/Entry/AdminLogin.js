import React from 'react';

const AdminLogin = () => {
    return (

        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse bg-gradient-to-t from-pink-500 to-orange-400 w-full rounded-xl p-10">
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
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;