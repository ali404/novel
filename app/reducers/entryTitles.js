import _ from 'lodash'

export default function entryTitles(state = {}, action) {
  switch(action.type) {
    case 'ADD_ENTRY':
      return {
        ...state,
        [action.id]: {
          title: "",
          dateCreated: action.dateCreated,
          id: action.id
        }
      }
    case 'UPDATE_ENTRY_TITLE':
      return {
        ...state,
        [action.id]: {
          id: action.id,
          dateCreated: state[action.id].dateCreated,
          title: action.title
        }
      }
    case 'LOAD_ENTRIES':
      return action.entries
    case 'DELETE_ENTRY':
      return _.omit(state, [action.id])
    default:
      return state
  }
}
