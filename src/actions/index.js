export const addNotebook = (title, id, dateCreated) => ({
  type: 'ADD_NOTEBOOK',
  dateCreated: dateCreated,
  title: title,
  id: id
})

export const addEntry = (id, dateCreated) => ({
  type: 'ADD_ENTRY',
  dateCreated: dateCreated,
  id: id,
})

export const updateEntryTitle = (id, title) => ({
  type: 'UPDATE_ENTRY_TITLE',
  id: id,
  title: title
})

export const updateEntryState = (id, state) => ({
  type: 'UPDATE_ENTRY_STATE',
  id: id,
  state: state
})
