import { createSlice } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const themeSlice = createSlice({
	name: 'theme',
	initialState: false,
	reducers: {
		toggleDarkTheme(state) {
			return !state;
		},
	},
});

const sidebar = createSlice({
	name: 'sidebar',
	initialState: true,
	reducers: {
		toggleSidebarCollapse(state) {
			return !state;
		},
	},
});

const userSlice = createSlice({
	name: 'user',
	initialState: { name: '', isLoggedIn: false },
	reducers: {
		login(state, action) {
			state.name = action.payload;
			state.isLoggedIn = true;
		},
	},
});

const notesSlice = createSlice({
	name: 'notes',
	initialState: { activeNote: '', notes: [] },

	reducers: {
		createNote(state) {
			state.notes.push({
				id: nanoid(3),
				title: 'Untitled',
				body: 'lorem ipsum..',
			});
		},

		setActiveNote(state, action) {
			state.activeNote =
				action.payload || state.notes[state.notes.length - 1].id;
		},

		editTitle(state, action) {
			const toBeEdited = state.notes.find(note => note.id === state.activeNote);
			toBeEdited.title = action.payload;
		},

		editBody(state, action) {
			const toBeEdited = state.notes.find(note => note.id === state.activeNote);
			toBeEdited.body = action.payload;
		},

		deleteActiveNote(state) {
			state.notes = state.notes.filter(note => note.id !== state.activeNote);
		},
	},
});

const store = configureStore({
	reducer: {
		theme: themeSlice.reducer,
		user: userSlice.reducer,
		sidebar: sidebar.reducer,
		notes: notesSlice.reducer,
	},
});

export const themeActions = themeSlice.actions;
export const userActions = userSlice.actions;
export const sidebarActions = sidebar.actions;
export const notesActions = notesSlice.actions;
export default store;
