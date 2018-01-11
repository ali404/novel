import storage from 'electron-json-storage'

// saves an entry to the filesystem
// only saves the minimal data (title, id, dateCreated)
export const saveEntryToFilesystem = (id, dateCreated) => {
  storage.get("entries", (error, data) => {
    if(error) throw error

    data[id] = {
      id: id,
      dateCreated: dateCreated,
      title: ""
    }

    storage.set("entries", data, (error) => {
      if(error) throw error
    })
  })
}

// update the title of an entry
export const updateTitle = (id, title) => {
  storage.get("entries", (error, data) => {
    if(error) throw error

    data[id].title = title

    storage.set("entries", data, (error) => {
      if(error) throw error
    })
  })

  storage.get(id, (error, data) => {
    if(error) throw error

    data.title = title
    storage.set(id, data)
  })
}

// save the state of an entry to the filesystem
export const saveState = (id, dataState) => {
  storage.set(id, dataState, (error) => {
    if(error) throw error
  })
}

// loads all entries (just the title and the dateCreated) from the filesystem
export const loadEntries = (callback) => {
  storage.get("entries", (error, data) => {
    if(error) throw error

    console.log(storage.getDefaultDataPath())
    callback.call(this, data)
  })
}

// loads an entry from filesystem
export const loadEntry = (id, callback) => {
  storage.get(id, (error, data) => {
    if(error) throw error

    callback.call(this, data)
  })
}

// delete an entry from the filesystem
export const deleteEntryFromFilesystem = (id, callback) => {
  storage.get("entries", (error, data) => {
    if(error) throw error

    delete data[id]

    storage.remove(id)
    storage.set("entries", data, callback)
  })
}

// count words on editor state
export const countWordsOnEditorState = (editorState) => {
  let numOfWords = 0
  try {
    console.log(editorState)
    editorState.blocks.forEach(block => {
      numOfWords += wordCount(block.text)
    })

    return numOfWords
  }
  catch(e) {
    return 0
  }
}

export const wordCount = (text) => {
  let regex = /\s+/gi
  let wordCount = text.trim().replace(regex, ' ').split(' ').length

  return wordCount
}
