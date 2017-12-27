export const addNotebook = (title, id, dateCreated) => ({
  type: 'ADD_NOTEBOOK',
  dateCreated: dateCreated,
  title: title,
  id: id
})
