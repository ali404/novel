import electronStorage from 'electron-json-storage'
import Promise from 'bluebird'
import {EditorState, convertToRaw, convertFromRaw} from 'draft-js'
import to from 'await-to-js'

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
export function convertTo(editorState) {
  const state = JSON.stringify(convertToRaw(
    editorState.getCurrentContent()
  ))

  return state
}

// converts from saveable format
export function convertFrom(editorState) {
  let state
  try {
    state = EditorState.createWithContent(convertFromRaw(
      JSON.parse(editorState)
    ))
  }
  catch(err) {
    state = EditorState.createEmpty()
  }

  return state
}

export const storage = Promise.promisifyAll(electronStorage)

export async function willMigrate() {
  const currentVersion = process.env.REACT_VERSION
  const [__, meta] = await to(storage.getAsync('meta'))
  const ownVersion = meta.version

  return ownVersion !== currentVersion
}