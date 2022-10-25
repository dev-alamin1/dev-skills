 import React, { createContext, useState } from 'react';
 // import from firebase 
 import {
         getAuth,signInWithPopup
 } from 'firebase/auth'

 import app from '../Firebase/Frirsebase.config';

 // main auth file for firbase authentication
 const auth = getAuth(app);

 // create AuthContext Api for share user information

 export const AuthContext = createContext({});

 const Authprovider = ({children}) => {
    const [user,setUser] = useState({name:"Al-amin Mondal"});

    const authInfo = {user};
    return (
        <AuthContext.Provider value={authInfo}>

            {
            /* ekhane children = <App/> component, 
            * app component ke, Authprovider Component er vitore use
            * kora hoyece index.js file theke  
            */
            }
            {children}
        </AuthContext.Provider>
    );
 };

export default Authprovider;