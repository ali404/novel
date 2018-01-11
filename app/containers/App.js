import React from 'react'
import {Route, withRouter, Switch} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as actions from '../actions'

import Menu from '../components/Menu'
import NoteList from '../components/NoteList'
import InfoView from './InfoView'
import EntryView from './EntryView'
import withResource from '../hocs/withResource'

const AppView = ({actions, entries, entryTitles, match}) => (
  <div className="app">
    <Menu actions={actions} entries={entryTitles} match={match} />
    <Route path="/notes" component={withResource("notes", "entryTitles", undefined, NoteList)} />
    <div className="contents">
      {/* <Route exact path="/notes/:id" component={InfoView} /> */}
      <Route exact path="/notes/:id" component={EntryView} />
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
