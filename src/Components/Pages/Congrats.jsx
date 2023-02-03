import React from 'react';
import { Link } from 'react-router-dom';


const Congrats = (props) => {
    const {name} = props.userInfo;
    return (
        <div className="hero h-[100vh]" style={{ backgroundImage: `url("https://i.ibb.co/rbsr8J0/celebration-gif-19.gif")`,backgroundSize:"auto" }}>
           <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold"> Congrats {name} !</h1>
            <p className="mb-5">
               Thank you for enrolling in the course.We are waiting for your success
            </p>
               <Link to='/courses'><button className="btn btn-primary">See Other Course</button></Link>
            </div>
        </div>
     </div>
    );
};

export default Congrats;