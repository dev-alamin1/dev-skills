import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Main = () => {
    return (
        <div>
            {/* 
            |----------------------------------------
            | Shared Component are Navbar and Footer 
            |----------------------------------------
            */}

            <Navbar />
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;