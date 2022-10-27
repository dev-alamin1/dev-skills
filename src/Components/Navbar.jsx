import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Context/Authprovider';

const Navbar = () => {

    // Receive auth releted info from AuthContext api [from Authproder component]
    const {user,logout} = useContext(AuthContext); // context api

    const loguoutHandler = ()=>{
         logout()
         .then(()=>{
            toast('Logged Out Success !', {
                icon: '🔓',
              });
         }).catch()
    }


    return (
        <div className=''>
             <div className="navbar bg-base-100 px-5 md:px-20 ">
                    {/* 
                    |------------------------------
                    | Navbar Start (Left Side)
                    |-----------------------------
                    */}
                    <div className="navbar-start ">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></label>
                             <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-auto">
                                <li><Link to={'/'}>Home</Link></li>
                                <li><Link to={'/'}>Courses</Link></li>
                                <li><Link to={'/blog'}>Blog</Link></li>
                                <li><Link to={'/faq'}>FaQ</Link></li>
                                {user?.uid ?   <li><Link onClick={loguoutHandler}>Logout</Link></li>
                                  : <>
                                         <li><Link to={'/login'}>Login</Link></li>
                                         <li><Link to={'/register'}>Register</Link></li>
                                    </>
                                
                                }
  
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
                                <li><Link to={'/'}>Home</Link></li>
                                <li><Link to={'/courses'}>Courses</Link></li>
                                <li><Link to={'/blog'}>Blog</Link></li>
                                <li><Link to={'/faq'}>FaQ</Link></li> 

                                {user?.uid ?   <li><Link onClick={loguoutHandler}>Logout</Link></li>
                                  : <>
                                         <li><Link to={'/login'}>Login</Link></li>
                                         <li><Link to={'/register'}>Register</Link></li>
                                    </>
                                
                               }

                                
                               
                       </ul>
                </div>

                {/* 
                |------------------------------------------
                | Navbar End (Profile And Profile Dropdown)
                |------------------------------------------
                */}

                {user?.uid && 
                
                <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar tooltip tooltip-left" data-tip={user.displayName ? user.displayName :" Name not Available"}>
                     {user?.photoURL && 
                        <div className="w-full rounded-full " >
                           <img src={user.photoURL} alt=''  />
                     </div>
                     }
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                       <Link className="justify-between"> Profile<span className="badge">New</span></Link>
                    </li>
                    <li><Link onClick={loguoutHandler}>Logout</Link></li>
                  </ul>
               </div>
                }
                

             </div>
             
        </div>
    );
};

export default Navbar;