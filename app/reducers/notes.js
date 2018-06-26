import _ from 'lodash'
import {
  SET_NOTE, CREATE_NOTE, UPDATE_NOTE, DELETE_NOTE
} from '../actions'

export const notesPersist = false

export default function notesReducer(state = {}, {type, payload}) {
  switch(type) {
    
    case SET_NOTE:
      return {
        ...state,
        [payload.id]: payload.note
      }
    
    case CREATE_NOTE:
      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          state: payload.state || ""
        }
      }
    
    case UPDATE_NOTE:
      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          state: payload.state || state[payload.id].state,
        }
      }
    
    case DELETE_NOTE:
      return _.omit(state, [payload.id])
    
    default:
      return state
  }
}