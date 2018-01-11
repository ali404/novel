import {
  saveEntryToFilesystem,
  updateTitle,
  saveState,
  loadEntries,
  loadEntry,
  deleteEntryFromFilesystem
} from '../utils'

export const addEntry = (id, dateCreated) => {
  saveEntryToFilesystem(id, dateCreated)

  return {
    type: 'ADD_ENTRY',
    dateCreated: dateCreated,
    id: id,
  }
}

export const updateEntryTitle = (id, title) => {
  updateTitle(id, title)

  return {
    type: 'UPDATE_ENTRY_TITLE',
    id: id,
    title: title
  }
}

// update the entry state only locally
export const updateEntryState = (id, state) => {
  return {
    type: 'UPDATE_ENTRY_STATE',
    id: id,
    state: state
  }
}

// save the entry state in the file system
export const saveEntryState = (id) => {
  return (dispatch, getState) => {
    const {entries} = getState()
    const entry = entries[id]

    saveState(id, entry)
    dispatch({
      type: "SAVE_ENTRY_STATE",
      id: id
    })
  }
}

export const loadEntriesState = () => {
  return(dispatch, _) => {
    loadEntries((data) => {
      dispatch({
        type: 'LOAD_ENTRIES',
        entries: data
      })
    })
  }
}

export const loadEntryState = (id) => {
  return (dispatch, _) => {
    loadEntry(id, (data) => {
      dispatch({
        type: 'LOAD_ENTRY',
        entry: data
      })
    })
  }
}

export const deleteEntry = (id) => {
  return (dispatch, _) => {
    deleteEntryFromFilesystem(id, () => {
      dispatch({
        type: 'DELETE_ENTRY',
        id: id
      })
    })
  }
}

export const toggleMenu = () => {
  return {
    type: 'TOGGLE_MENU'
  }
}
