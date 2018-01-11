const defaultState = {
  menuOpen: true,
  infoOpen: false
}

export default function settings(state = defaultState, action) {
  switch(action.type) {
    case 'TOGGLE_MENU':
      return {
        ...state,
        menuOpen: !state.menuOpen
      }
    case 'TOGGLE_INFO':
      return {
        ...state,
        infoOpen: !state.infoOpen
      }
    default:
      return state
  }
}
