import { Auth0Provider } from '@auth0/auth0-react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<Provider store={store}>
		<Auth0Provider
			domain={process.env.REACT_APP_DOMAIN}
			clientId={process.env.REACT_APP_CLIENT_ID}
			redirectUri={window.location.origin}
		>
			<App />
		</Auth0Provider>
	</Provider>
)
