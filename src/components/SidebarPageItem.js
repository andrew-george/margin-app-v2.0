import React from 'react'
import { useSelector } from 'react-redux'

const SidebarPageItem = ({ title, body, onClick, id, date }) => {
	const activeNoteId = useSelector(state => state.notes.activeNote.id)
	const darkTheme = useSelector(state => state.ui.darkTheme)

	return (
		<div
			onClick={onClick}
			className={`page ${id === activeNoteId ? 'selected' : ''} ${
				darkTheme && id === activeNoteId ? 'selected-darkmode' : ''
			}`}
			data-id={id}
		>
			<div className='title' data-id={id}>
				{title}
			</div>
			<p className='body' data-id={id}>
				{body}
			</p>
			<p className='sidebar-date'>{date}</p>
		</div>
	)
}
export default SidebarPageItem
