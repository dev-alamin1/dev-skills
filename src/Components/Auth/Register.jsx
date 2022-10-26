    import React, { useContext, useState } from 'react';
    import { AuthContext } from '../../Context/Authprovider';
    import toast from 'react-hot-toast';
    import { GoMarkGithub } from 'react-icons/go'
    import {ImGoogle3} from 'react-icons/im';
import { useNavigate } from 'react-router-dom';

    const Register = () => {
    /*
    |-------------------------------------------------------------------------
    | name, imgURL , email, password and confirm password validation start
    | ------------------------------------------------------------------------
    */

    const [userInfo,setUserInfo] = useState(
        {   
            name:"",
            imgUrl:"",
            email:"",
            password:""
         }
        );

    const [error,setError] = useState({
        nameError:"",
        imgUrlError: "",
        emailError:"",
        passwordError:"",
        passwordMatchError: "",
        generalError:""
    });
    
    /*
    |------------------------
    | User name Error handler
    | -----------------------
    */

    const nameHandler = (e)=>{
        const name = e.target.value;

        if(name === '')
        {
            setError({...error,nameError:"Name must not be empty "});
            setUserInfo({...userInfo,name:""});
        }
         else if(name.length<4)
        {
            setError({...error,nameError:"Please enter your name at lest 4 character  "});
            setUserInfo({...userInfo,name:""});
        }else{
            setError({...error,nameError:""});
            setUserInfo({...userInfo,name:name});
        }
    }

    /*
    |-----------------------
    | Imge url error handler 
    | ----------------------
    */

    const imgUrlHandler = (e)=>{
        const imgUrl = e.target.value;
        if(imgUrl === "")
        {
            setError({...error,imgUrlError:"Please provide a image link "});
            setUserInfo({...userInfo,imgUrl:""});
        }else{
            setError({...error,imgUrlError:""});
            setUserInfo({...userInfo,imgUrl:imgUrl});
        }
    }

    /*
    |-----------------------
    | Email error handler 
    | ----------------------
    */

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

        /*
    |--------------------------------
    | Confirm Password error hanlder
    | -------------------------------
    */

    const confirmPasswordHandler =(e)=>{
         const passord = userInfo.password;
         const confirmPassword = e.target.value;
         
         if(confirmPassword === ""){
            setError({...error,passwordMatchError:"Confirm password must not be empty "});
         }
         else if(!(passord === confirmPassword))
         {
            setError({...error,passwordMatchError:"Password does not match"});
            // setUserInfo({...userInfo,password:""})
         }else{
            setError({...error,passwordMatchError:""});
            setUserInfo({...userInfo,password:passord})
         }

        }

    /*
    |-------------------------------------------------------------------------
    | name, imgURL , email, password and confirm password validation End
    | ------------------------------------------------------------------------
    */

    // Auth data receive from AuthContext api [ Authprovide.js file ]
    const {
           registerWithGoogle,
           updateUserProfileNameAndImgUrl,
           registerWithGithub,registerWithEmailAndPassword
        } = useContext(AuthContext);  // context api
    
    const navigate = useNavigate();

    // 1. google provider login 

    const googleLoginHandler = ()=>{
        
        registerWithGoogle()
          .then(result=>{
                 toast.success("User Register Success ")
                 navigate('/home');
          })
          .catch(error=>{
              setError({...error,generalError:error.message});
          })

        //loginWithGoogle = singInWithPopUp ( which is firebase method)
        // loginWithGoogle return promise 
    }


    // 2. gihub register user create 

    const githubHandler = ()=>{
        
        registerWithGithub()
          .then(result=>{
                 toast.success("User Register Success ");
                 navigate('/home');
          })
          .catch(error=>{
              setError({...error,generalError:error.message});
          })

        // registerWithGithub = singInWithPopUp ( which is firebase method)
        // registerWithGithub return promise 
    }

    // 3. register/signup user with email and password
    const submitHandler = (e)=>{
        e.preventDefault();
        registerWithEmailAndPassword(userInfo.email,userInfo.password)
         .then(result=>{
             updateUserProfileNameAndImgUrl(userInfo.name,userInfo.imgUrl)
              .then(()=>{
                 toast.success("User Register Successfully ")
                 navigate('/home');
              })
              .catch(error=>{
                setError({...error,generalError:error.message})
              })
         })
         .catch(error=>{
            setError({...error,generalError:error.message})
         })
    }



    return (
        <div className='pb-14 '>
        <div className='flex justify-center border-red-300 px-10'>
           
           <div className='w-full md:w-6/12'>
              <div className="card-body md:w-[500px]  md:ml-48 shadow-lg">

                {/* login form start */}

                 <form onSubmit={submitHandler}>
                   <div className="form-control">
                       <label className="label">
                           <span className="label-text">Name</span>
                       </label>
                       <input type="text" onChange={nameHandler} name="name" placeholder="full name" className="input input-bordered" required/>
                       {error.nameError && 
                       <label className="label">
                                <p className="label-text-alt link text-red-400 link-hover">{error.nameError}</p>
                       </label>}
                   </div>

                   <div className="form-control">
                       <label className="label">
                           <span className="label-text">Image Url</span>
                       </label>
                       <input type="text" onChange={imgUrlHandler} name='imgUrl' placeholder="image url" className="input input-bordered" required />

                       {error.imgUrlError && 
                       <label className="label">
                                <p className="label-text-alt link text-red-400 link-hover">{error.imgUrlError}</p>
                       </label>}

                   </div>

                   <div className="form-control">
                       <label className="label">
                           <span className="label-text">Email</span>
                       </label>
                       <input onChange={emailHandler} type="text" name='email' placeholder="email" className="input input-bordered" required/>
                       {error.emailError && 
                       <label className="label">
                                <p className="label-text-alt link text-red-400 link-hover">{error.emailError}</p>
                       </label>}
                   </div>

                   <div className="form-control">
                       <label className="label">
                           <span className="label-text">Password</span>
                       </label>

                       <input type="password" onChange={passwordHandler} placeholder="password" name='password' className="input input-bordered" required />

                       {error.passwordError && 
                       <label className="label">
                                <p className="label-text-alt link text-red-400 link-hover">{error.passwordError}</p>
                       </label>}

                   </div>

                   <div className="form-control">
                       <label className="label">
                           <span className="label-text">Confirm Password</span>
                       </label>
                       <input type="password" onChange={confirmPasswordHandler} placeholder="confirm password" name='confirmPassword' className="input input-bordered"  required/>

                       
                       {error.passwordMatchError && 
                       <label className="label">
                                <p className="label-text-alt link text-red-400 link-hover">{error.passwordMatchError}</p>
                       </label>}

                       {error.generalError && 
                       <label className="label">
                                <p className="label-text-alt link text-red-400 font-bold link-hover">{error.generalError}</p>
                       </label>}

                   </div>

                   <div className="form-control mt-3 mb-2">
                       <button className="btn btn-primary">Register</button>
                   </div>
                   </form>
                    
                    {/* login form end */}

                    {/* Google and Github login start */}
                    <div className='flex gap-2'>

                         <div className='w-1/2 bg-slate-400 text-center rounded-md text-white hover:bg-slate-500'>
                         <button onClick={googleLoginHandler} className='py-2 flex items-center'> <p className='ml-4'>Sign Up with <span className='hidden md:inline-block'>Google</span></p> <ImGoogle3 className='ml-2'/> </button>
                         </div>

                         <div className='w-1/2  bg-slate-400 text-center rounded-md text-white hover:bg-slate-500'>
                             <button onClick={githubHandler} className='py-2 flex items-center'> <p className='ml-4'>Sign Up with <span className='hidden md:inline-block'>Github</span></p> <GoMarkGithub className='ml-2'/> </button>
                         </div>
                    </div>

               </div>
         </div>

         <div className='hidden  md:h-[500px] md:w-2/5 md:flex md:justify-start mt-16'>
                   <img src="register.png" alt="" className='h-full' />
           </div>
     </div>
  </div>
    );
};

export default Register;