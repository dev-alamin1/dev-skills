import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='py-14'>
        <div className='flex justify-center border-red-300 px-10'>
           
           <div className='w-full md:w-2/5'>
              <div className="card-body md:w-96  md:ml-40">
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
                       <input type="text" placeholder="email" className="input input-bordered" />
                   </div>

                   <div className="form-control">
                       <label className="label">
                           <span className="label-text">Password</span>
                       </label>

                       <input type="text" placeholder="password" className="input input-bordered" />
                   </div>

                   <div className="form-control mt-6">
                       <button className="btn btn-primary">Register</button>
                   </div>
                   </form>
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