import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Link, useLoaderData } from 'react-router-dom';
import CourseSideNav from './CourseSideNav';


const CourseDetails = () => {

     const course = useLoaderData();
     const {courseName,id,instructor,ratings,totalClass} = course;

    return (
        <div className='py-10 bg-green-200'>
           <h2 className='text-center text-2xl mt-5'>Courses</h2>
              <div className='px-10 md:px-20 flex flex-col md:flex-row gap-10 mt-10'>

                  <div className="flex-none md:w-1/4 mb-36">
                    <div className='sticky top-28 h-[340px] '>

                        {/* Course sidenavbar  */}
                         <CourseSideNav></CourseSideNav>

                    </div>
                 </div>

                 <div className="grow">
                    <div>

                        {/* single Course details card  */}

                        <div className="card md:w-full bg-base-100 shadow-xl">
                           <img src="https://placeimg.com/400/225/arch" alt="Shoes" className='w-full' />
                           
                              <div className="card-body">
                                <div className='bg-pink-400 w-60 round py-1'>
                                    <h2 className="text-center text-white border border-white font-bold">
                                            {courseName}
                                    </h2>
                                </div>
                             <p>Instructor : {instructor}</p>

                              <div className="card-actions">
                                  <div className="badge badge-outline">Totla Class : {totalClass}</div> 
                                        <div className="badge badge-outline"><AiFillStar className='mr-1 text-yellow-300'/> {ratings}</div>
                                    </div>
                                  <div className='text-center w-full mt-2 py-1'>
                                        <Link className='font-bold' to={`/course/${id}`}><button className='btn btn-primary w-full'>Details</button></Link>
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