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

      //2. register with Github 
      const githubProvider = new GithubAuthProvider();

      const registerWithGithub = ()=>
      {
         setLoading(true)
         return signInWithPopup(auth,githubProvider);
      }

      //3. create/ register user with email and password
      const registerWithEmailAndPassword = (email,password)=>
      {
         setLoading(true)
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
         setLoading(true)
         return signInWithEmailAndPassword(auth,email,password)
      }

      //6.login wiht github 

      const loginWithGithub = ()=>
      {
         setLoading(true)
         return signInWithPopup(auth,githubProvider);
      }

      //7. logout current User 
      const logout = ()=>{
         setLoading(true)
         return signOut(auth);
      }

      //8.login user with google 
      const loginWithGoogle = ()=>{
         setLoading(true)
         return signInWithPopup(auth,googleProvider);
      }


      // 9. get current user info , when user login/ register
      useEffect(()=>{
         const unsubscribe = onAuthStateChanged(auth,(currentUser=>{
                  setUser(currentUser);
                  setLoading(false)
         }));

         return ()=>{
            unsubscribe();
         }
      },[]);
  
    
      //10. this authinfo will send by , AuthContext api to all children component of Authprovider
      const authInfo = {user,registerWithGoogle,
                        registerWithGithub,registerWithEmailAndPassword,
                        updateUserProfileNameAndImgUrl,logout,
                        loginWithEmailAndPassword,loading,
                        loginWithGithub,loginWithGoogle
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