import { nanoid } from 'nanoid'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { setActiveNote } from '../features/notes/notesSlice'
import SidebarPageItem from './SidebarPageItem'

const SidebarPages = () => {
	const dispatch = useDispatch()

	function selectPageHandler(event) {
		const selectedPageId = event.target.dataset.id
		dispatch(setActiveNote(selectedPageId))
	}

	const pagesList = useSelector(state => state.notes.notes)

	return (
		<section className='pages'>
			<div className='pages-container'>
				{pagesList.map(page => (
					<SidebarPageItem
						key={nanoid()}
						id={page.id}
						title={page.title}
						body={page.body}
						onClick={selectPageHandler}
						date={page.date}
					/>
				))}
			</div>
		</section>
	)
}

export default SidebarPages
