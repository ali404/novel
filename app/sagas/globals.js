import {takeLatest, all, call, put} from 'redux-saga/effects'
import {delay} from 'redux-saga'
import {STARTUP, CAN_START} from '../actions'
import migrate from '../migrations'
import moment from 'moment'
import {willMigrate} from '../utils'

export function* waitFor() {
  const diffVersions = yield call(willMigrate)
  
  if(diffVersions) {
    yield all([call(migrate), call(delay, 1500)])  
  }
  else {
    yield call(delay, 1000)
  }
  
  yield put({type: CAN_START})
}

export default function* rootSaga() {
  yield all([
    takeLatest(STARTUP, waitFor)
  ])
}