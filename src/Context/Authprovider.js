 import React, { createContext, useEffect, useState } from 'react';
 // import from firebase 
 import {
         getAuth,signInWithPopup,GoogleAuthProvider,
         updateProfile,GithubAuthProvider, createUserWithEmailAndPassword, 
         onAuthStateChanged, signOut,signInWithEmailAndPassword
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

 //3. create/ register user with email and password
 const registerWithEmailAndPassword = (email,password)=>
 {
   return createUserWithEmailAndPassword(auth,email,password);
 }

 //4.update user name and imga url when register /sign up  success
 const updateUserProfileNameAndImgUrl  = (name,photoURL)=>{
       return updateProfile(auth.currentUser,{
        displayName:name,photoURL:photoURL
      });
 }

 //5. login with email and password 
 const loginWithEmailAndPassword = (email,password)=>{
     return signInWithEmailAndPassword(auth,email,password)
 }

 //6. logout current User 
 const logout = ()=>{
    return signOut(auth);
 }



 // 6. get current user info , when login/ register
 useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth,(currentUser=>{
            setUser(currentUser);
     }));

     return ()=>{
        unsubscribe();
     }
 },[]);
  
    

 const authInfo = {user,registerWithGoogle,
                  registerWithGithub,registerWithEmailAndPassword,
                  updateUserProfileNameAndImgUrl,logout,loginWithEmailAndPassword
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