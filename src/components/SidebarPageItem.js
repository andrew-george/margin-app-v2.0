import React from 'react'
import { useSelector } from 'react-redux'

const SidebarPageItem = ({ title, body, onClick, id, date }) => {
	const activeNoteId = useSelector(state => state.notes.activeNote.id)
	const darkTheme = useSelector(state => state.ui.darkTheme)

	const parser = new DOMParser()
	const HTMLtitle = parser.parseFromString(title, 'text/html')
	const parsedTitle = HTMLtitle.getElementsByTagName('body')[0].innerText

	const HTMLbody = parser.parseFromString(body, 'text/html')
	const parsedbody = HTMLbody.getElementsByTagName('body')[0].innerText

	console.log()

	return (
		<div
			onClick={onClick}
			className={`page ${id === activeNoteId ? 'selected' : ''} ${
				darkTheme && id === activeNoteId ? 'selected-darkmode' : ''
			}`}
			data-id={id}>
			<div className='title' data-id={id}>
				{parsedTitle}
			</div>
			<p className='body' data-id={id}>
				{parsedbody}
			</p>
			<p className='sidebar-date'>{date}</p>
		</div>
	)
}
export default SidebarPageItem
