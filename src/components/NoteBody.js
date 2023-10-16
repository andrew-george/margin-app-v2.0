import ContentEditable from 'react-contenteditable'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { editNote } from '../features/notes/notesSlice'

function NoteBody() {
	const darkTheme = useSelector(state => state.ui.darkTheme)
	const activeNote = useSelector(state => state.notes.activeNote)

	const dispatch = useDispatch()

	return (
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
	)
}

export default NoteBody
