 import React, { createContext, useState } from 'react';
 // import from firebase 
 import {
         getAuth,signInWithPopup,GoogleAuthProvider,
 } from 'firebase/auth'

 import app from '../Firebase/Frirsebase.config';

 // main auth file for firbase authentication
 const auth = getAuth(app);

 // create AuthContext Api for share user information

 export const AuthContext = createContext({});

 const Authprovider = ({children}) => {
 const [user,setUser] = useState({});
    
//1.singIn with google provieder 
 const googleProvider = new GoogleAuthProvider();
 const loginWithGoogle = ()=>{
    return signInWithPopup(auth,googleProvider);
 }
    

 const authInfo = {user,loginWithGoogle};
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