import React, { useContext } from 'react'
import { NoteDataContext } from '../Contexts/NotesData'

export default function ErrorMessage() {
    const notedata=useContext(NoteDataContext)
  return (
    <p className='text-3xl'>
        {notedata.error}
    </p>
  )
}
