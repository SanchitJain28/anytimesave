import React, { useContext, useEffect, useState } from 'react'
import { loginContext } from '../Contexts/LoginData';
import { db } from '../config/Firebase';
import { NoteDataContext } from '../Contexts/NotesData';
import { useNavigate } from 'react-router-dom';

export default function FetchNotes() {

const loginData=useContext(loginContext)
const notesData=useContext(NoteDataContext)
useEffect(() => {
  notesData.getData()
}, [loginData.LoginInfo])
const [display,setDisplay]=useState(true)
console.log(notesData.updateInfo)
const navigate = useNavigate();
    
  return (
    <>
    <button onClick={()=>{
      navigate("/addanote")
    }} className='bg-lime-400 z-10 bottom-0 left-0 fixed rounded-2xl p-8 m-4 flex justify-center p-4  content-center'><i class="fa-solid fa-plus fa-xl"></i></button>
    <div className="">
{notesData.Notes.map((e,index)=>{
    return <>
    {notesData.updateInfo[index]["isUpdate"]?
    <>
    <div className="flex m-5 border flex-col">
    <input className='m-2 p-2' placeholder='Name of the task' value={notesData.updateInfo[index].name} onChange={(e)=>{
      const setName=[...notesData.updateInfo]
      setName[index]["name"]=e.target.value
      notesData.setUpdateInfo(setName)
    }}></input>
    <input className='m-2 p-2' value={notesData.updateInfo[index].note} placeholder='Note for the task' onChange={(e)=>{
      const setNote=[...notesData.updateInfo]
      setNote[index]["note"]=e.target.value
      notesData.setUpdateInfo(setNote)
    }}></input>
    <input className='m-2 p-2' value={notesData.updateInfo[index].result} onChange={(e)=>{
        const setResult=[...notesData.updateInfo]
        setResult[index]["result"]=e.target.value
        notesData.setUpdateInfo(setResult)
    }} placeholder='Goal for the task'></input>
    <div className="flex justify-center">
    <button onClick={()=>{notesData.deleteDocument(e.docId)}} className='border p-4 w-96 mx-20 my-4 bg-red-500 rounded-lg' ><i class="fa-solid fa-trash fa-xl "></i> </button>

    <button onClick={()=>{
        if(notesData.updateInfo[index].result.length==0 ||notesData.updateInfo[index].name.length==0||notesData.updateInfo[index].note.length==0){
          notesData.setpopup({type:"emptyfeilds",status:true,message:"The feilds are empty"})
  
          setTimeout(() => {
            notesData.setpopup({type:"emptyfeilds",status:false,message:"The feilds are empty"})
          }, 2000);
        }
        else{
          let setUpdate=[...notesData.updateInfo]
          setUpdate[index]={"isUpdate":false}
          notesData.setUpdateInfo(setUpdate)
          console.log(notesData.updateInfo)
          notesData.updateDocument(e.docId,notesData.updateInfo[index].name,notesData.updateInfo[index].note,notesData.updateInfo[index].result)
        }

    }} className='border p-2  w-20 mx-20  rounded-lg bg-emerald-500'><i class="fa-solid fa-pen-to-square fa-xl "></i></button>
        </div>

    </div>
    </>:<>
    <div className="flex border border-zinc-900	rounded-lg justify-between m-2 z-0">
      <div className="flex flex-col my-2">
      <h1 className='mx-4 '><b><i>{e.name}</i> </b> </h1>
    <h3 className='mx-4 '>{e.note}</h3>
    <h2 className='mx-4 '> {e.result}</h2>
    <p className='mx-4 text-xs'>Edited on: {e.date}</p>
      </div>

    <div className="flex justify-center flex m-4">
    <button onClick={()=>{notesData.deleteDocument(e.docId)}} className='m-1 p-2 bg-red-500 rounded-lg max-h-10	' ><i class="fa-solid fa-trash fa-sm"></i> </button>
    <button onClick={()=>{
      let setUpdate=[...notesData.updateInfo]
      setUpdate[index]={"isUpdate":true,"name":e.name,"note":e.note,"result":e.result}
      notesData.setUpdateInfo(setUpdate)
      console.log(notesData.updateInfo)
    }} className='m-1 p-2 rounded-lg bg-emerald-500 max-h-10'> <i class="fa-solid fa-pen-to-square fa-sm"></i></button>
    </div>

        </div>
    </>}
    
    </>
})}
</div>
    </>
  )
}
