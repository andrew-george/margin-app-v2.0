import { configureStore } from '@reduxjs/toolkit'
import notesSlice from './features/notes/notesSlice'
import uiSlice from './features/ui/uiSlice'
import userSlice from './features/user/userSlice'

const store = configureStore({
	reducer: {
		ui: uiSlice,
		user: userSlice,
		notes: notesSlice,
	},
})

export default store
