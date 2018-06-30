import {takeLatest, all, call, put} from 'redux-saga/effects'
import {delay} from 'redux-saga'
import {STARTUP, CAN_START, START_DELAY_NOTIF} from '../actions'
import migrate from '../migrations'
import moment from 'moment'
import {willMigrate} from '../utils'

export function* waitFor() {
  const diffVersions = yield call(willMigrate)
  const delayTime = diffVersions ? 1500 : 500
  yield put({
    type: START_DELAY_NOTIF,
    payload: delayTime
  })

  if(diffVersions) {
    yield all([call(migrate), call(delay, delayTime)])  
  }
  else {
    yield call(delay, delayTime)
  }
  
  yield put({type: CAN_START})
}

export default function* rootSaga() {
  yield all([
    takeLatest(STARTUP, waitFor)
  ])
}