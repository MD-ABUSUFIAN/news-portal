import  {  createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, TwitterAuthProvider, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config"
import { FacebookAuthProvider } from "firebase/auth";


export const DataContext=createContext(null);
const AuthProvider = ({children}) => {
  const [user,setUser]=useState(null)
   const [error,setError]=useState("")
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const twitterProvider = new TwitterAuthProvider();
 
  // user registration function 
 const register=(email,password)=>{
  return createUserWithEmailAndPassword(auth,email,password)
 }

// user update function 
const update=(displayName,photoURL)=>{

   updateProfile(auth.currentUser, {
  displayName: displayName, photoURL: photoURL
})
}

//  user Login 
const login=(email,password)=>{

  
return signInWithEmailAndPassword(auth,email,password)
}

// user password reset 
const reset=(email)=>{
  return sendPasswordResetEmail(auth,email)
}

// userLogOut 
const logOut=()=>{
  return signOut(auth)
}
//  google Login 
const googleLogin=()=>{
signInWithPopup(auth, googleProvider)
.then((result)=>{
  const user=result.user;
  setUser(user)
}).catch((error)=>{
  setError(error.message)
})
}

// Github Login 
const gitHubLogin=()=>{
  signInWithPopup(auth, githubProvider)
  .then((result)=>{   
    const user=result?.user
    setUser(user)
  }).catch((error)=>{
    setError(error.message,error.code)
  })
}

// FaceBook Login Authentication 
const facebookLogin=()=>{
  
 signInWithPopup(auth,facebookProvider)
 .then((result)=>{
  setUser(result.user)
 })
 .catch((error)=>{
 setError(error.message)
 })
}

// TWITTER AUTHENTICATION 
const twitterLogin=()=>{
  signInWithPopup(auth,twitterProvider)
  .then((result)=>{
    setUser(result.user)
  })
  .catch((error)=>{
    setError(error.message)
  })
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
  login,
  logOut,
  error,
  setError,
  googleLogin,
  gitHubLogin,
  reset,
  facebookLogin,
  twitterLogin
  
}

  
  return (
    <DataContext.Provider value={authInfo}>
        {children}
    </DataContext.Provider>
  )
  
}

export default AuthProvider