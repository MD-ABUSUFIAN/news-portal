import React, {  createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config"


export const DataContext=createContext(null);
const AuthProvider = ({children}) => {
  const [user,setUser]=useState(null)
  const auth = getAuth(app);
 
  // user registration function 
 const register=(email,password)=>{
  return createUserWithEmailAndPassword(auth,email,password)
 }

// user update function 
const update=(displayName,photoURL)=>{
  console.log(displayName,photoURL,auth.currentUser);
   updateProfile(auth.currentUser, {
  displayName: displayName, photoURL: photoURL
})
}

//  user Login 
const login=(email,password)=>{
  console.log(email,password);
  
return signInWithEmailAndPassword(auth,email,password)
}





//  observer function
 useEffect(()=>{
  const unSubscribe=onAuthStateChanged(auth, (user) => {
  if (user) {
  setUser(user)
  }
})
return unSubscribe
 },[])

const authInfo={
  register,
  user,
  setUser,
  update,
  login
}

  
  return (
    <DataContext.Provider value={authInfo}>
        {children}
    </DataContext.Provider>
  )
  
}

export default AuthProvider