import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase.config';

const auth = getAuth(app)
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateProfileUser = (name, photo) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, {displayName: name, photoURL: photo})
    }

    const logout = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect (() =>{
      const unsubscribe =  onAuthStateChanged(auth, loggedUser => {
          setLoading(false)
            console.log('loggedUser in user in side in state', loggedUser)
            setUser(loggedUser)
          })
          return () =>{
            unsubscribe()
          }
    },[])
    const authInfo = {
        user,
        logout,
        createUser,
        loginUser,
        updateProfileUser,
        loading
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;