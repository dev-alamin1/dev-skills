 import React, { createContext, useState } from 'react';
 // import from firebase 
 import {
         getAuth,signInWithPopup,GoogleAuthProvider,
         updateProfile,GithubAuthProvider
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
 const registerWithGoogle = ()=>{
    return signInWithPopup(auth,googleProvider);
 }

 //2. register with Github 
 const githubProvider = new GithubAuthProvider();

 const registerWithGithub = ()=>
 {
    return signInWithPopup(auth,githubProvider);
 }

//  //2.update user name and imga url when register /sign up  success
//  const updateUserProfileNameAndImgUrl  = (name,photoURL)=>{
//        return updateProfile(auth.currentUser,{
//         displayName:name,photoURL:photoURL
//       });
//  }
  
    

 const authInfo = {user,registerWithGoogle,
                 
                  registerWithGithub
                  };
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