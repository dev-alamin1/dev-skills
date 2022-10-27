import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { GoMarkGithub } from 'react-icons/go';
import { ImGoogle3 } from 'react-icons/im';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovider';

const Login = () => {

    // store location for redirect after login 
     const location = useLocation();
     const from = location.state?.from?.pathname || "/"

    // user login validation start
    const [userInfo,setUserInfo] = useState(
        {   
            email:"",
            password:""
         }
        );

    //store error 
    const [error,setError] = useState({
        emailError:"",
        passwordError:"",
        generalError:""
    });

    // email error handler 
    const emailHandler = (e)=>{
        const email = e.target.value;
        const regx = /^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/;

        if(email === '')
        {
           setError({...error,emailError:"Email must not be empty"});
           setUserInfo({...userInfo,email:""});
        }
        else if(!email.match(regx))
        {
           setError({...error,emailError:"Please provide a valid email "});
           setUserInfo({...userInfo,email:""});
        }else{
           setError({...error,emailError:""});
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

       if(password === "")
       {
           setError({...error, passwordError:"Password must not be empty "})
           setUserInfo({...userInfo, password:""});
       }
       else if(password.length <6 )
       {
           setError({...error, passwordError:"Password at lest 6 characters length "})
           setUserInfo({...userInfo, password:""});

       }else if(!capitalLetterError){

           setError({...error, passwordError:"Password at lest one capital letter "})
           setUserInfo({...userInfo, password:""});
       }
       else if(!specialCharacterError){

           setError({...error, passwordError:"Password at lest one special character "})
           setUserInfo({...userInfo, password:""});
       }else{
           setError({...error,passwordError:""});
           setUserInfo({...userInfo,password:password});
       }        
       }
    // user login validation end 


    // received user data from AuthContex api
    const {
        loginWithGoogle,
        loginWithGithub,loginWithEmailAndPassword
     } = useContext(AuthContext);  // context api
 
    const navigate = useNavigate();

   // 1. google provider login 

    const googleLoginHandler = ()=>{
     
    loginWithGoogle()
       .then(result=>{
              toast.success("User Register Success ")
              navigate(from,{replace:true});
       })
       .catch(error=>{
           setError({...error,generalError:error.message});
       })

     //loginWithGoogle = singInWithPopUp ( which is firebase method)
     // loginWithGoogle return promise 
    }


  // 2. gihub register user create 

  const githubHandler = ()=>{
     
    loginWithGithub()
       .then(result=>{
              toast.success("User Register Success ");
              navigate(from,{replace:true});
              
       })
       .catch(error=>{
           setError({...error,generalError:error.message});
       })

     // registerWithGithub = singInWithPopUp ( which is firebase method)
     // registerWithGithub return promise 
   }

   // 3. login user with email and password
    const submitHandler = (e)=>{
       e.preventDefault();
       loginWithEmailAndPassword(userInfo.email,userInfo.password)
         .then(resutl=>{
            toast('Logged In Success !', {
                icon: '🔐',
              });
              navigate(from,{replace:true});
         })
         .catch(error=>{
            setError({...error,generalError:error.message});
            console.log(error.message)
         })
    }


 


    return (
        <div className='py-5'>
             <div className='flex justify-center  md:py-10  border-red-300 px-10'>
                <div className=' hidden  md:h-[500px] md:w-2/5 md:flex md:justify-end'>
                        <img src="https://i.ibb.co/r4Xbgs0/login.png" alt="" className='h-full' />
                </div>

                <div className='w-full md:w-2/5'>
                   <div className="card-body md:w-[450px] mt-10">
                       <form onSubmit={submitHandler}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" onChange={emailHandler} name='email' placeholder="email" className="input input-bordered" required />
                            {error.emailError && 
                            <label className="label">
                                <p className="label-text-alt link text-red-400 font-bold link-hover">{error.emailError}</p>
                            </label>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <input type="password" onChange={passwordHandler} name='password' placeholder="password" className="input input-bordered" />
                           
                            {error.passwordError && 
                            <label className="label">
                                <p className="label-text-alt link text-red-400 font-bold link-hover">{error.passwordError}</p>
                            </label>}

                            {error.generalError && 
                            <label className="label">
                                        <p className="label-text-alt link text-red-400 font-bold link-hover">{error.generalError}</p>
                            </label>}

                            <label className="label">
                                <Link className="label-text-alt link link-hover">Forgot password?</Link>
                                <span><small>Don't have account ? <Link to={'/register'} className="text-red-500">Register</Link></small></span>
                                
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>

                    <div className='flex gap-1'>

                        <div className='w-1/2 bg-slate-400 text-center rounded-md text-white hover:bg-slate-500'>
                        <button onClick={googleLoginHandler} className='py-2 flex items-center'> <p className='ml-2 md:ml-4'>LogIn with <span className='hidden md:inline-block'>Google</span></p> <ImGoogle3 className='ml-2'/> </button>
                        </div>

                        <div className='w-1/2  bg-slate-400 text-center rounded-md text-white hover:bg-slate-500'>
                            <button onClick={githubHandler} className='py-2 flex items-center'> <p className='ml-2 md:ml-4'>LogIn with <span className='hidden md:inline-block'>Github</span></p> <GoMarkGithub className='ml-2'/> </button>
                        </div>
                        </div>
                    </div>
              </div>
          </div>
       </div>
    );
};

export default Login;