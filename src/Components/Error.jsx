import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div >
           <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/2jJqDxR/oops-icegif-2.gif")` }}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                  <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">Oooppps ! something went wrong .. </h1>
                   <Link to={'/'}><button className="btn btn-primary"> Back To  Homepage </button></Link>
                  </div>
              </div>
              </div>
        </div>

    );
};

export default Error;