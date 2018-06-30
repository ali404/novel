import {STARTUP, CAN_START, START_DELAY_NOTIF} from '../actions'

const defaultState = {
  start: false,
  isLoading: false,
  delay: 0
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
    case START_DELAY_NOTIF:
      return {
        ...state,
        delay: payload
      }
    default:
      return state
  }
}