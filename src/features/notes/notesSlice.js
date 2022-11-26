import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'
import { nanoid } from 'nanoid'

const initialState = { activeNote: {}, notes: [] }

const generateDate = () => {
	// return moment().format('MMMM Do YYYY, h:mm:ss a')
	return moment().calendar()
}

const notesSlice = createSlice({
	name: 'notes',
	initialState,
	reducers: {
		createNote(state) {
			state.notes.push({
				id: nanoid(3),
				title: 'Untitled',
				body: 'Type Here...',
				date: generateDate(),
			})
		},

		editNote(state, { payload }) {
			state.activeNote[payload.name] = payload.value
			state.notes.find(note => note.id === state.activeNote.id)[payload.name] =
				payload.value

			state.activeNote.date = generateDate()
			state.notes.find(note => note.id === state.activeNote.id).date =
				generateDate()
		},

		setActiveNote(state, { payload }) {
			state.activeNote =
				state.notes.find(note => note.id === payload) ||
				state.notes[state.notes.length - 1]
		},

		deleteActiveNote(state) {
			state.notes = state.notes.filter(note => note.id !== state.activeNote.id)
		},
	},
})

export const { createNote, setActiveNote, deleteActiveNote, editNote } =
	notesSlice.actions

export default notesSlice.reducer
