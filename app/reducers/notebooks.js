import {ADD_NOTEBOOK, SET_DEFAULT_NOTEBOOK, SET_NOTEBOOKS} from '../actions'

const defaultState = {
  defaultNotebook: 'Inbox',
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
      return payload.notebooks
    
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
    
    case SET_DEFAULT_NOTEBOOK:
      return {
        ...state,
        defaultNotebook: payload.id
      }
    
    default:
      return state
  }
}