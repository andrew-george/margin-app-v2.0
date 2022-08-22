import PreviewPage from './components/PreviewPage';
import Sidebar from './components/Sidebar';
import './sass/index.scss';
import LoginPage from './components/LoginPage';
import { useSelector } from 'react-redux/es/exports';

function App() {
	const darkTheme = useSelector(state => state.theme);
	const isLoggedIn = useSelector(state => state.user.isLoggedIn);
	const listIsEmpty = useSelector(state => state.notes.notes).length === 0;

	return (
		<>
			{isLoggedIn ? (
				<div className={`app ${darkTheme ? 'dark-mode' : ''}`}>
					<Sidebar />
					{!listIsEmpty && <PreviewPage />}
				</div>
			) : (
				<LoginPage />
			)}
		</>
	);
}

export default App;
