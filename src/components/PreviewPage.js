import React from 'react'
import ContentEditable from 'react-contenteditable'
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
			<ContentEditable
				className={`main-title ${darkTheme ? 'dark-mode' : ''}`}
				html={activeNote.title}
				onChange={e => dispatch(editNote({ name: 'title', value: e.target.value }))}
				onBlur={e => {
					if (!e.target.textContent) {
						dispatch(editNote({ name: 'title', value: 'Untitled' }))
					}
				}}
				onFocus={e => {
					if (e.target.textContent === 'Untitled') {
						dispatch(editNote({ name: 'title', value: '' }))
					}
				}}
			/>
			<div className='hero-date'>Last edited : {activeNote.date}</div>
			<ContentEditable
				className={`body ${darkTheme ? 'dark-mode' : ''}`}
				html={activeNote.body}
				onChange={e => dispatch(editNote({ name: 'body', value: e.target.value }))}
				onBlur={e => {
					if (!e.target.textContent) {
						dispatch(editNote({ name: 'body', value: 'Type Here...' }))
					}
				}}
				onFocus={e => {
					if (e.target.textContent === 'Type Here...') {
						dispatch(editNote({ name: 'body', value: '' }))
					}
				}}
			/>

			<FaRegTrashAlt onClick={deletePageHandler} className='delete-btn' />
		</div>
	)
}

export default PreviewPage
