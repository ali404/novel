import {ADD_NOTEBOOK, SET_DEFAULT_NOTEBOOK} from '../actions'

const defaultState = {
  default: 'Inbox',
  'Inbox': {
    id: 'Inbox',
    title: 'Inbox',
    dateCreated: '0',
    entryCount: 0
  }
}

export const notebooksPersist = true

export default function notebooksReducer(state = defaultState, {type, payload}) {
  switch(type) {
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
        default: payload.id
      }
    
    default:
      return state
  }
}