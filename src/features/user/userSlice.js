import { createSlice } from '@reduxjs/toolkit'
import userPicture from '../../assets/user.svg'

const initialState = {
	name: 'Guest',
	picture: userPicture,
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser(state, { payload }) {
			localStorage.setItem('user', JSON.stringify(payload))
			return { ...payload }
		},
		clearUser() {
			localStorage.removeItem('user')
		},
	},
})

export const { setUser, clearUser } = userSlice.actions
export default userSlice.reducer
