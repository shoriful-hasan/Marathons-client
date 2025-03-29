import React, { Children, createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const Authcontext = createContext(null)
const auth = getAuth(app)
const GoogleProvider = new GoogleAuthProvider()


const Authprovider = ({AuthData}) => {
const [loding,setloading] = useState(true)
const [user,setuser] = useState(null)

const NewUserRegister = (email,pass) =>{
setloading(true)
return createUserWithEmailAndPassword(auth,email,pass)        
    }

const updateprofile = (name,photo) =>{
    return updateProfile(auth.currentUser,{
        displayName : name,
        photoURL    : photo
    })
}

const signin = (email,password)=>{
    setloading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

const Googlesignin = () =>{
    setloading(true)
    return signInWithPopup(auth,GoogleProvider)
}




// OnAuthStateChanged
useEffect(()=>{
const unsubscribe = onAuthStateChanged(auth,currentUser =>{
    console.log('the use is', currentUser);
    
    setuser(currentUser)
    setloading(false)
})

return ()=>{
    unsubscribe()
}


},[])

const authinfo = {
    user,
    setuser,
    NewUserRegister,
    Googlesignin,
    signin,
    updateprofile,
}

    return (
       <Authcontext.Provider value={authinfo} >{AuthData}</Authcontext.Provider>
    );
};

export default Authprovider;