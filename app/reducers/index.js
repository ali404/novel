import _ from 'lodash'
import {combineReducers} from 'redux'

import notes, {notesPersist} from './notes'
import notebooks, {notebooksPersist} from './notebooks'
import notesMeta, {notesMetaPersist} from './notesMeta'
import settings, {settingsPersist} from './settings'

const reducers = {
  notes,
  notebooks,
  notesMeta,
  settings
}

const shouldPersist = {
  notes: notesPersist,
  notebooks: notebooksPersist,
  notesMeta: notesMetaPersist,
  settings: settingsPersist
}

export const persistedReducers = _.map(reducers, (id, reducer) => {
  return id
}).filter(id => shouldPersist[id])

export default reducers
