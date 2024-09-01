import { createContext, useContext, useState } from "react";
import React from 'react'
import { provider} from "../config/Firebase";
import {signInWithPopup,getAuth} from "firebase/auth"
import { NoteDataContext, NotesData } from "./NotesData";
export const loginContext=createContext(null)

export  function LoginData(props) {

  const notesdata=useContext(NoteDataContext)
    const auth = getAuth();
    const[LoginInfo,setLoginInfo]=useState(JSON.parse(localStorage.getItem("logininfo"))?JSON.parse(localStorage.getItem("logininfo")):{
      "isLogin":"false"
    })
    const[logindata,setLoginData]=useState([])
    const[userId,setUserId]=useState(localStorage.getItem("USERID")?localStorage.getItem("USERID"):"hella")

    const signInWithGoogle=async()=>{
        try {
           const data= await signInWithPopup(auth,provider)
           console.log(data)
            setLoginData(data)
            setUserId(data.user.uid)
            
            localStorage.setItem("USERID",data.user.uid)
            localStorage.setItem("logininfo",JSON.stringify({
              "Username":data.user.displayName,
              "DisplayPhoto":data.user.photoURL,
              "IsLogin":"true"
            }))
            setLoginInfo(JSON.parse(localStorage.getItem("logininfo")))
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <loginContext.Provider value={{signInWithGoogle,logindata,userId,LoginInfo,setLoginInfo}}>
{props.children}
    </loginContext.Provider>
  )
}
