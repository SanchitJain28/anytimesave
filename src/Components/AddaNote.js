import React, { useContext, useState } from 'react'
import { NoteDataContext } from '../Contexts/NotesData'
import { loginContext } from '../Contexts/LoginData'
import FetchNotes from './FetchNotes'
import ErrorMessage from './ErrorMessage'
import { useNavigate } from 'react-router-dom';

export default function AddaNote() {
  const navigate = useNavigate();

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
        navigate("/homepage")
      }
        
        }} className='bg-lime-400 z-10 bottom-0 left-0 fixed rounded-2xl p-8 m-4 flex justify-center p-4  content-center' ><i class="fa-solid fa-plus fa-xl"></i></button>
    <div className=" flex flex-col justify-between ">
      <div className="flex flex-col">
      <input placeholder='tag' onChange={(e)=>{setTag(e.target.value)}} value={tag} className=' outline-0	text-2xl p-4 mr-4 bg-zinc-950 '></input>
    <input placeholder='Your goal To do it' onChange={(e)=>{setGoal(e.target.value)}} value={goal} className=' outline-0 rounded-lg p-4 text-lime-400 mr-4 bg-zinc-950'></input>
    <textarea placeholder='TASK NAME' onChange={(e)=>{setTask(e.target.value)}} value={task} className=' outline-0 rounded-lg p-4 mr-4 mb-60 bg-zinc-950 '></textarea>

      </div>

  
        </div>
    </>
  )
}
