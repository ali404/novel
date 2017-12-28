import React from 'react'
import {Route, withRouter} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as actions from '../actions'

import Menu from '../components/Menu'
import EntryView from './EntryView'

import './app.style.css'

const AppView = ({actions, entries}) => (
  <div className="app">
    <Menu actions={actions} entries={entries}/>
    <div className="contents">
      <Route path="/entry/:id" component={EntryView} />
    </div>
  </div>
)

const menuState = state => ({
  entries: state.entries
})

const menuDispatch = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default withRouter(connect(menuState, menuDispatch)(AppView))
