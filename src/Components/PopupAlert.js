import React, { useContext } from 'react'
import { NoteDataContext } from '../Contexts/NotesData'

export default function PopupAlert() {
    const notedata=useContext(NoteDataContext)
    const styleobject ={
      "add":"bg-lime-300 p-4  absolute inset-x-0 top-0 transition duration-150",
      "delete":"bg-red-400 p-4  absolute inset-x-0 top-0 transition duration-150",
      "update":"bg-amber-400	 p-4  absolute inset-x-0 top-0 transition duration-150",
      "emptyfeilds":"bg-neutral-800	 p-4 text-white absolute inset-x-0 top-0 transition duration-150"
    }
  return (
   <>
   {notedata.popup.status?
   <>
   <div className={styleobject[notedata.popup.type]}>
   <p className="">{notedata.popup.message}</p>
   </div>

   </>
   :""}   </>
  )
}
