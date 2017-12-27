const notebook = (state, action) => {
  switch(action.type) {
    case 'ADD_NOTEOBOK':
      return {
        id: action.id,
        type: action.type,
        dateCreated: action.dateCreated,
        entries: 0
      }
    default:
      return state
  }
}

const notebooks = (state = [], action) => {
  switch(action.type) {
    case 'ADD_NOTEBOOK':
      return [
        ...state,
        notebook(undefined, action)
      ]
    default:
      return state
  }
}

export default notebooks
