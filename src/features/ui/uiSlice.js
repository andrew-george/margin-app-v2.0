import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	darkTheme: false,
	isSidebarOpen: true,
}

const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		toggleDarkTheme(state) {
			state.darkTheme = !state.darkTheme
		},
		toggleSidebarCollapse(state) {
			state.isSidebarOpen = !state.isSidebarOpen
		},
		setUiLocalStorage(state) {
			localStorage.setItem('ui', JSON.stringify(state))
		},
		getUiLocalStorage(state) {
			return { ...(JSON.parse(localStorage.getItem('ui')) || state) }
		},
	},
})
export const { toggleDarkTheme, toggleSidebarCollapse, setUiLocalStorage, getUiLocalStorage } = uiSlice.actions

export default uiSlice.reducer
