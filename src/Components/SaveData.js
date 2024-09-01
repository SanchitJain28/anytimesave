import React, { useContext } from 'react'
import { NoteDataContext } from '../Contexts/NotesData'

export default function SaveData() {
    const NoteData=useContext(NoteDataContext)
  return (
    <>
        <div>SaveData</div>
        <button onClick={NoteData.addData}>SAve the Data</button>
        <button onClick={NoteData.addDocement}>Add a Document</button>
    </>

  )
}
