import React, { useContext } from 'react'
import { loginContext } from '../Contexts/LoginData'
import { NoteDataContext } from '../Contexts/NotesData'

export default function Navbar() {
    const logindata=useContext(loginContext)
    const notesdata=useContext(NoteDataContext)
  return (
    <>
    <div className=" p-4 bg-slate-950 flex justify-between bg-red-400">
        <div className="flex text-white">
        <img src={logindata.LoginInfo.DisplayPhoto} width={"50px"} className='rounded-3xl'/>
        <div className="flex flex-col mx-4">
        <p className='font-mono text-xl'>{logindata.LoginInfo.Username}</p>
        <p className='font-mono '>You have been logged in</p>
        </div>

        </div>
       
        <button onClick={()=>{
            logindata.signInWithGoogle()
        }
        } className='border px-4 text-white hover:bg-sky-700 transition duration-300'>LogIn with Anouther Account</button>
    </div>
    </>
  )
}
