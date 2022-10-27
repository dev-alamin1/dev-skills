import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Link, useLoaderData } from 'react-router-dom';
import CourseSideNav from './CourseSideNav';
import {GiTeacher} from 'react-icons/gi'
import {AiOutlineDownload} from 'react-icons/ai'




const CourseDetails = () => {

     const course = useLoaderData();
     const {courseName,id,instructor,
           ratings,totalClass,
           img,whatWillLearn,courseInfo
          } = course;
        

    return (
        <div className='py-20 bg-green-200 h-[1200px]'>
             <h2 className='font-[Poppins] text-center md:text-3xl font-extrabold'> {courseName} <span><div className="badge badge-secondary p-2">Download Info <AiOutlineDownload/></div></span></h2>
              <div className='px-10 md:px-20 flex flex-col md:flex-row gap-20 mt-10'>

                  <div className="flex-none md:w-3/12 mb-36">
                    <div className='sticky top-28 h-[340px] '>

                        {/* Course sidenavbar  */}
                         <CourseSideNav></CourseSideNav>

                    </div>
                 </div>

                 <div className="grow">
                     <div className='flex justify-center'>
                        {/* single Course details card  */}

                         <div className="card md:w-[600px] bg-base-100 shadow-xl">
                           <img src={img} alt="course" className='w-full h-96'  />
                           
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

                                    <div>
                                        <p><strong>What you will learn ?</strong></p>
                                        {
                                            whatWillLearn.map((topic,index)=><li key={index}>{topic}</li>)
                                        }
                                    </div>

                                 <div className="card-actions">
                                  <div className="badge badge-outline text-primary">Totla Lecture : <span className="badge badge-secondary ml-1"> {totalClass}</span> </div> 
                                        <div className="badge badge-outline"><AiFillStar className='mr-1 text-yellow-300'/> {ratings}</div>
                                </div>

                                <div className='flex justify-end'>
                                    <Link to={`/checkout/course/${id}`}><button className='btn btn-primary'>Get Premium Access</button></Link>
                                </div>
                                  
                             </div>
                         </div>

                     </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;