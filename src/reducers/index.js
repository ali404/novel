import {combineReducers} from 'redux'
import notebooks from './notebooks'
import entries from './entries'

const rootReducer = combineReducers({
  notebooks,
  entries
})

export default rootReducer
