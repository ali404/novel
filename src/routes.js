import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import App from './containers/App'

import rootReducer from './reducers'

import * as actions from './actions'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
)

store.dispatch(actions.loadEntriesState())

const Routes = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)

export default Routes
