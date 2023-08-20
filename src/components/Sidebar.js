import { useSelector } from 'react-redux'
import { SidebarFoot, SidebarHead, SidebarPages, Toolbar } from './index'

const Sidebar = () => {
	const darkTheme = useSelector(state => state.ui.darkTheme)
	const sideBarIsCollapsed = useSelector(state => state.ui.isSidebarOpen)

	return (
		<aside className='sidebar'>
			<div className={`side-nav ${sideBarIsCollapsed ? '' : 'collapse'} ${darkTheme ? 'dark-sidebar' : ''}`}>
				{sideBarIsCollapsed && <SidebarHead />}
				<SidebarPages />
				<SidebarFoot />
			</div>
			<Toolbar />
		</aside>
	)
}

export default Sidebar
