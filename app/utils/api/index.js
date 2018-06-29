import * as notes from './notes.js'
import * as notebooks from './notebooks'
import storage from 'electron-json-storage'
console.log(storage)

const api = {
  notes,
  notebooks
}

export default api