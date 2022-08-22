import React from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import SidebarPageItem from './SidebarPageItem';
import { notesActions } from '../store';
import { nanoid } from 'nanoid';

const SidebarPages = () => {
	const dispatch = useDispatch();

	function selectPageHandler(event) {
		const selectedPageId = event.target.dataset.id;
		dispatch(notesActions.setActiveNote(selectedPageId));
	}

	const pagesList = useSelector(state => state.notes.notes);

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
					/>
				))}
			</div>
		</section>
	);
};

export default SidebarPages;
