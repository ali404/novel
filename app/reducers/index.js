import _ from 'lodash'
import {combineReducers} from 'redux'

import globals, {globalsPersist} from './globals'
import notes, {notesPersist} from './notes'
import notebooks, {notebooksPersist} from './notebooks'
import notesMeta, {notesMetaPersist} from './notesMeta'
import settings, {settingsPersist} from './settings'

const reducers = {
  notes,
  notebooks,
  notesMeta,
  settings,
  globals
}

const shouldPersist = {
  notes: notesPersist,
  notebooks: notebooksPersist,
  notesMeta: notesMetaPersist,
  settings: settingsPersist,
  globals: globalsPersist
}

export const persistedReducers = _.map(reducers, (reducer, id) => {
  return id
}).filter(id => shouldPersist[id])

export default reducers
