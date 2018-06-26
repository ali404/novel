import {
  saveEntryToFilesystem,
  updateTitle,
  saveState,
  loadEntries,
  loadEntry,
  deleteEntryFromFilesystem,
  saveNotebook
} from '../utils'
import {convertToRaw, convertFromRaw, EditorState} from 'draft-js'

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

// save the editor state in the file system
export const saveEditorState = (id, editorState) => {
  return (dispatch, getState) => {
    const {entries} = getState()
    let entry = entries[id]
    entry.state = JSON.stringify(convertToRaw(editorState.getCurrentContent()))
    saveState(id, entry)

    dispatch({
      type: "SAVE_ENTRY_STATE",
      id: id,
      state: editorState
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
      let state
      try {
        state = EditorState.createWithContent(convertFromRaw(JSON.parse(data.state)))
      }
      catch(err) {
        console.log(err)
        state = EditorState.createEmpty()
      }

      dispatch({
        type: 'LOAD_ENTRY',
        entry: {
          ...data,
          state: state
        }
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

export const toggleInfo = () => {
  return {
    type: 'TOGGLE_INFO'
  }
}

export const addNotebook = (id, title, dateCreated) => {
  saveNotebook(id, title, dateCreated)
  
  return {
    type: 'ADD_NOTEBOOK',
    id: id,
    title: title,
    dateCreated: dateCreated
  }
}

export const setDefaultNotebook = id => ({
  type: 'SET_DEFAULT_NOTEBOOK',
  id: id
})