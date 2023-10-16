import { FaRegTrashAlt } from 'react-icons/fa'
import { useDispatch } from 'react-redux/es/exports'
import Swal from 'sweetalert2'
import { deleteActiveNote, setActiveNote } from '../features/notes/notesSlice'

function NoteTrashBtn() {
	const dispatch = useDispatch()

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
	return <FaRegTrashAlt onClick={deletePageHandler} className='delete-btn' />
}

export default NoteTrashBtn
