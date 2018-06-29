import {STARTUP, CAN_START} from '../actions'
const defaultState = {}

export const globalsPersist = false
export default function globalsReducer(state = defaultState, {type, payload}) {
  switch(type) {
    case STARTUP:
      return state
    case CAN_START:
      return state
    default:
      return state
  }
}