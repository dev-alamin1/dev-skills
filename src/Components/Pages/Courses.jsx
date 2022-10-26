import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from './CourseCard';
import CourseList from './CourseList';

const Courses = () => {
        const courses = useLoaderData();
        console.log(courses," from course page")
    return (
        <div className='py-10 bg-green-200'>
            <h2 className='text-center text-2xl mt-5'>Courses</h2>
            <div className='px-10 md:px-20 flex flex-col md:flex-row gap-10 mt-10'>

             <div className="flex-none md:w-1/4 mb-36">
                    <div className='sticky top-28 h-[340px] '>

                       <div className="card md:w-full  bg-base-100 shadow-xl">

                            <div className="card-body">
                                <h2 className="card-title bg-pink-400  text-white py-2">
                                      Courses Quick Links
                                </h2>
                             
                                <div className="card-actions justify-center md:justify-start">
                                      <ul className='divide-y w-full divide-double mt-2 '>
                                      {
                                        courses.map(course=><CourseList key={course.id} course={course}/>)
                                       }
                                      </ul>
                                </div>
                        </div>
                        </div>

                    </div>
               </div>

                 

                <div className="grow">
                     <div className='grid md:grid-cols-3 gap-5'>
                        {
                        courses.map(course=><CourseCard key={course.id} course={course}/>)
                        }
                     </div>
                     
                </div>

            </div>
        </div>
    );
};

export default Courses;