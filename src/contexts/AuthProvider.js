import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebse.init';
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const auth = getAuth(app)
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user,SetUser] = useState(null)
    const [loading,setLoading] = useState(true);
    //signUp
    const SignUpEmail = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    //login
    const LoginEmail = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    //updateName
    const updateUser = (name,image) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
          })
    }
    //SignOut
    const logOut = () =>{
        localStorage.removeItem('product-token')
        return signOut(auth)
    }
    //google login
    const handleGoogleLogin = (GoogleProvider) =>{
        setLoading(true)
        return signInWithPopup(auth, GoogleProvider)
    }
    //OnAuthStateChange
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            SetUser(currentUser)
            console.log(currentUser)
            setLoading(false)
        })
        return () => unSubscribe()
    },[])
    const authInfo = {
        user,
        loading,
        setLoading,
        SignUpEmail,
        LoginEmail,
        logOut,
        handleGoogleLogin,
        updateUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;