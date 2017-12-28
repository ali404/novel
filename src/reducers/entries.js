export default function entries(state = {}, action) {
  switch(action.type) {
    case 'ADD_ENTRY':
      return {
        ...state,
        [action.id]: {
          id: action.id,
          title: "",
          data: "",
          dateCreated: action.dateCreated
        }
      }
    case 'UPDATE_ENTRY':
      return {
        ...state,
        [action.id]: {
          id: action.id,
          title: action.title,
          data: action.data,
          dateCreated: state[action.id].dateCreated
        }
      }
    default:
      return state
  }
}
