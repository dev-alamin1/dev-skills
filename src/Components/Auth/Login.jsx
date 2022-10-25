import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='py-5'>
             <div className='flex justify-center  md:py-10  border-red-300 px-10'>
                <div className=' hidden  md:h-[500px] md:w-2/5 md:flex md:justify-end'>
                        <img src="login.png" alt="" className='h-full' />
                </div>

                <div className='w-full md:w-2/5'>
                   <div className="card-body md:w-96 mt-10">
                       <form>
                        <div className="form-control">
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
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    </div>
              </div>
          </div>
       </div>
    );
};

export default Login;