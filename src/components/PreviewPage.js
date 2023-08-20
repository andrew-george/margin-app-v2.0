import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import Swal from 'sweetalert2'
import { deleteActiveNote, editNote, setActiveNote } from '../features/notes/notesSlice'

import AddNoteBtn from './AddNoteBtn'

const PreviewPage = () => {
	const dispatch = useDispatch()

	const darkTheme = useSelector(state => state.ui.darkTheme)
	const notes = useSelector(state => state.notes.notes)
	const activeNote = useSelector(state => state.notes.activeNote)

	function changeHandler(e) {
		const { name, value } = e.target
		dispatch(editNote({ name, value }))
	}

	function blurHandler(e) {
		const { name, value } = e.target
		if (!value && name === 'title') {
			dispatch(editNote({ name, value: 'Untitled' }))
		}
		if (!value && name === 'body') {
			dispatch(editNote({ name, value: 'Type Here...' }))
		}
	}

	function deletePageHandler() {
		Swal.fire({
			text: 'Delete this page?',
			icon: 'question',
			iconColor: '#666',
			width: '18rem',
			toast: 'true',
			confirmButtonColor: '#dd0000',
			showCancelButton: 'true',
			confirmButtonText: 'Yes!',
		}).then(result => {
			if (result.isConfirmed) {
				dispatch(deleteActiveNote())
				dispatch(setActiveNote())
			}
		})
	}

	if (notes.length === 0) {
		return (
			<div className={`hero-area empty ${darkTheme ? 'dark-mode' : ''}`}>
				<div className='title'>Please start adding new notes!</div>
				<AddNoteBtn text />
			</div>
		)
	}

	return (
		<div className={`hero-area ${darkTheme ? 'dark-mode' : ''}`}>
			<textarea
				className={`main-title ${darkTheme ? 'dark-mode' : ''}`}
				placeholder='Page title..'
				maxLength='22'
				name='title'
				value={activeNote.title}
				onChange={changeHandler}
				onBlur={blurHandler}></textarea>
			<div className='hero-date'>Last edited : {activeNote.date}</div>
			<textarea
				className={`body ${darkTheme ? 'dark-mode' : ''}`}
				placeholder='Type Here...'
				value={activeNote.body}
				name='body'
				onChange={changeHandler}
				onBlur={blurHandler}></textarea>
			<FaRegTrashAlt onClick={deletePageHandler} className='delete-btn' />
		</div>
	)
}

export default PreviewPage
