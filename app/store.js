import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { routerMiddleware, routerReducer as routing, push } from 'react-router-redux'
import persistState from 'redux-localstorage'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

// import user from './reducers/user';
// import userActions from './actions/user';

import entries from './reducers/entries'
import entryTitles from './reducers/entryTitles'
import settings from './reducers/settings'
import notebooks from './reducers/notebooks'
import * as actions from './actions'

export default function configureStore(initialState, routerHistory) {
  const router = routerMiddleware(routerHistory);

  const actionCreators = {
    ...actions,
    push
  };

  const reducers = {
    entries,
    entryTitles,
    settings,
    notebooks,
    routing
  };

  const middlewares = [ thunk, router, logger ];

  const composeEnhancers = (() => {
    const compose_ = window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    if(process.env.NODE_ENV === 'development' && compose_) {
      return compose_({ actionCreators });
    }
    return compose;
  })();

  const enhancer = composeEnhancers(applyMiddleware(...middlewares), persistState(["entryTitles", "settings", "routing", "notebooks"]));
  const rootReducer = combineReducers(reducers);

  return createStore(rootReducer, initialState, enhancer);
}
