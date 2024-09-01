import React, { useContext } from 'react'
import { loginContext } from '../Contexts/LoginData'
import { Link, useNavigate } from 'react-router-dom'

export default function LoginPage() {
    const login=useContext(loginContext)
    const navigate = useNavigate();
    if(login.LoginInfo.IsLogin=="true"){
      navigate("/addanote")
    }
    console.log(login.LoginInfo)
  return (
    <>
  <div className="bg-gray-700 h-screen	">
  <p className='text-xl font-mono p-8'>Welcome to Your Digital Notebook
        Stay organized, stay inspired. Our online platform allows you to easily save, organize, and access your notes anytime, anywhere. Whether it's jotting down quick ideas, keeping track of tasks, or storing important information, we've got you covered. With a user-friendly interface and secure cloud storage, your notes are always just a click away. Start saving today and never lose track of your thoughts again!</p>
        {login.LoginInfo.IsLogin=="true"?<>
        <p>you have been logged in{login.LoginInfo.Username}</p>
        <Link to="/addanote" className='border'>GO to my notes</Link>
        </> :<button onClick={login.signInWithGoogle} className='border p-8 mx-96 bg-lime-400 rounded'>Sign In</button>}
  </div>
        
    </>

  )
}
