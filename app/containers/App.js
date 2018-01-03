import React from 'react'
import {Route, withRouter, Switch} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as actions from '../../actions'

import Menu from '../../components/Menu'
import EntryView from '../EntryView'

const AppView = ({actions, entries, entryTitles, match}) => (
  <div className="app">
    <Menu actions={actions} entries={entryTitles} match={match} />
    <div className="contents">
      <Switch>
        <Route exact path="/:id" component={EntryView} />
      </Switch>
    </div>
  </div>
)

const menuState = state => ({
  entries: state.entries,
  entryTitles: state.entryTitles
})

const menuDispatch = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default withRouter(connect(menuState, menuDispatch)(AppView))
