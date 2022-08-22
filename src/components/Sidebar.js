import { useSelector, useDispatch } from 'react-redux';
import SidebarHead from './SidebarHead';
import SidebarPages from './SidebarPages';
import SidebarFoot from './SidebarFoot';
import { sidebarActions, themeActions } from '../store';

const Sidebar = () => {
	const dispatch = useDispatch();

	//- STATE
	//* global state (store)
	const darkTheme = useSelector(state => state.theme);
	const sideBarIsCollapsed = useSelector(state => state.sidebar);

	//* helper functions
	function toggleSideBarCollapse() {
		dispatch(sidebarActions.toggleSidebarCollapse());
	}

	const toggleThemeHandler = () => dispatch(themeActions.toggleDarkTheme());

	//- RENDER
	return (
		<aside className='sidebar'>
			<div
				className={`side-nav ${sideBarIsCollapsed ? '' : 'collapse'} ${
					darkTheme ? 'dark-sidebar' : ''
				}`}
			>
				<SidebarHead />
				<SidebarPages />
				<SidebarFoot />
			</div>

			<div className={`toolbar ${darkTheme ? 'dark-sidebar' : ''}`}>
				<i
					onClick={toggleSideBarCollapse}
					className='fa-solid fa-bars hamburger'
				></i>
				<i
					onClick={toggleThemeHandler}
					className='fa-solid fa-circle-half-stroke theme-toggler'
				></i>
			</div>
		</aside>
	);
};

export default Sidebar;
