import _ from 'lodash'

export default function entries(state = {}, action) {
  switch(action.type) {
    case 'LOAD_ENTRY':
      return {
        ...state,
        [action.entry.id]: action.entry
      }
    case 'ADD_ENTRY':
      return {
        ...state,
        [action.id]: {
          id: action.id,
          title: "",
          state: "",
          dateCreated: action.dateCreated
        }
      }
    case 'UPDATE_ENTRY_TITLE':
      return {
        ...state,
        [action.id]: {
          id: action.id,
          title: action.title,
          state: state[action.id].state,
          dateCreated: state[action.id].dateCreated
        }
      }
    case 'SAVE_ENTRY_STATE':
      return {
        ...state,
        [action.id]: {
          id: action.id,
          title: state[action.id].title,
          state: action.state,
          dateCreated: state[action.id].dateCreated
        }
      }
    case 'DELETE_ENTRY':
      return _.omit(state, [action.id])
    default:
      return state
  }
}
