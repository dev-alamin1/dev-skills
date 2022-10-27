import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
             <div className='flex flex-col-reverse md:flex-row gap-2 md:items-center  px-10 md:px-20 py-14'>

                 <div className='md:w-6/12'>
                        <h2 className='font-[Poppins] md:text-6xl font-extrabold'>Learning Coding is <br/> Easier !</h2>
                         <div className='mt-5 font-[Poppins]'>
                            <p>Coding is basically the computer language used to develop apps, websites, and software. Without it, we’d have none of the most popular technology we’ve come to rely on such as Facebook, our smartphones, the browser we choose to view our favorite blogs, or even the blogs themselves. It all runs on code.</p>
                         </div>

                         <Link to={'/courses'}><button className='bg-[#ef3541] font-bold text-white px-3 py-2 mt-5 hover:bg'>Enroll Course</button></Link>
                   </div>

                 <div className='md:w-6/12'>
                        <img src="https://i.ibb.co/X2pF5Ym/focus-animation.gif" alt="" />
                 </div>
             </div>



             <div className='md:flex justify-around md:mt-5 gap-2 px-10 md:px-0'>
                   
                    <div className='md:w-2/5 flex justify-center '>
                         <img src="https://i.ibb.co/jGgmYWN/code-2.jpg" alt="" className='' />
                    </div>

                    <div className=' md:w-2/5  flex items-center justify-center'>
                        <div className='mb-10 md:mb-0'>
                            <h2 className='font-[Poppins] md:text-4xl  font-extrabold mt-5 mb-5'>Learn New Skills to go <br /> ahead for Your Career</h2>
                            <h4 className='mb-2 font-bold'>We can support student forum 24/7 for all students.</h4>

                            <p className='mb-4'>Become part of the digital industry with courses in Web Development and Online Marketing. No experience required. Learn everything from scratch in an intensive program</p>

                            <h2 className='font-bold'>A place where you can achieve</h2>

                            <p className='mb-4'>Education encompasses both the teaching and learning of knowledge, proper conduct, and technical competency.</p>

                            <Link to={'/courses'}><button className='bg-[#ef3541] font-bold text-white px-3 py-2 mt-4 hover:bg'>View Course</button></Link>
                        </div>
                    </div>
             </div>
        </div>
    );
};

export default Home;