export const addNotebook = (title, id, dateCreated) => ({
  type: 'ADD_NOTEBOOK',
  dateCreated: dateCreated,
  title: title,
  id: id
})

export const addEntry = (title, entryId, notebookId, dateCreated) => ({
  type: 'ADD_ENTRY',
  dateCreated: dateCreated,
  title: title,
  entryId: entryId,
  notebookId: notebookId
})
