export default function notebooks(state = {}, action) {
  switch(action.type) {
    case 'ADD_NOTEBOOK':
      return {
        ...state,
        [action.id]: {
          id: action.id,
          dateCreated: action.dateCreated,
          title: action.title,
          entries: 0
        }
      }
    case 'ADD_ENTRY':
      return {
        ...state,
        [action.notebookId]: {
          id: action.noteBookId,
          dateCreated: state[action.notebookId].dateCreated,
          title: state[action.notebookId].title,
          entries: state[action.notebookId].entries + 1
        }
      }
    default:
      return state
  }
}
