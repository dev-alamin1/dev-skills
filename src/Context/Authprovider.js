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
         
      const [loading,setLoading] = useState(true)

      //1.singIn with google provieder 
      const googleProvider = new GoogleAuthProvider();
      const registerWithGoogle = ()=>{
         setLoading(true)
         return signInWithPopup(auth,googleProvider);
      }

      
      //2.loginWithGoogle accoutn
      const loginWithGoogle = ()=>{
         setLoading(true)
         return signInWithPopup(auth,googleProvider);
      }



      //3. register with Github account
      const githubProvider = new GithubAuthProvider();

      const registerWithGithub = ()=>
      {
         setLoading(true)
         return signInWithPopup(auth,githubProvider);
      }


      // 4: login with github account 
      const loginWithGithub = ()=>
      {
         setLoading(true)
         return signInWithPopup(auth,githubProvider);
      }


      //5. create/ register user with email and password
      const registerWithEmailAndPassword = (email,password)=>
      {
         setLoading(true)
         return createUserWithEmailAndPassword(auth,email,password);
      }


      //6.update user name and imga url when register /sign up  success
      const updateUserProfileNameAndImgUrl  = (name,photoURL)=>{
            return updateProfile(auth.currentUser,{
            displayName:name,photoURL:photoURL
            });
      }


      //7. login with email and password 
      const loginWithEmailAndPassword = (email,password)=>{
         setLoading(true)
         return signInWithEmailAndPassword(auth,email,password)
      }

      //8. logout current User 
      const logout = ()=>{
         setLoading(true)
         return signOut(auth);
      }



      // 9. get current user info , when login/ register
      useEffect(()=>{
         const unsubscribe = onAuthStateChanged(auth,(currentUser=>{
                  setUser(currentUser);
                  setLoading(false)
         }));

         return ()=>{
            unsubscribe();
         }
      },[]);
  
    
      //10. authInfo object will send by AuthContextApi for share User Data 
      const authInfo = {user,registerWithGoogle,
                        registerWithGithub,registerWithEmailAndPassword,
                        updateUserProfileNameAndImgUrl,logout,
                        loginWithEmailAndPassword,loading,loginWithGoogle,loginWithGithub
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