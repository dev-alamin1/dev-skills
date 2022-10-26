import React, { useContext } from 'react';
import { CourseDataContext } from '../../Layout/Main';
import CourseList from './CourseList';

const CourseSideNav = () => {
    
    /*
    |-------------
    |  Get Couse side navbar data , from Course data context api .
    |  CourseDataContext api is locatde on layout -> Mains.js 
    */
    const {courses} = useContext(CourseDataContext); //context api
    
    return (
               // courses left side navbar 

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
    );
};

export default CourseSideNav;