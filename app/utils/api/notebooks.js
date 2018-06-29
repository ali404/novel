import {storage} from '../index'
import to from 'await-to-js'

export async function save({id, title, dateCreated}) {
  const [err, notebooks] = await to(storage.getAsync('notebooks'))

  notebooks[id] = {
    id, title, dateCreated, notesCount: 0
  }

  const [errSave, _] = await to(storage.setAsync('notebooks', notebooks))
}

export async function setDefault({id}) {
  const [err, notebooks] = await to(storage.getAsync('notebooks'))

  notebooks.default = id
  const [errSave, _] = await to(storage.setAsync('notebooks', notebooks))
}

export async function rename({id, title}) {
  const [err, notebooks] = await to(storage.getAsync('notebooks'))

  notebooks[id] = {
    ...notebooks[id],
    title: title
  }

  const [errSave, _] = await to(storage.setAsync('notebooks', notebooks))
}

export async function fetchAll() {
  const [err, notebooks] = await to(storage.getAsync('notebooks'))

  return notebooks
}