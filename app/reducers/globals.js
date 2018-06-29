import {STARTUP, CAN_START} from '../actions'

const defaultState = {
  start: false,
  isLoading: false
}

export const globalsPersist = false
export default function globalsReducer(state = defaultState, {type, payload}) {
  switch(type) {
    case STARTUP:
      return {
        ...state,
        isLoading: true
      }
    case CAN_START:
      return {
        start: true,
        isLoading: false
      }
    default:
      return state
  }
}