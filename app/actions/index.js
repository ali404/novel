import v4 from 'uuid/v4'

export const STARTUP = 'app/request-start'
export const CAN_START = 'app/start'
export const START_DELAY_NOTIF = 'app/start-delay-notification'

export const CREATE_NOTE = 'note/create'
export const createNote = (notebook) => ({
  type: CREATE_NOTE,
  payload: {
    id: v4(),
    dateCreated: new Date(),
    notebook
  }
})

export const UPDATE_NOTE_TITLE = 'note/update-title'
export const updateNoteTitle = (id, title) => ({
  type: UPDATE_NOTE_TITLE,
  payload: {id, title}
})
export const UPDATE_NOTE_STATE = 'note/update-state'
export const updateNoteState = (id, editorState) => ({
  type: UPDATE_NOTE_STATE,
  payload: {id, state: editorState}
})
export const DELETE_NOTE = 'note/delete'
export const deleteNote = (id) => ({
  type: DELETE_NOTE,
  payload: {id}
})

// load initiates get
export const LOAD_NOTE = 'note/load'
export const loadNote = (id) => ({
  type: LOAD_NOTE,
  payload: {id}
})
export const LOAD_NOTES_META = 'note/load-meta'
export const SET_NOTE = 'note/get'
export const SET_NOTES_META = 'note/get-meta'

export const ADD_NOTEBOOK = 'notebook/add'
export const addNotebook = title => ({
  type: ADD_NOTEBOOK,
  payload: {
    title,
    id: v4(),
    dateCreated: new Date()
  }
})
export const RENAME_NOTEBOOK = 'notebook/rename'
export const SET_DEFAULT_NOTEBOOK = 'notebook/set-default'
export const SET_CURRENT_NOTEBOOK = 'notebook/set-current'
export const setCurrentNotebook = id => ({
  type: SET_CURRENT_NOTEBOOK,
  payload: {id}
})

export const LOAD_NOTEBOOKS = 'notebooks/load'
export const loadNotebooks = () => ({
  type: LOAD_NOTEBOOKS
})
export const SET_NOTEBOOKS = 'notebooks/set'
export const CHANGE_NOTES_COUNT = 'notebooks/change-notes-count'

export const TOGGLE_MENU = 'menu/toggle'
export const TOGGLE_NOTE_BAR = 'note-bar/toggle'