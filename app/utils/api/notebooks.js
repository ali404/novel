import {storage} from '../index'
import to from 'await-to-js'

export async function save({id, title, dateCreated}) {
  const [err, notebooks] = await to(storage.getAsync('notebooks'))

  notebooks[id] = {
    id, title, dateCreated, entryCount: 0
  }

  const [errSave, _] = await to(storage.setAsync('notebooks', notebooks))
}