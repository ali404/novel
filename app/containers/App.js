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

const Notes = withResource([["notes", "entryTitles"], ["settings"]], NoteList)

const AppView = ({actions, entries, entryTitles, match, settings}) => (
  <div className="app">
    <Menu
      actions={actions}
      entries={entryTitles}
      match={match}
      settings={settings}
    />

    <Route path="/notes" component={Notes} />
    <div className="contents">
      {/* <Route exact path="/notes/:id" component={InfoView} /> */}
      <Route exact path="/notes/:id" component={EntryView} />
    </div>
  </div>
)

const menuState = state => ({
  entries: state.entries,
  entryTitles: state.entryTitles,
  settings: state.settings
})

const menuDispatch = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default withRouter(connect(menuState, menuDispatch)(AppView))
