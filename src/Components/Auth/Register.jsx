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
    | Email error handler 
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

     /*
    |-----------------------
    | Password error hanlder
    | ----------------------
    */

    const passwordHandler = (e)=>{
        const password = e.target.value;
        const capitalLetterError = /(?=.*[A-Z])/.test(password);
        const specialCharacterError = /(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_])/.test(password);

        if(password.length <6 )
        {
            setError({...error, password:"Password at lest 6 characters length "})
            setUserInfo({...userInfo, password:""});

        }else if(!capitalLetterError){

            setError({...error, password:"Password at lest one capital letter "})
            setUserInfo({...userInfo, password:""});
        }
        else if(!specialCharacterError){

            setError({...error, password:"Password at lest one special character "})
            setUserInfo({...userInfo, password:""});
        }else{
            setError({...error,password:""});
            setUserInfo({...userInfo,password:password});
        }        
        }

        /*
    |--------------------------------
    | Confirm Password error hanlder
    | -------------------------------
    */

    const confirmPasswordHandler =(e)=>{
         const passord = userInfo.password;
         const confirmPassword = e.target.value;
         
         if(!(passord === confirmPassword))
         {
            setError({...error,passwordMatch:"Password does not match"});
            // setUserInfo({...userInfo,password:""})
         }else{
            setError({...error,passwordMatch:""});
            setUserInfo({...userInfo,password:passord})
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
                       <input type="text" onChange={nameHandler} name="name" placeholder="your full name" className="input input-bordered" />
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

                       <input type="password" onChange={passwordHandler} placeholder="password" name='password' className="input input-bordered" />

                       {error.password && 
                       <label className="label">
                                <p className="label-text-alt link text-red-400 link-hover">{error.password}</p>
                       </label>}

                   </div>

                   <div className="form-control">
                       <label className="label">
                           <span className="label-text">Confirm Password</span>
                       </label>
                       <input type="password" onChange={confirmPasswordHandler} placeholder="confirm password" name='confirmPassword' className="input input-bordered" />

                       
                       {error.passwordMatch && 
                       <label className="label">
                                <p className="label-text-alt link text-red-400 link-hover">{error.passwordMatch}</p>
                       </label>}

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