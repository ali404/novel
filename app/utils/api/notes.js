import {storage} from '../index'
import to from 'await-to-js'

export async function create({id, dateCreated}) {
  const [err, notes] = await to(storage.getAsync('notes'))
  if(err) throw err
  
  notes[id] = {
    id,
    dateCreated,
    title: ''
  }

  const [errSave, newEntries] = await to(storage.setAsync('notes', notes))
}

export async function update({id, ...rest}) {
  const [err, notes] = await to(storage.getAsync('notes'))
  if(err) throw err

  notes[id] = {
    ...notes[id],
    ...rest
  }

  const [errSave, _] = await to(storage.setAsync('notes', notes))
  if(errSave) throw err
}

export async function saveState({id, editorState}) {
  const [err, note] = await to(storage.getAsync(id))
  note.state = editorState
  const [errSave, _] = await to(storage.setAsync(id, note))
}

export async function getMeta() {
  const [err, notes] = await to(storage.getAsync('notes'))
  if(err) throw err
  
  return notes
}

export async function get({id}) {
  const [err, note] = await to(storage.getAsync(id))
  if(err) throw err
  
  return note
}

export async function del({id}) {
  const [errMeta, notesMeta] = await to(storage.getAsync('notes'))
  const [err, _] = await to(storage.removeAsync(id))
  
  if(errMeta) throw errMeta
  if(err) throw err

  delete notesMeta[id]
  const [errSave, newNotes] = await to(storage.setAsync('notes', notesMeta))
  
  if(errSave) throw errSave
  
  return newNotes
}
