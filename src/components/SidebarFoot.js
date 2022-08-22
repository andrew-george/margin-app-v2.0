import React from 'react';
import { notesActions } from '../store';
import { useDispatch } from 'react-redux';

const SidebarFoot = () => {
	const dispatch = useDispatch();

	//* dispatching actions

	const addNoteHandler = () => {
		dispatch(notesActions.createNote());
		dispatch(notesActions.setActiveNote());
	};

	return (
		<footer>
			<a href='https://andrewberty.vercel.app' className='copyright'>
				&copy; Designed & Developed by
				<span className='name'> Andrew Berty</span>
			</a>
			<div className='bottom'>
				<div onClick={addNoteHandler} className='add-note'>
					<i className='fa-solid fa-plus add'></i>
					<button>Add new note</button>
				</div>
			</div>
		</footer>
	);
};

export default SidebarFoot;
