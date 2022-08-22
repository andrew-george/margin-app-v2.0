import React from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { notesActions } from '../store';
import Swal from 'sweetalert2';

const PreviewPage = () => {
	const dispatch = useDispatch();

	const darkTheme = useSelector(state => state.theme);
	const notes = useSelector(state => state.notes.notes);
	const activeNoteId = useSelector(state => state.notes.activeNote);

	const activeNoteData =
		notes.find(note => note.id === activeNoteId) || notes[notes.length - 1];

	function titleChangeHandler(e) {
		dispatch(notesActions.editTitle(e.target.value));
	}

	function titleBlurHandler(e) {
		if (e.target.value === '') dispatch(notesActions.editTitle('Untitled'));
	}

	function bodyBlurHandler(e) {
		if (e.target.value === '')
			dispatch(notesActions.editBody('lorem ipsum...'));
	}

	function bodyChangeHandler(e) {
		dispatch(notesActions.editBody(e.target.value));
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
				dispatch(notesActions.deleteActiveNote());
				dispatch(notesActions.setActiveNote());
			}
		});
	}

	return (
		<div className={`hero-area ${darkTheme ? 'dark-mode' : ''}`}>
			<textarea
				className={`main-title ${darkTheme ? 'dark-mode' : ''}`}
				placeholder='Page title..'
				maxLength='22'
				value={activeNoteData.title}
				onChange={titleChangeHandler}
				onBlur={titleBlurHandler}
			></textarea>
			<textarea
				className={`body ${darkTheme ? 'dark-mode' : ''}`}
				placeholder='Type Here...'
				value={activeNoteData.body}
				onChange={bodyChangeHandler}
				onBlur={bodyBlurHandler}
			></textarea>
			<i
				onClick={deletePageHandler}
				className='fa-solid fa-trash-can delete-btn'
			></i>
		</div>
	);
};

export default PreviewPage;
