import React, { createContext, useEffect, useState } from 'react';
import {  getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config'



export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const githubLogin = provider =>
  {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
   
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("inside auth state change", currentUser);

     
        setUser(currentUser);
      
      setLoading(false);
    });

    return () => {
     return unsubscribe();
    };
  }, []);
    const authInfo = {
        user,
        loading,
        googleLogin,
        setLoading,
        logOut,
        githubLogin
    };
    return (
        <div>
            <AuthContext.Provider value ={authInfo}>
            {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;