import React, { useState } from 'react';
import { useLoaderData} from 'react-router-dom';
import { GiTeacher } from 'react-icons/gi';
import { AiFillStar } from 'react-icons/ai';
import Congrats from './Congrats'

const Checkout = () =>{

    
    const course = useLoaderData();
    const {courseName,id,instructor,
          ratings,totalClass,
          img,whatWillLearn,courseInfo
         } = course;
    const [checkoutCourse,setCheckoutCourse] = useState(false)

    /*
    |------------------------------------------------
    | name,  email, validation start
    | -----------------------------------------------
    */

    const [userInfo,setUserInfo] = useState(
        {   
            name:"",
            email:"",
         }
        );

    const [error,setError] = useState({
        nameError:"",
        emailError:"",
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
    |--------------------------
    | validation End
    | --------------------------
    */


    const submitHandler = (e)=>{
        e.preventDefault();
        setCheckoutCourse(true)
    }



    return (



        <div className='pb-14 '>
          {
            checkoutCourse ? <Congrats userInfo={userInfo}/>
            :

            <div className='flex flex-col-reverse md:flex-row justify-center border-red-300 px-10'>
           
            <div className='w-full md:w-6/12 mt-16'>
                <div className="card-body md:w-[500px]  md:ml-40 shadow-lg">
 
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
                            <span className="label-text">Your Comment</span>
                        </label>
 
                        <textarea className="textarea textarea-success"></textarea>
                        
                    </div>
 
 
                    <div className="form-control mt-3 mb-2">
                        <button className="btn btn-primary">CheckOut</button>
                    </div>
                    </form>
                     
                     {/* login form end */}
 
                </div>
          </div>
 
          <div className='md:h-[500px] md:w-2/5 md:flex md:justify-start mt-16 mb-5'>
                <div className="card md:w-3/4 bg-base-100 shadow-xl">
                            <img src={img} alt="course" className='w-full h-52'  />
                            
                               <div className="card-body">
                                 <div className='bg-pink-400  round py-1'>
                                     <h2 className="text-center  text-white border border-white font-bold py-2">
                                             {courseName}
                                     </h2>
                                 </div>
 
                                     <div className='flex items-center gap-2'>
                                        <GiTeacher className='text-2xl'/>
                                        <p className='text-2xl'><strong>Instructor : <span className='text-orange-300'>{instructor}</span></strong></p>
                                     </div>
                                     
                                     <div>
                                         <p>{courseInfo}</p>
                                     </div>
 
                                     
 
                                  <div className="card-actions">
                                   <div className="badge badge-outline text-primary">Totla Lecture : <span className="badge badge-secondary ml-1"> {totalClass}</span> </div> 
                                         <div className="badge badge-outline"><AiFillStar className='mr-1 text-yellow-300'/> {ratings}</div>
                                 </div>
 
             
                                   
                              </div>
                          </div>
                 </div>
            </div>
          }
    </div>


    
    );
};

export default Checkout;