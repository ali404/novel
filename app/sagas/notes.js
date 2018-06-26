import {takeLatest, all, call, put, fork} from 'redux-saga/effects'
import {delay} from 'redux-saga'
import api from '../utils/api'
import * as utils from '../utils'
import {
  CREATE_NOTE, UPDATE_NOTE_TITLE, UPDATE_NOTE_STATE, DELETE_NOTE,
  LOAD_NOTE, LOAD_NOTES_META, SET_NOTE, SET_NOTES_META
} from '../actions'

export function* createNote({payload: {id, dateCreated}}) {
  yield call(api.notes.create, {id, dateCreated})
}

export function* saveEditorState({payload: {id, editorState}}) {
  yield call(delay, 1000)

  const state = yield call(utils.convertTo, editorState)
  yield call(api.notes.saveState, {id, state})
  yield put({type: 'SYNC_EDITOR_STATE'})
}

export function* saveEditorTitle({payload: {id, title}}) {
  yield call(delay, 500)
  
  yield call(api.notes.update, {id, title})
  yield put({type: 'SYNC_EDITOR_TITLE'})
}

export function* load({payload: {id}}) {
  const data = yield call(api.notes.get, {id})
  const editorState = yield call(utils.convertFrom, data.state)

  yield put({
    type: SET_NOTE,
    payload: {
      id, 
      note: {
        ...data,
        state: editorState
      }
    }
  })
}

export function* loadMeta() {
  const notes = yield call(api.notes.getMeta)
  
  yield put({
    type: SET_NOTES_META,
    payload: {notes}
  })
}

export function* deleteNote({payload: {id}}) {
  yield call(api.notes.del, {id})
}

export default function* rootSaga() {
  yield all([
    takeLatest(CREATE_NOTE, createNote),
    takeLatest(UPDATE_NOTE_TITLE, saveEditorTitle),
    takeLatest(UPDATE_NOTE_STATE, saveEditorState),
    takeLatest(LOAD_NOTE, load),
    takeLatest(LOAD_NOTES_META, loadMeta),
    takeLatest(DELETE_NOTE, deleteNote)
  ])
}