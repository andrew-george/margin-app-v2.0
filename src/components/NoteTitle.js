import ContentEditable from 'react-contenteditable'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { editNote } from '../features/notes/notesSlice'

function NoteTitle() {
	const darkTheme = useSelector(state => state.ui.darkTheme)
	const activeNote = useSelector(state => state.notes.activeNote)

	const dispatch = useDispatch()

	return (
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
	)
}

export default NoteTitle
