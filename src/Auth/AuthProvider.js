import React, { createContext, useEffect, useState } from 'react';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged, signOut, updateProfile} from 'firebase/auth'
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext() 

 const auth = getAuth(app)

 const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null)

  const [loading, setLoading] = useState(true)

  const providerLogIn = (provider) => {
    return signInWithPopup(auth,provider)
  }

  const signUp = (email, password) => {
     return createUserWithEmailAndPassword(auth, email, password) 
  }

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () =>{
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe =onAuthStateChanged(auth, currentUser => {

      setUser(currentUser)
      setLoading(false)

   });
   return () => {
     return unsubscribe;
   } 
  },[])
    
  const authInfo = {
    signUp , logIn , loading ,user, providerLogIn, logOut
  }

  return (
    <div>
       <AuthContext.Provider value={authInfo}> 
            {children}
       </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;