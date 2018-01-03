import {combineReducers} from 'redux'

import entries from './entries'
import entryTitles from './entryTitles'

const rootReducer = combineReducers({
  entries,
  entryTitles
})

export default rootReducer
