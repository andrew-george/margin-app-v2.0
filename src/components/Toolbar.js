import React from 'react'
import { FaBars } from 'react-icons/fa'
import { TbBulb, TbBulbOff } from 'react-icons/tb'
import { useDispatch, useSelector } from 'react-redux'
import { toggleDarkTheme, toggleSidebarCollapse } from '../features/ui/uiSlice'
import AddNoteBtn from './AddNoteBtn'
import LogButton from './LogButton'

const Toolbar = () => {
	const darkTheme = useSelector(state => state.ui.darkTheme)
	const dispatch = useDispatch()

	return (
		<div className={`toolbar ${darkTheme ? 'dark-sidebar' : ''}`}>
			<div className='toolbar-top'>
				<FaBars
					onClick={() => dispatch(toggleSidebarCollapse())}
					className='hamburger'
				></FaBars>
				<LogButton />
			</div>
			<div className='toolbar-bottom'>
				<AddNoteBtn />
				{darkTheme ? (
					<TbBulb
						onClick={() => dispatch(toggleDarkTheme())}
						className='theme-toggler'
					/>
				) : (
					<TbBulbOff
						onClick={() => dispatch(toggleDarkTheme())}
						className='theme-toggler'
					/>
				)}
			</div>
		</div>
	)
}

export default Toolbar
