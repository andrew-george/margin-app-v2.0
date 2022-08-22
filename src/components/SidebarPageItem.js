import React from 'react';
import { useSelector } from 'react-redux';

const SidebarPageItem = ({ title, body, onClick, id }) => {
	const activeNoteId = useSelector(state => state.notes.activeNote);
	const darkTheme = useSelector(state => state.theme);

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
		</div>
	);
};
export default SidebarPageItem;
