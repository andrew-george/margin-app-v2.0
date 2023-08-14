import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'
import { nanoid } from 'nanoid'

const initialState = { activeNote: {}, notes: [] }

const generateDate = () => {
	// return moment().format('MMMM Do YYYY, h:mm:ss a')
	return moment().calendar()
}

const setNotesLocalStorage = state => {
	localStorage.setItem('notes', JSON.stringify(state))
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

			setNotesLocalStorage(state)
		},

		editNote(state, { payload }) {
			state.activeNote[payload.name] = payload.value
			state.notes.find(note => note.id === state.activeNote.id)[payload.name] = payload.value

			state.activeNote.date = generateDate()
			state.notes.find(note => note.id === state.activeNote.id).date = generateDate()

			setNotesLocalStorage(state)
		},

		setActiveNote(state, { payload }) {
			state.activeNote = state.notes.find(note => note.id === payload) || state.notes[state.notes.length - 1]

			setNotesLocalStorage(state)
		},

		deleteActiveNote(state) {
			state.notes = state.notes.filter(note => note.id !== state.activeNote.id)

			setNotesLocalStorage(state)
		},
		getNotesLocalStorage(state) {
			return JSON.parse(localStorage.getItem('notes')) || state
		},
	},
})

export const { createNote, setActiveNote, deleteActiveNote, editNote, getNotesLocalStorage } = notesSlice.actions

export default notesSlice.reducer
