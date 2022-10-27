import React from 'react';
import { Link } from 'react-router-dom';

const Faq = () => {
    return (
        <div>
              <div className='mt-10 mb-50'>
                 <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.pinimg.com/originals/5c/5d/66/5c5d6684644136c4b1442f1db30af6bf.gif")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Coming Soon </h1>
                         <Link to={'/'}><button className="btn btn-primary"> Back To  Homepage </button></Link>
                        </div>
                    </div>
                    </div>
              </div>
        </div>
    );
};

export default Faq;