import React from 'react';
import {AiFillStar} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const CourseCard = (props) => {
    const {id,courseName,totalClass,ratings,instructor} = props.course;
    return (
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
                                    <Link className='font-bold'><button className='btn btn-primary w-full'>Details</button></Link>
                               </div>
                          </div>
         </div>
    );
};

export default CourseCard;