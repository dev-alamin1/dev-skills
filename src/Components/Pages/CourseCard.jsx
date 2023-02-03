import React from 'react';
import {AiFillStar} from 'react-icons/ai'
import { GiTeacher } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"

const CourseCard = (props) => {
    const {id,courseName,totalClass,ratings,instructor,thumbNail} = props.course;
    return (
        <motion.div  whileHover={{ scale: 1.1 }} className="card md:w-full bg-white shadow-xl ">

                     <img src={thumbNail? thumbNail :''} alt="course" className='w-full h-44' />

                            <div className="card-body text-gray-800">
                                <div className=' rounded py-1'>
                                    <h2 className="text-center border border-fuchsia-400 rounded font-bold">
                                        {courseName}
                                    </h2>
                                </div>
                                <div className='flex items-center gap-2'>
                                       <GiTeacher className='text-2xl'/>
                                       <p><strong>Instructor : <span>{instructor}</span></strong></p>
                                    </div>
                                 <div className="card-actions">
                                 <div className="badge badge-outline text-primary">Totla Lecture : <span className="badge badge-secondary ml-2"> {totalClass}</span> </div> 
                                    <div className="badge badge-outline"><AiFillStar className='mr-1 text-yellow-300'/> {ratings}</div>
                                </div>
                               <div className='text-center w-full mt-2 py-1'>
                                    <Link className='font-bold' to={`/course/${id}`}><button className='btn btn-primary w-full'>Details</button></Link>
                               </div>
                          </div>
         </motion.div>
    );
};

export default CourseCard;