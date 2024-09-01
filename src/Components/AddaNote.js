import React, { useContext, useState } from 'react'
import { NoteDataContext } from '../Contexts/NotesData'
import { loginContext } from '../Contexts/LoginData'
import FetchNotes from './FetchNotes'
import ErrorMessage from './ErrorMessage'

export default function AddaNote() {

  const logindata=useContext(loginContext)
    //SILLY MISTAKE CHAMPIOn
    console.log(logindata.userId)
    const[tag,setTag]=useState("")
    const[task,setTask]=useState("")
    const[goal,setGoal]=useState("")
    const noteData=useContext(NoteDataContext)
    const userid=logindata.userId
  return (
    <>
    
    <div className="m-8">

    <input placeholder='tag' onChange={(e)=>{setTag(e.target.value)}} value={tag} className='m-4 border p-4'></input>
    <input placeholder='TASK NAME' onChange={(e)=>{setTask(e.target.value)}} value={task} className='m-4 border p-4'></input>
    <input placeholder='Your goal To do it' onChange={(e)=>{setGoal(e.target.value)}} value={goal} className='m-4 border p-4'></input>
    <button onClick={()=>{ 
      if(goal.length==0 ||tag.length==0||task.length==0){
        noteData.setpopup({type:"emptyfeilds",status:true,message:"The feilds are empty"})

        setTimeout(() => {
          noteData.setpopup({type:"emptyfeilds",status:false,message:"The feilds are empty"})
        }, 2000);
      }
      else{
        noteData.addDocement(tag,task,goal,userid)
        setGoal("");setTag("");setTask("")
      }
        
        }} className='border rounded p-4'>ADD</button>
        <FetchNotes/>
        <ErrorMessage/>
        </div>

    </>
  )
}
