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

export const updateEntry = (id, title, data) => ({
  type: 'UPDATE_ENTRY',
  id: id,
  title: title,
  data: data
})
