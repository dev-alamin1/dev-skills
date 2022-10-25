import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
             <div className="navbar bg-base-100 px-5 md:px-20">
                    {/* 
                    |------------------------------
                    | Navbar Start (Left Side)
                    |-----------------------------
                    */}
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></label>
                             <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-auto">
                                <li><Link>Home</Link></li>
                                <li><Link>Courses</Link></li>
                                <li><Link>Blog</Link></li>
                                <li><Link>FaQ</Link></li>
                                <li><Link>Login</Link></li>
                                <li><Link>Register</Link></li>
                                <li><Link>Logout</Link></li>
                             </ul>
                       </div>
                     <div className='hidden md:flex items-center gap-1'>
                         <Link to="/" ><img src="dev-logo.png" alt="" className='w-16 h-10'/></Link>
                         <Link to="/" className="text-2xl font-bold text-orange-400 font-[Poppins]">Skill</Link>
                    </div>
               </div>
 

                {/* 
                |------------------------------
                | Navbar Center 
                |-----------------------------
                */}

               <div className="navbar-center">
                   <div className='flex items-center gap-1 md:hidden ml-10'>
                         <Link to="/" ><img src="dev-logo.png" alt="" className='w-16 h-10'/></Link>
                         <Link to="/" className="text-2xl font-bold text-orange-400">Skill</Link>
                    </div>
                </div>

                {/* 
                |------------------------------
                | Navbar End (Right Side)
                |-----------------------------
                */}

                <div className="navbar-end mr-4">
                        <ul className="menu menu-horizontal px-2 hidden md:flex">
                                <li><NavLink to={'/home'}>Home</NavLink></li>
                                <li><NavLink to={'/courses'}>Courses</NavLink></li>
                                <li><NavLink to={'/blog'}>Blog</NavLink></li>
                                <li><NavLink to={'/faq'}>FaQ</NavLink></li> 
                                <li><NavLink to={'/login'}>Login</NavLink></li>
                                <li><NavLink to={'/register'}>Register</NavLink></li>
                                <li><NavLink to={'/logout'}>Logout</NavLink></li>
                       </ul>
                </div>

                {/* 
                |------------------------------------------
                | Navbar End (Profile And Profile Dropdown)
                |------------------------------------------
                */}

                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" alt='' />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                           <Link className="justify-between"> Profile<span className="badge">New</span></Link>
                        </li>
                        <li><Link>Logout</Link></li>
                    </ul>
                </div>

             </div>
        </div>
    );
};

export default Navbar;