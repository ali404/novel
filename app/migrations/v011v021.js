import storage from 'electron-json-storage'
import to from 'await-to-js'
import _ from 'lodash'

export default async function v011v021() {
  // set default notebook for each notes
  let [__, notesMeta] = await to(storage.getAsync('notes'))
  notesMeta = _.map(notesMeta, (note, id) => {
    return {
      ...note,
      notebook: 'Inbox'
    }
  })
  await storage.setAsync('notes', notesMeta)

  const notebooks = {
    defaultNotebook: 'Inbox',
    'Inbox': {
      id: 'Inbox',
      title: 'Inbox',
      dateCreated: new Date(),
      notesCount: _.size(notesMeta)
    }
  }
  await storage.setAsync('notebooks', notebooks)
  
  let [___, meta] = await to(storage.getAsync('meta'))
  meta.version = '0.2.1'
  await storage.setAsync('meta', meta)
}