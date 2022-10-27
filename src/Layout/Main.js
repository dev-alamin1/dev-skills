import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
export const CourseDataContext = createContext();

const Main = () => {
    
    const courses = useLoaderData();
    return (
        <div>
            {/* 
            |----------------------------------------
            | Shared Component are Navbar and Footer 
            |----------------------------------------
            */}

            <Navbar />

            {/* Course data will pass all componets under outlet  */}
             <CourseDataContext.Provider value={{courses}}>
                <Outlet/>
             </CourseDataContext.Provider>

            <Footer/>
        </div>
    );
};

export default Main;