const initialState = {}

export default function notebooks(state = initialState, action) {
    switch(action.type) {
        case 'ADD_NOTEBOOK':
            return {
                ...state,
                [action.id]: {
                    id: action.id,
                    title: action.title,
                    dateCreated: action.dateCreated,
                    entryCount: 0
                }
            }
        case 'SET_DEFAULT_NOTEBOOK':
            return state
        default:
            return state
    }
}