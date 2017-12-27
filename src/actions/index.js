export const addNotebook = (name, type) => ({
  type: 'ADD_NOTEBOOK',
  dateCreated: new Date(),
  notebookType: type
})
