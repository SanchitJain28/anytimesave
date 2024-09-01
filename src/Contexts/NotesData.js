import { createContext, useContext, useState } from "react";
import { doc, setDoc ,addDoc,collection,getDocs,deleteDoc,updateDoc} from "firebase/firestore"; 
import { db } from "../config/Firebase";



import React from 'react'
import { loginContext } from "./LoginData";

export const NoteDataContext=createContext(null)

export  function NotesData(props) {

const logindata=useContext(loginContext)        
const[update,setUpdate]=useState(false)
const[popup,setpopup]=useState({ type:"sasa", status:false , message:"asas"})
const[error,seterror]=useState(false)
const[Notes,setNotes]=useState([{name:"NO NOTES TO DISPLAY"}])
const[updateInfo,setUpdateInfo]=useState(Array(1).fill({"isUpdate":false}))

//THIS WILL FETCH DATA
const getData=async()=>{
  const data= await getDocs(collection(db, logindata.userId))
  const filtereddata=data.docs.map((doc)=>
   ({...doc.data(),"docId":doc.id})
 )
 setNotes(filtereddata)
 console.log(filtereddata)
 if(filtereddata.length==0){
  setUpdateInfo(Array(1).fill({"isUpdate":false}))
 }
 else{
  setUpdateInfo(Array(filtereddata.length).fill({"isUpdate":false}))
 }
 
//  console.log(filtereddata.length)
}

const addData=async()=>{
    await setDoc(doc(db, logindata.userId, "BC"), {
        name: "Los Angeles behenchod",
        state: "CA",
        country: "USA"
      })
}
//THIS WILL ADD DATA
const addDocement=async(tag,task,goal)=>{
     await addDoc(collection(db,logindata.userId), {
        name: tag,
        note: task,
        result:goal,
        date:new Date()
      });
      getData()
      setpopup({type:"add",status:true,message:"the message has been added"})
      setTimeout(() => {
        setpopup({type:"add",status:false,message:"the message has been added"})
      }, 2000);
}

//DELETE DOCUMENT
const deleteDocument=async(docID)=>{
  await deleteDoc(doc(db, logindata.userId, docID))
  setpopup({type:"delete",status:true,message:"the message has been Deleted"})
  setTimeout(() => {
    setpopup({type:"delete",status:false,message:"the message has been Deleted"})
  }, 2000);
  getData()
}

//Update Document
const updateDocument=async(docID,tag,task,goal)=>{
  await updateDoc(doc(db, logindata.userId, docID), {
    name: tag,
        note: task,
        result:goal
  });
  setpopup({type:"update",status:true,message:"the message has been Updated"})
      setTimeout(() => {
        setpopup({type:"update",status:false,message:"the message has been Updated"})
      }, 2000);
  getData()
}
  return (
    <NoteDataContext.Provider value={{addData,addDocement,Notes,popup,setNotes,setpopup,getData,error,seterror,deleteDocument,update,setUpdate,updateInfo,setUpdateInfo,updateDocument}}>
        {props.children}
    </NoteDataContext.Provider>
  )
}
