import {takeLatest, all, call, select} from 'redux-saga/effects'
import {delay} from 'redux-saga'
import api from '../utils/api'
import {
  ADD_NOTEBOOK, SET_DEFAULT_NOTEBOOK, RENAME_NOTEBOOK
} from '../actions'
import {validNotebooks} from '../utils/hydration'

export function* createNotebook({payload: {id, title}}) {
  yield call(api.notebooks.save, {id, title})
}

export function* setDefaultNotebook({payload: {id}}) {
  yield call(api.notebooks.setDefault, {id})
}

export function* renameNotebook({payload: {id, title}}) {
  yield call(api.notebooks.rename, {id, title})
}

export function* hydrateNotebooksReducer() {
  const notebooks = yield select(state => state.notebooks)
  const validLocal = validNotebooks(notebooks)

  const DBNotebooks = yield call(api.notebooks.fetchAll)
  const validDB = validNotebooks(DBNotebooks)

  if(!validLocal && !validDB) {
    // reset reducers and reset notebooks on DB
    // (of course, with what's on the reducer)
  }
  else if(validDB) {
    // hydrate reducers with what's on DB
    yield put({
      type: HYDRATE_NOTEBOOKS,
      payload: {notebooks: DBNotebooks}
    })
  }
  else if(validLocal && !validDB) {
    // save what's on local to the DB
  }
}

export default function* rootSaga() {
  yield all([
    // takeLatest(STARTUP, hydrateNotebooksReducer),
    takeLatest(ADD_NOTEBOOK, createNotebook),
    takeLatest(SET_DEFAULT_NOTEBOOK, setDefaultNotebook),
    takeLatest(RENAME_NOTEBOOK, renameNotebook)
  ])
}