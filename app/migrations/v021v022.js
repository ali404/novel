import storage from 'electron-json-storage'
import to from 'await-to-js'
import _ from 'lodash'

export default async function v021v022() {
  const [__, notesMeta] = await to(storage.getAsync('notes')) 
  let notes = {}
  _.forEach(notesMeta, (note, id) => {
    notes[note.id] = note
  })

  await storage.setAsync('notes', notes)
  const [___, meta] = await to(storage.getAsync('meta'))
  meta.version = '0.2.2'
  await storage.setAsync('meta', meta)
}