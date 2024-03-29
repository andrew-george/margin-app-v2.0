import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'
import ReactLoading from 'react-loading'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import logo from './assets/margin-app-favicon.png'
import { PreviewPage, Sidebar } from './components'
import { getNotesLocalStorage } from './features/notes/notesSlice'
import { getUiLocalStorage, setUiLocalStorage } from './features/ui/uiSlice'
import { clearUser, setUser } from './features/user/userSlice'
import './sass/index.scss'

function App() {
	const { isLoading, user } = useAuth0()
	const darkTheme = useSelector(state => state.ui.darkTheme)
	const isSidebarOpen = useSelector(state => state.ui.isSidebarOpen)
	const fontStyle = useSelector(state => state.ui.fontStyle)

	const dispatch = useDispatch()

	useEffect(() => {
		if (user) {
			dispatch(setUser(user))
		} else {
			dispatch(clearUser())
		}
		// eslint-disable-next-line
	}, [user])

	useEffect(() => {
		dispatch(getUiLocalStorage())
		// eslint-disable-next-line
	}, [])

	useEffect(() => {
		dispatch(getNotesLocalStorage())
		// eslint-disable-next-line
	}, [])

	useEffect(() => {
		dispatch(setUiLocalStorage())
		// eslint-disable-next-line
	}, [darkTheme, isSidebarOpen, fontStyle])

	if (isLoading) {
		return (
			<div className={`loading ${darkTheme ? 'dark-mode' : ''}`}>
				<img src={logo} alt='logo' />
				<ReactLoading type='bubbles' color={`${darkTheme ? '#fff' : '#000'}`} height={100} width={100} />
			</div>
		)
	}

	return (
		<div className={`app ${fontStyle} ${darkTheme ? 'dark-mode' : ''}`}>
			<Sidebar />
			<PreviewPage />
		</div>
	)
}

export default App
