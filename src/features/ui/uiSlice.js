import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	darkTheme: false,
	isSidebarOpen: true,
	fontStyle: 'sans', // sans - serif - mono
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
		setFontStyle(state, { payload }) {
			state.fontStyle = payload
		},
		setUiLocalStorage(state) {
			localStorage.setItem('ui', JSON.stringify(state))
		},
		getUiLocalStorage(state) {
			return { ...(JSON.parse(localStorage.getItem('ui')) || state) }
		},
	},
})
export const { toggleDarkTheme, toggleSidebarCollapse, setUiLocalStorage, getUiLocalStorage, setFontStyle } =
	uiSlice.actions

export default uiSlice.reducer
