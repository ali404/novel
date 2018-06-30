import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { createMemoryHistory } from 'history';

import App from './containers/App'
import {LOAD_NOTES_META, STARTUP, LOAD_NOTEBOOKS} from './actions'

import configureStore from './store';

if (process.env.NODE_ENV !== 'production') {
  const {whyDidYouUpdate} = require('why-did-you-update');
  whyDidYouUpdate(React, {
    exclude: [
      // React Router
      /^Route/,
    ]
  })
}


const syncHistoryWithStore = (store, history) => {
  const { routing } = store.getState();
  if(routing && routing.location) {
    history.replace(routing.location);
  }
};

const initialState = {}
const routerHistory = createMemoryHistory()
const store = configureStore(initialState, routerHistory)
syncHistoryWithStore(store, routerHistory)

store.dispatch({type: LOAD_NOTES_META})
store.dispatch({type: LOAD_NOTEBOOKS})
store.dispatch({type: STARTUP})

const rootElement = document.querySelector(document.currentScript.getAttribute('data-container'))

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={routerHistory}>
      <App />
    </ConnectedRouter>
  </Provider>,
  rootElement
);
