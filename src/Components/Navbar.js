import React, { useContext } from 'react'
import { loginContext } from '../Contexts/LoginData'
import { NoteDataContext } from '../Contexts/NotesData'

export default function Navbar() {
    const logindata=useContext(loginContext)
    const notesdata=useContext(NoteDataContext)
  return (
    <>
    <div className="p-2 bg-zinc-900	 flex justify-between bg-red-400">
        <div className="flex text-white">
        <img src={logindata.LoginInfo.DisplayPhoto} width={"20px"} className=''/>
        <div className="flex flex-col mx-4">
        <p className='text'>Hi,{(logindata.LoginInfo.Username).toLowerCase()}!</p>
        </div>

        </div>
       
        <button onClick={()=>{
            logindata.signInWithGoogle()
        }
        } className=' px-4 text-white hover:bg-sky-700 transition duration-300'><i class="fa-solid fa-right-to-bracket"></i></button>
    </div>
    </>
  )
}
