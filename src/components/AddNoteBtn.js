import React from 'react'
import { GoPlus } from 'react-icons/go'
import { useDispatch } from 'react-redux'
import { createNote, setActiveNote } from '../features/notes/notesSlice'

const AddNoteBtn = ({ text }) => {
	const dispatch = useDispatch()

	const addNoteHandler = () => {
		dispatch(createNote())
		dispatch(setActiveNote())
	}

	return (
		<div onClick={addNoteHandler} className='add-note'>
			<GoPlus />
			{text && <button>Add new note</button>}
		</div>
	)
}

export default AddNoteBtn
