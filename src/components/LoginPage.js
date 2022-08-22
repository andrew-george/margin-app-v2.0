import React, { useState } from 'react';
import { userActions } from '../store';
import { useSelector, useDispatch } from 'react-redux/es/exports';

const LoginPage = () => {
	const [enteredName, setEnteredName] = useState('');
	const darkTheme = useSelector(state => state.theme);
	const dispatch = useDispatch();

	function loginSubmitHandler(e) {
		e.preventDefault();
		if (enteredName === '' || enteredName.length < 3) return;
		dispatch(userActions.login(enteredName));
	}

	return (
		<section className={`login-page ${darkTheme ? 'dark-mode' : ''}`}>
			<div className='welcome'>Welcome,</div>
			<div className='login-description'>Please enter your name</div>
			<form onSubmit={loginSubmitHandler}>
				<input
					className={darkTheme ? 'dark-mode' : ''}
					type='text'
					maxLength={14}
					onInput={e => setEnteredName(e.target.value)}
					placeholder='Type here...'
				/>
			</form>
		</section>
	);
};

export default LoginPage;
