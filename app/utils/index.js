import electronStorage from 'electron-json-storage'
import Promise from 'bluebird'

// count words on editor state
export const countWordsOnEditorState = (editorState) => {
  let numOfWords = 0
  try {
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

// converts to saveable format
export function convertTo({editorState}) {
  const state = JSON.stringify(convertToRaw(
    editorState.getCurrentContent()
  ))

  return state
}

// converts from saveable format
export function convertFrom({editorState}) {
  let state
  try {
    state = EditorState.createWithContent(convertFromRaw(
      JSON.parse(editorState)
    ))
  }
  catch(err) {
    state = EditorState.createEmpty()
  }
}

export const storage = Promise.promisifyAll(electronStorage)