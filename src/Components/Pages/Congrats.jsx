import React from 'react';
import { Link } from 'react-router-dom';

const Congrats = (props) => {
    const {name} = props.userInfo;
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://www.gifcen.com/wp-content/uploads/2021/05/celebration-gif-19.gif")` }}>
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