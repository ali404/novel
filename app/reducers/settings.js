import {TOGGLE_MENU, TOGGLE_NOTE_BAR} from '../actions'

const defaultState = {
  menu: {open: true,},
  noteBar: {open: false}
}

export const settingsPersist = true

export default function settings(state = defaultState, {type, payload}) {
  switch(type) {
    case TOGGLE_MENU:
      return {
        ...state,
        menu: {
          open: !state.menu.open
        }
      }
    case TOGGLE_NOTE_BAR:
      return {
        ...state,
        noteBar: {
          open: !state.noteBar.open
        }
      }
    default:
      return state
  }
}
