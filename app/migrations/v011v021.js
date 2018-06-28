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

  const notesCount = _.size(notesMeta)

  await to(storage.setAsync('notes', notesMeta))
  
  const notebooks = {
    defaultNotebook: 'Inbox',
    'Inbox': {
      id: 'Inbox',
      title: 'Inbox',
      dateCreated: new Date(),
      notesCount
    }
  }

  await to(storage.setAsync('notebooks', notebooks))
}