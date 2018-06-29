import {takeLatest, all, call, put} from 'redux-saga/effects'
import {delay} from 'redux-saga'
import {STARTUP, CAN_START} from '../actions'
import migrate from '../migrations'
import moment from 'moment'

export function* waitFor() {
  console.log(+moment())
  yield all([call(migrate), call(delay, 1500)])
  console.log(+moment())
  yield put({type: CAN_START})
}

export default function* rootSaga() {
  yield all([
    takeLatest(STARTUP, waitFor)
  ])
}