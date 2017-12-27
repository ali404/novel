export default function entries(state = {}, action) {
  switch(action.type) {
    case 'ADD_ENTRY':
      return {
        ...state,
        [action.notebookId]: {
          ...state[action.notebookId],
          [action.entryId]: {
            id: action.entryId,
            title: action.title,
            dateCreated: action.dateCreated,
            data: "" //TODO: update this
          }
        }
      }
    case 'UPDATE_ENTRY':
      return state
    default:
      return state
  }
}
