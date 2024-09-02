import React, { useContext } from 'react'
import { loginContext } from '../Contexts/LoginData'
import { Link, useNavigate } from 'react-router-dom'

export default function LoginPage() {
    const login=useContext(loginContext)
    const navigate = useNavigate();
    // if(login.LoginInfo.IsLogin=="true"){
    //   navigate("/addanote")
    // }
    console.log(login.LoginInfo)
  return (
    <>
    
  <div className="bg-zinc-950  text-white h-screen	">
  <p className='text-xl  p-8'>Welcome to Your Digital Notebook
        Stay organized, stay inspired. Our online platform allows you to easily save, organize, and access your notes anytime, anywhere. Whether it's jotting down quick ideas, keeping track of tasks, or storing important information, we've got you covered. With a user-friendly interface and secure cloud storage, your notes are always just a click away. Start saving today and never lose track of your thoughts again!</p>
        {login.LoginInfo.IsLogin=="true"?<>
        <div className="flex justify-between mx-8">
        <Link to="/homepage" className='border border-zinc-900 p-4  bg-zinc-950 rounded-lg hover:bg-white hover:text-black transition duration-700 w-96'>Notes <i class="fa-solid fa-arrow-right"></i></Link>
        </div>

        </> :<button onClick={login.signInWithGoogle} className='border border-zinc-900 p-4 mx-4 bg-zinc-950 rounded-lg'>Sign In</button>}
  </div>
        
    </>

  )
}
