import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/Authprovider';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const loaction  = useLocation();

    if(loading)
    {
        return <progress className="progress w-full"></progress>
    }

    if(user)
    {
        return children;
    }

    return <Navigate to={'/login'} state={{from:loaction}} replace></Navigate>
    
};

export default PrivateRoute;