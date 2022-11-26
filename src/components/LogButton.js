import { useAuth0 } from '@auth0/auth0-react'
import { TbLogin, TbLogout } from 'react-icons/tb'

const LogButton = () => {
	const { loginWithRedirect, isAuthenticated, logout } = useAuth0()

	if (isAuthenticated) {
		return (
			<button
				className='log-btn'
				onClick={() => {
					logout({ returnTo: window.location.origin })
				}}
			>
				<TbLogin />
			</button>
		)
	}

	return (
		<button onClick={loginWithRedirect} className='log-btn'>
			<TbLogout />
		</button>
	)
}

export default LogButton
