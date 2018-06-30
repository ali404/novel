import {
  ADD_NOTEBOOK, SET_DEFAULT_NOTEBOOK, SET_NOTEBOOKS,
  SET_CURRENT_NOTEBOOK, CREATE_NOTE, DELETE_NOTE,
  CHANGE_NOTES_COUNT
} from '../actions'

const defaultState = {
  defaultNotebook: 'Inbox',
  currentNotebook: 'Inbox',
  'Inbox': {
    id: 'Inbox',
    title: 'Inbox',
    dateCreated: new Date(),
    notesCount: 0,
  }
}

export const notebooksPersist = true

export default function notebooksReducer(state = defaultState, {type, payload}) {
  switch(type) {
    case SET_NOTEBOOKS:
      return {
        ...payload.notebooks,
        currentNotebook: payload.notebooks.defaultNotebook
      }
    
    case ADD_NOTEBOOK:
      return {
        ...state,
        [payload.id]: {
          id: payload.id,
          title: payload.title,
          dateCreated: payload.dateCreated,
          notesCount: 0
        }
      }
    
    case CHANGE_NOTES_COUNT:
      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          notesCount: state[payload.id].notesCount + payload.count
        }
      }
    
    case SET_DEFAULT_NOTEBOOK:
      return {
        ...state,
        defaultNotebook: payload.id
      }
    
    case SET_CURRENT_NOTEBOOK:
      return {
        ...state,
        currentNotebook: payload.id
      }
    
    default:
      return state
  }
}