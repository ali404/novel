export default function notebooks(state = [], action) {
  switch(action.type) {
    case 'ADD_NOTEBOOK':
      return [
        ...state,
        {
          id: action.id,
          dateCreated: action.dateCreated,
          title: action.title,
          entries: 0
        }
      ]
    default:
      return state
  }
}
