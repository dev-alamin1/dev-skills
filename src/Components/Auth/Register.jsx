import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    /*
    |-------------------------------------------------------------------------
    | email, password and confirm password validation when user try to register
    | -------------------------------------------------------------------------
    */

    const [userInfo,setUserInfo] = useState(
        {   
            name:"",
            imgeUrl:"",
            email:"",
            password:""
         }
        );

    const [error,setError] = useState({
        email:"",
        password:"",
        passwordMatch: "",
        generalError:""
    });

    /*
    |-----------------------
    | email handler 
    | ----------------------
    */

    const emailHandler = (e)=>{
         const email = e.target.value;
         const regx = /^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/;

         if(!email.match(regx))
         {
            setError({...error,email:"Please provide a valid email "});
            setUserInfo({...userInfo,email:""});
         }else{
            setError({...error,email:""});
            setUserInfo({...userInfo,email:email});
         }
    }



    return (
        <div className='py-14'>
        <div className='flex justify-center border-red-300 px-10'>
           
           <div className='w-full md:w-2/5'>
              <div className="card-body md:w-96  md:ml-40">

                {/* login form start */}

                 <form className=''>
                   <div className="form-control">
                       <label className="label">
                           <span className="label-text">Name</span>
                       </label>
                       <input type="text" placeholder="your full name" className="input input-bordered" />
                   </div>

                   <div className="form-control">
                       <label className="label">
                           <span className="label-text">Image Url</span>
                       </label>
                       <input type="text" placeholder="image url" className="input input-bordered" />
                   </div>

                   <div className="form-control">
                       <label className="label">
                           <span className="label-text">Email</span>
                       </label>
                       <input onChange={emailHandler} type="text" name='email' placeholder="email" className="input input-bordered" />
                       {error.email && 
                       <label className="label">
                                <p className="label-text-alt link text-red-400 link-hover">{error.email}</p>
                       </label>}
                   </div>

                   <div className="form-control">
                       <label className="label">
                           <span className="label-text">Password</span>
                       </label>

                       <input type="text" placeholder="password" className="input input-bordered" />
                   </div>

                   <div className="form-control mt-3 mb-2">
                       <button className="btn btn-primary">Register</button>
                   </div>
                   </form>
                    
                    {/* login form end */}

                    {/* Google and Github login start */}
                    <div className='flex gap-2'>

                         <div className='w-1/2  text-center'>
                             <button className='py-2'>Google Login</button>
                         </div>

                         <div className='w-1/2  text-center'>
                             <button className='py-2'>Github Login</button>
                         </div>
                    </div>

               </div>
         </div>

         <div className=' hidden  md:h-[500px] md:w-2/5 md:flex md:justify-start'>
                   <img src="register.png" alt="" className='h-full' />
           </div>
     </div>
  </div>
    );
};

export default Register;