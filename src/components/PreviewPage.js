import React from 'react'
import { useSelector } from 'react-redux/es/exports'

import AddNoteBtn from './AddNoteBtn'
import NoteBody from './NoteBody'
import NoteTitle from './NoteTitle'
import NoteTrashBtn from './NoteTrashBtn'

const PreviewPage = () => {
	const darkTheme = useSelector(state => state.ui.darkTheme)
	const notes = useSelector(state => state.notes.notes)
	const activeNote = useSelector(state => state.notes.activeNote)

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
			<NoteTitle />
			<div className='hero-date'>Last edited : {activeNote.date}</div>
			<NoteBody />
			<NoteTrashBtn />
		</div>
	)
}

export default PreviewPage
