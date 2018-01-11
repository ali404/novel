const defaultState = {
  menuOpen: false
}

export default function settings(state = defaultState, action) {
  switch(action.type) {
    case 'TOGGLE_MENU':
      return {
        ...state,
        menuOpen: !state.menuOpen
      }
    default:
      return state
  }
}
