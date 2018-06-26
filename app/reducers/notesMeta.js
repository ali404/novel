import _ from 'lodash'
import {
  SET_NOTES_META, CREATE_NOTE, UPDATE_NOTE_TITLE, DELETE_NOTE
} from '../actions'

export const notesMetaPersist = true

export default function notesMetaReducer(state = {}, {type, payload}) {
  switch(type) {

    case CREATE_NOTE:
      return {
        ...state,
        [payload.id]: {
          id: payload.id,
          title: payload.title || '',
          dateCreated: payload.dateCreated,
        }
      }
    
    case UPDATE_NOTE_TITLE:
      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          title: payload.title
        }
      }
    
    case SET_NOTES_META:
      return payload.notes
    
    case DELETE_NOTE:
      return _.omit(state, [payload.id])

     default:
      return state
  }
}