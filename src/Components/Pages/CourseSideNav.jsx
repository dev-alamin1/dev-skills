import React, { useContext } from 'react';
import { CourseDataContext } from '../../Layout/Main';
import CourseList from './CourseList';
import { motion } from "framer-motion"

const CourseSideNav = () => {
    
    /*
    |-------------
    |  Get Couse side navbar data , from Course data context api .
    |  CourseDataContext api is locatde on layout -> Mains.js 
    */
    const {courses} = useContext(CourseDataContext); //context api
    
    return (
               // courses left side navbar 

                <motion.div whileHover={{scale:1.1}} className="card md:w-full  bg-white text-blue-500 shadow-xl">
                     <div className="card-body">
                       <div className='text-center'>
                          <h2 className="py-2 text-xl">
                            Courses Quick Links
                         </h2> 
                       </div>
                            <div className="card-actions justify-center md:justify-start">
                                <ul className=' w-full  mt-2 '>
                                    {
                                    courses.map(course=><CourseList key={course.id} course={course}/>)
                                    }
                             </ul>
                        </div>
                 </div>
           </motion.div>
    );
};

export default CourseSideNav;