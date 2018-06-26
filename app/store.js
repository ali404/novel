import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { routerMiddleware, routerReducer as routing, push } from 'react-router-redux'
import persistState from 'redux-localstorage'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import * as actions from './actions'
import reducers, {persistedReducers} from './reducers'
import rootSaga from './sagas'

const sagas = [
  ...rootSaga
]

export default function configureStore(initialState, routerHistory) {
  const router = routerMiddleware(routerHistory);

  const actionCreators = {
    ...actions,
    push
  };

  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [ sagaMiddleware, router, logger ];

  const composeEnhancers = (() => {
    const compose_ = window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    if(process.env.NODE_ENV === 'development' && compose_) {
      return compose_({ actionCreators });
    }
    return compose;
  })();

  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares), 
    persistState([...persistedReducers, "routing"])
  );
  
  const rootReducer = combineReducers({
    ...reducers,
    routing
  })

  const store = createStore(rootReducer, initialState, enhancer)
  sagas.forEach(saga => sagaMiddleware.run(saga))  
  
  return store
}
